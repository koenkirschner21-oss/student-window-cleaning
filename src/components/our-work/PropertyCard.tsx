"use client";

import Image from "next/image";
import type { WorkProject } from "@/lib/our-work";
import { isProjectMediaReady } from "@/lib/our-work";

type PropertyCardProps = {
  project: WorkProject;
  /** Wider landscape frame for commercial cards. */
  variant?: "residential" | "commercial";
  onOpen?: (project: WorkProject) => void;
};

/**
 * Photo + short title only. No eyebrows, badges, icons, overlays, or photo counts.
 */
export function PropertyCard({
  project,
  variant = "residential",
  onOpen,
}: PropertyCardProps) {
  const aspect =
    variant === "commercial" ? "aspect-[8/5]" : "aspect-[4/3]";
  const ready = isProjectMediaReady(project);
  const cover = project.thumbnail ?? project.media[0]?.src ?? null;
  const coverAlt = project.media[0]?.alt ?? project.title;

  const mediaFrame = (
    <div
      className={`relative w-full overflow-hidden rounded-sm bg-[#f3f5f7] ${aspect}`}
    >
      {ready && cover ? (
        <Image
          src={cover}
          alt={coverAlt}
          fill
          sizes={
            variant === "commercial"
              ? "(max-width: 768px) 100vw, 36rem"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36rem"
          }
          className="object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.015]"
        />
      ) : (
        <div
          className="absolute inset-0 bg-[#eef2f6]"
          role="img"
          aria-label={`${project.title} — media coming soon`}
        />
      )}
    </div>
  );

  return (
    <article className="group min-w-0">
      {ready && onOpen ? (
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="block w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
          aria-label={`View photos of ${project.title}`}
        >
          {mediaFrame}
        </button>
      ) : (
        mediaFrame
      )}

      <h3 className="font-heading mt-3 text-[1.05rem] font-semibold tracking-tight text-midnight sm:text-lg">
        {project.title}
      </h3>
    </article>
  );
}
