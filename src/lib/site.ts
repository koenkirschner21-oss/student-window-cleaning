export const site = {
  name: "Student Window Cleaning",
  shortName: "SWC",
  tagline: "Student run. Professionally done.",
  description:
    "Student Window Cleaning — a student-run window and exterior cleaning service. Get a free quote for your home.",
  url: "https://student-window-cleaning.vercel.app",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/cleaning-plans", label: "Cleaning Plans" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
] as const;

export const serviceOptions = [
  { id: "exterior", label: "Exterior" },
  { id: "interior-exterior", label: "Interior & Exterior" },
  { id: "gutter-cleaning", label: "Gutter" },
] as const;

/** Plan-aligned frequency choices shown in the quote form. */
export const quoteFrequencyOptions = [
  { id: "one-time", label: "One-Time / Basic", detail: "1 visit" },
  { id: "two-visit", label: "Best Value", detail: "2 visits" },
  { id: "three-visit", label: "Premium", detail: "3 visits" },
] as const;

export const frequencyOptions = [
  ...quoteFrequencyOptions.map(({ id, label, detail }) => ({
    id,
    label: `${label} · ${detail}`,
  })),
  { id: "monthly", label: "Monthly" },
  { id: "bi-monthly", label: "Every 2 months" },
  { id: "quarterly", label: "Quarterly" },
  { id: "seasonal", label: "Seasonal" },
] as const;

export const propertyTypeOptions = [
  { id: "detached-semi", label: "Detached / semi" },
  { id: "townhouse", label: "Townhouse" },
  { id: "commercial", label: "Commercial" },
  { id: "other", label: "Other" },
] as const;

export type ServiceId = (typeof serviceOptions)[number]["id"];
export type FrequencyId = (typeof frequencyOptions)[number]["id"];
export type PropertyTypeId = (typeof propertyTypeOptions)[number]["id"];

export function isFrequencyId(
  value: string | undefined | null,
): value is FrequencyId {
  return !!value && frequencyOptions.some((option) => option.id === value);
}
