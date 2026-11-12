import Image from "next/image";
import Link from "next/link";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServicePageHero } from "@/components/services/ServicePageHero";
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

const beforeAfter = [
  {
    src: "/before-after/gutters/before.webp",
    alt: "Residential gutter channel filled with leaves and debris before cleaning",
    label: "Before",
  },
  {
    src: "/before-after/gutters/after-aligned.webp",
    alt: "Cleared residential gutter channel after debris removal",
    label: "After",
  },
] as const;

function InclusionIcon({ kind }: { kind: "leaf" | "droplets" | "home" }) {
  const className = "size-9";

  if (kind === "leaf") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <path
          d="M5 18c4-1 7-4 9-8 2-4 3-7 5-8-1 4-2 8-5 11-3 3-6 4-9 5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 14c2-1 4-3 6-6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "droplets") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <path
          d="M8.5 14.5c0 1.9-1.3 3.5-3 3.5s-3-1.6-3-3.5C2.5 11.8 5.5 8 5.5 8s3 3.8 3 6.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 16.5c0 2.5-1.8 4.5-4 4.5s-4-2-4-4.5C11.5 13 15.5 8 15.5 8s4 5 4 8.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M4 10.5 12 4l8 6.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 9.5V19h11V9.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M10 19v-5h4v5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Dedicated Gutter Cleaning page — white intro/inclusions, navy results,
 * white guards cross-sell, contained final CTA.
 */
export function GutterCleaningPageContent() {
  return (
    <main id="main-content" className="flex-1">
      <ServicePageHero
        eyebrow="Gutter Care"
        title="Gutter Cleaning"
        description="Professional gutter cleaning for homes across Whitby and Durham Region — clearing accessible debris so water can drain properly."
      />

      {/* Introduction — white */}
      <section
        aria-labelledby="gutter-intro-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)" }}
      >
        <Container width="portfolio">
          <div className="overflow-hidden rounded-[15px] border border-border bg-pure">
            <div className="grid items-stretch lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="flex flex-col justify-center bg-pure px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-10">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
                  Professional Gutter Care
                </p>
                <h2
                  id="gutter-intro-heading"
                  className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
                >
                  Clear Gutters. Better Drainage.
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-navy-muted">
                  Leaves and debris can prevent rainwater from draining
                  properly. Our local student-run team clears gutter buildup to
                  help keep water flowing and your home protected.
                </p>
              </div>

              <figure className="relative m-0 min-h-[16rem] border-t border-border sm:min-h-[18rem] lg:min-h-[20rem] lg:border-l lg:border-t-0">
                <Image
                  src="/services/gutter-cleaning-hose.webp"
                  alt="Team member on a ladder flushing a residential roof gutter with a hose nozzle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-[center_35%]"
                  priority
                />
              </figure>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included — white */}
      <section
        aria-labelledby="gutter-included-heading"
        className="bg-white text-midnight"
        style={{
          paddingBlock:
            "clamp(1.25rem, 2.5vw, 2rem) clamp(3.25rem, 5.5vw, 4.75rem)",
        }}
      >
        <Container width="portfolio">
          <div className="mx-auto max-w-2xl border-t border-border pt-10 text-center sm:pt-11">
            <h2
              id="gutter-included-heading"
              className="font-heading text-[clamp(1.75rem,3.1vw,2.25rem)] font-semibold tracking-tight text-midnight sm:leading-tight"
            >
              What&apos;s Included in Our Gutter Cleaning?
            </h2>
          </div>

          <ul className="mt-10 grid gap-9 sm:mt-11 sm:grid-cols-3 sm:gap-8 lg:gap-10">
            {inclusions.map((item) => (
              <li
                key={item.title}
                className="flex min-w-0 flex-col items-center text-center"
              >
                <span className="text-signature">
                  <InclusionIcon kind={item.icon} />
                </span>
                <h3 className="font-heading mt-4 text-[1.1rem] font-semibold tracking-tight text-midnight sm:text-[1.15rem]">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-[18rem] text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Before & After — full-width navy */}
      <section
        aria-labelledby="gutter-results-heading"
        className="text-pure"
        style={{
          backgroundColor: "#061A38",
          paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)",
        }}
      >
        <Container width="portfolio">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              Real Results
            </p>
            <h2
              id="gutter-results-heading"
              className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-pure sm:mt-3 sm:leading-tight"
            >
              See the Difference a Clean Gutter Makes.
            </h2>
            <p className="mx-auto mt-3.5 max-w-lg text-base leading-relaxed text-white/72">
              See how clearing accumulated debris can make a visible difference
              to your gutters.
            </p>
          </header>

          <div
            className="mx-auto mt-9 max-w-[52rem] rounded-[16px] border border-white/[0.08] p-3 sm:mt-10 sm:p-4 lg:p-5"
            style={{ backgroundColor: "rgba(10, 39, 79, 0.55)" }}
          >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 lg:gap-5">
              {beforeAfter.map((item) => (
                <figure key={item.label} className="m-0 min-w-0">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#061A38] sm:aspect-[5/6]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 26rem"
                      className="object-cover object-center"
                    />
                  </div>
                  <figcaption className="mt-3 flex justify-center">
                    <span className="inline-flex h-8 w-[6.75rem] items-center justify-center rounded-md bg-pure text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-midnight sm:w-[7.25rem] sm:text-xs">
                      {item.label}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col items-center text-center sm:mt-10">
            <h3 className="font-heading text-[clamp(1.35rem,2.4vw,1.65rem)] font-semibold tracking-tight text-pure">
              Keep Your Gutters Flowing Properly.
            </h3>
            <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
              Tell us about your property and we&apos;ll prepare a free,
              personalized gutter-cleaning quote.
            </p>
            <Link
              href={quoteHref({ service: "gutter-cleaning" })}
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
            >
              Get a Free Quote
            </Link>
          </div>
        </Container>
      </section>

      {/* Gutter Guards cross-sell — white */}
      <section
        aria-labelledby="gutter-guards-crosslink-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(2.5rem, 4.5vw, 4rem)" }}
      >
        <Container width="portfolio">
          <aside className="overflow-hidden rounded-[15px]">
            <div className="grid min-h-[13.75rem] sm:min-h-[14.5rem] md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:min-h-[15.5rem] lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
              <div className="relative min-h-[11.5rem] bg-[#0A274F] md:min-h-0">
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
                style={{ backgroundColor: "#061A38" }}
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-[0.7rem]">
                  Related Service
                </p>
                <h2
                  id="gutter-guards-crosslink-heading"
                  className="font-heading mt-2 text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]"
                >
                  Looking for Gutter Guards?
                </h2>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                  Gutter guards can help reduce leaves and debris collecting
                  between cleanings. Learn how they work and whether they&apos;re
                  a good fit for your property.
                </p>
                <div className="mt-5">
                  <Link
                    href="/services/gutter-guards"
                    className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
                  >
                    Explore Gutter Guards →
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <ServicePageCta
        headline="Need Professional Gutter Cleaning?"
        supporting="Request a free, personalized quote from our local student-run team serving Whitby and Durham Region."
        service="gutter-cleaning"
      />
    </main>
  );
}
