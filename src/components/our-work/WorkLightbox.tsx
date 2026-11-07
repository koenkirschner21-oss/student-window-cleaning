"use client";

import Image from "next/image";
import { useEffect, useId } from "react";
import type { WorkPhoto } from "@/lib/our-work";

type WorkLightboxProps = {
  photo: WorkPhoto | null;
  onClose: () => void;
};

export function WorkLightbox({ photo, onClose }: WorkLightboxProps) {
  const titleId = useId();

  useEffect(() => {
    if (!photo) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  const caption =
    photo.caption ??
    [photo.alt, photo.location].filter(Boolean).join(" — ");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/80 p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-h-full w-full max-w-5xl overflow-auto rounded-md bg-pure"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex min-h-10 min-w-10 items-center justify-center rounded-md bg-pure/95 text-sm font-semibold text-midnight shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
        >
          Close
          <span className="sr-only"> enlarged photo</span>
        </button>

        <div className="relative aspect-[4/3] w-full bg-cloud sm:aspect-[16/10]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 64rem"
            priority
          />
        </div>

        <div className="border-t border-border px-5 py-4">
          <p id={titleId} className="font-heading text-sm font-semibold text-midnight">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}
