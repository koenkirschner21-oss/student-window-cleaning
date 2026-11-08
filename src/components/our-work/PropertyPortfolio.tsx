"use client";

import { useCallback, useState } from "react";
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
        className="bg-pure text-midnight"
        style={{ paddingBlock: "var(--space-section-y)" }}
      >
        <Container>
          <div className="max-w-2xl">
            <h2
              id="residential-properties-heading"
              className="font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-[1.75rem]"
            >
              Residential Properties
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-navy-muted">
              A look at the homes we&apos;ve worked on, from everyday residential
              properties to larger multi-storey homes.
            </p>
          </div>

          <ul className="mt-9 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-9">
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

      <section
        aria-labelledby="commercial-properties-heading"
        className="border-t border-border bg-cloud text-midnight"
        style={{ paddingBlock: "var(--space-section-y)" }}
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="commercial-properties-heading"
              className="font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-[1.75rem]"
            >
              Commercial Properties
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-navy-muted">
              Selected commercial properties we&apos;ve serviced, including local
              businesses and larger storefronts.
            </p>
          </div>

          <ul className="mx-auto mt-9 grid max-w-3xl grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-8">
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
