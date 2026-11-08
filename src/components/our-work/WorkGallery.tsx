"use client";

import Image from "next/image";
import { useState } from "react";
import { WorkLightbox } from "@/components/our-work/WorkLightbox";
import { Container } from "@/components/ui/Container";
import type { WorkPhoto } from "@/lib/our-work";

type WorkGalleryProps = {
  photos: WorkPhoto[];
};

function treatmentClass(photo: WorkPhoto) {
  switch (photo.treatment) {
    case "featured":
      return "sm:col-span-2 sm:row-span-2";
    case "span":
      return "sm:col-span-2";
    case "detail":
      return "sm:col-span-1";
    case "portrait":
    default:
      return "sm:col-span-1";
  }
}

function imageSizes(photo: WorkPhoto) {
  if (photo.treatment === "featured") {
    return "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 640px";
  }
  if (photo.treatment === "span") {
    return "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 560px";
  }
  return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px";
}

export function WorkGallery({ photos }: WorkGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (photos.length === 0) {
    return null;
  }

  return (
    <>
      <section
        aria-labelledby="work-gallery-heading"
        className="bg-pure text-midnight"
        style={{ paddingBlock: "var(--space-section-y-tight)" }}
      >
        <Container>
          <h2 id="work-gallery-heading" className="sr-only">
            Project gallery
          </h2>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {photos.map((photo, index) => (
              <li
                key={photo.id}
                className={`min-w-0 ${treatmentClass(photo)}`.trim()}
              >
                <figure className="m-0 h-full">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group block h-full w-full overflow-hidden rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
                    aria-label={`Enlarge photo: ${photo.alt}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      className={`w-full bg-cloud object-cover transition duration-300 motion-safe:group-hover:scale-[1.015] ${
                        photo.treatment === "featured"
                          ? "aspect-[3/4] sm:aspect-auto sm:h-full sm:min-h-[28rem]"
                          : photo.treatment === "span" && photo.height < photo.width
                            ? "aspect-[4/3]"
                            : "aspect-[3/4]"
                      }`}
                      sizes={imageSizes(photo)}
                      loading={index < 3 ? "eager" : "lazy"}
                      priority={index < 2}
                    />
                  </button>
                  {photo.caption ? (
                    <figcaption className="mt-2.5 text-sm leading-snug text-navy-muted">
                      {photo.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <WorkLightbox
        photos={photos}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
