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
  { id: "exterior-windows", label: "Exterior windows" },
  { id: "interior-windows", label: "Interior windows" },
  { id: "screens", label: "Screens" },
  { id: "tracks-sills", label: "Tracks & sills" },
  { id: "gutter-cleaning", label: "Gutter cleaning" },
] as const;

export const frequencyOptions = [
  { id: "one-time", label: "One-time" },
  { id: "monthly", label: "Monthly" },
  { id: "bi-monthly", label: "Every 2 months" },
  { id: "quarterly", label: "Quarterly" },
  { id: "seasonal", label: "Seasonal" },
] as const;

export const propertyTypeOptions = [
  { id: "house", label: "House" },
  { id: "townhouse", label: "Townhouse" },
  { id: "condo-apartment", label: "Condo / apartment" },
  { id: "storefront", label: "Storefront / small commercial" },
  { id: "other", label: "Other" },
] as const;

export type ServiceId = (typeof serviceOptions)[number]["id"];
export type FrequencyId = (typeof frequencyOptions)[number]["id"];
export type PropertyTypeId = (typeof propertyTypeOptions)[number]["id"];
