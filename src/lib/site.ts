export const site = {
  name: "Student Window Cleaning",
  shortName: "SWC",
  tagline: "Student run. Professionally done.",
  description:
    "Student Window Cleaning — a student-run window and exterior cleaning service. Get a free quote for your home.",
  url: "https://student-window-cleaning.vercel.app",
} as const;

/** Verified contact details — keep as the single source of truth for the footer. */
export const contact = {
  phoneDisplay: "905-550-0400",
  phoneHref: "tel:+19055500400",
  email: "Studentwindowcleaning@outlook.com",
  emailHref: "mailto:Studentwindowcleaning@outlook.com",
} as const;

export const serviceAreas = [
  "Whitby",
  "Ajax",
  "Oshawa",
  "Pickering",
  "Bowmanville",
  "Durham Region",
] as const;

/**
 * Verified social destinations only. Leave null until a URL is confirmed —
 * never invent Instagram / TikTok / Reel links.
 */
export const socialLinks = {
  facebook:
    "https://www.facebook.com/profile.php?id=100095625130012" as string | null,
  instagram: null as string | null,
  /**
   * Canonical Facebook Reel for About “Behind the Clean”.
   * Resolved from https://www.facebook.com/share/r/18tUKafgk3/
   */
  facebookReel: "https://www.facebook.com/reel/1476745103290363" as string | null,
  /** Original share URL — reliable “Watch on Facebook” fallback. */
  facebookReelShare:
    "https://www.facebook.com/share/r/18tUKafgk3/" as string | null,
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/cleaning-plans", label: "Cleaning Plans" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
] as const;

export const exploreLinks = [
  { href: "/", label: "Home" },
  ...navLinks,
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;

export const serviceOptions = [
  { id: "exterior", label: "Exterior" },
  { id: "interior-exterior", label: "Interior & Exterior" },
  { id: "gutter-cleaning", label: "Gutter" },
] as const;

/**
 * Window cleaning plan choices for the quote form (single source of truth).
 * Display-only savings copy — business terms TBD.
 * Do not apply window-plan discounts to gutter-only requests.
 */
export const quotePlanOptions = [
  {
    id: "one-time",
    name: "Basic",
    subtitle: "One-Time Cleaning",
    checks: ["1 cleaning visit", "No ongoing commitment"],
    savingsLabel: "Standard Quote",
    savingsDetail: null as string | null,
    recommended: false,
  },
  {
    id: "two-visit",
    name: "Best Value",
    subtitle: "Twice-Yearly Cleaning",
    checks: ["2 visits", "Priority scheduling"],
    savingsLabel: "$50 OFF",
    savingsDetail: "Each visit",
    recommended: true,
  },
  {
    id: "three-visit",
    name: "Premium",
    subtitle: "Three Times Yearly",
    checks: ["3 visits", "Priority scheduling"],
    savingsLabel: "$100 OFF",
    savingsDetail: "Each visit",
    recommended: false,
  },
] as const;

/** @deprecated Prefer quotePlanOptions — kept for frequency id compatibility. */
export const quoteFrequencyOptions = quotePlanOptions.map((plan) => ({
  id: plan.id,
  label: plan.name,
  detail: plan.subtitle,
}));

export const frequencyOptions = [
  ...quotePlanOptions.map((plan) => ({
    id: plan.id,
    label: `${plan.name} · ${plan.subtitle}`,
  })),
  { id: "monthly", label: "Monthly" },
  { id: "bi-monthly", label: "Every 2 months" },
  { id: "quarterly", label: "Quarterly" },
  { id: "seasonal", label: "Seasonal" },
] as const;

export const propertyTypeOptions = [
  { id: "detached-semi", label: "Detached/Semi-Detached" },
  { id: "townhouse", label: "Townhouse" },
  { id: "commercial", label: "Commercial" },
  { id: "other", label: "Other" },
] as const;

/**
 * Verified Google Business Profile destinations (from prior Wix / GBP shortlink).
 * Keep write vs listing separate so testimonial cards never open the review form.
 */
export const googleBusiness = {
  /** Public profile / reviews listing (read testimonials). */
  reviewsListingUrl: "https://g.page/r/CXc6CEBOnm4MEBM" as string | null,
  /** Write-a-review form only — use for “Leave a Google Review”. */
  leaveReviewUrl: "https://g.page/r/CXc6CEBOnm4MEBM/review" as string | null,
  /**
   * Aggregate numerical rating / review count — leave null until verified in project data.
   * Do not invent a 5.0 figure from marketing copy alone.
   */
  aggregateRating: null as number | null,
  reviewCount: null as number | null,
} as const;

/**
 * Address autocomplete config.
 * Activates Google Places when `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` is set at build time.
 * Never hardcode API keys.
 */
export const addressAutocomplete = {
  /** Public browser key env name. */
  apiKeyEnv: "NEXT_PUBLIC_GOOGLE_PLACES_API_KEY" as const,
  /** Bias predictions toward Whitby / Durham Region, Ontario. */
  bias: {
    country: "ca",
    /** Approximate Whitby, ON center for location bias. */
    lat: 43.8975,
    lng: -78.9429,
    radiusMeters: 45000,
  },
} as const;

/**
 * Quote trust-band residential photo.
 * Approved landscape source (privacy-treated address above garage).
 * Prefer object-cover in the shorter/wider trust band — no AI enhancement.
 * Not claimed as a completed Student Window Cleaning job.
 */
export const quoteTrustPhoto: {
  src: string;
  alt: string;
} | null = {
  src: "/quote/residential-property.webp",
  alt: "Landscape view of a modern two-story home with white-trimmed windows, garage, and driveway",
};

export type ServiceId = (typeof serviceOptions)[number]["id"];
export type FrequencyId = (typeof frequencyOptions)[number]["id"];
export type PropertyTypeId = (typeof propertyTypeOptions)[number]["id"];
export type QuotePlanId = (typeof quotePlanOptions)[number]["id"];

export function isFrequencyId(
  value: string | undefined | null,
): value is FrequencyId {
  return !!value && frequencyOptions.some((option) => option.id === value);
}

export function isQuotePlanId(
  value: string | undefined | null,
): value is QuotePlanId {
  return !!value && quotePlanOptions.some((option) => option.id === value);
}

export function isServiceId(
  value: string | undefined | null,
): value is ServiceId {
  return !!value && serviceOptions.some((option) => option.id === value);
}

/** Build a quote URL with optional service / frequency preselection. */
export function quoteHref(options?: {
  service?: ServiceId;
  frequency?: FrequencyId;
}) {
  const params = new URLSearchParams();
  if (options?.service) params.set("service", options.service);
  if (options?.frequency) params.set("frequency", options.frequency);
  const query = params.toString();
  return query ? `/quote?${query}` : "/quote";
}
