import Motion from "./motion";

export default function Page() {
  return (
    <>
      <header className="top" id="top-bar">
      <a className="brand" href="#top"><svg className="vmark" viewBox="0 0 28 28" aria-hidden="true"><defs><linearGradient id="vg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9179FF"/><stop offset=".52" stopColor="#7657FF"/><stop offset="1" stopColor="#4B2CD4"/></linearGradient></defs><rect width="28" height="28" rx="8.5" fill="url(#vg)"/><path d="M8.2 9.6 L13.9 19.9 L20.1 7.2" fill="none" stroke="#fff" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/></svg><b>ASK VERITY</b></a>
      <nav className="navlinks" aria-label="Main navigation">
      <a href="#how">How she works</a>
      <a href="#use-cases">What she handles</a>
      <a href="#library">People Problems Library</a>
      <a href="#trust">Why trust Verity</a>
      <a href="#pricing">Pricing</a>
      <a className="navlinks__alt" href="#lawyers">Lawyer portal</a>
      </nav>
      <a className="cta cta--sm" href="#waitlist">Put Verity in my corner ↗</a>
      </header>
      <main id="top">
      <section className="hero" id="hero">
      <div className="hero__stage">
      <div className="hero__glow" aria-hidden="true"></div>
      <div className="hero__grid" aria-hidden="true"></div>
      <div className="wrap hero__in">
      <div className="hero__copy" id="heroCopy">
      <p className="v-intro">Meet Verity, your <em>AI HR manager.</em></p>
      <h1 className="d1">You run the business. Verity handles the <em>people stuff.</em></h1>
      <p className="hero__lede">She tells you what to do, sits in the meeting with you, and writes what comes after.</p>
      <div className="hero__acts">
      <a className="cta" href="#waitlist">Put Verity in my corner ↗</a>
      <a className="link-q" href="#how">See how she works</a>
      </div>
      <ul className="hproof">
      <li><b>24/7</b><em>Answers at 11pm on a Sunday, not next Tuesday</em></li>
      <li><b>Australian</b><em>Built for Fair Work and how it actually plays out here</em></li>
      <li><b>One matter</b><em>Advice, meetings and documents kept together</em></li>
      </ul>
      </div>
      <div>
      <div className="panel" id="panel">
      <header className="pbar"><b>Sam M &#183; return to work</b></header>
      <div className="ppanes">
      <div className="pchat">
      <div className="pbody">
      <p className="said">Sam&#8217;s performance has dropped since returning from extended sick leave. Where do I start?</p>
      <div className="turn">
      <p className="who">Verity</p>
      <p data-type-now="">Before we call this a performance issue, let&#8217;s separate three things.</p>
      <div className="vcard">
      <span>Answered</span>
      <div className="qlist">
      <button className="q on" data-at="0" type="button" tabIndex={-1}><b>What has changed in Sam&#8217;s work, specifically?</b><i>Output down since return, deadlines slipping</i></button>
      <button className="q" data-at=".24" type="button" tabIndex={-1}><b>Has Sam disclosed a health condition?</b><i>Yes, disclosed on return to work</i></button>
      <button className="q" data-at=".40" type="button" tabIndex={-1}><b>Have reasonable adjustments been explored?</b><i>Not yet</i></button>
      </div>
      </div>
      <div className="saved out" data-at=".54">
      <span>Saved to documents</span>
      <b>Conversation plan &#8212; Sam M</b>
      <em>Click to open</em>
      </div>
      <p className="dis">Guidance only, not legal advice. For anything high-risk or contested, check with an employment lawyer.</p>
      </div>
      </div>
      <div className="pcomp"><span>Tell me what is going on</span><b>Send</b></div>
      </div>
      <div className="pdoc out" data-at=".62">
      <header><b>Conversation plan &#8212; Sam M</b></header>
      <div className="pdoc__body">
      <dl className="pdoc__meta">
      <dt>Prepared for</dt><dd>Claire Alexander</dd>
      <dt>Employee</dt><dd>Sam M &#183; Operations</dd>
      <dt>Matter</dt><dd>Return to work</dd>
      </dl>
      <h4>Purpose of this conversation</h4>
      <p>Understand what has changed since Sam returned, before any of this is treated as a performance issue.</p>
      <h4>Open with</h4>
      <p>&#8220;I wanted to check in on how things have felt since you came back. This isn&#8217;t a formal meeting.&#8221;</p>
      <h4>Ask</h4>
      <ul>
      <li>What has felt different about the work since you returned?</li>
      <li>Is anything about how the role is set up getting in the way?</li>
      <li>Is there support that would make the next few weeks easier?</li>
      </ul>
      </div>
      <footer><span>Download as Word</span></footer>
      </div>
      </div>
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
      <section className="sec sec--cream light">
      <div className="wrap">
      <div className="head">
      <div>
      <h2 className="d2" data-r="">The people stuff stops <em>following you home.</em></h2>
      <p className="body-l" data-r="">No more lying awake replaying a conversation or wondering whether you handled it fairly. Verity gives you a calm, capable path forward while the issue is still manageable.</p>
      </div>
      </div>
      <div className="vs" data-r="">
      <div className="vs__s vs__s--dead">
      <span className="lab">Generic AI</span>
      <p>“It depends. You may wish to consult your HR team…”</p>
      <span className="end">Still your problem</span>
      </div>
      <span className="vs__pivot" aria-hidden="true">&#8800;</span>
      <div className="vs__s vs__s--live">
      <span className="lab">Ask Verity</span>
      <p>“I can help. First, tell me what changed, what has already been said and whether there is any health context I need to understand.”</p>
      <span className="end">You&#8217;re not doing this alone <i aria-hidden="true">&#8594;</i></span>
      </div>
      </div>
      </div>
      </section>
      <section className="sec sec--bone light" id="how">
      <div className="wrap">
      <div className="head">
      <h2 className="d2" data-r="">From unsure and avoiding it <em>to ready for the conversation.</em></h2>
      </div>
      <div className="flow">
      <article className="frow" data-r="">
      <div className="fidx"><span>01</span><b>Tell</b></div>
      <div><h3 className="d3">Start with the messy version.</h3><p>Explain what is happening in your own words. Verity works out what matters and what she needs to ask next.</p></div>
      <div className="fart"><span className="lab">Your situation</span><p>“Sam’s performance has dropped since returning from sick leave. Where do I start?”</p><i>↳</i></div>
      </article>
      <article className="frow" data-r="">
      <div className="fidx"><span>02</span><b>Think</b></div>
      <div><h3 className="d3">Let Verity diagnose the real issue.</h3><p>She separates facts from assumptions, spots the overlapping risks and asks the questions a senior HR director would.</p></div>
      <div className="fart"><span className="lab">Verity’s diagnosis</span><p>Performance, health and reasonable-adjustment questions need to be handled separately.</p><i>↳</i></div>
      </article>
      <article className="frow" data-r="">
      <div className="fidx"><span>03</span><b>Act</b></div>
      <div><h3 className="d3">Get the process, not just an answer.</h3><p>Walk away with the decision path and the practical work: scripts, plans, letters, checklists and consultation documents.</p></div>
      <div className="fart"><span className="lab">Ready to use</span><p>Conversation scripts · evidence checklist · reasonable adjustment review · follow-up letter · letter to GP</p><i>✓</i></div>
      </article>
      <article className="frow" data-r="">
      <div className="fidx"><span>04</span><b>Meet</b></div>
      <div><h3 className="d3">Bring Verity into the room.</h3><p>With everyone’s consent, Verity records one-on-ones, underperformance meetings and investigations, guiding you in real time and learning the complete matter.</p></div>
      <div className="fart"><span className="lab">Inside the meeting</span><p>Recording · transcript · live prompts · review · next steps</p><i>✓</i></div>
      </article>
      </div>
      </div>
      </section>
      <section className="sec dark" id="meetings">
      <div className="wrap">
      <div className="head">
      <div>
      <h2 className="d2" data-r="">Verity doesn’t just advise before the meeting. <em>She joins you in it.</em></h2>
      <p className="body-l" data-r="">From one-on-ones and return-to-work discussions to performance, conduct, grievances, workplace change and investigations, Verity can join any important employee meeting. With everyone’s consent, she records the conversation, guides you in real time and keeps everything together inside one employee matter.</p>
      </div>
      </div>
      <div className="console" data-r="">
      <div className="cbar">
      <div className="cbar__l"><b>Sam M</b><s>/</s><span>Return to work</span><em>Live meeting</em></div>
      <div className="cbar__r"><span>Recording with participant consent</span><span className="rec"><i></i> 00:18:42</span></div>
      </div>
      <div className="cpanes">
      <div className="ctr">
      <div className="chd"><b>Live transcript</b><span>Saving to Sam M&#8217;s matter</span></div>
      <div className="ctr__b">
      <div className="trow trow--you"><u>You</u><div><h5>You <s>00:14:02</s></h5><p data-type="">&#8220;Before we move on, I want to make sure I&#8217;ve understood what you&#8217;re raising.&#8221;</p></div></div>
      <div className="trow"><u>SM</u><div><h5>Sam M <s>00:14:11</s></h5><p data-type="">&#8220;The change affected my workload, and I don&#8217;t think that was taken into account.&#8221;</p></div></div>
      <div className="trow trow--you"><u>You</u><div><h5>You <s>00:14:26</s></h5><p data-type="">&#8220;That&#8217;s fair. Can you tell me what changed, and when you first noticed it?&#8221;</p></div></div>
      <div className="trow"><u>SM</u><div><h5>Sam M <s>00:14:38</s></h5><p data-type="">&#8220;It started about three weeks after I came back. Some days I&#8217;m fine. Other days I can&#8217;t get through the list.&#8221;</p></div></div>
      <div className="trow trow--you"><u>You</u><div><h5>You <s>00:14:51</s></h5><p data-type="">&#8220;That&#8217;s useful. Before we talk about support, let me check I&#8217;ve got the timeline right.&#8221;</p></div></div>
      <div className="tlive"><u><b></b><b></b><b></b></u><span>Verity is listening</span></div>
      </div>
      </div>
      <aside className="cside">
      <div className="cside__h"><i></i>Verity<span>Listening</span></div>
      <div className="now">
      <span>Say this next</span>
      <b>&#8220;What does a difficult day look like, compared with a good one?&#8221;</b>
      <p>Gets you specifics you can act on, without asking him about his medical condition.</p>
      </div>
      <ul className="ag">
      <li><i></i>Reason for the concern</li>
      <li><i></i>Impact on his workload</li>
      <li><i></i>Support and adjustments</li>
      <li><i></i>Next steps and timing</li>
      </ul>
      <div className="flag">
      <u>&#9888;</u>
      <div>
      <b>Health and performance in one answer</b>
      <p>Keep them as two separate conversations. Handling them together is where most managers create a claim.</p>
      </div>
      </div>
      </aside>
      </div>
      <div className="cfoot">
      <p>Verity is drafting the file note, summary and follow-up as you talk.</p>
      <b>End &amp; summarise</b>
      </div>
      </div>
      <div className="tl">
      <div className="tl__spine" aria-hidden="true"><i></i></div>
      <article className="tls">
      <span className="tls__n" aria-hidden="true"></span>
      <div className="tlc">
      <h3>Before</h3>
      <p className="lead">Walk in prepared.</p>
      <p className="det">Verity brings together the matter history, agenda, questions, risks and a practical meeting script, so you know what you are walking into and what you need out of it.</p>
      </div>
      </article>
      <article className="tls">
      <span className="tls__n" aria-hidden="true"></span>
      <div className="tlc">
      <h3>During</h3>
      <p className="lead">Know what to do next.</p>
      <p className="det">With consent, she records and transcribes the conversation, then gives real-time prompts about what to ask, what to clarify and what to keep separate.</p>
      </div>
      </article>
      <article className="tls">
      <span className="tls__n" aria-hidden="true"></span>
      <div className="tlc">
      <h3>After</h3>
      <p className="lead">Turn the conversation into action.</p>
      <p className="det">See what went well, what was missed or mishandled, how to improve next time, and what the correct follow-up looks like.</p>
      </div>
      </article>
      <article className="tls">
      <span className="tls__n" aria-hidden="true"></span>
      <div className="tlc">
      <h3>Document</h3>
      <p className="lead">Written up while it is fresh.</p>
      <p className="det">Verity prepares the meeting summary, follow-up email, actions and the factual record, in your words, before the detail fades.</p>
      </div>
      </article>
      <article className="tls">
      <span className="tls__n" aria-hidden="true"></span>
      <div className="tlc">
      <h3>File</h3>
      <p className="lead">Ready for your HRIS.</p>
      <p className="det">Review and approve the file note, then add it to the system you already use. No rewriting the meeting into a second place.</p>
      </div>
      </article>
      <article className="tls">
      <span className="tls__n" aria-hidden="true"></span>
      <div className="tlc">
      <h3>Escalate</h3>
      <p className="lead">Only if it needs a lawyer.</p>
      <p className="det">With your permission, Verity sends the organised matter history, recordings, transcripts and documents to the lawyer you choose.</p>
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
      <article className="card card--violet"><h3>Underperformance</h3><p>“Someone is underperforming. How do I manage it fairly and fast?”</p><div className="tags"><span>OKRs / KPIs</span><span>Meeting scripts</span><span>Performance improvement plan</span></div></article>
      <article className="card card--lilac"><h3>Sick leave &amp; absence</h3><p>“His sickness absences are becoming a pattern. What can I actually do?”</p><div className="tags"><span>Risk checks</span><span>Letter to GP</span><span>Questions to ask</span><span>Document trail</span></div></article>
      <article className="card card--cream"><h3>Reasonable adjustments</h3><p>“How do we support this person and protect the business?”</p><div className="tags"><span>Options review</span><span>Consultation plan</span><span>Decision framework</span></div></article>
      <article className="card card--clay"><h3>Redundancy &amp; restructure</h3><p>“We may need to restructure. Build the process with me.”</p><div className="tags"><span>Business case</span><span>Selection criteria</span><span>Letters &amp; scripts</span></div></article>
      <article className="card card--ink"><h3>Conduct &amp; complaints</h3><p>“A complaint has landed. What happens in the first 24 hours?”</p><div className="tags"><span>Triage plan</span><span>Fair process</span><span>Investigation pack</span></div></article>
      <article className="card card--bone"><h3>Everyday people calls</h3><p>“Can I say this? Is this fair? What should I document?”</p><div className="tags"><span>Clear answer</span><span>Conversation notes</span><span>Next-step checklist</span></div></article>
      </div>
      </div>
            </div>
      </div>
</section>
      <section className="sec sec--cream light" id="library">
      <div className="wrap">
      <div className="libx" data-r="">
      <div>
      <h2>The People Problems Library. <em>Free, and actually usable.</em></h2>
      <p>Scripts, checklists, templates and letters for the situations Australian managers get handed with no warning, plus everything we write about handling them properly. It opens alongside early access.</p>
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
      <section className="sec sec--bone light" id="trust">
      <div className="wrap">
      <div className="head">
      <div>
      <h2 className="d2" data-r="">A calm voice, backed by <em>serious HR judgement.</em></h2>
      <p className="body-l" data-r="">Verity is warm with people and rigorous with process. Her guidance is shaped by real senior HR and employee-relations judgement, with Australian employment-law context throughout. </p>
      </div>
      </div>
      <div className="lawy" data-r="">
      <div className="lawy__s">
      <span className="lab">What she checks before she answers</span>
      <h3>The questions a senior HR person would ask you first.</h3>
      <ul>
      <li>What actually happened, separated from what is assumed or inferred</li>
      <li>Whether this sits under an award, an agreement or the contract, and which one</li>
      <li>The timeline, and what is already documented rather than remembered</li>
      <li>Whether health, performance and conduct are being handled as one issue when they are three</li>
      <li>What a fair process requires at this point, not at the end</li>
      </ul>
      </div>
      <div className="lawy__s">
      <span className="lab">What she will not do</span>
      <h3>The guardrails matter more than the answers.</h3>
      <ul>
      <li>Guess when a fact is missing. She asks you for it</li>
      <li>Give legal advice. She tells you when you need it and hands over the file</li>
      <li>Record a conversation without everyone knowing and agreeing</li>
      <li>Hand you an answer without the script, the questions and the documents that follow it</li>
      <li>Pretend a matter is simple when it is not</li>
      </ul>
      </div>
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
      <h2 className="d2" data-r="" style={{marginTop:'24px'}}>Not global advice with <em>“Australia” pasted on top.</em></h2>
      <p className="body-l" data-r="" style={{marginTop:'26px'}}>Verity is being built for the way Australian businesses actually manage people: Fair Work context, local workplace realities and the judgement to know when an issue needs specialist advice.</p>
      <div style={{marginTop:'38px'}} data-r=""><a className="cta cta--ghost" href="#waitlist">Get Australian early access ↗</a></div>
      </div>
      </div>
      </section>
      <section className="sec dark" id="pricing">
      <div className="wrap">
      <div className="head">
      <div>
      <h2 className="d2" data-r="">One senior HR brain. <em>Priced like software, not like a consultant.</em></h2>
      <p className="body-l" data-r="">Three tiers. No hours, no retainer, no day rate. We are setting the numbers with our early access group before launch, so what follows is the shape of the model rather than a price list.</p>
      </div>
      </div>
      <div className="tiers">
      <div className="tier" data-r="">
      <span className="lab">Starter</span>
      <h3>For the business with no HR.</h3>
      <p className="tier__who">A founder or manager handling people problems alone, usually at 10pm on a Sunday.</p>
      <div className="tier__price"><b>Set at launch</b><span>monthly</span></div>
      <ul><li>Ask Verity anything, 24 hours a day</li><li>Diagnosis, risk read and the next three steps</li><li>Scripts for the conversation you are dreading</li><li>Letters, file notes and checklists you can send today</li></ul>
      <a className="cta cta--ghost" href="#waitlist">Join the waitlist ↗</a>
      </div>
      <div className="tier tier--mid" data-r="">
      <span className="lab">In the room</span>
      <h3>For the manager who has to run the meeting.</h3>
      <p className="tier__who">Everything in Starter, plus Verity sits in the conversation itself.</p>
      <div className="tier__price"><b>Set at launch</b><span>monthly</span></div>
      <ul><li>Verity joins the meeting with consent</li><li>What to say next, and what not to say, live</li><li>Recording, transcript and a defensible record</li><li>Outcome documents drafted from what was actually said</li><li>Full matter history, first question to close</li></ul>
      <a className="cta cta--ghost" href="#waitlist">Join the waitlist ↗</a>
      </div>
      <div className="tier" data-r="">
      <span className="lab">Scale</span>
      <h3>For HR teams and multi-site operators.</h3>
      <p className="tier__who">Everything in the room, plus the plumbing, the permissions and the reporting.</p>
      <div className="tier__price"><b>Talk to us</b><span>annual</span></div>
      <ul><li>HRIS and payroll integrations</li><li>Roles, permissions and matter-level access control</li><li>Panel lawyer referral with the full file attached</li><li>Reporting across sites, managers and matter types</li><li>Onboarding and rollout support for your managers</li></ul>
      <a className="cta cta--ghost" href="#waitlist">Join the waitlist ↗</a>
      </div>
      </div>
      <p className="pricenote" data-r="">We are not publishing numbers we have not committed to. Early access members see the tiers before anyone else and have a say in where the lines fall.</p>
      </div>
      </section>
      <section className="sec sec--bone light" id="integrations" style={{paddingBlock:'clamp(58px,8.5vh,120px)'}}>
      <div className="wrap">
      <div className="head">
      <div>
      <h2 className="d2" data-r="">Verity is not another system <em>you have to move into.</em></h2>
      <div>
      <p className="body-l" data-r="">She works the employee matter itself, then hands you the approved record to put wherever you already keep it. She is not asking you to migrate, to run a second system in parallel, or to enter the same thing twice.</p>
      <p className="intg__n" data-r=""><i aria-hidden="true"></i>Direct integrations are on the roadmap. We will name platforms once each one is built and agreed, not before.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="sec dark" id="lawyers">
      <div className="wrap">
      <div className="head">
      <div>
      <h2 className="d2" data-r="">Most people problems never need a lawyer. <em>Some do.</em></h2>
      <p className="body-l" data-r="">Verity handles the matter from the first question to the filed record. When something crosses the line into legal risk, the whole file goes to a lawyer on the Verity panel: chats, timeline, recordings, transcripts and every document, with your permission. Nothing is reconstructed from memory and nothing is billed twice.</p>
      </div>
      </div>
      <div className="lawy" data-r="">
      <div className="lawy__s">
      <span className="lab">For the business</span>
      <h3>You pay for advice, not for someone to work out what happened.</h3>
      <ul>
      <li>The matter arrives organised, dated and evidenced</li>
      <li>You choose the firm. Verity sends the file, you keep control</li>
      <li>Panel rates negotiated for Ask Verity customers</li>
      <li>No retainer, no minimum, no relationship you did not ask for</li>
      </ul>
      <a className="cta cta--ghost" href="#waitlist">Join the waitlist ↗</a>
      </div>
      <div className="lawy__s">
      <span className="lab">For the firm</span>
      <h3>Referred employment work that arrives ready to advise on.</h3>
      <ul>
      <li>Australian SME matters, referred at the point the client decides they need you</li>
      <li>Full history, transcripts and documents on arrival</li>
      <li>Scope and quote on facts, not on a phone call and a guess</li>
      <li>Set your own panel rate. No listing fee</li>
      </ul>
      <a className="cta" href="#lawyers">Apply to join the panel ↗</a>
      </div>
      </div>
      </div>
      </section>
      <section className="sec sec--cream light" id="faq">
      <div className="wrap">
      <div className="head">
      <div>
      <h2 className="d2" data-r="">Before you ask Verity anything.</h2>
      </div>
      </div>
      <div className="faq" data-r="">
      <details open={true}><summary><span>What exactly is Ask Verity?</span><i aria-hidden="true">+</i></summary><p>Ask Verity is a 24/7 AI HR manager for Australian businesses and busy HR teams. She helps you diagnose employee matters, joins and records meetings with consent, and produces the practical HR work needed to act.</p></details>
      <details><summary><span>Is Verity just another AI chatbot?</span><i aria-hidden="true">+</i></summary><p>No. A generic chatbot gives you an answer and stops. Verity keeps the complete employee matter in context, understands the meetings, identifies risk and creates usable plans, scripts, letters, checklists and decision records.</p></details>
      <details><summary><span>Who is Verity for?</span><i aria-hidden="true">+</i></summary><p>Verity is designed for Australian SMEs that need senior HR judgement without another full-time hire, and for larger, busy HR teams that need reliable support on live employee matters.</p></details>
      <details><summary><span>Is Verity an HRIS?</span><i aria-hidden="true">+</i></summary><p>No. Your HRIS stores and administers employee information. Verity helps you handle the employee matter itself, then hands the approved record over for you to add to your chosen HRIS.</p></details>
      <details><summary><span>What does Verity do during a meeting?</span><i aria-hidden="true">+</i></summary><p>With everyone’s consent, Verity records and transcribes one-on-ones, underperformance meetings, difficult conversations and complex investigations, and gives real-time prompts about what to ask or clarify.</p></details>
      <details><summary><span>What happens when a matter needs a lawyer?</span><i aria-hidden="true">+</i></summary><p>You can bring a lawyer you choose into the matter through Verity. With your permission, the lawyer receives the organised history, recordings, transcripts and documents.</p></details>
      <details><summary><span>Can Verity replace an HR manager?</span><i aria-hidden="true">+</i></summary><p>Verity is designed to give businesses much of the judgement, structure and practical output they would normally seek from senior HR. Some matters will still need a human specialist or lawyer, and Verity is designed to recognise when escalation is the right next step.</p></details>
      <details><summary><span>Is Verity compliant with Australian employment law?</span><i aria-hidden="true">+</i></summary><p>Verity is being developed with Australian employment-law context, current-source checks, expert legal oversight and clear escalation guardrails. She provides HR decision support and is not a law firm or a substitute for legal advice where legal advice is required.</p></details>
      <details><summary><span>What will Ask Verity cost?</span><i aria-hidden="true">+</i></summary><p>Pricing is being finalised now and will be published before early access opens. The intent is straightforward: a simple subscription that costs a fraction of adding another senior HR hire. Join the waitlist and you will see the numbers before anyone else.</p></details>
      <details><summary><span>When does early access open?</span><i aria-hidden="true">+</i></summary><p>The first Australian early-access release is planned for September 2026. Join the waitlist to hear when places open.</p></details>
      </div>
      </div>
      </section>
      <section className="sec dark" id="waitlist">
      <div className="wrap join">
      <div data-r="">
      <p className="lab">Australian early access · September 2026</p>
      <h2 className="d2" style={{marginTop:'24px'}}>Never face a difficult <em>people decision alone.</em></h2>
      <p className="body-l" style={{marginTop:'26px',color:'var(--t-light-2)'}}>Get 24/7 senior HR judgement for your growing business or busy HR team, at a fraction of the cost of adding another senior hire.</p>
      </div>
      <form className="form" id="wl" data-r="" noValidate>
      <p className="fh"><b>Join the early-access list</b><span>Australian businesses and HR teams. Places are limited at launch.</span></p>
      <div className="f"><label className="lab" htmlFor="fname">Your name</label>
      <input id="fname" name="name" type="text" autoComplete="name" placeholder="Claire Alexander" required={true} /></div>
      <div className="f"><label className="lab" htmlFor="email">Work email</label>
      <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com.au" required={true} /></div>
      <div className="f"><label className="lab" htmlFor="size">Team size</label>
      <select id="size" name="size" required={true} defaultValue="">
      <option value="" disabled>Select your team size</option>
      <option>1–14 people</option><option>15–49 people</option><option>50–199 people</option>
      <option>200–499 people</option><option>500+ people</option>
      </select></div>
      <div className="hp" aria-hidden="true"><label htmlFor="web">Website</label><input id="web" name="web" tabIndex={-1} autoComplete="off" /></div>
      <button className="cta" type="submit">Put Verity in my corner ↗</button>
      <p className="fine">Early-access updates only. No spam. Unsubscribe whenever you like.</p>
      </form>
      </div>
      </section>
      </main>
      <footer className="foot">
      <div className="foot__l">
      <span className="brand"><svg className="vmark" viewBox="0 0 28 28" aria-hidden="true"><defs><linearGradient id="vg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9179FF"/><stop offset=".52" stopColor="#7657FF"/><stop offset="1" stopColor="#4B2CD4"/></linearGradient></defs><rect width="28" height="28" rx="8.5" fill="url(#vg2)"/><path d="M8.2 9.6 L13.9 19.9 L20.1 7.2" fill="none" stroke="#fff" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/></svg><b>ASK VERITY</b></span>
      <span>Your 24/7 AI HR manager · Built for Australian businesses</span>
      <span>© 2026</span>
      </div>
      </footer>
      <Motion />
    </>
  );
}
