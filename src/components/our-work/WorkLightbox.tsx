"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import type { WorkMediaItem } from "@/lib/our-work";

type WorkLightboxProps = {
  media: WorkMediaItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

/**
 * Accessible per-project media lightbox.
 * Each card opens only its own `media[]` slideshow.
 */
export function WorkLightbox({
  media,
  index,
  onClose,
  onNavigate,
}: WorkLightboxProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const item = index === null ? null : media[index];
  const hasPrev = index !== null && index > 0;
  const hasNext = index !== null && index < media.length - 1;

  useEffect(() => {
    if (index === null) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowLeft" && index !== null && index > 0) {
        onNavigate(index - 1);
      }
      if (
        event.key === "ArrowRight" &&
        index !== null &&
        index < media.length - 1
      ) {
        onNavigate(index + 1);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, onClose, onNavigate, media.length]);

  if (!item || index === null) return null;

  const caption = item.caption ?? item.alt;
  const width = item.width ?? 1200;
  const height = item.height ?? 1600;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/85 p-3 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-md bg-pure"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchStartX.current;
          const end = event.changedTouches[0]?.clientX;
          touchStartX.current = null;
          if (start == null || end == null) return;
          const delta = end - start;
          if (Math.abs(delta) < 56) return;
          if (delta > 0 && hasPrev) onNavigate(index - 1);
          if (delta < 0 && hasNext) onNavigate(index + 1);
        }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          {media.length > 1 ? (
            <p className="text-xs font-medium text-navy-muted">
              {index + 1} / {media.length}
            </p>
          ) : (
            <span aria-hidden className="text-xs text-transparent">
              ·
            </span>
          )}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-md bg-cloud px-3 text-sm font-semibold text-midnight transition-colors hover:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
          >
            Close
            <span className="sr-only"> enlarged media</span>
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-cloud px-2 py-4 sm:px-10 sm:py-6">
          {hasPrev ? (
            <button
              type="button"
              onClick={() => onNavigate(index - 1)}
              className="absolute left-2 top-1/2 z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-md bg-pure/95 text-lg font-semibold text-midnight shadow-sm sm:inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
              aria-label="Previous media"
            >
              ‹
            </button>
          ) : null}

          <div
            className="relative mx-auto w-full"
            style={{ maxHeight: "min(78vh, 52rem)" }}
          >
            {item.kind === "video" ? (
              <video
                src={item.src}
                poster={item.poster}
                controls
                className="mx-auto h-auto max-h-[min(78vh,52rem)] w-auto max-w-full object-contain"
              >
                <track kind="captions" />
              </video>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={width}
                height={height}
                className="mx-auto h-auto max-h-[min(78vh,52rem)] w-auto max-w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 64rem"
                priority
              />
            )}
          </div>

          {hasNext ? (
            <button
              type="button"
              onClick={() => onNavigate(index + 1)}
              className="absolute right-2 top-1/2 z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-md bg-pure/95 text-lg font-semibold text-midnight shadow-sm sm:inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
              aria-label="Next media"
            >
              ›
            </button>
          ) : null}
        </div>

        <div className="border-t border-border px-5 py-4">
          <p
            id={titleId}
            className="font-heading text-sm font-semibold leading-snug text-midnight"
          >
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}
