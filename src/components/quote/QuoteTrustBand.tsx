import Image from "next/image";
import { quoteTrustPhoto } from "@/lib/site";

/**
 * Contained trust band shown below the quote form on `/quote` only.
 * Do not mount on the homepage FinalCta — that layout stays independent.
 *
 * Shorter horizontal editorial band: photo left, solid midnight navy right.
 * Photo uses contained fit on a neutral plane so the privacy-safe facade crop
 * is not further zoomed by aggressive object-cover.
 */
export function QuoteTrustBand() {
  return (
    <section
      aria-labelledby="quote-trust-heading"
      className="overflow-hidden rounded-md border border-border bg-pure shadow-none"
    >
      <div className="grid lg:grid-cols-2 lg:min-h-[15.5rem]">
        <div className="relative flex min-h-[13.5rem] items-center justify-center overflow-hidden bg-cloud sm:min-h-[15rem] lg:min-h-full">
          {quoteTrustPhoto ? (
            <Image
              src={quoteTrustPhoto.src}
              alt={quoteTrustPhoto.alt}
              width={1800}
              height={1035}
              className="h-full max-h-[16rem] w-full object-contain object-center lg:max-h-[17.5rem]"
              sizes="(min-width: 1024px) 600px, 100vw"
              priority={false}
            />
          ) : (
            <div
              className="absolute inset-0 bg-midnight"
              role="img"
              aria-label="Residential property photo placeholder — awaiting approved house photo"
            >
              <p className="absolute inset-x-0 bottom-0 px-5 pb-5 text-[0.7rem] font-medium tracking-wide text-white/50 sm:px-7">
                Photo coming soon
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center bg-midnight px-6 py-8 text-pure sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="max-w-md">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky">
              Proudly Student-Run
            </p>
            <h2
              id="quote-trust-heading"
              className="font-heading mt-2.5 text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold tracking-tight text-pure"
            >
              Real Students. Professional Results.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-[0.95rem]">
              Local students providing professional window cleaning throughout
              Whitby and Durham Region.
            </p>
            <p className="mt-3 text-sm font-medium text-white/55">
              Free virtual quote. No obligation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
