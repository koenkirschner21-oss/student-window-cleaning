import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * Allow crawling so bots can observe hostname-aware noindex meta / X-Robots-Tag.
 * Do not Disallow / as a substitute for noindex on the temporary Vercel host.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
