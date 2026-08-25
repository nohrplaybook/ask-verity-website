"use client";

import type { CSSProperties, FormEvent } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

const workflow = [
  {
    number: "01",
    verb: "Tell",
    title: "Start with the messy version.",
    copy: "Explain what is happening in your own words. Verity works out what matters and what she needs to ask next.",
    artefact: "Your situation",
    example: "“Sam’s performance has dropped since returning from sick leave. Where do I start?”",
  },
  {
    number: "02",
    verb: "Think",
    title: "Let Verity diagnose the real issue.",
    copy: "She separates facts from assumptions, spots the overlapping risks and asks the questions a senior HR director would.",
    artefact: "Verity’s diagnosis",
    example: "Performance, health and reasonable-adjustment questions need to be handled separately.",
  },
  {
    number: "03",
    verb: "Act",
    title: "Get the process, not just an answer.",
    copy: "Walk away with the decision path and the practical work: scripts, plans, letters, checklists and consultation documents.",
    artefact: "Ready to use",
    example: "Conversation scripts · evidence checklist · reasonable adjustment review · follow-up letter · letter to GP",
  },
  {
    number: "04",
    verb: "Meet",
    title: "Bring Verity into the room.",
    copy: "With everyone’s consent, Verity records one-on-ones, underperformance meetings and investigations, guiding you in real time and learning the complete matter.",
    artefact: "Inside the meeting",
    example: "Recording · transcript · live prompts · review · next steps",
  },
];

const useCases = [
  {
    index: "01",
    title: "Underperformance",
    prompt: "“Someone is underperforming. How do I manage it fairly and fast?”",
    outputs: ["OKRs / KPIs", "Meeting scripts", "Performance improvement plan"],
  },
  {
    index: "02",
    title: "Sick leave & absence",
    prompt: "“His sickness absences are becoming a pattern. What can I actually do?”",
    outputs: ["Risk checks", "Letter to GP", "Questions to ask", "Document trail"],
  },
  {
    index: "03",
    title: "Reasonable adjustments",
    prompt: "“How do we support this person and protect the business?”",
    outputs: ["Options review", "Consultation plan", "Decision framework"],
  },
  {
    index: "04",
    title: "Redundancy & restructure",
    prompt: "“We may need to restructure. Build the process with me.”",
    outputs: ["Business case", "Selection criteria", "Letters & scripts"],
  },
  {
    index: "05",
    title: "Conduct & complaints",
    prompt: "“A complaint has landed. What happens in the first 24 hours?”",
    outputs: ["Triage plan", "Fair process", "Investigation pack"],
  },
  {
    index: "06",
    title: "Everyday people calls",
    prompt: "“Can I say this? Is this fair? What should I document?”",
    outputs: ["Clear answer", "Conversation notes", "Next-step checklist"],
  },
];

const faqItems = [
  {
    question: "What exactly is Ask Verity?",
    answer:
      "Ask Verity is a 24/7 AI HR manager for Australian businesses and busy HR teams. She helps you diagnose employee matters, joins and records meetings with consent, gives real-time guidance, and creates the documents and file notes needed to follow through.",
  },
  {
    question: "Is Verity just another AI chatbot?",
    answer:
      "No. A generic chatbot gives you an answer and stops. Verity keeps the complete employee matter in context, understands the meetings, identifies risk and creates usable plans, scripts, letters, file notes and decision records.",
  },
  {
    question: "Who is Verity for?",
    answer:
      "Verity is designed for Australian SMEs that need senior HR judgement without another full-time hire, and for larger, busy HR teams that need reliable extra capacity at a fraction of the cost of additional senior headcount.",
  },
  {
    question: "Is Verity an HRIS?",
    answer:
      "No. Your HRIS stores and administers employee information. Verity helps you handle the employee matter itself. Tell her what needs to go on the employee file and she creates a clear, factual file note for you to review and add to your HRIS. Where supported, approved records can also be transferred through an integration.",
  },
  {
    question: "What does Verity do during a meeting?",
    answer:
      "With everyone’s consent, Verity records and transcribes one-on-ones, underperformance meetings, difficult conversations and complex investigations. She provides real-time prompts, identifies what may have been missed, reviews how the meeting was handled and creates the appropriate follow-up afterwards.",
  },
  {
    question: "What happens when a matter needs a lawyer?",
    answer:
      "You can bring a lawyer you choose into the matter through Verity. With your permission, the lawyer receives the organised history, recordings, transcripts, documents and previous guidance, so you do not have to prepare a separate brief or explain everything again.",
  },
  {
    question: "Can Verity replace an HR manager?",
    answer:
      "Verity is designed to give businesses much of the judgement, structure and practical output they would normally seek from senior HR. Some matters will still need a human specialist or lawyer, and Verity is designed to recognise when escalation is the right next step.",
  },
  {
    question: "Is Verity compliant with Australian employment law?",
    answer:
      "Verity is being developed with Australian employment-law context, current-source checks, expert legal oversight and clear escalation guardrails. She provides HR decision support and is not a law firm or a substitute for legal advice where legal advice is required.",
  },
  {
    question: "When does early access open?",
    answer:
      "The first Australian early-access release is planned for the end of August 2026. Join the waitlist to hear when places open.",
  },
];

