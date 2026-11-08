"use client";

import { useCallback, useState } from "react";
import { PortfolioCredibility } from "@/components/our-work/PortfolioCredibility";
import { PropertyCard } from "@/components/our-work/PropertyCard";
import { WorkLightbox } from "@/components/our-work/WorkLightbox";
import { Container } from "@/components/ui/Container";
import type { WorkMediaItem, WorkProject } from "@/lib/our-work";

type PropertyPortfolioProps = {
  featured: WorkProject;
  supporting: WorkProject[];
  commercial: WorkProject[];
};

type LightboxState = {
  media: WorkMediaItem[];
  index: number;
} | null;

export function PropertyPortfolio({
  featured,
  supporting,
  commercial,
}: PropertyPortfolioProps) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openProject = useCallback((project: WorkProject) => {
    if (project.media.length < 2) return;
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

  const supportingRowA = supporting.slice(0, 2);
  const supportingRowB = supporting.slice(2, 5);

  return (
    <>
      <section
        aria-labelledby="residential-properties-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "var(--space-section-y)" }}
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
              A look at the homes we&apos;ve worked on across Whitby and Durham
              Region.
            </p>
          </div>

          {/* Featured lead — large standalone, natural portrait ratio */}
          <div className="mt-10">
            <PropertyCard
              project={featured}
              variant="featured"
              onOpen={openProject}
            />
          </div>

          {/* Supporting: desktop 2 then 3; tablet 2-col; mobile 1-col */}
          <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
            <ul className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-9">
              {supportingRowA.map((project) => (
                <li key={project.id} className="min-w-0">
                  <PropertyCard
                    project={project}
                    variant="residential"
                    onOpen={openProject}
                  />
                </li>
              ))}
            </ul>
            <ul className="grid grid-cols-1 items-start gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {supportingRowB.map((project) => (
                <li key={project.id} className="min-w-0">
                  <PropertyCard
                    project={project}
                    variant="residential"
                    onOpen={openProject}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <PortfolioCredibility />

      <section
        aria-labelledby="commercial-properties-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "var(--space-section-y)" }}
      >
        <Container width="portfolio">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-muted sm:text-xs">
              Commercial Work
            </p>
            <h2
              id="commercial-properties-heading"
              className="font-heading mt-2.5 text-2xl font-semibold tracking-tight text-midnight sm:text-[1.75rem]"
            >
              Professional Care for Local Businesses.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-navy-muted">
              Clear storefronts and first impressions for businesses across the
              community.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 items-start gap-x-9 gap-y-10 md:grid-cols-2">
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
