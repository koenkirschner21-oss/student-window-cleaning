import Image from "next/image";
import Link from "next/link";
import { CleaningProcessSection } from "@/components/services/CleaningProcessSection";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const inclusionGroups = [
  {
    title: "Exterior Window Glass",
    description:
      "Hand-scrubbing and professional cleaning of your home's exterior window glass for a clear, polished finish.",
    icon: "glass" as const,
  },
  {
    title: "Frames, Sills & Tracks",
    description:
      "Cleaning and detailing of applicable exterior window frames, sills, and tracks to remove dirt and buildup.",
    icon: "frame" as const,
  },
  {
    title: "Doors & Garage Windows",
    description:
      "Exterior glass cleaning for front doors, sliding glass doors, and garage windows.",
    icon: "door" as const,
  },
  {
    title: "Deck Glass",
    description:
      "Cleaning glass panels around your deck to help keep outdoor spaces looking clear and well maintained.",
    icon: "deck" as const,
  },
] as const;

function InclusionIcon({
  kind,
}: {
  kind: (typeof inclusionGroups)[number]["icon"];
}) {
  const className = "size-6 shrink-0 text-signature";

  if (kind === "glass") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M12 4v16M4 12h16"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    );
  }

  if (kind === "frame") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <rect
          x="3.5"
          y="5"
          width="17"
          height="14"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M3.5 16.5h17M8 5v11.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "door") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <path
          d="M6 20V5.5A1.5 1.5 0 0 1 7.5 4h9A1.5 1.5 0 0 1 18 5.5V20"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M5 20h14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="15" cy="12" r="0.9" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M4 18h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M6 18V9.5L12 6l6 3.5V18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 18v-5h5v5"
        stroke="currentColor"
        strokeWidth="1.75"
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
              <div className="flex flex-col justify-center bg-pure px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-10">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
                  Professional Window Cleaning
                </p>
                <h2
                  id="exterior-intro-heading"
                  className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
                >
                  A Cleaner View Starts Outside.
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-navy-muted">
                  Give your home a brighter, well-maintained appearance with
                  professional exterior window cleaning from our local
                  student-run team. We take care of the glass and the details
                  that make a difference.
                </p>
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

          <div
            className="mt-10 sm:mt-12"
            aria-labelledby="exterior-included-heading"
          >
            <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
              <div className="max-w-xl">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
                  What&apos;s Included
                </p>
                <h3
                  id="exterior-included-heading"
                  className="font-heading mt-2.5 text-[clamp(1.75rem,3vw,2.15rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
                >
                  More Than Just Clean Glass.
                </h3>
                <p className="mt-3.5 text-base leading-relaxed text-navy-muted">
                  Our exterior window cleaning service covers your home&apos;s
                  windows and the surrounding details, helping the entire
                  property look its best.
                </p>
              </div>

              <figure className="relative m-0 aspect-[16/10] w-full overflow-hidden rounded-[14px] border border-border bg-cloud">
                <Image
                  src="/services/exterior-squeegee-soapy.webp"
                  alt="Student Window Cleaning team member squeegeeing soapy exterior window glass"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-[55%_50%]"
                />
              </figure>
            </div>

            <ul className="mt-9 grid gap-7 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {inclusionGroups.map((item) => (
                <li key={item.title} className="min-w-0">
                  <InclusionIcon kind={item.icon} />
                  <p className="font-heading mt-3.5 text-[1.05rem] font-semibold tracking-tight text-midnight">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex justify-center sm:mt-10">
              <Link
                href={quoteHref({ service: "exterior" })}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
              >
                Get a Free Exterior Cleaning Quote
              </Link>
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
