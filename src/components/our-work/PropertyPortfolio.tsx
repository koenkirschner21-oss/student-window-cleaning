"use client";

import { useCallback, useState } from "react";
import { PortfolioCredibility } from "@/components/our-work/PortfolioCredibility";
import { PropertyCard } from "@/components/our-work/PropertyCard";
import { WorkLightbox } from "@/components/our-work/WorkLightbox";
import { Container } from "@/components/ui/Container";
import type { WorkMediaItem, WorkProject } from "@/lib/our-work";

type PropertyPortfolioProps = {
  residential: WorkProject[];
  commercial: WorkProject[];
};

type LightboxState = {
  media: WorkMediaItem[];
  index: number;
} | null;

export function PropertyPortfolio({
  residential,
  commercial,
}: PropertyPortfolioProps) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openProject = useCallback((project: WorkProject) => {
    if (project.media.length === 0) return;
    setLightbox({ media: project.media, index: 0 });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  const navigateLightbox = useCallback((index: number) => {
    setLightbox((current) =>
      current ? { ...current, index } : current,
    );
  }, []);

  return (
    <>
      <section
        aria-labelledby="residential-properties-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "var(--space-section-y)" }}
      >
        {/* max-w-6xl ≈ 1152px — larger 2×3 residential photos */}
        <Container>
          <div className="max-w-2xl">
            <h2
              id="residential-properties-heading"
              className="font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-[1.75rem]"
            >
              Residential Properties
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-navy-muted">
              A look at the homes we&apos;ve worked on across Whitby and Durham
              Region.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-9 sm:gap-y-12">
            {residential.map((project) => (
              <li key={project.id} className="min-w-0">
                <PropertyCard
                  project={project}
                  variant="residential"
                  onOpen={openProject}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <PortfolioCredibility />

      <section
        aria-labelledby="commercial-properties-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "var(--space-section-y)" }}
      >
        <Container>
          <div className="max-w-2xl">
            <h2
              id="commercial-properties-heading"
              className="font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-[1.75rem]"
            >
              Commercial Properties
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-navy-muted">
              Selected commercial properties we&apos;ve serviced.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-x-9 gap-y-10 md:grid-cols-2">
            {commercial.map((project) => (
              <li key={project.id} className="min-w-0">
                <PropertyCard
                  project={project}
                  variant="commercial"
                  onOpen={openProject}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <WorkLightbox
        media={lightbox?.media ?? []}
        index={lightbox?.index ?? null}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />
    </>
  );
}
