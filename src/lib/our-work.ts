/**
 * Our Work gallery data.
 *
 * Add only genuine Student Window Cleaning job photos with permission.
 * Do not invent locations, dates, addresses, or project stories.
 * Do not use logos, mockups, stock, or AI imagery as finished work.
 * Private homes / identifiable people require explicit permission.
 *
 * Categories are for internal organization only — no public filter UI in V1.
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

export type WorkPhoto = {
  id: string;
  /** Public path under /public, e.g. /work/exterior-whitby-01.webp */
  src: string;
  alt: string;
  category: WorkCategory;
  /** Only include when the location is known and approved to publish. */
  location?: string;
  /** Only include genuine known context — never invent captions. */
  caption?: string;
  width: number;
  height: number;
  /**
   * Optional same-job before/after pairing.
   * Both photos in a pair must be verified from the same job.
   */
  pairId?: string;
  pairRole?: "before" | "after";
};

/**
 * Genuine SWC job photos. Empty until real assets are added under
 * `public/work/` with descriptive filenames.
 */
export const workPhotos: WorkPhoto[] = [];

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
