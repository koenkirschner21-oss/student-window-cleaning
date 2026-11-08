import { PropertyCard } from "@/components/our-work/PropertyCard";
import { Container } from "@/components/ui/Container";
import type { WorkProject } from "@/lib/our-work";

type PropertyPortfolioProps = {
  residential: WorkProject[];
  commercial: WorkProject[];
};

function HouseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="size-[1.15rem] text-signature"
    >
      <path
        d="M4.5 10.5 12 4.5l7.5 6V19a1 1 0 0 1-1 1h-4.25v-5.25h-4.5V20H5.5a1 1 0 0 1-1-1v-8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="size-[1.15rem] text-signature"
    >
      <path
        d="M5.5 20.5V5.75A1.25 1.25 0 0 1 6.75 4.5h6a1.25 1.25 0 0 1 1.25 1.25V20.5M13.999 9.5h3.75A1.25 1.25 0 0 1 19 10.75V20.5M5.5 20.5h13M8.25 8h2.5M8.25 11.5h2.5M8.25 15h2.5M15.75 13h1M15.75 16.25h1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PropertyPortfolio({
  residential,
  commercial,
}: PropertyPortfolioProps) {
  return (
    <>
      <section
        aria-labelledby="residential-properties-heading"
        className="bg-pure text-midnight"
        style={{ paddingBlock: "var(--space-section-y)" }}
      >
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex size-8 items-center justify-center rounded-md bg-ice">
                <HouseIcon />
              </span>
              <h2
                id="residential-properties-heading"
                className="font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-[1.75rem]"
              >
                Residential Properties
              </h2>
            </div>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-navy-muted">
              A look at the homes we&apos;ve worked on, from everyday residential
              properties to larger multi-storey homes.
            </p>
          </div>

          <ul className="mt-9 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-9">
            {residential.map((project) => (
              <li key={project.id} className="min-w-0">
                <PropertyCard project={project} variant="residential" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="commercial-properties-heading"
        className="border-t border-border bg-cloud text-midnight"
        style={{ paddingBlock: "var(--space-section-y)" }}
      >
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex size-8 items-center justify-center rounded-md bg-pure">
                <BuildingIcon />
              </span>
              <h2
                id="commercial-properties-heading"
                className="font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-[1.75rem]"
              >
                Commercial Properties
              </h2>
            </div>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-navy-muted">
              Selected commercial properties we&apos;ve serviced, including local
              businesses and larger storefronts.
            </p>
          </div>

          <ul className="mt-9 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-8 lg:max-w-4xl">
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
