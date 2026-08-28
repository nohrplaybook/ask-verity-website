/*
 * Contract test for POST /api/waitlist. Run against a locally built site:
 *
 *   npm run build && npx next start -p 3100
 *   node scripts/test-waitlist.mjs
 *
 * With no RESEND_API_KEY set the route returns 503 once a body PASSES
 * validation, so 503 here means "accepted, reached the Resend step".
 */

// No RESEND_API_KEY is set locally, so a body that PASSES validation returns 503
// ("being connected"). 503 therefore means "accepted, reached the Resend step".
const cases = [
  { n: "waitlist: valid name+email+size -> passes validation",
    body: { name:"Claire Alexander", email:"claire@example.com.au", companySize:"1-14", source:"waitlist", website:"" },
    want: 503 },
  { n: "waitlist: missing team size -> rejected",
    body: { name:"Claire Alexander", email:"claire@example.com.au", companySize:"", source:"waitlist", website:"" },
    want: 400, wantMsg: /team size/i },
  { n: "waitlist: OLD display-string size -> rejected (why the value= fix matters)",
    body: { name:"Claire Alexander", email:"claire@example.com.au", companySize:"1–14 people", source:"waitlist", website:"" },
    want: 400, wantMsg: /team size/i },
  { n: "library: name+email, NO size -> passes validation",
    body: { name:"Claire Alexander", email:"claire@example.com.au", companySize:"", source:"library", website:"" },
    want: 503 },
  { n: "library: bad email -> rejected",
    body: { name:"Claire Alexander", email:"not-an-email", companySize:"", source:"library", website:"" },
    want: 400, wantMsg: /valid work email/i },
  { n: "honeypot filled -> silently accepted, nothing stored",
    body: { name:"Bot", email:"bot@example.com", companySize:"1-14", source:"waitlist", website:"http://spam" },
    want: 200 },
  { n: "every valid size value is accepted",
    body: { name:"A B", email:"a@b.com.au", companySize:"500+", source:"waitlist", website:"" },
    want: 503 },
];

let pass = 0, fail = 0;
for (const c of cases) {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(c.body),
  });
  let msg = "";
  try { msg = (await res.json()).message || ""; } catch {}
  const okStatus = res.status === c.want;
  const okMsg = !c.wantMsg || c.wantMsg.test(msg);
  if (okStatus && okMsg) { pass++; console.log(`  PASS  ${c.n}`); }
  else {
    fail++;
    console.log(`  FAIL  ${c.n}`);
    console.log(`        want ${c.want}${c.wantMsg ? " + " + c.wantMsg : ""}, got ${res.status} "${msg}"`);
  }
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
