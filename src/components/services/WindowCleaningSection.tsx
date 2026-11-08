import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const exteriorChecks = [
  "Exterior window glass",
  "Accessible exterior frames",
  "Applicable exterior sills and tracks",
] as const;

const interiorExteriorChecks = [
  "Everything in exterior cleaning",
  "Interior window glass",
  "Applicable interior frames, sills and tracks",
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
 * Window Cleaning service section — photography-led options.
 * Intro split preserved; 4:3 option photos reuse genuine Our Work assets.
 */
export function WindowCleaningSection() {
  return (
    <section
      id="window-cleaning"
      aria-labelledby="window-cleaning-heading"
      className="scroll-mt-28 bg-white text-midnight"
      style={{ paddingBlock: "clamp(3.5rem, 6vw, 5rem)" }}
    >
      <Container width="portfolio">
        <div className="grid items-center gap-8 lg:grid-cols-[1.22fr_1fr] lg:gap-12">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
              Professional Window Care
            </p>
            <h2
              id="window-cleaning-heading"
              className="font-heading mt-2.5 text-3xl font-semibold tracking-tight text-midnight sm:mt-3 sm:text-[2.15rem] sm:leading-tight"
            >
              Window Cleaning
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              Clean windows make a difference in how your home looks and feels.
              From exterior glass to complete inside-and-out cleaning, we offer
              flexible options to suit your property.
            </p>
          </div>

          <figure className="m-0 w-full justify-self-center lg:justify-self-end">
            <div className="relative aspect-[7/8] w-full max-w-[26rem] overflow-hidden rounded-lg bg-cloud lg:ml-auto lg:h-[28.5rem] lg:w-[26rem] lg:max-w-none lg:aspect-auto">
              <Image
                src="/about/about-hero-student-window-cleaning.webp"
                alt="Student Window Cleaning team member cleaning a residential window with a squeegee"
                fill
                sizes="(max-width: 1024px) min(100vw, 26rem), 26rem"
                className="object-cover object-[center_18%]"
              />
            </div>
          </figure>
        </div>

        <div className="mt-8 grid gap-10 border-t border-border pt-8 sm:mt-10 sm:gap-0 sm:pt-10 md:grid-cols-2">
          <div
            id="exterior-window-cleaning"
            className="scroll-mt-28 md:border-r md:border-border md:pr-10 lg:pr-12"
          >
            <figure className="m-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-cloud">
                <Image
                  src="/our-work/cleaning-action-bay-window.webp"
                  alt="Student Window Cleaning team member washing the exterior glass of a residential bay window"
                  fill
                  sizes="(max-width: 768px) 100vw, 36rem"
                  className="object-cover object-[center_40%]"
                />
              </div>
            </figure>
            <h3 className="font-heading mt-5 text-xl font-semibold tracking-tight text-midnight sm:text-[1.35rem]">
              Exterior Window Cleaning
            </h3>
            <p className="mt-3 text-base leading-relaxed text-navy-muted">
              Refresh your home&apos;s exterior windows and their accessible
              surrounding details.
            </p>
            <ul className="mt-5 space-y-2.5">
              {exteriorChecks.map((item) => (
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

          <div
            id="interior-exterior-window-cleaning"
            className="scroll-mt-28 border-t border-border pt-8 md:border-t-0 md:pl-10 md:pt-0 lg:pl-12"
          >
            <figure className="m-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-cloud">
                <Image
                  src="/our-work/cleaning-action-squeegee.webp"
                  alt="Close-up of a Student Window Cleaning team member squeegeeing residential window glass"
                  fill
                  sizes="(max-width: 768px) 100vw, 36rem"
                  className="object-cover object-[center_35%]"
                />
              </div>
            </figure>
            <h3 className="font-heading mt-5 text-xl font-semibold tracking-tight text-midnight sm:text-[1.35rem]">
              Interior &amp; Exterior Window Cleaning
            </h3>
            <p className="mt-3 text-base leading-relaxed text-navy-muted">
              A more complete clean that takes care of both sides of your
              windows.
            </p>
            <ul className="mt-5 space-y-2.5">
              {interiorExteriorChecks.map((item) => (
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

        <div className="mt-12 max-w-xl sm:mt-14">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-midnight sm:text-[1.35rem]">
            Ready for Cleaner Windows?
          </h3>
          <p className="mt-3 text-base leading-relaxed text-navy-muted">
            Tell us about your property and receive a free personalized virtual
            quote.
          </p>
          <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/cleaning-plans"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-muted transition-colors hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
            >
              Explore Cleaning Plans
              <span aria-hidden className="translate-y-px">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
