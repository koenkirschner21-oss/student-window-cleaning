import type { Metadata } from "next";
import {
  contact,
  googleBusiness,
  serviceAreas,
  site,
  socialLinks,
} from "@/lib/site";

/**
 * Central SEO helpers for canonical URLs, hostname-aware indexing,
 * Open Graph defaults, and verified JSON-LD (no invented NAP/reviews).
 *
 * Launch note: keep `site.url` as the single public origin. While it points at
 * `*.vercel.app`, nothing is indexable. After the permanent domain is set on
 * `site.url`, only that hostname (and optional www twin) may index; every
 * `*.vercel.app` host stays noindex forever.
 */

/** Default social / OG image — authentic branded worker photo (not a group stock). */
export const defaultOgImage = {
  url: "/home/quote-panel-worker.webp",
  width: 1200,
  height: 800,
  alt: "Student Window Cleaning team member cleaning a residential window",
} as const;

export const brandLogoOgImage = {
  url: "/brand/logos/primary-horizontal-navy-on-white.png",
  width: 2172,
  height: 724,
  alt: site.name,
} as const;

/** Normalize a Host / X-Forwarded-Host value (strip port + lowercase). */
export function normalizeHostname(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const first = raw.split(",")[0]?.trim() ?? "";
  if (!first) return null;
  return first.replace(/:\d+$/, "").toLowerCase();
}

/** Hostname configured as the public canonical site (from `site.url`). */
export function getConfiguredPublicHostname(): string {
  return new URL(site.url).hostname.toLowerCase();
}

/**
 * Whether this request host may be indexed.
 * - Any `*.vercel.app` host → never
 * - Configured public host still on vercel.app → never (pre-launch)
 * - Otherwise only the configured public hostname (www-flexible) → yes
 */
export function shouldIndexHostname(rawHost: string | null | undefined): boolean {
  const host = normalizeHostname(rawHost);
  if (!host) return false;
  if (host.endsWith(".vercel.app")) return false;

  const publicHost = getConfiguredPublicHostname();
  if (publicHost.endsWith(".vercel.app")) return false;

  const stripWww = (h: string) => (h.startsWith("www.") ? h.slice(4) : h);
  return stripWww(host) === stripWww(publicHost);
}

export function robotsForHostname(
  rawHost: string | null | undefined,
): Metadata["robots"] {
  const index = shouldIndexHostname(rawHost);
  return {
    index,
    follow: true,
    googleBot: {
      index,
      follow: true,
    },
  };
}

/** Absolute URL on the configured public origin. */
export function absoluteUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbJsonLd(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * LocalBusiness + Organization JSON-LD using only verified public fields.
 * No street address, hours, prices, aggregateRating, or reviews.
 */
export function buildOrganizationLocalBusinessJsonLd() {
  const sameAs = [socialLinks.facebook, googleBusiness.reviewsListingUrl].filter(
    (url): url is string => Boolean(url),
  );

  const shared = {
    name: site.name,
    alternateName: googleBusiness.displayName,
    url: absoluteUrl("/"),
    telephone: contact.phoneDisplay,
    email: contact.email,
    description: site.description,
    image: absoluteUrl(brandLogoOgImage.url),
    areaServed: serviceAreas.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    ...(sameAs.length ? { sameAs } : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${absoluteUrl("/")}/#organization`,
        ...shared,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${absoluteUrl("/")}/#localbusiness`,
        ...shared,
        parentOrganization: {
          "@id": `${absoluteUrl("/")}/#organization`,
        },
      },
    ],
  };
}

export type ServiceJsonLdInput = {
  name: string;
  description: string;
  path: string;
  /** Optional service-type label, e.g. "Exterior window cleaning". */
  serviceType?: string;
};

/** Lightweight Service node tied to the LocalBusiness — no invented offers. */
export function buildServiceJsonLd(input: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    ...(input.serviceType ? { serviceType: input.serviceType } : {}),
    provider: {
      "@id": `${absoluteUrl("/")}/#localbusiness`,
    },
    areaServed: serviceAreas.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
  };
}

/** Shared Open Graph / Twitter image list for page metadata. */
export function socialImages(
  image: { url: string; width?: number; height?: number; alt?: string } = defaultOgImage,
) {
  return [
    {
      url: image.url,
      width: image.width,
      height: image.height,
      alt: image.alt,
    },
  ];
}
