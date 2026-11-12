import Motion from "./motion";

const issues = [
  { value: "performance", label: "Performance" },
  { value: "conduct", label: "Conduct" },
  { value: "attendance", label: "Attendance" },
  { value: "complaints", label: "Complaints" },
  { value: "redundancy", label: "Redundancy" },
  { value: "other", label: "Other" },
];

export default function Page() {
  return (
    <>
      <header className="top" id="top-bar">
      <a className="brand" href="#top"><svg className="vmark" viewBox="0 0 64 64" aria-hidden="true"><path d="M12 20 L32 52" stroke="#9B85FF" strokeWidth="9" strokeLinecap="round" fill="none"/><path d="M52 20 L32 52" stroke="#FF8098" strokeWidth="9" strokeLinecap="round" fill="none"/><circle cx="32" cy="13" r="5.5" fill="#F6A76B"/></svg><b className="wordmark">AskVerity</b></a>
      <nav className="navlinks" aria-label="Main navigation">
      <a href="#no-hr">No HR on staff</a>
      <a href="#hr-teams">HR teams</a>
      <a href="#how">How it works</a>
      <a href="#library">People Problems Library</a>
      </nav>
      <a className="cta cta--sm" href="#pilot">Apply for the pilot ↗</a>
      </header>
      <main id="top">
      <section className="hero" id="hero">
      <div className="hero__stage">
      <div className="hero__glow" aria-hidden="true"></div>
      <div className="hero__grid" aria-hidden="true"></div>
      <div className="wrap hero__in">
      <div className="hero__copy" id="heroCopy">
      <p className="v-intro">Senior HR in your corner. <em>24/7.</em></p>
      <h1 className="d1">Fix people problems fast, fairly, and <em>on the record.</em></h1>
      <p className="hero__lede">Verity advises you every step of the way, like a senior HR director at your side. Exactly what to say, every document drafted from PIPs to termination letters, the case file kept.</p>
      <div className="hero__acts">
      <a className="cta" href="#pilot">Apply for the pilot ↗</a>
      <a className="link-q" href="#no-hr">I don&#8217;t have HR</a>
      <a className="link-q" href="#hr-teams">I have an HR team</a>
      </div>
      <ul className="hproof">
      <li><b>Australian</b><em>Built for Australian workplaces and the Fair Work system</em></li>
      <li><b>Onshore</b><em>Your data stays in Australia. Verity never trains on it</em></li>
      <li><b>Your call</b><em>You approve everything. No lock-in</em></li>
      </ul>
      </div>
      <div>
      <div className="hphoto" id="panel">
      <img className="hphoto__main" src="/people/hero.jpg" alt="A manager and a team member talking calmly at a desk" />
      <img className="hphoto__sub" src="/people/talk-table.jpg" alt="" aria-hidden="true" />
      <div className="hquote hquote--you"><span>You tell Verity</span><p>&#8220;Quotes keep going out late and I&#8217;ve put off raising it for two months.&#8221;</p></div>
      <div className="hquote hquote--v"><span>Verity advises</span><p>Start with clear expectations in writing, then an informal conversation this week. Here&#8217;s your opening line and the email to send first.</p></div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <div className="tick" aria-label="What Verity handles">
      <div className="tick__t">
      <div className="tick__g"><span>Performance</span><i>✦</i><span>Absence</span><i>✦</i><span>Reasonable adjustments</span><i>✦</i><span>Redundancy</span><i>✦</i><span>Investigations</span><i>✦</i><span>Conduct</span><i>✦</i><span>Complaints</span><i>✦</i><span>Recruitment</span><i>✦</i><span>Discrimination</span><i>✦</i></div>
      <div className="tick__g" aria-hidden="true"><span>Performance</span><i>✦</i><span>Absence</span><i>✦</i><span>Reasonable adjustments</span><i>✦</i><span>Redundancy</span><i>✦</i><span>Investigations</span><i>✦</i><span>Conduct</span><i>✦</i><span>Complaints</span><i>✦</i><span>Recruitment</span><i>✦</i><span>Discrimination</span><i>✦</i></div>
      </div>
      </div>
      <section className="v2 v2-strip" aria-label="Real people, real workplaces">
      <div className="v2-strip__row">
      <img src="/people/cafe.jpg" alt="A café owner talking with a staff member at the counter" data-r="" />
      <img src="/people/listening.jpg" alt="A team member explaining something while her manager listens" data-r="" />
      <img src="/people/office-chat.jpg" alt="Two colleagues in a one-on-one in a small office" data-r="" />
      <img src="/people/meeting.jpg" alt="A small team talking through an issue around a table" data-r="" />
      </div>
      </section>
      <section className="v2 v2-bingo">
      <div className="wrap">
      <div className="v2-head">
      <p className="v2-eyebrow" data-r="">Sound familiar?</p>
      <h2 className="v2-h2" data-r="">Which of these are <em>on your plate right now?</em></h2>
      <p className="v2-sub" data-r="">Be honest. If more than a couple ring true, the problem is already costing you time, sleep and good people. <b>Tap any that sound like you.</b></p>
      </div>
      <div className="v2-bingo__grid" id="bingo" data-r="">
      {[
        "I’ve been meaning to raise it for weeks.",
        "I’m not sure what I’m allowed to say.",
        "I spoke to them once. Didn’t write it down.",
        "I’ve Googled it at 11pm.",
        "I asked ChatGPT and got “it depends”.",
        "My good people are carrying the slack.",
        "I raised it and a medical certificate turned up.",
        "The lawyer’s quote made me wince.",
        "The record is a few texts and an email.",
        "Each manager handles it differently.",
        "I lie awake replaying the conversation.",
        "I’m hoping it just sorts itself out.",
      ].map((t) => (
        <button key={t} type="button" className="v2-tile" aria-pressed="false"><span>{t}</span><i aria-hidden="true"></i></button>
      ))}
      </div>
      <div className="v2-bingo__bar" data-r="">
      <p id="bingoMsg" aria-live="polite">Verity is built to take every one of these off your plate.</p>
      <a className="cta" href="#pilot">Apply for the pilot ↗</a>
      </div>
      </div>
      </section>
      <section className="v2 v2-gap">
      <div className="wrap">
      <div className="v2-head">
      <p className="v2-eyebrow" data-r="">The problem</p>
      <h2 className="v2-h2" data-r="">The <em>people-problem gap.</em></h2>
      <p className="v2-sub" data-r="">Managers know something&#8217;s wrong. They just don&#8217;t know what to do about it. So it drags on, and everyone pays.</p>
      </div>
      <div className="v2-gap__grid">
      <article className="v2-gap__card" data-r="">
      <img src="/people/worried.jpg" alt="A business owner at her desk, worried about a conversation she needs to have" />
      <div>
      <h3>For you</h3>
      <ul>
      <li>Putting off the conversation</li>
      <li>Not knowing what you can say or write</li>
      <li>Hours lost to Google and second-guessing</li>
      <li>Worry about getting it wrong</li>
      </ul>
      </div>
      </article>
      <blockquote className="v2-gap__quote" data-r=""><p>&#8220;Spoke to him about it&#8221; in a diary says nothing about what was said, or what was agreed.</p></blockquote>
      <article className="v2-gap__card" data-r="">
      <img src="/people/team.jpg" alt="Two colleagues working through something together at a laptop" />
      <div>
      <h3>For your team</h3>
      <ul>
      <li>Good people carrying the slack</li>
      <li>The person involved never told clearly</li>
      <li>Frustration, then resignations</li>
      <li>A culture that takes the hit</li>
      </ul>
      </div>
      </article>
      </div>
      <div className="v2-glow" data-r="">
      <p className="v2-glow__eyebrow">Ask Verity</p>
      <h2>Verity <em>closes the gap.</em></h2>
      <p>Advice at every step. The words for every conversation. Every document drafted for you, from PIPs to termination letters. And one case file that shows you did it properly.</p>
      <a className="v2-glow__link" href="#how">See how it works <i aria-hidden="true">&#8594;</i></a>
      </div>
      </div>
      </section>
      <section className="v2 v2-why">
      <div className="wrap split">
      <div>
      <p className="v2-eyebrow" data-r="">Why it matters</p>
      <h2 className="v2-h2" data-r="">Having a good reason <em>isn&#8217;t enough.</em></h2>
      <p className="v2-p" data-r="">Employers regularly lose unfair dismissal cases even when they had a valid reason. They lose because the process to get there wasn&#8217;t fair.</p>
      <p className="v2-p" data-r="">If a dismissal is ever challenged, the Fair Work Commission looks at whether there was a valid reason, whether the person was told and had a chance to respond, and whether they were warned. Verity builds that record as you go, so you never have to reconstruct it later.</p>
      <div className="pair" data-r="">
      <div><h3>A clear record</h3><p>What was said, when, by whom, and what was agreed.</p></div>
      <div><h3>Notes that mean something</h3><p>Approved file notes, ready for your HRIS or your files.</p></div>
      </div>
      </div>
      <img className="v2-photo" src="/people/owner.jpg" alt="A small business owner working through her paperwork in her shop" data-r="" />
      </div>
      </section>
      <section className="sec dark" id="how">
      <div className="wrap">
      <div className="head">
      <div>
      <p className="lab" data-r="">The Verity difference</p>
      <h2 className="d2" data-r="">Fixing it properly starts with <em>the right advice.</em></h2>
      <p className="body-l" data-r="">Most tools track your cases. Verity tells you how to run them, before, during and after every conversation.</p>
      </div>
      </div>
      <div className="tl">
      <div className="tl__spine" aria-hidden="true"><i></i></div>
      <article className="tls">
      <span className="tls__n" aria-hidden="true"></span>
      <div className="tlc">
      <h3>Before</h3>
      <p className="lead">Advice at every step.</p>
      <p className="det">Not one answer and goodbye. Verity asks the questions a senior HR director would, picks the right process for your situation and stays with you for the whole case.</p>
      </div>
      </article>
      <article className="tls">
      <span className="tls__n" aria-hidden="true"></span>
      <div className="tlc">
      <h3>During</h3>
      <p className="lead">The words for the conversation.</p>
      <p className="det">Opening lines, questions to ask, and what to steer clear of. You walk in prepared, not winging it.</p>
      </div>
      </article>
      <article className="tls">
      <span className="tls__n" aria-hidden="true"></span>
      <div className="tlc">
      <h3>After</h3>
      <p className="lead">Every letter drafted.</p>
      <p className="det">From your case, not a template. You review it, tweak it and approve it. Nothing is sent without you.</p>
      </div>
      </article>
      <article className="tls">
      <span className="tls__n" aria-hidden="true"></span>
      <div className="tlc">
      <h3>On the record</h3>
      <p className="lead">One case file.</p>
      <p className="det">Every step and decision, in order. If it improves, you close it. If it doesn&#8217;t, Verity guides you through the formal steps, fairly. Ready if anyone ever asks.</p>
      </div>
      </article>
      </div>
      </div>
      </section>
      <section className="sec dark" id="use-cases">
      <div className="railtrack" id="railtrack">
      <div className="railstick">
      <div className="wrap">
      <div className="head">
      <div>
      <h2 className="d2" data-r="">The moments you wish <em>HR was sitting beside you.</em></h2>
      <p className="body-l" data-r="">Verity brings calm, unbiased, senior guidance to the awkward, emotional and high-stakes people moments managers are usually left to handle alone.</p>
      </div>
      </div>
      </div>
      <div className="railwrap" id="railwrap">
      <div className="cards" id="cards">
      <article className="card card--violet"><h3>Underperformance</h3><p>&#8220;Someone is underperforming. How do I manage it fairly and fast?&#8221;</p><div className="tags"><span>OKRs / KPIs</span><span>Meeting scripts</span><span>Performance improvement plan</span></div></article>
      <article className="card card--lilac"><h3>Sick leave &amp; absence</h3><p>&#8220;His sickness absences are becoming a pattern. What can I actually do?&#8221;</p><div className="tags"><span>Risk checks</span><span>Letter to GP</span><span>Questions to ask</span><span>Document trail</span></div></article>
      <article className="card card--cream"><h3>Reasonable adjustments</h3><p>&#8220;How do we support this person and protect the business?&#8221;</p><div className="tags"><span>Options review</span><span>Consultation plan</span><span>Decision framework</span></div></article>
      <article className="card card--clay"><h3>Redundancy &amp; restructure</h3><p>&#8220;We may need to restructure. Build the process with me.&#8221;</p><div className="tags"><span>Business case</span><span>Selection criteria</span><span>Letters &amp; scripts</span></div></article>
      <article className="card card--ink"><h3>Conduct &amp; complaints</h3><p>&#8220;A complaint has landed. What happens in the first 24 hours?&#8221;</p><div className="tags"><span>Triage plan</span><span>Fair process</span><span>Investigation pack</span></div></article>
      <article className="card card--bone"><h3>Everyday people calls</h3><p>&#8220;Can I say this? Is this fair? What should I document?&#8221;</p><div className="tags"><span>Clear answer</span><span>Conversation notes</span><span>Next-step checklist</span></div></article>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="sec v2 v2-sec">
      <div className="wrap">
      <div className="head">
      <div>
      <p className="lab" data-r="">How Verity helps you</p>
      <h2 className="d2" data-r="">Built for <em>two kinds of workplace.</em></h2>
      </div>
      </div>
      <div className="aud">
      <a className="aud__c" href="#pilot" id="no-hr" data-r="">
      <img className="aud__img" src="/people/owner-cafe.jpg" alt="A café owner behind his counter" />
      <div className="aud__b">
      <span className="lab">No HR on staff</span>
      <h3>Owners, CEOs and operators</h3>
      <p>You run the business and the people stuff lands on you. Verity gives you a senior HR director&#8217;s advice without the salary or the hourly rate.</p>
      <b>For businesses without HR →</b>
      </div>
      </a>
      <a className="aud__c" href="#pilot" id="hr-teams" data-r="">
      <img className="aud__img" src="/people/hr-team.jpg" alt="An HR lead in a one-on-one with a manager" />
      <div className="aud__b">
      <span className="lab">HR teams</span>
      <h3>Heads of People, HR advisors and CFOs</h3>
      <p>Your HR team is busy. Verity gives them one consistent process for every case, and time back for the strategic work.</p>
      <b>For HR teams →</b>
      </div>
      </a>
      </div>
      </div>
      </section>
      <section className="sec v2 v2-sec">
      <div className="wrap">
      <div className="head">
      <div>
      <p className="lab" data-r="">A typical example</p>
      <h2 className="d2" data-r="">Less avoiding. <em>More fixing.</em></h2>
      </div>
      </div>
      <div className="vs" data-r="">
      <div className="vs__s vs__s--dead">
      <span className="lab">Without Verity</span>
      <ul className="vs__l">
      <li>Put off for eight weeks</li>
      <li>Raised in a corridor, no notes</li>
      <li>Medical certificate the next day</li>
      <li>No idea what&#8217;s allowed next</li>
      <li>Call a lawyer, pay by the hour</li>
      </ul>
      </div>
      <span className="vs__pivot" aria-hidden="true">&#8800;</span>
      <div className="vs__s vs__s--live">
      <span className="lab">With Verity</span>
      <ul className="vs__l">
      <li>Expectations set in writing, day one</li>
      <li>Conversation with a script, day three</li>
      <li>Notes approved and filed</li>
      <li>Support agreed, review booked</li>
      <li>Fixed, or a fair formal process, fully documented</li>
      </ul>
      </div>
      </div>
      </div>
      </section>
      <section className="sec v2 v2-sec" id="trust">
      <div className="wrap">
      <div className="head">
      <div>
      <h2 className="d2" data-r="">A calm voice, backed by <em>serious HR judgement.</em></h2>
      <p className="body-l" data-r="">Verity is warm with people and rigorous with process. Her guidance is shaped by real senior HR and employee-relations judgement, with Australian employment-law context throughout.</p>
      </div>
      </div>
      <div className="founder" data-r="">
      <div className="ph ph--sq" role="img" aria-label="Photo to come: Claire Alexander, founder"><span>Photo: Claire Alexander</span></div>
      <div>
      <p className="lab">Built by someone who&#8217;s run these cases</p>
      <blockquote>&#8220;The world needs fair workplaces.&#8221;</blockquote>
      <p>Nothing frustrates me more than watching good businesses get people issues wrong, then pay for it in turnover, stress and a damaged culture. I built Verity so every business can handle the hard conversations properly, whether they have HR or not.</p>
      <p>Verity&#8217;s process comes from years of running employee relations cases as a senior HR leader, including scaling people functions at Zip Co and Cluey and as a founding Chief of People.</p>
      <p className="founder__by"><b>Claire Alexander, Founder</b><span>Senior HR operator · Admitted as a lawyer in the UK</span></p>
      </div>
      </div>
      </div>
      </section>
      <section className="sec v2 v2-sec">
      <div className="wrap">
      <div className="head">
      <div>
      <p className="lab" data-r="">Why Verity</p>
      <h2 className="d2" data-r="">How Verity compares with <em>what most people use today.</em></h2>
      </div>
      </div>
      <div className="cmp" data-r="">
      <table>
      <thead><tr><th scope="col"><span className="hp">Question</span></th><th scope="col" className="cmp__v">Verity</th><th scope="col">Lawyer</th><th scope="col">Outsourced HR</th><th scope="col">ChatGPT</th><th scope="col">Doing it yourself</th></tr></thead>
      <tbody>
      <tr><th scope="row">Tells you what to do next</th><td className="cmp__v">At every step</td><td>Yes, by the hour</td><td>On their schedule</td><td>Generic answers</td><td>No</td></tr>
      <tr><th scope="row">Australian process built in</th><td className="cmp__v">Yes</td><td>Yes</td><td>Yes</td><td>No</td><td>Guesswork</td></tr>
      <tr><th scope="row">Writes the letters</th><td className="cmp__v">Yes, you approve</td><td>Yes, billed</td><td>Sometimes</td><td>Rough drafts</td><td>You do</td></tr>
      <tr><th scope="row">Keeps the case file</th><td className="cmp__v">Automatically</td><td>No</td><td>Sometimes</td><td>No</td><td>Rarely</td></tr>
      <tr><th scope="row">Cost</th><td className="cmp__v">Monthly, no lock-in</td><td>Hourly</td><td>Long contract</td><td>Free</td><td>Free, until it isn&#8217;t</td></tr>
      </tbody>
      </table>
      </div>
      </div>
      </section>
      <section className="sec au">
      <div className="wrap au__l">
      <div className="globe" data-r="" aria-hidden="true">
      <svg viewBox="0 0 400 400" role="img" aria-label="Rotating globe centred on Australia">
      <defs>
      <clipPath id="sph"><circle cx="200" cy="200" r="168"/></clipPath>
      <radialGradient id="lit" cx="34%" cy="26%" r="82%">
      <stop offset="0" stopColor="#C9BAFF" stopOpacity=".22"/>
      <stop offset="58%" stopColor="#17111F" stopOpacity="0"/>
      <stop offset="100%" stopColor="#0E0A15" stopOpacity=".72"/>
      </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="168" fill="#17111F" stroke="#C9BAFF" strokeOpacity=".5" strokeWidth="1.5"/>
      <g clipPath="url(#sph)" className="globe__tilt" opacity=".5">
      <g className="globe__lat">
      <line x1="32" y1="200" x2="368" y2="200"/>
      <path d="M46 144h308M46 256h308"/><path d="M78 96h244M78 304h244"/>
      </g>
      <g className="globe__mer" id="meridians"></g>
      </g>
      <g clipPath="url(#sph)">
      <path id="auShape" fill="#C9BAFF" stroke="#FBF7EF" strokeWidth="1.2" strokeOpacity=".85"/>
      <path id="tasShape" fill="#C9BAFF" stroke="#FBF7EF" strokeWidth="1.2" strokeOpacity=".85"/>
      </g>
      <circle cx="200" cy="200" r="168" fill="url(#lit)"/>
      <circle cx="200" cy="200" r="168" fill="none" stroke="#C9BAFF" strokeOpacity=".85" strokeWidth="2"/>
      </svg>
      </div>
      <div>
      <h2 className="d2" data-r="" style={{marginTop:'24px'}}>Built for Australian employee relations, <em>not adapted for it.</em></h2>
      <p className="body-l" data-r="" style={{marginTop:'26px'}}>Your people&#8217;s information, protected.</p>
      <ul className="priv" data-r="">
      <li><b>Hosted in Australia</b><span>Your data stays onshore.</span></li>
      <li><b>Never used for training</b><span>Your cases are yours.</span></li>
      <li><b>Human approval</b><span>Nothing is sent without you.</span></li>
      </ul>
      </div>
      </div>
      </section>
      <section className="sec v2 v2-sec" id="library">
      <div className="wrap">
      <div className="libx" data-r="">
      <div>
      <h2>The People Problems Library. <em>Free, and actually usable.</em></h2>
      <p>Scripts, checklists, templates and letters for the situations Australian managers get handed with no warning, plus everything we write about handling them properly.</p>
      </div>
      <form className="libf" data-lib="">
      <label className="hp" htmlFor="libname">Name</label><label className="hp" htmlFor="libemail">Email</label>
      <div className="libf__r">
      <input id="libname" type="text" name="name" placeholder="Your name" autoComplete="name" required={true} />
      <input id="libemail" type="email" name="email" placeholder="Work email" autoComplete="email" required={true} />
      </div>
      <button className="cta" type="submit">Send it to me ↗</button>
      </form>
      </div>
      </div>
      </section>
      <section className="sec v2 v2-sec" id="faq">
      <div className="wrap">
      <div className="head">
      <div>
      <p className="lab" data-r="">Questions</p>
      <h2 className="d2" data-r="">The straight answers.</h2>
      </div>
      </div>
      <div className="faq" data-r="">
      <details open={true}><summary><span>Is this just another AI chatbot?</span><i aria-hidden="true">+</i></summary><p>No. A chatbot answers one question and stops. Verity stays with the whole case, advises you at every step and produces the plans, scripts, letters and records you need to act.</p></details>
      <details><summary><span>What does the pilot cover?</span><i aria-hidden="true">+</i></summary><p>Underperformance today, with absence next. Conduct, complaints and investigations follow, shaped by what pilot partners need most.</p></details>
      <details><summary><span>Is it legal advice?</span><i aria-hidden="true">+</i></summary><p>No. Verity is HR decision support built on Australian workplace context. It flags when a matter needs a lawyer.</p></details>
      <details><summary><span>Where does my data go?</span><i aria-hidden="true">+</i></summary><p>It stays in Australia, and Verity never trains on it.</p></details>
      <details><summary><span>Do I need to install anything?</span><i aria-hidden="true">+</i></summary><p>No. It runs in your browser.</p></details>
      </div>
      </div>
      </section>
      <section className="sec dark" id="pilot">
      <div className="wrap join">
      <div data-r="">
      <p className="lab">Founding pilot partners · Limited places</p>
      <h2 className="d2" style={{marginTop:'24px'}}>Let&#8217;s fix people problems <em>properly, together.</em></h2>
      <p className="body-l" style={{marginTop:'26px',color:'var(--t-light-2)'}}>Help shape Verity from day one. Senior HR advice at every step, direct support from our founder, and founding pricing for life. Pilot scope: underperformance today, with absence next.</p>
      </div>
      <form className="form" id="wl" data-r="" noValidate>
      <p className="fh"><b>Apply for a pilot place</b><span>No names or details about your people. That conversation happens later.</span></p>
      <div className="f"><label className="lab" htmlFor="fname">Your name</label>
      <input id="fname" name="name" type="text" autoComplete="name" placeholder="First and last name" required={true} /></div>
      <div className="f"><label className="lab" htmlFor="email">Work email</label>
      <input id="email" name="email" type="email" autoComplete="email" placeholder="you@business.com.au" required={true} /></div>
      <div className="f"><label className="lab" htmlFor="company">Company website or LinkedIn</label>
      <input id="company" name="company" type="text" inputMode="url" autoComplete="url" placeholder="yourbusiness.com.au or linkedin.com/company/…" required={true} /></div>
      <div className="f"><label className="lab" htmlFor="size">How many people work in your business?</label>
      <select id="size" name="size" required={true} defaultValue="">
      <option value="" disabled>Select your team size</option>
      <option value="1-14">1–14 people</option><option value="15-49">15–49 people</option><option value="50-199">50–199 people</option>
      <option value="200-499">200–499 people</option><option value="500+">500+ people</option>
      </select></div>
      <fieldset className="f issues">
      <legend>Which issue do you want help with first? Tick any that apply</legend>
      {issues.map((i) => (
      <label key={i.value} className="issue"><input type="checkbox" name="issues" value={i.value} /><span>{i.label}</span></label>
      ))}
      </fieldset>
      <div className="hp" aria-hidden="true"><label htmlFor="web">Website</label><input id="web" name="web" tabIndex={-1} autoComplete="off" /></div>
      <button className="cta" type="submit">Apply for a pilot place ↗</button>
      <p className="fine">We&#8217;ll come back to you personally. No mailing list.</p>
      </form>
      </div>
      </section>
      </main>
      <footer className="foot">
      <div className="foot__l">
      <span className="brand"><svg className="vmark" viewBox="0 0 64 64" aria-hidden="true"><path d="M12 20 L32 52" stroke="#9B85FF" strokeWidth="9" strokeLinecap="round" fill="none"/><path d="M52 20 L32 52" stroke="#FF8098" strokeWidth="9" strokeLinecap="round" fill="none"/><circle cx="32" cy="13" r="5.5" fill="#F6A76B"/></svg><b className="wordmark">AskVerity</b></span>
      <span>Senior HR in your corner · Built for Australian workplaces</span>
      <span>© 2026</span>
      </div>
      </footer>
      <Motion />
    </>
  );
}
