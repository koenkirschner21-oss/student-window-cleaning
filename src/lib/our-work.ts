/**
 * Our Work — property portfolio data model (V3 structural foundation).
 *
 * Rules:
 * - No logos, mockups, stock, or AI imagery as finished work
 * - Do not invent locations, dates, addresses, outcomes, or before/after claims
 * - Private homes / identifiable people require permission; mask house numbers & plates
 * - Commercial names are owner-confirmed jobs only — no endorsement / testimonial implication
 * - V3 ships placeholders with empty media; integrate authentic assets later
 */

export const workProjectCategories = ["residential", "commercial"] as const;

export type WorkProjectCategory = (typeof workProjectCategories)[number];

export type WorkMediaKind = "image" | "video";

/** Individual media item for a project lightbox / gallery (filled in later packs). */
export type WorkMediaItem = {
  id: string;
  kind: WorkMediaKind;
  /** Public path under /public, e.g. /our-work/….webp */
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  poster?: string;
};

export type WorkProject = {
  id: string;
  title: string;
  category: WorkProjectCategory;
  /** Short type label on the card, e.g. "Residential" / "Commercial". */
  typeLabel?: string;
  /** Optional cover path once media is ready. */
  thumbnail?: string | null;
  /** Ordered media for detail / lightbox. Empty while structural. */
  media: WorkMediaItem[];
  description?: string;
  tags?: string[];
  /**
   * Publication readiness:
   * - draft: structural placeholder only (V3)
   * - ready: media approved; may publish on page
   */
  status: "draft" | "ready";
};

/** Residential placeholders — six cards for the V3 structural layout. */
export const residentialProjects: WorkProject[] = [
  {
    id: "residential-01",
    title: "Residential Property 01",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: null,
    media: [],
    status: "draft",
  },
  {
    id: "residential-02",
    title: "Residential Property 02",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: null,
    media: [],
    status: "draft",
  },
  {
    id: "residential-03",
    title: "Residential Property 03",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: null,
    media: [],
    status: "draft",
  },
  {
    id: "residential-04",
    title: "Residential Property 04",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: null,
    media: [],
    status: "draft",
  },
  {
    id: "residential-05",
    title: "Residential Property 05",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: null,
    media: [],
    status: "draft",
  },
  {
    id: "residential-06",
    title: "Residential Property 06",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: null,
    media: [],
    status: "draft",
  },
];

/**
 * Commercial placeholders — owner-confirmed jobs.
 * Names only; no endorsement or testimonial language.
 */
export const commercialProjects: WorkProject[] = [
  {
    id: "commercial-the-brick",
    title: "The Brick",
    category: "commercial",
    typeLabel: "Commercial",
    thumbnail: null,
    media: [],
    status: "draft",
  },
  {
    id: "commercial-montessori-learning-centre",
    title: "Montessori Learning Centre",
    category: "commercial",
    typeLabel: "Commercial",
    thumbnail: null,
    media: [],
    status: "draft",
  },
];

export const workProjects: WorkProject[] = [
  ...residentialProjects,
  ...commercialProjects,
];

export function getProjectsByCategory(category: WorkProjectCategory) {
  return workProjects.filter((project) => project.category === category);
}

export function isProjectMediaReady(project: WorkProject) {
  return project.status === "ready" && project.media.length > 0;
}

/* -------------------------------------------------------------------------- */
/* V2 photo catalog — assets retained under public/our-work/ for later reuse  */
/* -------------------------------------------------------------------------- */

export const workPhotoCategories = [
  "exterior",
  "interior-exterior",
  "gutter",
  "commercial",
  "team-working",
  "finished-results",
] as const;

export type WorkPhotoCategory = (typeof workPhotoCategories)[number];

export type WorkGridTreatment = "featured" | "portrait" | "span" | "detail";

/** Legacy photo shape kept for cataloguing existing public/our-work assets. */
export type WorkPhoto = {
  id: string;
  src: string;
  alt: string;
  category: WorkPhotoCategory;
  location?: string;
  caption?: string;
  width: number;
  height: number;
  treatment?: WorkGridTreatment;
  pairId?: string;
  pairRole?: "before" | "after";
};

/**
 * Authentic V2 pack retained in-repo. Not rendered on the V3 portfolio page —
 * reserved for future project media integration.
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
