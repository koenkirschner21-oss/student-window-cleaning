import Image from "next/image";
import { quoteTrustPhoto } from "@/lib/site";

/**
 * Full-width trust band shown below the quote form on `/quote` only.
 * Do not mount on the homepage FinalCta — that layout stays independent.
 */
export function QuoteTrustBand() {
  return (
    <section
      aria-labelledby="quote-trust-heading"
      className="border-t border-border bg-cloud"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[16rem] overflow-hidden bg-[#0A274F] sm:min-h-[18rem] lg:min-h-[22rem]">
          {quoteTrustPhoto ? (
            <Image
              src={quoteTrustPhoto.src}
              alt={quoteTrustPhoto.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={false}
            />
          ) : (
            <div
              className="absolute inset-0"
              role="img"
              aria-label="Student Window Cleaning team photo placeholder — authentic approved photo needed"
              style={{
                background:
                  "linear-gradient(165deg, #0A274F 0%, #061A38 55%, #041228 100%)",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 55% at 55% 35%, color-mix(in srgb, var(--color-clear-sky) 26%, transparent), transparent 70%)",
                }}
              />
              <p className="absolute inset-x-0 bottom-0 px-5 pb-5 text-[0.7rem] font-medium tracking-wide text-white/55 sm:px-8">
                Photo coming soon
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center bg-midnight px-6 py-10 text-pure sm:px-10 sm:py-12 lg:px-12">
          <div className="max-w-md">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky">
              Proudly Student-Run
            </p>
            <h2
              id="quote-trust-heading"
              className="font-heading mt-3 text-[clamp(1.45rem,2.6vw,2rem)] font-semibold tracking-tight text-pure"
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
