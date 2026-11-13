import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "/",
  "/services",
  "/services/exterior-window-cleaning",
  "/services/interior-window-cleaning",
  "/services/gutter-cleaning",
  "/services/gutter-guards",
  "/cleaning-plans",
  "/about",
  "/our-work",
  "/quote",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
