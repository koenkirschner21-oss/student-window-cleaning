"use client";

import Image from "next/image";
import type { WorkProject } from "@/lib/our-work";
import { isProjectMediaReady } from "@/lib/our-work";

type PropertyCardProps = {
  project: WorkProject;
  /** Featured lead uses a wider standalone frame. */
  variant?: "featured" | "residential" | "commercial";
  onOpen?: (project: WorkProject) => void;
};

/**
 * Photo containers sized to the image — object-contain, natural ratios.
 * Title below only. Clickable only when a project has multiple photos.
 */
export function PropertyCard({
  project,
  variant = "residential",
  onOpen,
}: PropertyCardProps) {
  const ready = isProjectMediaReady(project);
  const cover = project.media[0];
  const coverSrc = project.thumbnail ?? cover?.src ?? null;
  const coverAlt = cover?.alt ?? project.title;
  const width = cover?.width ?? 1536;
  const height = cover?.height ?? 2048;
  const multiPhoto = project.media.length > 1;
  const canOpen = ready && multiPhoto && onOpen;

  const frameClass =
    variant === "featured"
      ? "mx-auto w-full max-w-[68.75rem]"
      : "w-full";

  const mediaFrame = (
    <div
      className={`relative overflow-hidden rounded-sm bg-[#eef1f4] ${frameClass}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {ready && coverSrc ? (
        <Image
          src={coverSrc}
          alt={coverAlt}
          fill
          sizes={
            variant === "featured"
              ? "(max-width: 768px) 100vw, 68.75rem"
              : variant === "commercial"
                ? "(max-width: 768px) 100vw, 36rem"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24rem"
          }
          className="object-contain object-center transition-opacity duration-300 ease-out motion-safe:group-hover:opacity-[0.97]"
          priority={variant === "featured"}
        />
      ) : (
        <div
          className="absolute inset-0 bg-[#e8ecf0]"
          role="img"
          aria-label={`${project.title} — media coming soon`}
        />
      )}
    </div>
  );

  return (
    <article className="group min-w-0">
      {canOpen ? (
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

      <h3
        className={`font-heading mt-3 font-semibold tracking-tight text-midnight ${
          variant === "featured"
            ? "text-lg sm:text-xl"
            : "text-[1.05rem] sm:text-lg"
        }`}
      >
        {project.title}
      </h3>
    </article>
  );
}
