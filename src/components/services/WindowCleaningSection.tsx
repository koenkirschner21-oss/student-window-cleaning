import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Unified Window Cleaning service section (Phase 2).
 * Exterior + Interior & Exterior as equal editorial columns — no cards, no multi-quote CTAs.
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
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <h2
              id="window-cleaning-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
            >
              Window Cleaning
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              Bring more clarity and natural light into your home with
              professional window cleaning from our student-run team. Whether you
              need exterior windows cleaned or a complete interior and exterior
              refresh, we&apos;ll help your property look its best.
            </p>
          </div>

          <figure className="m-0 justify-self-center lg:justify-self-end">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg bg-cloud lg:max-w-sm">
              <Image
                src="/services/window-cleaning-branded-scrub.webp"
                alt="Student Window Cleaning team member scrubbing a residential window with a blue scrubber"
                fill
                sizes="(max-width: 1024px) 100vw, 24rem"
                className="object-cover object-[center_20%]"
                priority={false}
              />
            </div>
          </figure>
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:mt-14 sm:pt-12 md:grid-cols-2 md:gap-0">
          <div
            id="exterior-window-cleaning"
            className="scroll-mt-28 md:border-r md:border-border md:pr-10 lg:pr-12"
          >
            <h3 className="font-heading text-xl font-semibold tracking-tight text-midnight sm:text-[1.35rem]">
              Exterior Window Cleaning
            </h3>
            <p className="mt-3 text-base leading-relaxed text-navy-muted">
              A focused exterior clean for accessible window glass and related
              surfaces on the outside of your home.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy-muted">
              Includes tracks, sills, and frames as applicable to accessible
              exterior surfaces. Screen cleaning is available as an additional
              service.
            </p>
          </div>

          <div
            id="interior-exterior-window-cleaning"
            className="scroll-mt-28 md:pl-10 lg:pl-12"
          >
            <h3 className="font-heading text-xl font-semibold tracking-tight text-midnight sm:text-[1.35rem]">
              Interior &amp; Exterior Window Cleaning
            </h3>
            <p className="mt-3 text-base leading-relaxed text-navy-muted">
              A complete inside-and-out refresh so both sides of your windows
              look clear and well cared for.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy-muted">
              Includes tracks, sills, and frames as applicable to accessible
              interior and exterior surfaces. Screen cleaning is available as an
              additional service.
            </p>
          </div>
        </div>

        <p className="mt-10">
          <Link
            href="/cleaning-plans"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-signature transition-colors hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
          >
            Explore Cleaning Plans
            <span aria-hidden className="translate-y-px">
              →
            </span>
          </Link>
        </p>
      </Container>
    </section>
  );
}
