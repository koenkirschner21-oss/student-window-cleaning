import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const inclusions = [
  {
    title: "Gutter Debris Removal",
    description:
      "Removal of accumulated leaves and debris from gutter channels to help restore proper water flow.",
    icon: "leaf" as const,
  },
  {
    title: "Downspout Clearing",
    description:
      "Clearing reachable downspout blockages to support proper drainage where access allows.",
    icon: "droplets" as const,
  },
  {
    title: "Care for Your Property",
    description:
      "Careful work around landscaping and exterior finishes, with responsible debris handling.",
    icon: "home" as const,
  },
] as const;

function InclusionIcon({ kind }: { kind: "leaf" | "droplets" | "home" }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
    className: "size-7 text-sky",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (kind === "leaf") {
    return (
      <svg {...common}>
        <path d="M5 18c4-1 7-4 9-8 2-4 3-7 5-8-1 4-2 8-5 11-3 3-6 4-9 5Z" />
        <path d="M8 14c2-1 4-3 6-6" />
      </svg>
    );
  }

  if (kind === "droplets") {
    return (
      <svg {...common}>
        <path d="M8.5 14.5c0 1.9-1.3 3.5-3 3.5s-3-1.6-3-3.5C2.5 11.8 5.5 8 5.5 8s3 3.8 3 6.5Z" />
        <path d="M19.5 16.5c0 2.5-1.8 4.5-4 4.5s-4-2-4-4.5C11.5 13 15.5 8 15.5 8s4 5 4 8.5Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M6.5 9.5V19h11V9.5" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

/**
 * Complete Gutter Cleaning service sequence on Midnight Navy:
 * intro → inclusions → real results → quote CTA → gutter guards add-on.
 */
export function GutterCleaningSection() {
  return (
    <section
      id="gutter-cleaning"
      aria-labelledby="gutter-cleaning-heading"
      className="scroll-mt-28 text-pure"
      style={{
        backgroundColor: "#061A38",
        paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)",
      }}
    >
      <Container width="portfolio">
        {/* 1) Intro — tighter vertical rhythm, stronger heading */}
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-10 xl:gap-12">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              Professional Gutter Care
            </p>
            <h2
              id="gutter-cleaning-heading"
              className="font-heading mt-2 text-[clamp(2rem,3.4vw,2.45rem)] font-semibold tracking-tight text-pure sm:mt-2.5 sm:leading-tight"
            >
              Gutter Cleaning
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-white/72 sm:text-[1.05rem]">
              Leaves and debris can block gutters and cause overflow during
              rain. Our student-run team clears accessible buildup so water can
              drain properly and your home stays better protected.
            </p>
          </div>

          <figure className="m-0 w-full justify-self-center lg:justify-self-end">
            <div className="relative aspect-[4/5] w-full max-w-[24rem] overflow-hidden rounded-[14px] border border-white/10 bg-[#0A274F] sm:aspect-[5/6] lg:ml-auto lg:h-[24.5rem] lg:w-[22.5rem] lg:max-w-none lg:aspect-auto">
              <Image
                src="/services/gutter-cleaning-hose.webp"
                alt="Team member on a ladder flushing a residential roof gutter with a hose nozzle"
                fill
                sizes="(max-width: 1024px) min(100vw, 24rem), 22.5rem"
                className="object-cover object-[center_35%]"
              />
            </div>
          </figure>
        </div>

        {/* 2) What's Included — open 3-column with icons above */}
        <div className="mt-9 border-t border-white/10 pt-8 sm:mt-10 sm:pt-9">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]">
            What&apos;s Included
          </h3>
          <ul className="mt-7 grid gap-8 sm:grid-cols-3 sm:gap-8 lg:gap-10">
            {inclusions.map((item) => (
              <li key={item.title} className="min-w-0 text-left">
                <InclusionIcon kind={item.icon} />
                <p className="font-heading mt-3.5 text-[1.05rem] font-semibold tracking-tight text-pure sm:text-lg">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* 3) Real Results — subtle navy-on-navy container, no angle caption */}
        <div className="mt-10 border-t border-white/10 pt-9 sm:mt-11 sm:pt-10">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              Real Results
            </p>
            <h3 className="font-heading mt-2.5 text-[clamp(1.5rem,2.6vw,1.85rem)] font-semibold tracking-tight text-pure">
              See the Difference a Clean Gutter Makes.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">
              Clearing accumulated leaves and debris helps restore water flow
              and keep gutters functioning as intended.
            </p>
          </header>

          <div
            className="mx-auto mt-7 max-w-[46rem] rounded-[16px] border border-white/[0.08] p-3 sm:mt-8 sm:p-4"
            style={{ backgroundColor: "rgba(10, 39, 79, 0.55)" }}
          >
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              {(
                [
                  {
                    src: "/before-after/gutters/before.webp",
                    alt: "Residential gutter channel filled with leaves and debris before cleaning",
                    label: "Before",
                    objectPosition: "center",
                  },
                  {
                    src: "/before-after/gutters/after-aligned.webp",
                    alt: "Cleared residential gutter channel after debris removal",
                    label: "After",
                    objectPosition: "center",
                  },
                ] as const
              ).map((item) => (
                <figure key={item.label} className="m-0 min-w-0">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#061A38] sm:aspect-[5/6]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 45vw, 22rem"
                      className="object-cover"
                      style={{ objectPosition: item.objectPosition }}
                    />
                  </div>
                  <figcaption className="mt-2.5 flex justify-center">
                    <span className="inline-flex h-8 w-[6.5rem] items-center justify-center rounded-md bg-pure text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-midnight sm:w-[7rem] sm:text-xs">
                      {item.label}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* 4) Quote CTA — closer to results */}
        <div className="mt-8 flex flex-col items-center text-center sm:mt-9">
          <h3 className="font-heading text-[clamp(1.35rem,2.4vw,1.65rem)] font-semibold tracking-tight text-pure">
            Keep Your Gutters Flowing Properly.
          </h3>
          <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
            Tell us about your property and we&apos;ll prepare a free,
            personalized quote for professional gutter cleaning.
          </p>
          <Link
            href={quoteHref({ service: "gutter-cleaning" })}
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* 5) Gutter Guards add-on — unchanged card, balanced spacing */}
        <aside
          id="gutter-guards"
          className="mt-9 overflow-hidden rounded-[15px] sm:mt-10"
          aria-labelledby="gutter-guards-heading"
        >
          <div className="grid min-h-[13.75rem] sm:min-h-[14.5rem] md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:min-h-[15.5rem] lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
            <div className="relative min-h-[11.5rem] bg-[#061A38] md:min-h-0">
              <Image
                src="/services/gutter-guards.webp"
                alt="Close-up of micro-mesh gutter guard being installed into a white residential gutter under roof shingles"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-[center_40%]"
              />
            </div>
            <div
              className="flex flex-col justify-center px-5 py-6 text-pure sm:px-7 sm:py-7 lg:px-8"
              style={{ backgroundColor: "#0A274F" }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-[0.7rem]">
                Optional Add-On
              </p>
              <h3
                id="gutter-guards-heading"
                className="font-heading mt-2 text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]"
              >
                Gutter Guards Available
              </h3>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                Help reduce future debris buildup and keep gutters cleaner
                between services. A strong option for homeowners who want lower
                maintenance between cleanings.
              </p>
              <div className="mt-5">
                <Link
                  href={quoteHref({ service: "gutter-cleaning" })}
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
                >
                  Ask About Gutter Guards
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
