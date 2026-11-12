import Image from "next/image";
import Link from "next/link";
import { CleaningProcessSection } from "@/components/services/CleaningProcessSection";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { CleaningPlanCards } from "@/components/service-plans/CleaningPlanCards";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const featureChecks = [
  "Exterior window glass, hand-scrubbed and cleaned",
  "Exterior frames, sills and tracks",
  "Front-door glass, sliding doors and garage windows",
  "Deck glass and outdoor glass panels",
] as const;

const inclusionGroups = [
  {
    title: "Exterior Window Glass",
    description:
      "Hand-scrubbing helps loosen outdoor dirt and buildup before the glass receives a clean, polished finish.",
    icon: "glass" as const,
  },
  {
    title: "Frames, Sills & Tracks",
    description:
      "We pay attention to applicable exterior window details so the surrounding areas receive care too.",
    icon: "frame" as const,
  },
  {
    title: "Doors & Garage Windows",
    description:
      "Our service includes exterior glass on entry doors, sliding doors, and garage windows.",
    icon: "door" as const,
  },
  {
    title: "Deck Glass",
    description:
      "Outdoor glass panels receive professional cleaning to help your deck look clean and welcoming.",
    icon: "deck" as const,
  },
] as const;

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="mt-0.5 size-3.5 shrink-0 text-signature"
    >
      <path
        d="M3.2 8.2 6.4 11.3 12.8 4.7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InclusionIcon({
  kind,
}: {
  kind: (typeof inclusionGroups)[number]["icon"];
}) {
  const className = "size-6 shrink-0 text-signature";

  if (kind === "glass") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    );
  }

  if (kind === "frame") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <rect
          x="3.5"
          y="5"
          width="17"
          height="14"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M3.5 16.5h17M8 5v11.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "door") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <path
          d="M6 20V5.5A1.5 1.5 0 0 1 7.5 4h9A1.5 1.5 0 0 1 18 5.5V20"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M5 20h14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="15" cy="12" r="0.9" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M4 18h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M6 18V9.5L12 6l6 3.5V18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 18v-5h5v5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProcessIcon({ kind }: { kind: "wash" | "squeegee" | "frame" | "sill" }) {
  const className = "size-6";

  if (kind === "wash") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <path
          d="M12 3.5v3.25M7.5 5.75l1.5 2.25M16.5 5.75 15 8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M8.5 11.5c0 3.2 1.6 5.5 3.5 7.5 1.9-2 3.5-4.3 3.5-7.5a3.5 3.5 0 1 0-7 0Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "squeegee") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <path
          d="M5 6.5h14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M6.5 6.5v2.25c0 .7.45 1.3 1.1 1.55L12 12.5l4.4-2.2c.65-.25 1.1-.85 1.1-1.55V6.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M12 12.5V20"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "frame") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M4 17.5h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M6 17.5V8.5h12v9"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12.5h7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

const exteriorSteps = [
  {
    number: "01",
    title: "Wash the Glass",
    description:
      "We hand-scrub the glass to loosen dirt, dust, and outdoor buildup.",
    icon: <ProcessIcon kind="wash" />,
  },
  {
    number: "02",
    title: "Squeegee the Glass",
    description:
      "We remove the cleaning solution using professional squeegee techniques for a clear, streak-free finish.",
    icon: <ProcessIcon kind="squeegee" />,
  },
  {
    number: "03",
    title: "Detail the Frame",
    description:
      "We carefully detail the window edges and applicable exterior frames.",
    icon: <ProcessIcon kind="frame" />,
  },
  {
    number: "04",
    title: "Clean Sills & Tracks",
    description:
      "We finish by cleaning applicable exterior sills and tracks.",
    icon: <ProcessIcon kind="sill" />,
  },
] as const;

