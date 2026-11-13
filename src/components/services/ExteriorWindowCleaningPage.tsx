import Image from "next/image";
import Link from "next/link";
import { CleaningProcessSection } from "@/components/services/CleaningProcessSection";
import { ScreenCleaningAddon } from "@/components/services/ScreenCleaningAddon";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { WindowCleaningCrossSell } from "@/components/services/WindowCleaningCrossSell";
import { CleaningPlanCards } from "@/components/service-plans/CleaningPlanCards";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const introBenefits = [
  "Hand-Scrubbed Glass",
  "Detailed Finish",
  "Local Student Team",
] as const;

const featureChecks = [
  "Exterior window glass, hand-scrubbed and cleaned",
  "Exterior frames, sills and tracks",
  "Front-door glass, sliding doors and garage windows",
  "Deck glass and outdoor glass panels",
] as const;

const inclusionSummaries = [
  { title: "Exterior Glass", icon: "glass" as const },
  { title: "Frames, Sills & Tracks", icon: "frame" as const },
  { title: "Doors & Garage Windows", icon: "door" as const },
  { title: "Deck Glass", icon: "deck" as const },
] as const;

function CheckCircleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.1 8.15 7.05 10l3.85-4.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
  className = "size-9",
}: {
  kind: (typeof inclusionSummaries)[number]["icon"];
  className?: string;
}) {
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
    // Window frame with sill shelf and track groove — reads as frames/sills/tracks
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <rect
          x="4"
          y="3.5"
          width="16"
          height="13"
          rx="1.25"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <rect
          x="6.25"
          y="5.75"
          width="11.5"
          height="8.5"
          rx="0.75"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3.5 18.25h17"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M5.5 20.5h13"
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

  // Deck / outdoor glass railing panels
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M3.5 19.5h17"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M4.5 19.5V8.25M19.5 19.5V8.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M3.75 8.25h16.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M9.25 8.25V19.5M14.75 8.25V19.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M5.75 11.25h2.75M11.25 14h2.5M15.5 11.25h2.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
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
    image: {
      src: "/services/process/step-01-wash.webp",
      alt: "Student Window Cleaning team member scrubbing exterior window glass with a professional washer",
    },
  },
  {
    number: "02",
    title: "Squeegee the Glass",
    description:
      "We remove the cleaning solution using professional squeegee techniques for a clear, streak-free finish.",
    image: {
      src: "/services/process/step-02-squeegee.webp",
      alt: "Student Window Cleaning team member squeegeeing soapy exterior window glass for a streak-free finish",
    },
  },
  {
    number: "03",
    title: "Detail the Frame",
    description:
      "We carefully detail the window edges and applicable exterior frames.",
    image: {
      src: "/services/process/step-03-detail-frame.webp",
      alt: "Close-up of a microfiber cloth detailing the edge where window glass meets the white frame",
    },
  },
  {
    number: "04",
    title: "Clean Sills & Tracks",
    description:
      "We finish by cleaning applicable exterior sills and tracks.",
    image: {
      src: "/services/process/step-04-sills-tracks.webp",
      alt: "Gloved hands wiping a window sill and track with a blue microfiber cloth",
    },
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

      {/* Introduction */}
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
                  Give your home a fresh, polished look with exterior window
                  cleaning from our local student-run team. From the glass to
                  the finishing details, we take care of the work that makes
                  your home shine.
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
                  {introBenefits.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-midnight"
                    >
                      <span className="text-signature">
                        <CheckCircleIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
        style={{
          paddingBlock: "clamp(1.5rem, 3vw, 2.5rem) clamp(3.25rem, 5.5vw, 4.75rem)",
        }}
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
                <h3 className="font-heading text-[1.45rem] font-semibold tracking-tight text-midnight sm:text-[1.65rem]">
                  A Complete Exterior Clean.
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy-muted">
                  We hand-scrub exterior glass and pay attention to the details
                  around each window for a thorough, professional result.
                </p>
                <ul className="mt-6 space-y-3.5">
                  {featureChecks.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[0.95rem] leading-snug text-navy-muted"
                    >
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <ul className="mt-10 grid gap-8 sm:mt-11 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {inclusionSummaries.map((item) => (
              <li
                key={item.title}
                className="flex min-h-[5.5rem] min-w-0 flex-col items-center text-center"
              >
                <span className="text-signature">
                  <InclusionIcon kind={item.icon} />
                </span>
                <p className="font-heading mt-4 min-h-[2.75rem] text-[1.05rem] font-semibold tracking-tight text-midnight">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center sm:mt-11">
            <Link
              href={quoteHref({ service: "exterior" })}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
            >
              Get a Free Exterior Cleaning Quote
            </Link>
          </div>
        </Container>
      </section>

      <ScreenCleaningAddon
        headingId="exterior-screen-addon-heading"
        service="exterior"
      />

      <WindowCleaningCrossSell
        headingId="exterior-cross-sell-heading"
        eyebrow="Complete Your Window Cleaning"
        headline="Don't Stop at the Outside."
        description="Exterior windows look their best when the inside is just as clean. Add interior window cleaning for a complete, clearer view throughout your home."
        points={[
          "Clearer Inside & Out",
          "More Complete Finish",
          "One Convenient Quote",
        ]}
        imageOnRight
      />

      <CleaningProcessSection
        description="Every window receives a detailed cleaning process, from the initial wash to the final finishing touches."
        steps={exteriorSteps}
        tone="navy"
      />

      {/* Cleaning Plans — white background */}
      <section
        aria-labelledby="exterior-plans-heading"
        className="bg-pure text-midnight"
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
