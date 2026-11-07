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
  /** Educational Facebook Reel URL for the About page click-to-load player. */
  facebookReel: null as string | null,
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
 * Window cleaning plan choices for the quote form.
 * Discount / priority copy is display-only and easy to update — business terms TBD.
 * Do not apply window-plan discounts to gutter-only requests.
 */
export const quotePlanOptions = [
  {
    id: "one-time",
    name: "Basic",
    subtitle: "One-Time Cleaning",
    visits: "1 visit",
    benefits: ["Standard individually quoted price"],
    discountLabel: null as string | null,
    recommended: false,
  },
  {
    id: "two-visit",
    name: "Best Value",
    subtitle: "Twice-Yearly Cleaning",
    visits: "2 visits",
    benefits: [
      "$50 off each qualifying cleaning visit",
      "Priority scheduling",
    ],
    discountLabel: "$50 off each qualifying visit",
    recommended: true,
  },
  {
    id: "three-visit",
    name: "Premium",
    subtitle: "Three Times Yearly",
    visits: "3 visits",
    benefits: [
      "$100 off each qualifying cleaning visit",
      "Priority scheduling",
    ],
    discountLabel: "$100 off each qualifying visit",
    recommended: false,
  },
] as const;

/** @deprecated Prefer quotePlanOptions — kept for frequency id compatibility. */
export const quoteFrequencyOptions = quotePlanOptions.map((plan) => ({
  id: plan.id,
  label: plan.name,
  detail: plan.visits,
}));

export const frequencyOptions = [
  ...quotePlanOptions.map((plan) => ({
    id: plan.id,
    label: `${plan.name} · ${plan.visits}`,
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

/** Set when a Places/autocomplete provider is configured for the quote address field. */
export const addressAutocomplete = {
  provider: null as "google-places" | null,
  /** Public browser key env name — never hardcode secrets. */
  apiKeyEnv: "NEXT_PUBLIC_GOOGLE_PLACES_API_KEY",
} as const;

export type ServiceId = (typeof serviceOptions)[number]["id"];
export type FrequencyId = (typeof frequencyOptions)[number]["id"];
export type PropertyTypeId = (typeof propertyTypeOptions)[number]["id"];

export function isFrequencyId(
  value: string | undefined | null,
): value is FrequencyId {
  return !!value && frequencyOptions.some((option) => option.id === value);
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
