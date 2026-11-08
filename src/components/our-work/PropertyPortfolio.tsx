import { PortfolioCredibility } from "@/components/our-work/PortfolioCredibility";
import { PropertyCard } from "@/components/our-work/PropertyCard";
import { Container } from "@/components/ui/Container";
import type { WorkProject } from "@/lib/our-work";

type PropertyPortfolioProps = {
  residential: WorkProject[];
  commercial: WorkProject[];
};

/**
 * V6 locked layout: equal 3×2 residential 4:3 grid, compact 60+, equal commercial cards.
 */
export function PropertyPortfolio({
  residential,
  commercial,
}: PropertyPortfolioProps) {
  return (
    <>
      <section
        aria-labelledby="residential-properties-heading"
        className="bg-white text-midnight pt-[4.5rem] pb-0 sm:pt-20 sm:pb-0 lg:pt-[5.25rem]"
      >
        <Container width="portfolio">
          <div className="max-w-2xl">
            <h2
              id="residential-properties-heading"
              className="font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-[1.75rem]"
            >
              Residential Properties
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-navy-muted">
              A selection of homes we&apos;ve cared for across Whitby and Durham
              Region.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-9 lg:grid-cols-3">
            {residential.map((project, index) => (
              <li key={project.id} className="min-w-0">
                <PropertyCard
                  project={project}
                  variant="residential"
                  priority={index < 3}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <PortfolioCredibility />

      <section
        aria-labelledby="commercial-properties-heading"
        className="bg-white text-midnight pt-16 pb-0 sm:pt-20 lg:pt-[5.25rem]"
      >
        <Container width="portfolio">
          <div className="max-w-[42.5rem]">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-muted sm:text-xs">
              Commercial Work
            </p>
            <h2
              id="commercial-properties-heading"
              className="font-heading mt-2.5 text-2xl font-semibold tracking-tight text-midnight sm:text-[1.75rem]"
            >
              Professional Care for Local Businesses.
            </h2>
            <p className="mt-3 max-w-[42.5rem] text-base leading-relaxed text-navy-muted">
              Clear storefronts and great first impressions for businesses across
              our community.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-x-7 gap-y-8 md:grid-cols-2 md:gap-x-8">
            {commercial.map((project) => (
              <li key={project.id} className="min-w-0">
                <PropertyCard project={project} variant="commercial" />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
