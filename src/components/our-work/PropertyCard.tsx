"use client";

import Image from "next/image";
import type { WorkProject } from "@/lib/our-work";
import { isProjectMediaReady } from "@/lib/our-work";

type PropertyCardProps = {
  project: WorkProject;
  /** Wider media frame for commercial cards. */
  variant?: "residential" | "commercial";
  onOpen?: (project: WorkProject) => void;
};

/**
 * Project card with real property photography.
 * Opens that project's own media slideshow when ready — no decorative house icons.
 */
export function PropertyCard({
  project,
  variant = "residential",
  onOpen,
}: PropertyCardProps) {
  const aspect =
    variant === "commercial" ? "aspect-[5/3]" : "aspect-[4/3]";
  const ready = isProjectMediaReady(project);
  const cover = project.thumbnail ?? project.media[0]?.src ?? null;
  const coverAlt = project.media[0]?.alt ?? project.title;

  const mediaFrame = (
    <div
      className={`relative w-full overflow-hidden rounded-md bg-cloud ${aspect}`}
    >
      {ready && cover ? (
        <Image
          src={cover}
          alt={coverAlt}
          fill
          sizes={
            variant === "commercial"
              ? "(max-width: 640px) 100vw, 28rem"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.02]"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #F7FAFC 0%, #E9F3FC 48%, #DEEAF6 100%)",
          }}
          role="img"
          aria-label={`${project.title} — media coming soon`}
        />
      )}
      <div
        aria-hidden
        className="absolute inset-0 border border-transparent transition-[border-color,box-shadow] duration-300 motion-safe:group-hover:border-signature/25 motion-safe:group-hover:shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-signature-blue)_18%,transparent)]"
      />
      {ready && project.media.length > 1 ? (
        <span className="absolute bottom-2.5 right-2.5 rounded bg-midnight/75 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-pure">
          {project.media.length} photos
        </span>
      ) : null}
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

      <div className="mt-3.5 px-0.5">
        {project.typeLabel ? (
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-signature">
            {project.typeLabel}
          </p>
        ) : null}
        <h3 className="font-heading mt-1 text-base font-semibold tracking-tight text-midnight sm:text-[1.05rem]">
          {project.title}
        </h3>
      </div>
    </article>
  );
}
