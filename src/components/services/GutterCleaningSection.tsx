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
 * Gutter Cleaning service section — full-bleed Midnight Navy.
 * Intro: text left / photo right (alternates from Screen Cleaning above).
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
        {/* Intro — text left, photo right; mobile stacks text then photo */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-14">
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
            <div className="relative aspect-[4/5] w-full max-w-[26rem] overflow-hidden rounded-[14px] bg-[#0A274F] sm:aspect-[5/6] lg:ml-auto lg:h-[27rem] lg:w-[24.5rem] lg:max-w-none lg:aspect-auto">
              <Image
                src="/services/gutter-cleaning-hose.webp"
                alt="Team member on a ladder flushing a residential roof gutter with a hose nozzle"
                fill
                sizes="(max-width: 1024px) min(100vw, 26rem), 24.5rem"
                className="object-cover object-[center_35%]"
              />
            </div>
          </figure>
        </div>

        {/* What's Included — minimal 3-column on navy */}
        <div className="mt-11 border-t border-white/10 pt-9 sm:mt-12 sm:pt-10">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]">
            What&apos;s Included
          </h3>
          <ul className="mt-7 grid gap-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-0 lg:gap-x-10">
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

        {/* Real Results — preserved; spacing only */}
        <div className="mt-11 border-t border-white/10 pt-10 sm:mt-12 sm:pt-11">
          <header className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              Real Results
            </p>
            <h3 className="font-heading mt-2.5 text-[clamp(1.55rem,2.8vw,1.95rem)] font-semibold tracking-tight text-pure">
              See the Difference a Clean Gutter Makes.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">
              Clearing accumulated leaves and debris helps restore water flow
              and keep gutters functioning as intended.
            </p>
          </header>

          <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
            {(
              [
                {
                  src: "/before-after/gutters/before.webp",
                  alt: "Residential gutter channel filled with leaves and debris before cleaning",
                  label: "Before — Debris Buildup",
                  objectPosition: "center",
                },
                {
                  src: "/before-after/gutters/after.webp",
                  alt: "Cleared residential gutter channel after debris removal",
                  label: "After — Cleared Gutter",
                  objectPosition: "center",
                },
              ] as const
            ).map((item) => (
              <figure key={item.label} className="m-0 min-w-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] border border-white/10 bg-[#0A274F] sm:aspect-[5/6]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 42vw"
                    className="object-cover"
                    style={{ objectPosition: item.objectPosition }}
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-pure/95 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-midnight">
                    {item.label}
                  </span>
                </div>
              </figure>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-white/50">
            Photos show the same gutter style from slightly different angles —
            presented side-by-side to preserve authentic results.
          </p>
        </div>

        <div className="mt-11 max-w-xl sm:mt-12">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]">
            Keep Your Gutters Flowing Properly.
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/70">
            Tell us about your property and we&apos;ll prepare a free
            personalized quote for your gutter cleaning.
          </p>
          <p className="mt-7">
            <Link
              href={quoteHref({ service: "gutter-cleaning" })}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
            >
              Get a Free Quote
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