export type LandingVersion = "direct" | "relief" | "leverage";

const messaging = {
  direct: {
    category: "BUILT FOR AUSTRALIA",
    heroFirst: "Meet Verity.",
    heroSecond: "Your AI HR ",
    heroEmphasis: "manager.",
    heroSupport:
      "Bring her any people problem. Verity thinks like a senior HR director, guides the decision and builds the plans, scripts, letters and documents to handle it properly.",
    heroCta: "Join the Australian waitlist",
    heroLink: "See how Verity thinks",
    statementFirst: "Not another chatbot",
    statementSecond: "with an HR prompt.",
    statementLead:
      "Advice is easy. Judgement is hard. Verity is being built to do the work between the question and the decision—the diagnostic thinking, risk checks and practical documents that make HR useful.",
    genericQuote: "“Here are five tips for managing poor performance...”",
    genericEnd: "ANSWER ENDS HERE",
    verityQuote:
      "“Before we plan a performance conversation, I need to understand the evidence, health context and what has already been said.”",
    verityEnd: "THE PROCESS STARTS HERE →",
    workflowFirst: "From “what do I do?”",
    workflowEmphasis: "to done properly.",
    casesFirst: "The people issues that",
    casesSecond: "don’t fit in a policy.",
    casesSupport:
      "Verity helps with the real, complicated version—the one with history, risk, emotion and a decision that still has to be made.",
    trustFirst: "Built from how",
    trustSecond: "senior HR actually thinks.",
    trustBody:
      "Verity’s logic is shaped by real senior HR and employee-relations judgement—not scraped HR articles. Her current testing programme pressure-tests the guidance through HR, legal and strict decision quality lenses.",
    waitFirst: "Put a senior HR mind",
    waitEmphasis: "inside your business.",
    waitBody:
      "Join the first Australian businesses getting early access to Verity—your AI HR manager for the people decisions that matter.",
    formCta: "Join the Australian waitlist",
  },
  relief: {
    category: "BUILT FOR SMEs & BUSY HR TEAMS",
    heroFirst: "You run the business.",
    heroSecond: "Verity handles the ",
    heroEmphasis: "people stuff.",
    heroSupport:
      "Verity is the 24/7 AI HR manager in your corner when a difficult people problem lands. Ask what to do or bring her into the meeting: she records it, guides you in real time and creates the follow-up documents and file notes. Built for SMEs and busy HR teams that need experienced extra capacity, at a fraction of the cost of another senior hire.",
    heroCta: "Put Verity in my corner",
    heroLink: "Meet your AI HR manager",
    statementFirst: "The people stuff",
    statementSecond: "stops following you home.",
    statementLead:
      "No more lying awake replaying a conversation or wondering whether you handled it fairly. Verity gives you a calm, capable path forward while the issue is still manageable.",
    genericQuote: "“It depends. You may wish to consult your HR team...”",
    genericEnd: "STILL YOUR PROBLEM",
    verityQuote:
      "“I can help. First, tell me what changed, what has already been said and whether there is any health context I need to understand.”",
    verityEnd: "YOU’RE NOT DOING THIS ALONE →",
    workflowFirst: "From unsure and avoiding it",
    workflowEmphasis: "to ready for the conversation.",
    casesFirst: "The moments you wish",
    casesSecond: "HR was sitting beside you.",
    casesSupport:
      "Verity brings calm, unbiased, senior guidance to the awkward, emotional and high-stakes people moments managers are usually left to handle alone.",
    trustFirst: "A calm voice, backed by",
    trustSecond: "serious HR judgement.",
    trustBody:
      "Verity is warm with people and rigorous with process. Her guidance is shaped by real senior HR and employee-relations judgement, with Australian employment-law context, expert legal oversight and clear escalation guardrails.",
    waitFirst: "Never face a difficult",
    waitEmphasis: "people decision alone.",
    waitBody:
      "Get 24/7 senior HR judgement for your growing business or busy HR team, at a fraction of the cost of adding another senior hire.",
    formCta: "Put Verity in my corner",
  },
  leverage: {
    category: "THE COMPLETE HR PROCESS",
    heroFirst: "One question in.",
    heroSecond: "The whole HR ",
    heroEmphasis: "process out.",
    heroSupport:
      "Verity is your AI HR manager: diagnosing the issue, guiding the decision and building every plan, script, letter and checklist needed to move from problem to properly handled.",
    heroCta: "Build my AI HR function",
    heroLink: "See the process in motion",
    statementFirst: "A complete HR function.",
    statementSecond: "Without building one.",
    statementLead:
      "Stop stitching together advice, templates and expensive external support. Verity turns one messy people question into a structured, documented HR process your business can actually follow.",
    genericQuote: "One answer. Five tips. Another blank document.",
    genericEnd: "INFORMATION ONLY",
    verityQuote:
      "One case. Diagnostic questions, risk checks, a decision path and every document ready to use.",
    verityEnd: "THE WORK GETS DONE →",
    workflowFirst: "From one people question",
    workflowEmphasis: "to a complete process.",
    casesFirst: "Every people process.",
    casesSecond: "One operating system.",
    casesSupport:
      "From the everyday manager question to a full redundancy restructure, Verity stays with the work from first fact to final document.",
    trustFirst: "The judgement of senior HR.",
    trustSecond: "Built into the workflow.",
    trustBody:
      "Verity turns proven senior HR and employee-relations reasoning into repeatable operating processes, with Australian employment-law context, expert legal oversight and disciplined testing.",
    waitFirst: "Give your business",
    waitEmphasis: "an HR function on demand.",
    waitBody:
      "Join Australian early access and turn difficult people work into clear, repeatable processes—without adding senior HR overhead.",
    formCta: "Build my AI HR function",
  },
} satisfies Record<LandingVersion, Record<string, string>>;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function VerityLanding({
  version = "direct",
  previewMode = false,
}: {
  version?: LandingVersion;
  previewMode?: boolean;
}) {
  const copy = messaging[version];
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.1 },
    );

    reveals.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  async function handleWaitlistSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("submitting");
    setFormMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          companySize: data.get("companySize"),
          website: data.get("website"),
          source: `homepage-${version}`,
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setFormState("success");
      setFormMessage(
        result.message ||
          "You’re on the list. We’ll be in touch when early access opens.",
      );
      form.reset();
    } catch (error) {
      setFormState("error");
      setFormMessage(
        error instanceof Error
          ? error.message
          : "We couldn’t add you just now. Please try again.",
      );
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.askverity.io/#organization",
        name: "Ask Verity",
        url: "https://www.askverity.io/",
        description: "24/7 AI HR meeting and employee-matter guidance for Australian businesses.",
        areaServed: { "@type": "Country", name: "Australia" },
      },
      {
        "@type": "SoftwareApplication",
        name: "Ask Verity",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "An AI HR manager that records employee meetings with consent, provides real-time guidance and creates the documents and file notes needed to act.",
        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "Australian founders, business owners, managers and operations leaders",
        },
        provider: { "@id": "https://www.askverity.io/#organization" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {previewMode ? (
        <aside className="concept-switcher" aria-label="Messaging concepts">
          <span>MESSAGE TEST</span>
          {[
            ["direct", "01 Direct", "/concepts/one"],
            ["relief", "02 Human", "/concepts/two"],
            ["leverage", "03 Leverage", "/concepts/three"],
          ].map(([key, label, href]) => (
            <a
              href={href}
              aria-current={version === key ? "page" : undefined}
              key={key}
            >
              {label}
            </a>
          ))}
        </aside>
      ) : null}

      <header className="site-header">
        <nav className="shell nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Ask Verity home">
            ASK VERITY
          </a>
          <div className="nav-links">
            <a href="#how">How she works</a>
            <a href="#use-cases">What she handles</a>
            <Link href="/people-problems">People Problems Library</Link>
            <a href="#trust">Why trust Verity</a>
          </div>
          <a className="button button-ink button-small" href="#waitlist">
            {copy.heroCta} <Arrow />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-rule" aria-hidden="true" />
          <div className="shell hero-shell">
            <div className="hero-copy">
              <div className="category-line hero-in hero-in-1">
                <span>24/7 AI HR MANAGER</span>
                <span>{copy.category}</span>
              </div>
              <h1 id="hero-title" className="hero-in hero-in-2">
                {copy.heroFirst}
                <br />
                {copy.heroSecond}<em>{copy.heroEmphasis}</em>
              </h1>
              <div className="hero-bottom hero-in hero-in-3">
                <p>{copy.heroSupport}</p>
                <div className="hero-actions">
                  <a className="button button-violet button-large hero-primary" href="#waitlist">
                    {copy.heroCta} <Arrow />
                  </a>
                  <a className="underlined-link" href="#how">
                    {copy.heroLink}
                  </a>
                </div>
              </div>
            </div>

            <div className="case-stage hero-in hero-in-4" aria-label="Verity product example">
              <div className="case-window">
                <header className="case-bar">
                  <span>ASK VERITY / CASE 014</span>
                  <span className="case-live">
                    <i /> PRIVATE CASE
                  </span>
                </header>

                <div className="case-workspace">
                  <aside className="case-index" aria-hidden="true">
                    <span className="is-active">01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                    <b />
                    <small>SV</small>
                  </aside>

                  <div className="case-main">
                    <p className="ui-label">THE PEOPLE PROBLEM</p>
                    <h2>
                      Sam’s performance has dropped since returning from
                      extended sick leave. Where do I start?
                    </h2>
                    <div className="verity-response">
                      <div className="verity-avatar">V</div>
                      <div>
                        <p className="ui-label">VERITY</p>
                        <strong>
                          Before we call this a performance issue, let’s separate
                          three things.
                        </strong>
                      </div>
                    </div>
                    <div className="diagnostic-stack">
                      {[
                        ["01", "What has changed in Sam’s work, specifically?"],
                        ["02", "Has Sam disclosed a health condition?"],
                        ["03", "Have reasonable adjustments been explored?"],
                      ].map(([number, text], index) => (
                        <button
                          className="diagnostic-question"
                          style={{ "--delay": `${1.15 + index * 0.22}s` } as CSSProperties}
                          type="button"
                          key={number}
                        >
                          <span>{number}</span>
                          <b>{text}</b>
                          <i aria-hidden="true">→</i>
                        </button>
                      ))}
                    </div>
                  </div>

                  <aside className="output-rail">
                    <p className="ui-label">CASE OUTPUTS</p>
                    <div className="document-card document-card-one">
                      <span>01</span>
                      <b>Conversation plan</b>
                      <i>READY</i>
                    </div>
                    <div className="document-card document-card-two">
                      <span>02</span>
                      <b>Evidence checklist</b>
                      <i>DRAFTING</i>
                    </div>
                    <div className="document-card document-card-three">
                      <span>03</span>
                      <b>Reasonable adjustments review</b>
                      <i>QUEUED</i>
                    </div>
                    <div className="output-note">
                      <span>VERITY’S NOTE</span>
                      <p>
                        Keep the health and performance questions separate until
                        the facts are clear.
                      </p>
                    </div>
                  </aside>
                </div>
              </div>
              <div className="case-caption">
                <span>ONE QUESTION</span>
                <span>→</span>
                <span>THE WHOLE HR PROCESS</span>
              </div>
            </div>
          </div>

          <div className="ticker" aria-label="Verity capabilities">
            <div className="ticker-track">
              {[0, 1].map((set) => (
                <div className="ticker-group" aria-hidden={set === 1} key={set}>
                  <span>PERFORMANCE</span><i>✦</i>
                  <span>ABSENCE</span><i>✦</i>
                  <span>REASONABLE ADJUSTMENTS</span><i>✦</i>
                  <span>REDUNDANCY</span><i>✦</i>
                  <span>INVESTIGATIONS</span><i>✦</i>
                  <span>CONDUCT</span><i>✦</i>
                  <span>COMPLAINTS</span><i>✦</i>
                  <span>RECRUITMENT</span><i>✦</i>
                  <span>DISCRIMINATION</span><i>✦</i>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="statement-section">
          <div className="shell statement-grid statement-grid-single">
            <div data-reveal>
              <h2>
                {copy.statementFirst}
                <br />
                {copy.statementSecond}
              </h2>
              <p className="statement-lead">{copy.statementLead}</p>
            </div>
          </div>
          <div className="shell comparison" data-reveal>
            <div className="comparison-side comparison-generic">
              <span className="comparison-tag">GENERIC AI</span>
              <p>{copy.genericQuote}</p>
              <span className="comparison-end">{copy.genericEnd}</span>
            </div>
            <div className="comparison-pivot" aria-hidden="true">≠</div>
            <div className="comparison-side comparison-verity">
              <span className="comparison-tag">ASK VERITY</span>
              <p>{copy.verityQuote}</p>
              <span className="comparison-end">{copy.verityEnd}</span>
            </div>
          </div>
        </section>

        <section className="workflow-section" id="how">
          <div className="shell">
            <div className="section-heading" data-reveal>
              <p className="section-title">HOW VERITY WORKS</p>
              <h2>
                {copy.workflowFirst}
                <br />
                <em>{copy.workflowEmphasis}</em>
              </h2>
            </div>

            <div className="workflow-list">
              {workflow.map((item, index) => (
                <article className="workflow-row" data-reveal key={item.number}>
                  <div className="workflow-index">
                    <span>{item.number}</span>
                    <b>{item.verb}</b>
                  </div>
                  <div className="workflow-copy">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <div
                    className={`workflow-artefact artefact-${index + 1}`}
                    style={{ "--row": index } as CSSProperties}
                  >
                    <span>{item.artefact}</span>
                    <p>{item.example}</p>
                    <i aria-hidden="true">{index >= 2 ? "✓" : "↳"}</i>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="statement-section" id="meetings">
          <div className="shell statement-grid">
            <p className="section-title section-title-soft" data-reveal>
              INSIDE THE MEETING
            </p>
            <div data-reveal>
              <h2>
                Verity doesn’t just advise before the meeting.
                <br />
                She joins you in it.
              </h2>
              <p className="statement-lead">
                From one-on-ones and return-to-work discussions to performance, conduct, grievances, workplace change and investigations, Verity can join any important employee meeting. With everyone’s consent, she records the conversation, guides you in real time and keeps everything together inside one employee matter.
              </p>
            </div>
          </div>

          <div className="shell meeting-journey">
            <div className="meeting-experience">
              <div className="meeting-console" data-reveal>
                <header className="meeting-console-bar">
                  <span>EMPLOYEE MATTER / LIVE MEETING</span>
                  <span className="meeting-recording"><i aria-hidden="true" /> RECORDING · 00:18:42</span>
                </header>
                <div className="meeting-console-body">
                  <p className="meeting-consent">RECORDING WITH PARTICIPANT CONSENT</p>
                  <div className="meeting-scope" aria-label="Examples of meetings Verity can support">
                    <span>ONE-ON-ONE</span>
                    <span>RETURN TO WORK</span>
                    <span>PERFORMANCE</span>
                    <span>CONDUCT</span>
                    <span>GRIEVANCE</span>
                    <span>WORKPLACE CHANGE</span>
                    <span>INVESTIGATION</span>
                  </div>
                  <div className="transcript-line">
                    <span>MANAGER</span>
                    <p>“Before we move on, I want to make sure I’ve understood what you’re raising.”</p>
                  </div>
                  <div className="transcript-line">
                    <span>EMPLOYEE</span>
                    <p>“The change affected my workload, and I don’t think that was taken into account.”</p>
                  </div>
                  <aside className="live-guidance">
                    <span>VERITY · LIVE GUIDANCE</span>
                    <strong>Clarify the employee’s concern before discussing the next step.</strong>
                    <p>Ask what changed, when it changed and what impact they experienced.</p>
                  </aside>
                  <div className="meeting-signals" aria-label="Verity meeting signals">
                    <span>KEY FACT IDENTIFIED</span>
                    <span>ASSUMPTION TO TEST</span>
                    <span>NEXT QUESTION READY</span>
                  </div>
                </div>
              </div>

              <div className="meeting-phases" data-reveal>
                <article>
                  <span>01 / BEFORE</span>
                  <h3>Walk in prepared.</h3>
                  <p>Verity brings together the matter history, agenda, questions, risks and a practical meeting script.</p>
                </article>
                <article>
                  <span>02 / DURING</span>
                  <h3>Know what to do next.</h3>
                  <p>With consent, she records and transcribes the conversation, then gives real-time prompts about what to ask or clarify.</p>
                </article>
                <article>
                  <span>03 / AFTER</span>
                  <h3>Turn the conversation into action.</h3>
                  <p>See what went well, what was missed or mishandled, how to improve and the correct follow-up to send.</p>
                </article>
              </div>
            </div>

            <div className="meeting-follow-through" data-reveal>
              <div className="follow-through-intro">
                <span>AFTER THE CONVERSATION</span>
                <h3>The meeting becomes the next action.</h3>
                <p>The recording, transcript, advice, documents and decisions remain connected in the same employee matter.</p>
              </div>
              <div className="follow-through-steps">
                <article>
                  <span>01</span>
                  <h4>Document the outcome</h4>
                  <p>Verity prepares the meeting summary, follow-up email, actions and factual record while the details are fresh.</p>
                </article>
                <article>
                  <span>02</span>
                  <h4>Ready for your HRIS</h4>
                  <p>Review and approve the file note, then add it to your chosen HRIS without rewriting the meeting.</p>
                </article>
                <article>
                  <span>03</span>
                  <h4>Lawyer handoff, if needed</h4>
                  <p>With permission, Verity shares the organised matter history, recordings, transcripts and documents with your chosen lawyer.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="use-cases-section" id="use-cases">
          <div className="shell">
            <div className="use-cases-top" data-reveal>
              <h2>
                {copy.casesFirst}
                <br />
                {copy.casesSecond}
              </h2>
              <p>{copy.casesSupport}</p>
            </div>
            <div className="use-case-grid">
              {useCases.map((item) => (
                <article className="use-case" data-reveal key={item.index}>
                  <header>
                    <span>{item.index}</span>
                    <h3>{item.title}</h3>
                  </header>
                  <p>{item.prompt}</p>
                  <div className="output-tags">
                    {item.outputs.map((output) => (
                      <span key={output}>{output}</span>
                    ))}
                  </div>
                  <i className="case-arrow" aria-hidden="true">↗</i>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section" id="trust">
          <div className="shell trust-layout">
            <div className="trust-copy" data-reveal>
              <h2>
                {copy.trustFirst}
                <br />
                {copy.trustSecond}
              </h2>
              <p>{copy.trustBody}</p>
              <div className="trust-principles">
                <span>Australian employment-law context</span>
                <span>Expert legal oversight</span>
                <span>Escalation when human advice is needed</span>
              </div>
            </div>

            <div className="decision-board" data-reveal>
              <header className="decision-board-header">
                <span>THE DECISION STANDARD</span>
                <span className="decision-board-badge">BUILT INTO EVERY MATTER</span>
              </header>
              <div className="decision-board-list">
                {[
                  ["01", "Facts before assumptions", "Separate what happened from what is believed or inferred."],
                  ["02", "Fair process", "Keep the person, the evidence and the Australian context in view."],
                  ["03", "A documented decision", "Create the record, reasoning and follow-through while the details are fresh."],
                  ["04", "Human escalation", "Recognise when specialist HR or legal advice is the right next step."],
                ].map(([number, title, body]) => (
                  <article key={number}>
                    <span className="decision-number">{number}</span>
                    <strong>{title}</strong>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="australia-section">
          <div className="shell australia-layout">
            <div className="australia-stamp" data-reveal aria-hidden="true">
              <img src="/australia-map.svg" alt="" />
              <small>BUILT HERE<br />FOR HERE</small>
            </div>
            <div className="australia-copy" data-reveal>
              <p className="section-label section-label-light">AUSTRALIAN FROM DAY ONE</p>
              <h2>
                Not global advice
                <br />
                with “Australia”
                <br />
                pasted on top.
              </h2>
              <p>
                Verity is being built for the way Australian businesses actually
                manage people: Fair Work context, local workplace realities and the
                judgement to know when an issue needs specialist advice.
              </p>
              <a className="button button-paper button-large" href="#waitlist">
                Get Australian early access <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="shell faq-layout">
            <div className="faq-heading" data-reveal>
              <p className="section-label">THE STRAIGHT ANSWERS</p>
              <h2>Before you ask Verity anything.</h2>
            </div>
            <div className="faq-list" data-reveal>
              {faqItems.map((item, index) => (
                <details className="faq-item" key={item.question} open={index === 0}>
                  <summary>
                    <span>{item.question}</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="waitlist-section" id="waitlist">
          <div className="waitlist-word" aria-hidden="true">VERITY</div>
          <div className="shell waitlist-layout">
            <div className="waitlist-copy" data-reveal>
              <p className="section-label section-label-light">
                AUSTRALIAN EARLY ACCESS · AUGUST 2026
              </p>
              <h2>
                {copy.waitFirst}
                <br />
                <em>{copy.waitEmphasis}</em>
              </h2>
              <p>{copy.waitBody}</p>
            </div>

            <form className="waitlist-form" onSubmit={handleWaitlistSubmit} data-reveal>
              <div className="form-field">
                <label htmlFor="email">WORK EMAIL</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com.au"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="companySize">TEAM SIZE</label>
                <select id="companySize" name="companySize" required defaultValue="">
                  <option value="" disabled>Select your team size</option>
                  <option value="1-14">1–14 people</option>
                  <option value="15-49">15–49 people</option>
                  <option value="50-199">50–199 people</option>
                  <option value="200-499">200–499 people</option>
                  <option value="500+">500+ people</option>
                </select>
              </div>
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <button
                className="button button-violet button-large waitlist-submit"
                type="submit"
                disabled={formState === "submitting"}
              >
                {formState === "submitting"
                  ? "Joining..."
                  : copy.formCta}
                <Arrow />
              </button>
              <p className="form-privacy">
                Early-access updates only. No spam. Unsubscribe whenever you like.
              </p>
              {formMessage ? (
                <p
                  className={`form-message ${formState === "error" ? "is-error" : ""}`}
                  role="status"
                >
                  {formMessage}
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-layout">
          <a className="brand" href="#top">ASK VERITY</a>
          <p>Your 24/7 AI HR Manager · Built for Australian businesses</p>
          <p>© 2026 Ask Verity</p>
        </div>
      </footer>
    </>
  );
}

export default function Home() {
  return <VerityLanding version="relief" />;
}
