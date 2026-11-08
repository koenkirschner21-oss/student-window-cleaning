import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

/**
 * Gutter Cleaning service section (Phase 3).
 * Photo left / copy right on Cloud White — genuine residential exterior with clear gutters.
 */
export function GutterCleaningSection() {
  return (
    <section
      id="gutter-cleaning"
      aria-labelledby="gutter-cleaning-heading"
      className="scroll-mt-28 text-midnight"
      style={{
        backgroundColor: "#F3F7FB",
        paddingBlock: "clamp(3.5rem, 6vw, 5rem)",
      }}
    >
      <Container width="portfolio">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <figure className="m-0 order-2 justify-self-center lg:order-1 lg:justify-self-start">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg bg-white lg:max-w-sm">
              <Image
                src="/services/gutter-cleaning-residential-roofline.webp"
                alt="Residential home with clearly visible gutters and downspouts along a multi-gable roofline"
                fill
                sizes="(max-width: 1024px) 100vw, 24rem"
                className="object-cover object-[center_35%]"
              />
            </div>
          </figure>

          <div className="order-1 max-w-xl lg:order-2">
            <h2
              id="gutter-cleaning-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
            >
              Gutter Cleaning
            </h2>
            <p className="font-heading mt-3 text-xl font-semibold tracking-tight text-midnight sm:text-[1.35rem]">
              Keep Your Gutters Flowing.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              Leaves and debris can block gutters and prevent water from draining
              properly. Regular clearing helps protect your home&apos;s exterior
              and keep runoff moving away from the foundation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              Our service focuses on{" "}
              <span className="font-medium text-midnight">
                gutter debris removal and clearing accessible downspout
                blockages
              </span>
              . It does not include pressure flushing, underground drainage work,
              repairs, or other extras.
            </p>
            <p className="mt-8">
              <Link
                href={quoteHref({ service: "gutter-cleaning" })}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
              >
                Get a Free Quote
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