export function ExteriorWindowCleaningPage() {
  return (
    <main id="main-content" className="flex-1">
      <ServicePageHero
        eyebrow="Window Cleaning"
        title="Exterior Window Cleaning"
        description="Professional exterior glass cleaning for homes across Whitby and Durham Region, delivered by our local student-run team."
      />

      {/* Approved introduction */}
      <section
        aria-labelledby="exterior-intro-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)" }}
      >
        <Container width="portfolio">
          <div className="overflow-hidden rounded-[15px] border border-border bg-pure">
            <div className="grid items-stretch lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="flex flex-col justify-center bg-pure px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-10">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
                  Professional Window Cleaning
                </p>
                <h2
                  id="exterior-intro-heading"
                  className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
                >
                  A Cleaner View Starts Outside.
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-navy-muted">
                  Give your home a brighter, well-maintained appearance with
                  professional exterior window cleaning from our local
                  student-run team. We take care of the glass and the details
                  that make a difference.
                </p>
              </div>

              <figure className="relative m-0 min-h-[14rem] border-t border-border lg:min-h-[18rem] lg:border-l lg:border-t-0">
                <Image
                  src="/services/window-cleaning-intro-soapy.webp"
                  alt="Close-up of a professional squeegee clearing soapy foam from window glass to reveal clear blue sky"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                  priority
                />
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section
        aria-labelledby="exterior-included-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(1.5rem, 3vw, 2.5rem) clamp(3.25rem, 5.5vw, 4.75rem)" }}
      >
        <Container width="portfolio">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
              What&apos;s Included
            </p>
            <h2
              id="exterior-included-heading"
              className="font-heading mt-2.5 text-[clamp(1.75rem,3.1vw,2.25rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
            >
              What&apos;s Included in Our Premium Exterior Window Cleaning?
            </h2>
            <p className="mx-auto mt-3.5 max-w-xl text-base leading-relaxed text-navy-muted">
              From the glass itself to the surrounding details, our exterior
              cleaning service helps keep your windows and outdoor glass looking
              their best.
            </p>
          </div>

          <div className="mt-9 overflow-hidden rounded-[15px] border border-border bg-pure sm:mt-10">
            <div className="grid items-stretch lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
              <figure className="relative m-0 min-h-[14rem] bg-cloud lg:min-h-[20rem]">
                <Image
                  src="/services/exterior-squeegee-soapy.webp"
                  alt="Student Window Cleaning team member squeegeeing soapy exterior window glass"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-[55%_50%]"
                />
              </figure>
              <div className="flex flex-col justify-center px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-10">
                <h3 className="font-heading text-[1.35rem] font-semibold tracking-tight text-midnight sm:text-[1.5rem]">
                  A Complete Exterior Clean.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy-muted">
                  We hand-scrub exterior glass and pay attention to the details
                  around each window for a thorough, professional result.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {featureChecks.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-snug text-navy-muted"
                    >
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <ul className="mt-9 grid gap-7 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {inclusionGroups.map((item) => (
              <li key={item.title} className="min-w-0">
                <InclusionIcon kind={item.icon} />
                <p className="font-heading mt-3.5 text-[1.05rem] font-semibold tracking-tight text-midnight">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex justify-center sm:mt-10">
            <Link
              href={quoteHref({ service: "exterior" })}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
            >
              Get a Free Exterior Cleaning Quote
            </Link>
          </div>
        </Container>
      </section>

      <CleaningProcessSection
        description="Every window receives a detailed cleaning process, from the initial wash to the final finishing touches."
        steps={exteriorSteps}
      />

      {/* Screen Cleaning add-on */}
      <section
        aria-labelledby="exterior-screen-addon-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(3rem, 5vw, 4.5rem)" }}
      >
        <Container width="portfolio">
          <aside className="overflow-hidden rounded-[15px]">
            <div className="grid min-h-[13.75rem] sm:min-h-[14.5rem] md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:min-h-[15.5rem] lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
              <div className="relative min-h-[11.5rem] bg-[#0A274F] md:min-h-0">
                <Image
                  src="/our-work/screen-cleaning-action.webp"
                  alt="Student Window Cleaning team member scrubbing a residential window screen outdoors"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover object-[center_40%]"
                />
              </div>
              <div
                className="flex flex-col justify-center px-5 py-6 text-pure sm:px-7 sm:py-7 lg:px-8"
                style={{ backgroundColor: "#061A38" }}
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-[0.7rem]">
                  Optional Add-On
                </p>
                <h2
                  id="exterior-screen-addon-heading"
                  className="font-heading mt-2 text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]"
                >
                  Screen Cleaning Also Available
                </h2>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                  Complete your window cleaning with freshly cleaned screens. We
                  carefully clean applicable removable screens, helping improve
                  the overall finish of your windows.
                </p>
                <div className="mt-5">
                  <Link
                    href={quoteHref({ service: "exterior" })}
                    className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
                  >
                    Add Screen Cleaning to My Quote
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {/* Cleaning Plans */}
      <section
        aria-labelledby="exterior-plans-heading"
        className="bg-cloud text-midnight"
        style={{ paddingBlock: "var(--space-section-y)" }}
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
              Our Cleaning Plans
            </p>
            <h2
              id="exterior-plans-heading"
              className="font-heading mt-2.5 text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
            >
              More Visits. Bigger Savings.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              Keep your exterior windows looking their best throughout the
              season and save on every visit with our multi-visit cleaning
              plans.
            </p>
          </div>

          <CleaningPlanCards className="mt-10 sm:mt-12" service="exterior" />

          <p className="mt-9 text-center">
            <Link
              href="/cleaning-plans"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-muted transition-colors hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
            >
              Explore All Cleaning Plans
              <span aria-hidden className="translate-y-px">
                →
              </span>
            </Link>
          </p>
        </Container>
      </section>

      <ServicePageCta
        eyebrow="Support Local Students"
        headline="Cleaner Windows. A Stronger Local Community."
        supporting="Give your home the professional exterior window cleaning it deserves while supporting hardworking students in your community. Start with a free, personalized virtual quote."
        service="exterior"
      />
    </main>
  );
}
