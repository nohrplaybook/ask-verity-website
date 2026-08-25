import { NextResponse } from "next/server";
import { Resend } from "resend";
import { WaitlistConfirmationEmail } from "@/emails/waitlist-confirmation";

export const runtime = "nodejs";

const companySizes = new Set([
  "1-14",
  "15-49",
  "50-199",
  "200-499",
  "500+",
]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sourcePattern = /^[a-z0-9-]{1,64}$/;

function successMessage(created: boolean) {
  return created
    ? "You’re on the list. Check your inbox for a note from Verity."
    : "You’re already on the list—we’ll be in touch soon.";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: unknown;
      companySize?: unknown;
      source?: unknown;
      website?: unknown;
    };

    // Quietly accept bots that fill the hidden field without adding a contact.
    if (typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({ message: successMessage(true) });
    }

    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const companySize =
      typeof body.companySize === "string" ? body.companySize : "";
    const requestedSource =
      typeof body.source === "string" ? body.source.trim().toLowerCase() : "";
    const source = sourcePattern.test(requestedSource)
      ? requestedSource
      : "website";

    if (!email || email.length > 254 || !emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid work email." },
        { status: 400 },
      );
    }

    if (!companySizes.has(companySize)) {
      return NextResponse.json(
        { message: "Please select your team size." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          message:
            "Early-access signups are being connected. Please try again shortly.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const existing = await resend.contacts.get({ email });

    if (existing.error && existing.error.statusCode !== 404) {
      throw new Error(existing.error.message);
    }

    const properties = {
      company_size: companySize,
      signup_source: source,
      signup_date: new Date().toISOString(),
    };
    const segmentId = process.env.RESEND_WAITLIST_SEGMENT_ID;

    if (existing.data) {
      const updated = await resend.contacts.update({ email, properties });
      if (updated.error) {
        throw new Error(updated.error.message);
      }

      if (segmentId) {
        const segmented = await resend.contacts.segments.add({
          email,
          segmentId,
        });
        if (segmented.error && segmented.error.statusCode !== 409) {
          throw new Error(segmented.error.message);
        }
      }

      return NextResponse.json({ message: successMessage(false) });
    }

    const created = await resend.contacts.create({
      email,
      unsubscribed: false,
      properties,
      segments: segmentId ? [{ id: segmentId }] : undefined,
    });

    if (created.error) {
      throw new Error(created.error.message);
    }

    const from =
      process.env.RESEND_FROM_EMAIL || "Ask Verity <hello@askverity.io>";
    const confirmation = await resend.emails.send({
      from,
      to: email,
      subject: "You’re in — Verity’s in your corner",
      react: WaitlistConfirmationEmail({ companySize }),
      text:
        "You’re on the Ask Verity Australian early-access list. We’ll keep you close to product progress and let you know when early-access places open. Verity is being built to help you decide what to do, what to say and what to document when a difficult people problem lands.",
      tags: [
        { name: "category", value: "waitlist_confirmation" },
        { name: "source", value: source },
      ],
    });

    // The signup is safely retained even if the confirmation email is delayed.
    if (confirmation.error) {
      console.error("Waitlist confirmation email failed", confirmation.error);
    }

    const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL;
    if (notifyEmail) {
      const notification = await resend.emails.send({
        from,
        to: notifyEmail,
        subject: "New Ask Verity waitlist signup",
        text: `${email} joined the Ask Verity waitlist.\n\nTeam size: ${companySize}\nSource: ${source}`,
        tags: [{ name: "category", value: "waitlist_notification" }],
      });

      if (notification.error) {
        console.error("Waitlist notification email failed", notification.error);
      }
    }

    return NextResponse.json({ message: successMessage(true) });
  } catch (error) {
    console.error("Waitlist signup failed", error);
    return NextResponse.json(
      { message: "We couldn’t add you just now. Please try again." },
      { status: 500 },
    );
  }
}

