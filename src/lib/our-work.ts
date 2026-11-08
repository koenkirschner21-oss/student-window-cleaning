/**
 * Our Work gallery data — authentic Student Window Cleaning job photos only.
 *
 * Rules:
 * - No logos, mockups, stock, or AI imagery as finished work
 * - Do not invent locations, dates, addresses, outcomes, or before/after claims
 * - Private homes / identifiable people require permission; mask house numbers & plates
 * - Categories are internal organization only — no public filter UI in V2
 */

export const workCategories = [
  "exterior",
  "interior-exterior",
  "gutter",
  "commercial",
  "team-working",
  "finished-results",
] as const;

export type WorkCategory = (typeof workCategories)[number];

/**
 * Editorial grid treatment hints for the responsive layout.
 * - featured: ~2-column hero action
 * - portrait: standard portrait cell
 * - span: wider row accent
 * - detail: tighter detail cell (gutters / close-ups)
 */
export type WorkGridTreatment = "featured" | "portrait" | "span" | "detail";

export type WorkPhoto = {
  id: string;
  /** Public path under /public, e.g. /our-work/cleaning-action-brick-scrub.webp */
  src: string;
  alt: string;
  category: WorkCategory;
  /** Only include when the location is known and approved to publish. */
  location?: string;
  /** Only include genuine known context — never invent captions. */
  caption?: string;
  width: number;
  height: number;
  treatment?: WorkGridTreatment;
  /**
   * Optional same-job before/after pairing.
   * Both photos in a pair must be verified from the same job.
   * Not used in V2 — gutter details are published as independent details.
   */
  pairId?: string;
  pairRole?: "before" | "after";
};

/**
 * Curated V2 gallery (~9 photos) from the authentic media pack.
 * Source originals preserved in the project store under media/our-work/source/.
 */
export const workPhotos: WorkPhoto[] = [
  {
    id: "cleaning-action-brick-scrub",
    src: "/our-work/cleaning-action-brick-scrub.webp",
    alt: "Student Window Cleaning team member scrubbing a residential window on a red brick wall",
    category: "team-working",
    width: 1200,
    height: 1600,
    treatment: "featured",
  },
  {
    id: "cleaning-action-branded-scrub",
    src: "/our-work/cleaning-action-branded-scrub.webp",
    alt: "Student Window Cleaning team member in a branded shirt scrubbing a residential window",
    category: "team-working",
    width: 1200,
    height: 1600,
    treatment: "portrait",
  },
  {
    id: "cleaning-action-squeegee",
    src: "/our-work/cleaning-action-squeegee.webp",
    alt: "Close-up of a Student Window Cleaning team member squeegeeing a residential window",
    category: "team-working",
    width: 1200,
    height: 1600,
    treatment: "portrait",
  },
  {
    id: "cleaning-action-bay-window",
    src: "/our-work/cleaning-action-bay-window.webp",
    alt: "Student Window Cleaning team member washing a front bay window on a two-story home",
    category: "team-working",
    width: 1200,
    height: 1600,
    treatment: "span",
  },
  {
    id: "residential-porch-clean",
    src: "/our-work/residential-porch-clean.webp",
    alt: "Student Window Cleaning team member working at the front entrance of a red brick home",
    category: "exterior",
    width: 1200,
    height: 1600,
    treatment: "portrait",
  },
  {
    id: "residential-grey-brick",
    src: "/our-work/residential-grey-brick.webp",
    alt: "Two-story residential home with clean windows and grey brick exterior",
    category: "exterior",
    width: 1376,
    height: 1010,
    treatment: "span",
  },
  {
    id: "window-ladder-detail",
    src: "/our-work/window-ladder-detail.webp",
    alt: "Clean residential bay window on a red brick wall with a ladder in the foreground",
    category: "finished-results",
    width: 1200,
    height: 1600,
    treatment: "portrait",
  },
  {
    id: "gutter-detail-debris",
    src: "/our-work/gutter-detail-debris.webp",
    alt: "Close-up of a residential gutter holding leaf debris along a shingle roofline",
    category: "gutter",
    caption: "Gutter detail from a residential visit",
    width: 1200,
    height: 1600,
    treatment: "detail",
  },
  {
    id: "gutter-detail-cleared",
    src: "/our-work/gutter-detail-cleared.webp",
    alt: "Close-up of a cleared residential gutter along a shingle roofline",
    category: "gutter",
    caption: "Gutter detail from a residential visit",
    width: 1200,
    height: 1600,
    treatment: "detail",
  },
];

export function getBeforeAfterPairs(photos: WorkPhoto[] = workPhotos) {
  const byPair = new Map<string, { before?: WorkPhoto; after?: WorkPhoto }>();

  for (const photo of photos) {
    if (!photo.pairId || !photo.pairRole) continue;
    const entry = byPair.get(photo.pairId) ?? {};
    entry[photo.pairRole] = photo;
    byPair.set(photo.pairId, entry);
  }

  return Array.from(byPair.entries())
    .filter(([, pair]) => pair.before && pair.after)
    .map(([id, pair]) => ({
      id,
      before: pair.before as WorkPhoto,
      after: pair.after as WorkPhoto,
    }));
}
