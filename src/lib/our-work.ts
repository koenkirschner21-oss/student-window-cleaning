/**
 * Our Work — curated property portfolio (V6).
 *
 * Rules:
 * - Authentic photography only — no AI, no artificial privacy blur on facades
 * - Do not invent locations, dates, outcomes, or before/after claims
 * - Residential titles are short property-type labels
 * - Commercial names are owner-confirmed jobs only — no endorsement implication
 * - Display frames are fixed 4:3; source originals stay intact
 * - Filenames stay traceable to source IMG_* originals
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
  width: number;
  height: number;
  caption?: string;
  poster?: string;
  /** Owner-supplied original filename for audit / provenance. */
  sourceFilename?: string;
  /**
   * CSS object-position for the fixed 4:3 card frame.
   * Tuned per photo so the primary facade stays recognizable.
   */
  objectPosition?: string;
  /** object-fit for the card frame — cover preferred when facade fits. */
  objectFit?: "cover" | "contain";
};

export type WorkProject = {
  id: string;
  title: string;
  category: WorkProjectCategory;
  /** Secondary label under the title (commercial category). */
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

/** Display frame size for all portfolio cards (4:3 landscape). */
export const PORTFOLIO_FRAME = { width: 1600, height: 1200 } as const;

/**
 * Six residential properties — equal 3×2 gallery, locked order.
 */
export const residentialProjects: WorkProject[] = [
  {
    id: "large-detached-img-0510",
    title: "Large Detached Home",
    category: "residential",
    thumbnail: "/our-work/projects/featured-detached-img-0510.webp",
    media: [
      {
        id: "large-detached-img-0510-1",
        kind: "image",
        src: "/our-work/projects/featured-detached-img-0510.webp",
        alt: "Large detached home with light facade, arched windows, and double garage",
        ...PORTFOLIO_FRAME,
        sourceFilename: "IMG_0510.jpg",
        objectFit: "cover",
        objectPosition: "center 42%",
      },
    ],
    status: "ready",
  },
  {
    id: "townhouse-img-2194",
    title: "Townhouse",
    category: "residential",
    thumbnail: "/our-work/projects/townhouse-img-2194.webp",
    media: [
      {
        id: "townhouse-img-2194-1",
        kind: "image",
        src: "/our-work/projects/townhouse-img-2194.webp",
        alt: "Townhouse with grey vertical siding, brick chimney, and clean upper windows",
        ...PORTFOLIO_FRAME,
        sourceFilename: "IMG_2194.jpg",
        objectFit: "cover",
        objectPosition: "center 40%",
      },
    ],
    status: "ready",
  },
  {
    id: "two-garage-img-0509",
    title: "Two-Garage Home",
    category: "residential",
    thumbnail: "/our-work/projects/two-garage-img-0509.webp",
    media: [
      {
        id: "two-garage-img-0509-1",
        kind: "image",
        src: "/our-work/projects/two-garage-img-0509.webp",
        alt: "Two-garage home with grey brick facade and white-trimmed windows",
        ...PORTFOLIO_FRAME,
        sourceFilename: "IMG_0509.jpg",
        objectFit: "cover",
        objectPosition: "center 38%",
      },
    ],
    status: "ready",
  },
  {
    id: "split-level-img-0085",
    title: "Split-Level Home",
    category: "residential",
    thumbnail: "/our-work/projects/split-level-img-0085.webp",
    media: [
      {
        id: "split-level-img-0085-1",
        kind: "image",
        src: "/our-work/projects/split-level-img-0085.webp",
        alt: "Split-level home with red brick facade, elevated entrance, and single garage",
        ...PORTFOLIO_FRAME,
        sourceFilename: "IMG_0085.jpg",
        objectFit: "cover",
        objectPosition: "center 36%",
      },
    ],
    status: "ready",
  },
  {
    id: "two-storey-img-0089",
    title: "Two-Storey Home",
    category: "residential",
    thumbnail: "/our-work/projects/two-storey-img-0089.webp",
    media: [
      {
        id: "two-storey-img-0089-1",
        kind: "image",
        src: "/our-work/projects/two-storey-img-0089.webp",
        alt: "Two-storey home with brick lower level and light horizontal siding above",
        ...PORTFOLIO_FRAME,
        sourceFilename: "IMG_0089(1).jpg",
        objectFit: "cover",
        objectPosition: "center 40%",
      },
    ],
    status: "ready",
  },
  {
    id: "detached-img-0155",
    title: "Detached Home",
    category: "residential",
    thumbnail: "/our-work/projects/two-storey-img-0155.webp",
    media: [
      {
        id: "detached-img-0155-1",
        kind: "image",
        src: "/our-work/projects/two-storey-img-0155.webp",
        alt: "Detached home with light siding, bay window, and attached garage",
        ...PORTFOLIO_FRAME,
        sourceFilename: "IMG_0155(1).jpg",
        objectFit: "cover",
        objectPosition: "center 42%",
      },
    ],
    status: "ready",
  },
];

/**
 * Commercial projects — owner-confirmed jobs.
 * Single cover photo each; equal 4:3 frames.
 */
export const commercialProjects: WorkProject[] = [
  {
    id: "commercial-the-brick",
    title: "The Brick",
    typeLabel: "Retail Property",
    category: "commercial",
    thumbnail: "/our-work/projects/commercial-the-brick-img-0350.webp",
    media: [
      {
        id: "commercial-the-brick-1",
        kind: "image",
        src: "/our-work/projects/commercial-the-brick-img-0350.webp",
        alt: "The Brick storefront exterior with arched glass entrance",
        ...PORTFOLIO_FRAME,
        sourceFilename: "IMG_0350 2.jpg",
        objectFit: "cover",
        objectPosition: "center 45%",
      },
    ],
    status: "ready",
  },
  {
    id: "commercial-montessori-learning-centre",
    title: "Montessori Learning Centre",
    typeLabel: "Educational Facility",
    category: "commercial",
    thumbnail: "/our-work/projects/commercial-montessori-img-5402.webp",
    media: [
      {
        id: "commercial-montessori-1",
        kind: "image",
        src: "/our-work/projects/commercial-montessori-img-5402.webp",
        alt: "Montessori Learning Centre storefront with brick pillars and glass windows",
        ...PORTFOLIO_FRAME,
        sourceFilename: "IMG_5402.png",
        objectFit: "cover",
        objectPosition: "center 40%",
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
