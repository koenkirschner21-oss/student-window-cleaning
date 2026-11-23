# Student Window Cleaning

The website I built for the student-run exterior cleaning business I started in Whitby, Ontario. The goal was to make it easy for customers to understand the services, see real work and request a quote, while keeping the site straightforward for me to maintain as the business grows.

**[Visit the site](https://student-window-cleaning.vercel.app/)** · [Our work](https://student-window-cleaning.vercel.app/our-work) · [Technical SEO notes](docs/seo-phase1-launch-notes.md)

## Engineering decisions

- **A simple route structure.** Next.js App Router separates services, plans, the project gallery and the quote flow. Shared TypeScript data and reusable UI components keep navigation, service details and presentation consistent.
- **Validate leads on the server.** The [quote route](src/app/api/quote/route.ts) validates incoming requests before handing them to [delivery](src/lib/quote-delivery.ts). A configured production environment can deliver by Resend; local development can write test leads to ignored local storage. Production reports a delivery configuration error rather than claiming a quote was sent.
- **Separate deployment from indexing.** The temporary Vercel hostname is intentionally `noindex`. One [hostname policy](src/lib/seo.ts) drives both HTML metadata and the [HTTP header](src/proxy.ts). The site also includes sitemap and robots routes, canonical metadata, and LocalBusiness structured data.
- **Show the work, not just the services.** The [project gallery](src/lib/our-work.ts) uses structured project entries and WebP assets to show residential and commercial examples.

## Run locally

Built with Next.js, React, TypeScript and Tailwind CSS.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use fictional contact details when testing the quote form; without Resend configured, development submissions are written to the ignored `.data/` directory. For email delivery, configure `RESEND_API_KEY`, `QUOTE_NOTIFY_TO` and `QUOTE_NOTIFY_FROM` in the deployment environment, not in source control.

```bash
npm run lint
npm run build
```
