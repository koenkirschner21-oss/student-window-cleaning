import Image from "next/image";
import { quoteTrustPhoto } from "@/lib/site";

/**
 * Contained trust band shown below the quote form on `/quote` only.
 * Do not mount on the homepage FinalCta — that layout stays independent.
 */
export function QuoteTrustBand() {
  return (
    <section
      aria-labelledby="quote-trust-heading"
      className="overflow-hidden rounded-md border border-border bg-pure shadow-none"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[15rem] overflow-hidden bg-midnight sm:min-h-[17rem] lg:min-h-[20rem]">
          {quoteTrustPhoto ? (
            <Image
              src={quoteTrustPhoto.src}
              alt={quoteTrustPhoto.alt}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 420px, 100vw"
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

        <div className="flex items-center bg-midnight px-6 py-9 text-pure sm:px-9 sm:py-11 lg:px-10">
          <div className="max-w-md">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky">
              Proudly Student-Run
            </p>
            <h2
              id="quote-trust-heading"
              className="font-heading mt-3 text-[clamp(1.4rem,2.5vw,1.9rem)] font-semibold tracking-tight text-pure"
            >
              Real Students. Professional Results.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/72 sm:text-[0.95rem]">
              Local students providing professional window cleaning throughout
              Whitby and Durham Region.
            </p>
            <p className="mt-4 text-sm font-medium text-white/55">
              Free virtual quote. No obligation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
