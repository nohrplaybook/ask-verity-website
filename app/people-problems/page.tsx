import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "People Problems Library",
  description:
    "Clear, practical guidance for Australian founders, business owners and managers handling difficult people decisions.",
  alternates: {
    canonical: "/people-problems",
  },
  openGraph: {
    title: "People Problems Library | Ask Verity",
    description:
      "Clear, practical guidance for Australian founders, business owners and managers handling difficult people decisions.",
    url: "/people-problems",
  },
};

const topics = [
  {
    number: "01",
    title: "Performance & capability",
    question: "Someone is underperforming. Where do I start?",
    detail:
      "Fair performance conversations, evidence, expectations, support plans and what to document.",
  },
  {
    number: "02",
    title: "Sick leave & health",
    question: "The absence pattern is becoming a problem. What can I do?",
    detail:
      "The questions to separate attendance, health, performance and reasonable-adjustment issues.",
  },
  {
    number: "03",
    title: "Reasonable adjustments",
    question: "How do we support this person and protect the business?",
    detail:
      "A practical path through consultation, options, evidence, review points and decisions.",
  },
  {
    number: "04",
    title: "Redundancy & restructure",
    question: "We may need to restructure. How should we think about it?",
    detail:
      "Business-case thinking, role impact, consultation, objective criteria and the documents involved.",
  },
  {
    number: "05",
    title: "Conduct & complaints",
    question: "A complaint has landed. What happens in the first 24 hours?",
    detail:
      "Triage, immediate safeguards, fair process, investigations and clear decision records.",
  },
  {
    number: "06",
    title: "Everyday manager calls",
    question: "What should I say, and what should I put in writing?",
    detail:
      "Conversation preparation, follow-up notes, boundaries and escalation points for everyday people calls.",
  },
];

const firstGuides = [
  "What should I do when an employee is underperforming?",
  "Can you performance-manage someone while they are on sick leave?",
  "How should an employer manage frequent sick leave in Australia?",
  "What are reasonable adjustments in an Australian workplace?",
  "Underperformance or misconduct: what is the difference?",
  "How do I document a difficult employee conversation?",
];

export default function PeopleProblemsPage() {
  const libraryStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ask Verity People Problems Library",
    url: "https://www.askverity.io/people-problems",
    description:
      "Practical people-management guidance for Australian founders, business owners and managers.",
    isPartOf: {
      "@type": "WebSite",
      name: "Ask Verity",
      url: "https://www.askverity.io/",
    },
    about: topics.map((topic) => topic.title),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(libraryStructuredData),
        }}
      />

      <header className="site-header library-header">
        <nav className="shell nav" aria-label="Main navigation">
          <Link className="brand" href="/" aria-label="Ask Verity home">
            ASK VERITY
          </Link>
          <div className="nav-links">
            <Link href="/#how">How she works</Link>
            <Link href="/people-problems" aria-current="page">
              People Problems Library
            </Link>
            <Link href="/#trust">Why trust Verity</Link>
          </div>
          <Link className="button button-ink button-small" href="/#waitlist">
            Put Verity in my corner <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>

      <main className="library-main">
        <section className="library-hero" aria-labelledby="library-title">
          <div className="library-grid" aria-hidden="true" />
          <div className="shell library-hero-layout">
            <div>
              <p className="section-label section-label-light">
                PEOPLE PROBLEMS LIBRARY
              </p>
              <h1 id="library-title">
                Clear thinking for the people moments that{" "}
                <em>don’t come with a script.</em>
              </h1>
            </div>
            <div className="library-intro">
              <p>
                Practical Australian HR guidance for founders, owners and
                managers who need to work out what to do, what to say and what
                to document.
              </p>
              <div className="library-question">
                <span>ASK THE REAL QUESTION</span>
                <strong>
                  “I know I need to deal with this. How do I do it properly?”
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="library-topics" aria-labelledby="topics-title">
          <div className="shell">
            <div className="library-section-heading">
              <p className="section-label">BROWSE BY PEOPLE PROBLEM</p>
              <h2 id="topics-title">
                Start with what’s
                <br />
                happening <em>right now.</em>
              </h2>
            </div>

            <div className="library-topic-grid">
              {topics.map((topic) => (
                <article className="library-topic" key={topic.number}>
                  <header>
                    <span>{topic.number}</span>
                    <h3>{topic.title}</h3>
                  </header>
                  <blockquote>{topic.question}</blockquote>
                  <p>{topic.detail}</p>
                  <small>GUIDANCE COLLECTION IN REVIEW</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="library-method" aria-labelledby="method-title">
          <div className="shell library-method-layout">
            <div>
              <p className="section-label section-label-light">
                USEFUL, NOT VAGUE
              </p>
              <h2 id="method-title">
                Every guide should leave you{" "}
                <em>ready for the conversation.</em>
              </h2>
            </div>
            <ol className="library-method-list">
              <li>
                <span>01</span>
                <strong>A direct answer</strong>
                <p>The point first, in language a busy manager can use.</p>
              </li>
              <li>
                <span>02</span>
                <strong>A decision path</strong>
                <p>The facts to establish and the risks to separate.</p>
              </li>
              <li>
                <span>03</span>
                <strong>Words and documents</strong>
                <p>What to say, what to record and what happens next.</p>
              </li>
              <li>
                <span>04</span>
                <strong>An escalation point</strong>
                <p>When the right answer is to involve a specialist or lawyer.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="library-guides" aria-labelledby="guides-title">
          <div className="shell library-guides-layout">
            <div>
              <p className="section-label">FIRST GUIDES</p>
              <h2 id="guides-title">
                The questions we’re
                <br />
                answering <em>first.</em>
              </h2>
              <p className="library-guides-note">
                These guides are being prepared with Australian HR and
                employment-law context before publication.
              </p>
            </div>
            <ol className="library-guide-list">
              {firstGuides.map((guide, index) => (
                <li key={guide}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{guide}</strong>
                  <small>IN REVIEW</small>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="library-cta">
          <div className="shell library-cta-layout">
            <div>
              <p className="section-label section-label-light">
                NEED MORE THAN AN ARTICLE?
              </p>
              <h2>
                Put a calm, capable AI HR manager{" "}
                <em>in your corner.</em>
              </h2>
            </div>
            <div>
              <p>
                Join the Australian early-access list for Verity—the AI HR
                manager being built for the people decisions that don’t fit
                neatly inside a policy.
              </p>
              <Link className="button button-violet button-large" href="/#waitlist">
                Put Verity in my corner <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-layout">
          <Link className="brand" href="/">
            ASK VERITY
          </Link>
          <p>Your AI HR Manager · Built for Australian businesses</p>
          <p>© 2026 Ask Verity</p>
        </div>
      </footer>
    </>
  );
}

