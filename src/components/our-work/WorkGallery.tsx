"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WorkLightbox } from "@/components/our-work/WorkLightbox";
import { Container } from "@/components/ui/Container";
import {
  getBeforeAfterPairs,
  type WorkPhoto,
} from "@/lib/our-work";

type WorkGalleryProps = {
  photos: WorkPhoto[];
};

function displayCaption(photo: WorkPhoto) {
  if (photo.caption) return photo.caption;
  if (photo.location) return `${photo.alt} — ${photo.location}`;
  return null;
}

export function WorkGallery({ photos }: WorkGalleryProps) {
  const [active, setActive] = useState<WorkPhoto | null>(null);
  const pairs = getBeforeAfterPairs(photos);
  const pairIds = new Set(pairs.map((pair) => pair.id));
  const singles = photos.filter(
    (photo) => !photo.pairId || !pairIds.has(photo.pairId),
  );

  if (photos.length === 0) {
    return (
      <section
        aria-labelledby="work-gallery-heading"
        className="bg-pure text-midnight"
        style={{ paddingBlock: "var(--space-section-y)" }}
      >
        <Container>
          <h2 id="work-gallery-heading" className="sr-only">
            Project gallery
          </h2>
          <div className="rounded-md border border-dashed border-border-strong bg-cloud px-6 py-14 text-center sm:px-10 sm:py-16">
            <p className="font-heading text-xl font-semibold tracking-tight text-midnight sm:text-2xl">
              Gallery photos coming soon
            </p>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-navy-muted">
              We&apos;re preparing authentic Student Window Cleaning job photos
              for this page. Stock and AI stand-ins won&apos;t appear here — only
              real work, shared with permission.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-border-strong bg-pure px-6 text-sm font-semibold tracking-tight text-midnight transition-colors hover:border-signature hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
              >
                Explore Services
              </Link>
            </div>
            <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-navy-muted/80">
              Developers: add approved images under{" "}
              <code className="rounded bg-ice px-1.5 py-0.5">public/work/</code>{" "}
              and register them in{" "}
              <code className="rounded bg-ice px-1.5 py-0.5">
                src/lib/our-work.ts
              </code>
              .
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section
        aria-labelledby="work-gallery-heading"
        className="bg-pure text-midnight"
        style={{ paddingBlock: "var(--space-section-y)" }}
      >
        <Container>
          <h2
            id="work-gallery-heading"
            className="font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-3xl"
          >
            Recent Work
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy-muted">
            A selection of finished cleans and on-the-job moments from across
            Whitby and Durham Region.
          </p>

          <ul className="mt-10 columns-1 gap-5 sm:columns-2 lg:mt-12 lg:columns-3 lg:gap-6">
            {singles.map((photo, index) => {
              const caption = displayCaption(photo);
              return (
                <li key={photo.id} className="mb-5 break-inside-avoid lg:mb-6">
                  <figure className="m-0">
                    <button
                      type="button"
                      onClick={() => setActive(photo)}
                      className="group block w-full overflow-hidden rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        className="h-auto w-full object-cover transition duration-300 motion-safe:group-hover:scale-[1.015]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading={index < 3 ? "eager" : "lazy"}
                        priority={index < 2}
                      />
                    </button>
                    {caption ? (
                      <figcaption className="mt-2.5 text-sm leading-snug text-navy-muted">
                        {caption}
                      </figcaption>
                    ) : null}
                  </figure>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {pairs.length > 0 ? (
        <section
          aria-labelledby="before-after-heading"
          className="bg-cloud text-midnight"
          style={{ paddingBlock: "var(--space-section-y)" }}
        >
          <Container>
            <h2
              id="before-after-heading"
              className="font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-3xl"
            >
              Before &amp; After
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy-muted">
              Same-job comparisons from verified Student Window Cleaning visits.
            </p>

            <ul className="mt-10 space-y-10 lg:mt-12">
              {pairs.map((pair) => (
                <li key={pair.id}>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    {[
                      { label: "Before", photo: pair.before },
                      { label: "After", photo: pair.after },
                    ].map(({ label, photo }) => (
                      <figure key={photo.id} className="m-0">
                        <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-signature">
                          {label}
                        </p>
                        <button
                          type="button"
                          onClick={() => setActive(photo)}
                          className="block w-full overflow-hidden rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            width={photo.width}
                            height={photo.height}
                            className="h-auto w-full object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                            loading="lazy"
                          />
                        </button>
                        {displayCaption(photo) ? (
                          <figcaption className="mt-2.5 text-sm leading-snug text-navy-muted">
                            {displayCaption(photo)}
                          </figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <WorkLightbox photo={active} onClose={() => setActive(null)} />
    </>
  );
}
