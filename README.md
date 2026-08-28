# Ask Verity — website

Next.js 16 (App Router). Static, no server dependencies.

## Run locally
```
npm install
npm run dev      # http://localhost:3000
```

## Build
```
npm run build
npm start
```

## Structure
| File | What it is |
|---|---|
| `app/page.tsx` | The whole page as JSX. Every section is here in reading order: hero, statement, workflow, meetings + timeline, use cases, library, trust, Australia, integrations, lawyer panel, FAQ, waitlist, footer. |
| `app/globals.css` | The entire design system. Tokens at the top (`:root`), then components in the same order as the page. |
| `app/motion.tsx` | Client component. All motion: the pinned hero, the typing, the meeting console, the scroll-driven timeline spine, the use-case rail, the globe, the forms. Plain DOM on purpose — it drives markup React has already rendered. |
| `app/layout.tsx` | `<head>`, metadata, fonts. Currently `robots: noindex, nofollow` for pre-launch. |

## Before launch
1. **Remove the noindex.** `app/layout.tsx` → `robots: { index: false, follow: false }`. Delete that line when you want Google to see it.
2. **Set the Resend environment variables.** Both forms now POST to `app/api/waitlist/route.ts`.
   Until `RESEND_API_KEY` is set the route answers 503 and the form shows "Early-access signups are
   being connected." See `.env.example` for the four variables. Set them for Preview as well as
   Production, or preview signups will not capture.
   Re-run the contract test after any change: `npm run build && npx next start -p 3100`, then `npm run test:waitlist`.
3. **Check the Fair Work dates.** The September 2026 early-access date appears in the FAQ and the waitlist eyebrow.
