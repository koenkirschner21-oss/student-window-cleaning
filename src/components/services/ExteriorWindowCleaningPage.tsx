import Image from "next/image";
import { CleaningProcessSection } from "@/components/services/CleaningProcessSection";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { Container } from "@/components/ui/Container";

const inclusions = [
  "Exterior window glass",
  "Exterior frames, sills & tracks",
  "Sliding doors & deck glass",
] as const;

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="mt-0.5 size-3.5 shrink-0 text-signature"
    >
      <path
        d="M3.2 8.2 6.4 11.3 12.8 4.7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExteriorWindowCleaningPage() {
  return (
    <main id="main-content" className="flex-1">
      <ServicePageHero
        eyebrow="Window Cleaning"
        title="Exterior Window Cleaning"
        description="Professional exterior glass cleaning for homes across Whitby and Durham Region, delivered by our local student-run team."
      />

      <section
        aria-labelledby="exterior-intro-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)" }}
      >
        <Container width="portfolio">
          <div className="overflow-hidden rounded-[15px] border border-border bg-pure">
            <div className="grid items-stretch lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="flex flex-col justify-center px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-10">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
                  Professional Window Care
                </p>
                <h2
                  id="exterior-intro-heading"
                  className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
                >
                  Cleaner Glass. Brighter Curb Appeal.
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-navy-muted">
                  Support hardworking local students while giving your home the
                  care it deserves. Exterior window cleaning refreshes your
                  property&apos;s glass so it looks brighter and well cared for.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-snug text-navy-muted"
                    >
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <figure className="relative m-0 min-h-[14rem] border-t border-border lg:min-h-[18rem] lg:border-l lg:border-t-0">
                <Image
                  src="/services/window-cleaning-intro-soapy.webp"
                  alt="Close-up of a professional squeegee clearing soapy foam from window glass to reveal clear blue sky"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                  priority
                />
              </figure>
            </div>
          </div>

          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 md:gap-7">
            <figure className="relative m-0 aspect-[16/10] overflow-hidden rounded-[14px] border border-border bg-cloud">
              <Image
                src="/services/exterior-squeegee-soapy.webp"
                alt="Student Window Cleaning team member squeegeeing soapy exterior window glass"
                fill
                sizes="(max-width: 768px) 100vw, 36rem"
                className="object-cover object-[55%_50%]"
              />
            </figure>
            <div className="flex flex-col justify-center">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-midnight sm:text-[1.35rem]">
                Exterior care that shows.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy-muted">
                We focus on exterior window glass and the accessible details
                around it — frames, sills, tracks, and sliding doors — so your
                home presents a clearer, cleaner finish from the curb.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CleaningProcessSection
        description="Our exterior window process is built around clear, streak-free glass and careful attention to the finishes around every window."
      />

      <ServicePageCta
        headline="Ready for Cleaner Exterior Windows?"
        supporting="Tell us about your property and we'll prepare a free, personalized quote for exterior window cleaning."
        service="exterior"
      />
    </main>
  );
}
