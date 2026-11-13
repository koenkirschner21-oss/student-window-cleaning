import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * Indexable marketing routes only.
 * Intentionally omit /privacy and /terms (noindex drafts).
 * Do not use `new Date()` as lastmod — it implies false freshness.
 */
const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/services/exterior-window-cleaning",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/interior-window-cleaning",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/gutter-cleaning",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/gutter-guards",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/cleaning-plans",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/our-work", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/quote", priority: 0.9, changeFrequency: "monthly" as const },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
