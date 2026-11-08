import { Container } from "@/components/ui/Container";

/**
 * Compact Midnight Navy credibility band after residential.
 * Owner-supplied 60+ figure — wording uses "More" pending total-vs-additional confirmation.
 */
export function PortfolioCredibility() {
  return (
    <section
      aria-labelledby="portfolio-credibility-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "var(--space-section-y-tight)" }}
    >
      <Container width="portfolio">
        <div className="rounded-md bg-midnight px-6 py-8 text-pure sm:px-10 sm:py-9 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10 lg:gap-14">
            <p className="font-heading shrink-0 text-[clamp(3.5rem,9vw,5rem)] font-bold leading-none tracking-tight text-pure">
              60
              <span className="text-sky" aria-hidden>
                +
              </span>
              <span className="sr-only"> plus</span>
            </p>
            <div className="min-w-0 max-w-xl">
              <h2
                id="portfolio-credibility-heading"
                className="font-heading text-xl font-semibold tracking-tight text-pure sm:text-2xl"
              >
                More Properties We&apos;ve Cared For
              </h2>
              <p className="mt-2.5 text-base leading-relaxed text-pure/75 sm:text-[1.05rem]">
                These featured homes are just a small selection of the
                properties we&apos;ve taken care of across Whitby &amp; Durham.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
