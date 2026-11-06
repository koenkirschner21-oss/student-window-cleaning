# Student Window Cleaning

Marketing website for Student Window Cleaning — student-run window and exterior cleaning.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- ESLint
- npm
- Typography: Manrope (headings), DM Sans (body)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Project layout

- `src/app/` — App Router pages, SEO (`robots.ts`, `sitemap.ts`)
- `src/components/` — layout, homepage sections, quote form, UI primitives
- `src/lib/site.ts` — shared nav + form options
- `public/brand/` — official logo assets (do not redraw)

Import alias: `@/*` → `src/*`

## Status

Phase 1: design foundation, shared chrome, full homepage, reusable quote form (frontend only), and scaffold routes for Services, Cleaning Plans, About, Our Work, and Quote.

Quote submissions are not connected to a backend yet — the form shows an honest non-submitting state.

Production: [https://student-window-cleaning.vercel.app](https://student-window-cleaning.vercel.app)
