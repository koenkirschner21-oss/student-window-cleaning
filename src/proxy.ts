import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { shouldIndexHostname } from "@/lib/seo";

/**
 * Hostname-aware indexing headers.
 * Do not use VERCEL_ENV=production as a proxy for the permanent domain —
 * production may still be served on *.vercel.app.
 */
export function proxy(request: NextRequest) {
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const indexable = shouldIndexHostname(host);

  const response = NextResponse.next();
  response.headers.set(
    "X-Robots-Tag",
    indexable ? "index, follow" : "noindex, follow",
  );
  return response;
}

export const config = {
  matcher: [
    /*
     * Apply to document routes; skip Next internals, API, and common static assets.
     * robots.txt / sitemap.xml still get the header so crawlers see host policy.
     */
    "/((?!_next/static|_next/image|api/|.*\\.(?:png|jpg|jpeg|webp|gif|svg|ico|woff2?)$).*)",
  ],
};
