import { Container } from "@/components/ui/Container";

/**
 * Editorial credibility statement after the residential gallery.
 * Owner-supplied 60+ figure — treated as a confirmed business claim.
 */
export function PortfolioCredibility() {
  return (
    <section
      aria-labelledby="portfolio-credibility-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "var(--space-section-y-tight)" }}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-[clamp(3.25rem,8vw,4.75rem)] font-bold leading-none tracking-tight text-midnight">
            60
            <span className="text-signature" aria-hidden>
              +
            </span>
            <span className="sr-only"> plus</span>
          </p>
          <h2
            id="portfolio-credibility-heading"
            className="font-heading mt-3 text-xl font-semibold tracking-tight text-midnight sm:text-2xl"
          >
            More Properties Serviced
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-navy-muted sm:text-[1.05rem]">
            These are just a few of the homes and properties we&apos;ve taken care
            of across Whitby and Durham Region.
          </p>
        </div>
      </Container>
    </section>
  );
}
