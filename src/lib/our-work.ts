/**
 * Our Work — property portfolio data model (V3 media pack).
 *
 * Rules:
 * - No logos, mockups, stock, or AI imagery as finished work
 * - Do not invent locations, dates, addresses, outcomes, or before/after claims
 * - Private homes / identifiable people: mask house numbers & plates on public derivatives
 * - Commercial names are owner-confirmed jobs only — no endorsement / testimonial implication
 */

export const workProjectCategories = ["residential", "commercial"] as const;

export type WorkProjectCategory = (typeof workProjectCategories)[number];

export type WorkMediaKind = "image" | "video";

/** Individual media item for a project lightbox / gallery. */
export type WorkMediaItem = {
  id: string;
  kind: WorkMediaKind;
  /** Public path under /public, e.g. /our-work/projects/….webp */
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
  /** Cover path for the card thumbnail. */
  thumbnail?: string | null;
  /** Ordered media for detail / lightbox. */
  media: WorkMediaItem[];
  description?: string;
  tags?: string[];
  /**
   * Publication readiness:
   * - draft: structural placeholder only
   * - ready: media privacy-safe and approved for publish
   */
  status: "draft" | "ready";
};

const PROJECT_MEDIA_SIZE = { width: 1400, height: 840 } as const;

/** Six distinct residential jobs — descriptive titles from visible architecture. */
export const residentialProjects: WorkProject[] = [
  {
    id: "residential-grey-two-storey",
    title: "Two-Storey Home with Grey Siding",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: "/our-work/projects/residential-grey-two-storey.webp",
    media: [
      {
        id: "residential-grey-two-storey-1",
        kind: "image",
        src: "/our-work/projects/residential-grey-two-storey.webp",
        alt: "Two-storey home with grey vertical siding, brick chimney, and clean upper windows",
        ...PROJECT_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "residential-large-brick",
    title: "Large Brick Detached Home",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: "/our-work/projects/residential-large-brick.webp",
    media: [
      {
        id: "residential-large-brick-1",
        kind: "image",
        src: "/our-work/projects/residential-large-brick.webp",
        alt: "Large beige brick detached home with arched windows and a two-car garage",
        ...PROJECT_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "residential-stone-facade",
    title: "Large Stone-Facade Home",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: "/our-work/projects/residential-stone-facade.webp",
    media: [
      {
        id: "residential-stone-facade-1",
        kind: "image",
        src: "/our-work/projects/residential-stone-facade.webp",
        alt: "Large stone-facade home with arched windows, covered porch, and multi-gable roof",
        ...PROJECT_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "residential-red-brick-split",
    title: "Red Brick Split-Level Home",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: "/our-work/projects/residential-red-brick-split.webp",
    media: [
      {
        id: "residential-red-brick-split-1",
        kind: "image",
        src: "/our-work/projects/residential-red-brick-split.webp",
        alt: "Red brick split-level home exterior with white-trimmed windows",
        ...PROJECT_MEDIA_SIZE,
      },
      {
        id: "residential-red-brick-split-2",
        kind: "image",
        src: "/our-work/projects/residential-red-brick-split-alt.webp",
        alt: "Alternate view of the same red brick split-level home entry and windows",
        ...PROJECT_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "residential-brick-siding",
    title: "Two-Storey Brick and Siding Home",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: "/our-work/projects/residential-brick-siding.webp",
    media: [
      {
        id: "residential-brick-siding-1",
        kind: "image",
        src: "/our-work/projects/residential-brick-siding.webp",
        alt: "Two-storey home with red brick lower level and light horizontal siding above",
        ...PROJECT_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "residential-two-storey-bay",
    title: "Two-Storey Home with Bay Window",
    category: "residential",
    typeLabel: "Residential",
    thumbnail: "/our-work/projects/residential-two-storey-bay.webp",
    media: [
      {
        id: "residential-two-storey-bay-1",
        kind: "image",
        src: "/our-work/projects/residential-two-storey-bay.webp",
        alt: "Two-storey home with bay window being cleaned by a Student Window Cleaning team member",
        ...PROJECT_MEDIA_SIZE,
      },
      {
        id: "residential-two-storey-bay-2",
        kind: "image",
        src: "/our-work/projects/residential-two-storey-bay-alt.webp",
        alt: "Upper-storey windows on the same two-storey home with bay window",
        ...PROJECT_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
];

/**
 * Commercial projects — owner-confirmed jobs.
 * Names only; no endorsement or testimonial language.
 */
export const commercialProjects: WorkProject[] = [
  {
    id: "commercial-the-brick",
    title: "The Brick",
    category: "commercial",
    typeLabel: "Commercial",
    thumbnail: "/our-work/projects/commercial-the-brick.webp",
    media: [
      {
        id: "commercial-the-brick-1",
        kind: "image",
        src: "/our-work/projects/commercial-the-brick.webp",
        alt: "The Brick storefront exterior",
        ...PROJECT_MEDIA_SIZE,
      },
      {
        id: "commercial-the-brick-2",
        kind: "image",
        src: "/our-work/projects/commercial-the-brick-alt.webp",
        alt: "Alternate view of The Brick storefront",
        ...PROJECT_MEDIA_SIZE,
      },
      {
        id: "commercial-the-brick-3",
        kind: "image",
        src: "/our-work/projects/commercial-the-brick-wide.webp",
        alt: "Wider view of The Brick commercial exterior",
        ...PROJECT_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "commercial-montessori-learning-centre",
    title: "Montessori Learning Centre",
    category: "commercial",
    typeLabel: "Commercial",
    thumbnail: "/our-work/projects/commercial-montessori.webp",
    media: [
      {
        id: "commercial-montessori-1",
        kind: "image",
        src: "/our-work/projects/commercial-montessori.webp",
        alt: "Montessori Learning Centre storefront exterior",
        ...PROJECT_MEDIA_SIZE,
      },
    ],
    status: "ready",
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
 * reserved for Home / Services / About and future reuse.
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
