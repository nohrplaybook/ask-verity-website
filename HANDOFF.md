# Ask Verity website — handoff to Claude Code

Paste this whole file as your first message to Claude Code, after opening it in the repo.

---

## What this is

A rebuilt landing page for Ask Verity, built as a Next.js 16 App Router app.
It replaces the page only. It is **not** a replacement for the existing repo.

Seven files, all in the zip:

```
package.json
next.config.mjs
tsconfig.json
app/layout.tsx
app/globals.css      ~43KB, the whole design system
app/page.tsx         ~34KB, the entire page as one component
app/motion.tsx       "use client", all scroll rigs and form handlers
```

Stack: Next 16.3.3, React 19.2.6, TypeScript 5.9, no CSS framework, no component library.
It builds clean: `npm install && npm run build` passes with zero errors.

## Hard rules

1. **Do not push to `main`.** `main` is the live site. Work on a branch called `nextjs-rebuild`.
2. **Do not delete `app/api/waitlist/route.ts`** or `emails/waitlist-confirmation.tsx`. That is a working
   Resend integration that captures real signups. The rebuild's forms are cosmetic and must be wired
   into that route, not the other way round.
3. **Do not deploy to production** until item 1 under "Outstanding" is done. Deploying as-is silently
   breaks waitlist capture.

## What the rebuild does NOT have yet

These exist on `main` and must survive the merge:

| File | What it does |
|---|---|
| `app/api/waitlist/route.ts` | Waitlist POST endpoint. Validates email + companySize, honeypot bot filter, writes to a Resend audience, sends confirmation, notifies the owner. |
| `emails/waitlist-confirmation.tsx` | The confirmation email template. |
| `app/robots.ts` | robots.txt |
| `app/sitemap.ts` | sitemap.xml |
| `app/people-problems/page.tsx` | An existing page. |
| `public/og.png` | Social share image. |
| `public/australia-map.svg`, `public/llms.txt` | Existing assets. |
| `.env.example` | Documents RESEND_API_KEY, RESEND_WAITLIST_SEGMENT_ID, RESEND_FROM_EMAIL, WAITLIST_NOTIFY_EMAIL |

Also note the rebuild sets `robots: { index: false, follow: false }` in `app/layout.tsx`.
**That must be removed before going live**, or the site will not be indexed.

## Outstanding work, in priority order

### 1. Wire the forms to the real API — DONE

Both forms now POST to `app/api/waitlist/route.ts`. What changed:

- `name` added to the route, carried onto the Resend contact as `firstName`/`lastName` plus a
  `full_name` property.
- The team-size `<option>`s now carry the `value`s the API validates (`1-14` … `500+`).
- The library form has no team-size field, so the route requires `companySize` only when
  `source === "waitlist"`. The confirmation email's TEAM SIZE row is skipped when it is absent.
- Sources are `waitlist` and `library`.
- Both forms show the server's own message inline and re-enable on failure.

**Still required before this captures anything:** the four Resend variables in `.env.example`
must be set in Vercel, for Preview as well as Production. Without `RESEND_API_KEY` the route
returns 503 by design.

`npm run test:waitlist` covers the validation contract (see `scripts/test-waitlist.mjs`).
The Resend calls themselves are not covered — they need a real key.

The original description follows.

Two forms were cosmetic. They validated and changed their own button label, and stored nothing.

- **Waitlist form**, `id="wl"` in `app/page.tsx`, handler at the bottom of `app/motion.tsx`.
  Fields: `name`, `email`, `size` (a `<select>`), plus a honeypot `web`.
- **Library form**, `data-lib` in `app/page.tsx`, same file for the handler.
  Fields: `name`, `email`.

The existing API expects a JSON body of `{ email, companySize, source, website }`.
Two mismatches to resolve:

- The API has **no name field**. Both forms now collect a name, which was a deliberate product decision.
  The route needs a `name` added, passed through to the Resend contact.
- The select's option values are the display strings (`1–14 people` etc). The API validates against
  `"1-14" | "15-49" | "50-199" | "200-499" | "500+"`. Add explicit `value` attributes to the options.

Use `source: "waitlist"` and `source: "library"` so the two capture points are distinguishable.

### 2. Bring the surviving files across

Copy the table above onto the `nextjs-rebuild` branch. Nothing in the rebuild conflicts with them
except `app/layout.tsx`, `app/globals.css`, `app/page.tsx` and `package.json`, which are replacements.

### 3. Remove the noindex before launch

`app/layout.tsx`, the `robots` key in the metadata export.

## Copy and commercial decisions still open

These are Claire's calls, not implementation questions. The page currently ships placeholders:

- **Pricing model.** Per business or per seat. The pricing section says only "monthly" because this
  is undecided. Recommendation on file: per business for the first two tiers, per seat at Scale.
- **Free tier.** Not present. If wanted, it is a fourth card or Starter becomes free.
- **Tier names.** `Starter` / `In the room` / `Scale`. Only "In the room" is considered final.
- **Scale tier features.** "Roles, permissions and matter-level access control" and "Reporting across
  sites, managers and matter types" are not claimed anywhere else on the site. Confirm or remove.
- **"No listing fee"** in the lawyer panel section is an invented commercial promise. Needs sign-off.
- **V logo mark colour.** Currently site violet. The MVP product uses teal.

## How to verify scroll behaviour

The page has four scroll-driven rigs: a 300vh pinned hero, a typing meeting transcript, a centred
timeline whose spine fills with scroll, and a pinned horizontal card rail.

**None of them work inside an embedded preview iframe.** An auto-sized iframe reports `innerHeight`
as the full document height, so `100vh` resolves to the whole page and `position: sticky` never
triggers. Measured: the rail's bounding rect stayed at a constant 44964px across seven scroll
positions inside a sized iframe.

Verify in a real browser tab, on a real deployment, at a viewport at least 900px wide.
Below 900px the rail correctly falls back to a native swipe with scroll-snap.

## Recent changes in this rebuild

- Use-case rail converted from a viewport-transit pan to a proper pinned scroll. `#railtrack` is the
  tall track, its first child `.railstick` is `position: sticky; top: 0; min-height: 100vh`, and JS
  sets the track height to `stick.offsetHeight + overflow` then drives the pan off track progress.
- Pricing section added at `#pricing`, on dark, between `#trust` and `#integrations`. Nav item added.
- `.cta` was missing `border: 0`. On the two `<button class="cta">` elements the browser default
  button border was showing through as a grey outset ring. Fixed, plus `appearance: none` and
  `cursor: pointer`.
- Lawyer panel left card was falling to near-black below the list. Base lifted `#171021` → `#1C1429`,
  second wide glow added across the bottom edge, list rows lifted to `#241A36`.
- Footer changed from full-bleed lilac to ink with a hairline. The lilac was the loudest surface on
  the page and was outshouting the waitlist form directly above it.
- Mobile fix: `.railwrap` was `overflow: hidden` with no override, so cards two through six were
  unreachable on a phone. Now `overflow-x: auto` with scroll-snap below 900px.

## Current deployment

Vercel project `ask-verity-website`, team `claires-projects-ac84c642`.
The rebuild is deployed as a **preview** only. Production is untouched and still serves `main`.

Vercel Authentication is enabled for all deployment URLs, so preview links need a share token
from the Share button on the deployment before anyone outside the team can open them.
