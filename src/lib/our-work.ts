/**
 * Our Work — property portfolio data model (V4).
 *
 * Rules:
 * - Authentic photography only — no AI enhance, no artificial privacy blur on facades
 * - Do not invent locations, dates, outcomes, or before/after claims
 * - Residential titles are short property-type labels from visible architecture
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
  /** Optional short type eyebrow — unused on V4 cards. */
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
   * - ready: media approved for publish
   */
  status: "draft" | "ready";
};

const RESIDENTIAL_MEDIA_SIZE = { width: 1600, height: 1200 } as const;
const COMMERCIAL_MEDIA_SIZE = { width: 1600, height: 1000 } as const;

/**
 * Six distinct residential jobs.
 * Titles are short property-type labels from inspecting originals — not forced variety.
 */
export const residentialProjects: WorkProject[] = [
  {
    id: "residential-grey-two-storey",
    title: "Townhouse",
    category: "residential",
    thumbnail: "/our-work/projects/residential-grey-two-storey.webp",
    media: [
      {
        id: "residential-grey-two-storey-1",
        kind: "image",
        src: "/our-work/projects/residential-grey-two-storey.webp",
        alt: "Townhouse with grey vertical siding, brick chimney, and clean upper windows",
        ...RESIDENTIAL_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "residential-large-brick",
    title: "Detached Home",
    category: "residential",
    thumbnail: "/our-work/projects/residential-large-brick.webp",
    media: [
      {
        id: "residential-large-brick-1",
        kind: "image",
        src: "/our-work/projects/residential-large-brick.webp",
        alt: "Detached home with beige brick facade, arched windows, and two-car garage",
        ...RESIDENTIAL_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "residential-stone-facade",
    title: "Detached Home",
    category: "residential",
    thumbnail: "/our-work/projects/residential-stone-facade.webp",
    media: [
      {
        id: "residential-stone-facade-1",
        kind: "image",
        src: "/our-work/projects/residential-stone-facade.webp",
        alt: "Detached home with stone accents, arched windows, and multi-gable roof",
        ...RESIDENTIAL_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "residential-red-brick-split",
    title: "Split-Level",
    category: "residential",
    thumbnail: "/our-work/projects/residential-red-brick-split.webp",
    media: [
      {
        id: "residential-red-brick-split-1",
        kind: "image",
        src: "/our-work/projects/residential-red-brick-split.webp",
        alt: "Split-level home with red brick facade and white-trimmed windows",
        ...RESIDENTIAL_MEDIA_SIZE,
      },
      {
        id: "residential-red-brick-split-2",
        kind: "image",
        src: "/our-work/projects/residential-red-brick-split-alt.webp",
        alt: "Alternate view of the same split-level home entry and windows",
        ...RESIDENTIAL_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "residential-brick-siding",
    title: "Two-Storey",
    category: "residential",
    thumbnail: "/our-work/projects/residential-brick-siding.webp",
    media: [
      {
        id: "residential-brick-siding-1",
        kind: "image",
        src: "/our-work/projects/residential-brick-siding.webp",
        alt: "Two-storey home with red brick lower level and light horizontal siding above",
        ...RESIDENTIAL_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "residential-two-storey-bay",
    title: "Two-Storey",
    category: "residential",
    thumbnail: "/our-work/projects/residential-two-storey-bay.webp",
    media: [
      {
        id: "residential-two-storey-bay-1",
        kind: "image",
        src: "/our-work/projects/residential-two-storey-bay.webp",
        alt: "Two-storey home with bay window being cleaned by a Student Window Cleaning team member",
        ...RESIDENTIAL_MEDIA_SIZE,
      },
      {
        id: "residential-two-storey-bay-2",
        kind: "image",
        src: "/our-work/projects/residential-two-storey-bay-alt.webp",
        alt: "Upper-storey windows on the same two-storey home",
        ...RESIDENTIAL_MEDIA_SIZE,
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
    thumbnail: "/our-work/projects/commercial-the-brick.webp",
    media: [
      {
        id: "commercial-the-brick-1",
        kind: "image",
        src: "/our-work/projects/commercial-the-brick.webp",
        alt: "The Brick storefront exterior",
        ...COMMERCIAL_MEDIA_SIZE,
      },
      {
        id: "commercial-the-brick-2",
        kind: "image",
        src: "/our-work/projects/commercial-the-brick-alt.webp",
        alt: "Alternate view of The Brick storefront",
        ...COMMERCIAL_MEDIA_SIZE,
      },
      {
        id: "commercial-the-brick-3",
        kind: "image",
        src: "/our-work/projects/commercial-the-brick-wide.webp",
        alt: "Wider view of The Brick commercial exterior",
        ...COMMERCIAL_MEDIA_SIZE,
      },
    ],
    status: "ready",
  },
  {
    id: "commercial-montessori-learning-centre",
    title: "Montessori Learning Centre",
    category: "commercial",
    thumbnail: "/our-work/projects/commercial-montessori.webp",
    media: [
      {
        id: "commercial-montessori-1",
        kind: "image",
        src: "/our-work/projects/commercial-montessori.webp",
        alt: "Montessori Learning Centre storefront exterior",
        ...COMMERCIAL_MEDIA_SIZE,
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
 * Authentic V2 pack retained in-repo. Not rendered on the portfolio page —
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
