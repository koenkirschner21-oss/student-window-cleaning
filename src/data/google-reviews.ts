/**
 * Authentic Google review snapshot for Student Window Cleaning Whitby.
 * Manual, curated copy — not a live API. Do not invent quotes, names,
 * photos, dates, or direct-review URLs.
 */

export type GoogleReview = {
  /** Stable local id (presentation-independent). */
  id: string;
  /** Exact Google reviewer display name. */
  name: string;
  /** Exact review body (preserve punctuation / capitalization / newlines). */
  text: string;
  /** Star rating 1–5 from the source review. */
  rating: number;
  /** Optional authentic local profile image path under /public. */
  imageSrc?: string | null;
  /** Optional verified per-review Google URL (never invent). */
  directReviewUrl?: string | null;
};

export const googleReviews: readonly GoogleReview[] = [
  {
    id: "lindsey",
    name: "Lindsey",
    rating: 5,
    text: "Excellent window cleaning! Easy to work with, showed up when scheduled, and did a really solid job. Everything looked bright and streak-free afterward. Highly recommend.",
  },
  {
    id: "michelle-dsouza",
    name: "Michelle D'Souza",
    rating: 5,
    text: "FANTASTIC job and best price in town!!!! I don't think I have EVER had my windows sooooo clean!! Great job guys!! I will definitely have you back again!",
  },
  {
    id: "gavin-fregona",
    name: "Gavin Fregona",
    rating: 5,
    text: "Reliable and enthusiastic worker. He did a great job and my windows are sparkling clean. Highly recommend!!",
  },
  {
    id: "maureen-bennett",
    name: "maureen bennett",
    rating: 5,
    text: "I've had Josh do our windows since 2023.\nHe does a great job, inside and outside at very reasonable rates.\nYou would be very pleased if you hired him.",
  },
  {
    id: "jenny-campbell",
    name: "Jenny Campbell",
    rating: 5,
    text: "Great price and they did such a good job. I absolutely recommend 👌",
  },
  {
    id: "indina-sharma",
    name: "Indina Sharma",
    rating: 5,
    text: "Very professional and they did an amazing job. Will definitely recommend this service to others!",
  },
  {
    id: "judy-mckenzie",
    name: "Judy Mckenzie",
    rating: 5,
    text: "Koen, was courteous,very professional and respectful of my property. He did an excellent job",
  },
  {
    id: "kim-fregona",
    name: "Kim Fregona",
    rating: 5,
    text: "Koen was polite and professional and did a great job! Will use his services again!",
  },
  {
    id: "cathy-kirschner",
    name: "Cathy Kirschner",
    rating: 5,
    text: "This is our second year using the student window cleaning services and we were very impressed. 5 stars. See you next spring",
  },
  {
    id: "adrijana-grujic",
    name: "Adrijana Grujic",
    rating: 5,
    text: "Prompt, efficient and friendly team. Top notch service.",
  },
  {
    id: "daniel-thissen",
    name: "Daniel Thissen",
    rating: 5,
    text: "Fair prices and great customer service!",
  },
  {
    id: "vivien-tyers",
    name: "Vivien Tyers",
    rating: 5,
    text: "Koen was extremely professional, personable and right on schedule. He did an amazing job cleaning all of our windows thoroughly and in a timely manner. He was really very friendly and courteous and made sure we were completely happy with his work. Highly recommend this service!",
  },
] as const;
