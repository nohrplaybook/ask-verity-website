# Ask Verity

The public launch website for Ask Verity, an AI HR manager for Australian
founders, business owners and managers.

## Technology

- Next.js App Router
- React and TypeScript
- Vercel hosting
- Resend Contacts, Segments and email delivery

## Local development

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:3000`.

## Production checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Resend setup

Create these Contact Properties in Resend before accepting live signups:

- `company_size` — string
- `signup_source` — string
- `signup_date` — string

Create an `Australian Early Access` Segment and add the following values to
Vercel:

- `RESEND_API_KEY`
- `RESEND_WAITLIST_SEGMENT_ID`
- `RESEND_FROM_EMAIL`
- `WAITLIST_NOTIFY_EMAIL` (optional)

The waitlist route creates or updates the contact, retains the signup details,
adds the contact to the early-access Segment and sends the branded confirmation
email to new contacts.

## Content routes

- `/` — Human Relief landing page
- `/people-problems` — People Problems Library
- `/robots.txt` — search and AI crawler access
- `/sitemap.xml` — canonical public routes
- `/llms.txt` — machine-readable Ask Verity summary

The three concept routes remain available for private design reference and are
marked `noindex`.

## Content editing

Website wording can be reviewed in the shared Ask Verity Google Doc. Once
changes are approved, update the corresponding page copy and create a Vercel
preview before promoting it to production.

