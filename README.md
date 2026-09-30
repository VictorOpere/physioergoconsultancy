# PhysioErgo Integrative Consultancy Ltd

Marketing site for PhysioErgo Integrative Consultancy Ltd — *Wellness in Motion* — a
Nairobi-based firm advancing workplace health, safety and performance through
integrated ergonomics and physiotherapy solutions.

## Stack

- **Next.js 16** (App Router, Turbopack) with **React 19**
- **Tailwind CSS v4** — design tokens declared in `@theme` inside `app/globals.css`
- **TypeScript**
- **Sofia Pro** self-hosted via `next/font/local`
- No animation library: scroll reveals use `IntersectionObserver` plus CSS transitions

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Project structure

```
app/                  Routes, global styles, fonts, SEO files
  fonts/              Sofia Pro WOFF2 (400/500/600/700)
  og/                 Subset Sofia Pro OTFs used only by the OG image
components/
  layout/             Navbar, MobileMenu, Footer, Logo
  sections/           Page sections composed by the routes
  ui/                 Primitives: Button, Section, SectionHeading, Reveal, Media…
lib/content.ts        Single source of truth for all copy, contact details and images
```

### Routes

`/` · `/about` · `/services` · `/approach` · `/workplace-wellness` · `/contact`

## Editing content

All copy, contact details, service definitions and image references live in
[`lib/content.ts`](lib/content.ts). Changing a phone number or a service
description there updates every page that uses it.

### Images

Photography is currently served from Unsplash and allow-listed in
[`next.config.ts`](next.config.ts). To swap in PhysioErgo's own photography,
replace the entries in the `images` object in `lib/content.ts` and update
`remotePatterns` (or drop the files into `public/` and reference them by path).

### Fonts

Sofia Pro is a licensed commercial typeface. The WOFF2 files in `app/fonts/`
were converted from the licence holder's OTF files; make sure the deployed site
is covered by an appropriate web font licence.

## Contact form

The consultation form in `components/sections/ContactForm.tsx` is client-side
only — there is no backend. It validates input, then hands the completed enquiry
to the visitor's mail client addressed to `info@physioergoconsultancy.org`. To
send server-side instead, add a Route Handler and post to it from `handleSubmit`.

## Accessibility & motion

Semantic landmarks, one `h1` per page, a skip link, visible focus rings and
AA-compliant contrast throughout. All motion is disabled under
`prefers-reduced-motion`, and reveals fall back to visible without JavaScript.

---

Designed & developed by Krazzy Cloud Computing.
