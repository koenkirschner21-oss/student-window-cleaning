"use client";

import Image from "next/image";
import type { WorkProject } from "@/lib/our-work";
import { isProjectMediaReady } from "@/lib/our-work";

type PropertyCardProps = {
  project: WorkProject;
  variant?: "residential" | "commercial";
  priority?: boolean;
};

/**
 * Equal 4:3 photo frame + title (and optional type label).
 * Frame size is fixed — source aspect never dictates card height.
 */
export function PropertyCard({
  project,
  variant = "residential",
  priority = false,
}: PropertyCardProps) {
  const ready = isProjectMediaReady(project);
  const cover = project.media[0];
  const coverSrc = project.thumbnail ?? cover?.src ?? null;
  const coverAlt = cover?.alt ?? project.title;
  const objectFit = cover?.objectFit ?? "cover";
  const objectPosition = cover?.objectPosition ?? "center center";

  const mediaFrame = (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#eef1f4]">
      {ready && coverSrc ? (
        <Image
          src={coverSrc}
          alt={coverAlt}
          fill
          sizes={
            variant === "commercial"
              ? "(max-width: 768px) 100vw, 36rem"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24rem"
          }
          className={
            objectFit === "contain" ? "object-contain" : "object-cover"
          }
          style={{ objectPosition }}
          priority={priority}
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
    <article className="min-w-0">
      {mediaFrame}
      <h3 className="font-heading mt-2.5 text-base font-semibold tracking-tight text-midnight">
        {project.title}
      </h3>
      {project.typeLabel ? (
        <p className="mt-0.5 text-sm leading-snug text-navy-muted">
          {project.typeLabel}
        </p>
      ) : null}
      {project.location ? (
        <p className="mt-1.5 flex items-center gap-1.5 text-[0.8125rem] leading-snug text-navy-muted">
          <MapPinIcon />
          <span>{project.location}</span>
        </p>
      ) : null}
    </article>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="size-3.5 shrink-0 text-signature"
    >
      <path
        d="M8 8.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 7.1c0 2.85-3.35 5.9-4.2 6.7a.4.4 0 0 1-.6 0C6.85 13 3.5 9.95 3.5 7.1a4.5 4.5 0 1 1 9 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
