import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const inclusions = [
  {
    title: "Gutter Debris Removal",
    description:
      "Clear accessible leaves and debris from gutter channels to help restore proper water flow.",
  },
  {
    title: "Accessible Downspout Clearing",
    description:
      "Address accessible downspout blockages so rainwater can drain away from your home.",
  },
  {
    title: "Careful Work Around Your Property",
    description:
      "Work carefully around landscaping and exterior finishes, with responsible debris handling.",
  },
] as const;

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="mt-0.5 size-3.5 shrink-0 text-sky"
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
        paddingBlock: "clamp(3.75rem, 6.5vw, 5.25rem)",
      }}
    >
      <Container width="portfolio">
        {/* 1) Intro — text left / photo right */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12 xl:gap-14">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              Professional Gutter Care
            </p>
            <h2
              id="gutter-cleaning-heading"
              className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.25rem)] font-semibold tracking-tight text-pure sm:mt-3 sm:leading-tight"
            >
              Gutter Cleaning
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/72 sm:text-[1.05rem]">
              Leaves and debris can block gutters and cause overflow during
              rain. Our student-run team clears accessible buildup so water can
              drain properly and your home stays better protected.
            </p>
          </div>

          <figure className="m-0 w-full justify-self-center lg:justify-self-end">
            <div className="relative aspect-[4/5] w-full max-w-[25rem] overflow-hidden rounded-[14px] border border-white/10 bg-[#0A274F] sm:aspect-[5/6] lg:ml-auto lg:h-[26rem] lg:w-[23.5rem] lg:max-w-none lg:aspect-auto">
              <Image
                src="/services/gutter-cleaning-hose.webp"
                alt="Team member on a ladder flushing a residential roof gutter with a hose nozzle"
                fill
                sizes="(max-width: 1024px) min(100vw, 25rem), 23.5rem"
                className="object-cover object-[center_35%]"
              />
            </div>
          </figure>
        </div>

        {/* 2) What's Included */}
        <div className="mt-11 border-t border-white/10 pt-9 sm:mt-12 sm:pt-10">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]">
            What&apos;s Included
          </h3>
          <ul className="mt-7 grid gap-8 sm:grid-cols-3 sm:gap-x-8 lg:gap-x-10">
            {inclusions.map((item, index) => (
              <li
                key={item.title}
                className={[
                  "flex gap-3",
                  index > 0
                    ? "border-t border-white/10 pt-7 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0 lg:pl-10"
                    : "",
                ].join(" ")}
              >
                <CheckIcon />
                <div className="min-w-0">
                  <p className="text-[0.95rem] font-semibold tracking-tight text-pure sm:text-base">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 3) Real Results — contained comparison module */}
        <div className="mt-11 border-t border-white/10 pt-10 sm:mt-12 sm:pt-11">
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

          <div className="mx-auto mt-7 max-w-[46rem] rounded-[16px] border border-white/10 bg-[#0A274F]/40 p-3 sm:mt-8 sm:p-4">
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
          <p className="mx-auto mt-3 max-w-[46rem] text-center text-xs leading-relaxed text-white/45">
            Authentic before-and-after photos from slightly different angles —
            the after image is orientation-aligned for a clearer comparison.
          </p>
        </div>

        {/* 4) Gutter Cleaning CTA */}
        <div className="mt-10 flex flex-col items-center border-t border-white/10 pt-10 text-center sm:mt-11 sm:pt-11">
          <h3 className="font-heading text-[clamp(1.35rem,2.4vw,1.65rem)] font-semibold tracking-tight text-pure">
            Keep Your Gutters Flowing Properly.
          </h3>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
            Tell us about your property and we&apos;ll prepare a free,
            personalized quote for professional gutter cleaning.
          </p>
          <Link
            href={quoteHref({ service: "gutter-cleaning" })}
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* 5) Gutter Guards add-on — photo + content, mirrors Screen Cleaning */}
        <aside
          id="gutter-guards"
          className="mt-10 overflow-hidden rounded-[15px] sm:mt-11"
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
