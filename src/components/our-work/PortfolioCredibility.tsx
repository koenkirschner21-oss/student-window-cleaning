import { Container } from "@/components/ui/Container";

/**
 * Compact Midnight Navy credibility band — owner-confirmed 60+ properties serviced.
 */
export function PortfolioCredibility() {
  return (
    <section
      aria-labelledby="portfolio-credibility-heading"
      className="bg-white text-midnight pt-14 pb-0 sm:pt-16"
    >
      <Container width="portfolio">
        <div className="flex min-h-[8.125rem] flex-col justify-center gap-3 rounded-lg bg-midnight px-6 py-7 text-pure sm:min-h-[9rem] sm:flex-row sm:items-center sm:gap-10 sm:px-10 sm:py-8 lg:gap-12 lg:px-12">
          <p className="font-heading shrink-0 text-[clamp(2.75rem,7vw,3.75rem)] font-bold leading-none tracking-tight text-pure">
            60
            <span className="text-[#3999EA]" aria-hidden>
              +
            </span>
            <span className="sr-only"> plus</span>
          </p>
          <div className="min-w-0 max-w-xl">
            <h2
              id="portfolio-credibility-heading"
              className="font-heading text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]"
            >
              Properties Serviced
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-pure/75 sm:text-base">
              Proudly caring for homes and businesses across Whitby and Durham
              Region.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
