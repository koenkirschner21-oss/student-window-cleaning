# SEO Phase 1 — Verification & December Domain Launch

Companion to the Phase 1 implementation PR. No business-copy decisions are finalized here.

## How temporary indexing works

| Host | Indexable? | Mechanism |
| --- | --- | --- |
| `*.vercel.app` (including `student-window-cleaning.vercel.app`) | **No** | Shared `shouldIndexHostname()` drives both HTML `robots` (`generateMetadata` + request Host) and `X-Robots-Tag` (`src/proxy.ts`). Always noindex on vercel.app — before and after a custom domain is attached. |
| Configured public host while `site.url` is still a vercel.app URL | **No** | Same shared policy: temporary origin cannot index |
| Permanent custom domain **after** `site.url` is updated to that HTTPS origin | **Yes** | Request host matches configured public hostname → HTML + header both `index, follow` |
| Preview deployments | **No** | Existing Vercel SSO + platform `x-robots-tag: noindex`, plus app `*.vercel.app` policy |

HTML meta and `X-Robots-Tag` intentionally use the **same** helper so they cannot diverge for a given request host.

`VERCEL_ENV=production` is **not** used to decide indexing — production can still be the vercel.app host.

`robots.txt` continues to `Allow: /` so crawlers can fetch pages and observe `noindex`.

## Verify on the temporary host (today)

1. Open https://student-window-cleaning.vercel.app/
2. View source / Elements:
   - `<meta name="robots" content="noindex, follow">` (or equivalent)
   - Homepage `<link rel="canonical" href="https://student-window-cleaning.vercel.app/">`
   - JSON-LD `LocalBusiness` / `Organization` present; **no** `aggregateRating`
3. Response headers:
   ```bash
   curl -sI https://student-window-cleaning.vercel.app/ | rg -i 'x-robots|HTTP/'
   ```
   Expect `x-robots-tag: noindex, follow`
4. Sitemap must **not** list `/privacy` or `/terms`:
   ```bash
   curl -sL https://student-window-cleaning.vercel.app/sitemap.xml
   ```
5. robots.txt still allows crawl + points sitemap at `site.url`:
   ```bash
   curl -sL https://student-window-cleaning.vercel.app/robots.txt
   ```
6. Unknown path returns HTTP 404 with noindex:
   ```bash
   curl -sI https://student-window-cleaning.vercel.app/this-page-does-not-exist
   ```

## Enable the permanent domain safely (December)

1. Attach the custom domain in Vercel (HTTPS, choose apex vs `www` canonical).
2. Update **one** config value in `src/lib/site.ts`:
   ```ts
   url: "https://YOUR-PERMANENT-DOMAIN",
   ```
3. Deploy to production.
4. Confirm custom domain HTML robots = `index, follow` and `X-Robots-Tag: index, follow`.
5. Confirm `student-window-cleaning.vercel.app` (and any other `*.vercel.app` aliases) still return `noindex, follow`.
6. Submit the new sitemap in Search Console on the **domain** (or URL-prefix) property for the permanent host.
7. Add 301 redirects from the former Wix URLs and, if desired, from the vercel.app host to the permanent domain.
8. Update Google Business Profile + Facebook website fields to the permanent URL.

## Outstanding launch decisions (not changed in Phase 1)

- Cleaning-plan discount amounts (`$50` / `$100`)
- Gutter-guard product specifications / micro-mesh claims
- Review rating totals vs GBP live counts
- Final Privacy / Terms legal copy
- Production quote email (Resend) configuration
- Permanent domain name choice
- Whether to 301 the vercel.app host after launch
