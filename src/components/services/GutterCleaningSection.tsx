import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const inclusions = [
  {
    title: "Gutter Debris Removal",
    description:
      "Removal of accessible leaves and debris from gutter channels to help restore proper water flow.",
  },
  {
    title: "Accessible Downspout Clearing",
    description:
      "Clearing accessible downspout blockages as part of the gutter-cleaning service.",
  },
  {
    title: "Careful Work Around Your Property",
    description:
      "Careful work around the home's exterior and responsible handling of removed debris.",
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

/**
 * Gutter Cleaning service section — full-bleed Midnight Navy.
 * Photo left / intro right; genuine gutter-detail photo reused from Our Work.
 */
export function GutterCleaningSection() {
  return (
    <section
      id="gutter-cleaning"
      aria-labelledby="gutter-cleaning-heading"
      className="scroll-mt-28 text-pure"
      style={{
        backgroundColor: "#061A38",
        paddingBlock: "clamp(3.5rem, 6vw, 5rem)",
      }}
    >
      <Container width="portfolio">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.22fr] lg:gap-12">
          <figure className="m-0 order-2 w-full justify-self-center lg:order-1 lg:justify-self-start">
            <div className="relative aspect-[7/8] w-full max-w-[26rem] overflow-hidden rounded-lg bg-[#0A274F] lg:h-[28.5rem] lg:w-[26rem] lg:max-w-none lg:aspect-auto">
              <Image
                src="/our-work/gutter-detail-debris.webp"
                alt="Close-up of a residential gutter holding leaf debris along a shingle roofline"
                fill
                sizes="(max-width: 1024px) min(100vw, 26rem), 26rem"
                className="object-cover object-center"
              />
            </div>
          </figure>

          <div className="order-1 max-w-xl lg:order-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#3999EA] sm:text-xs">
              Professional Gutter Care
            </p>
            <h2
              id="gutter-cleaning-heading"
              className="font-heading mt-2.5 text-3xl font-semibold tracking-tight text-pure sm:mt-3 sm:text-[2.15rem] sm:leading-tight"
            >
              Gutter Cleaning
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Leaves and debris can prevent rainwater from draining properly.
              Our student-run team helps keep your gutters clear and your
              home&apos;s drainage working as intended.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 sm:mt-10 sm:pt-10">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]">
            What&apos;s Included
          </h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-8">
            {inclusions.map((item) => (
              <li key={item.title} className="flex gap-2.5">
                <CheckIcon />
                <div>
                  <p className="text-sm font-semibold tracking-tight text-pure">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 max-w-xl sm:mt-12">
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
