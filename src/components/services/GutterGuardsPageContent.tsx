import Image from "next/image";
import { CleaningProcessSection } from "@/components/services/CleaningProcessSection";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { Container } from "@/components/ui/Container";

/** Easy-to-swap photo slots for this page. */
const photos = {
  intro: {
    src: "/services/gutter-guards.webp",
    alt: "Close-up of a gutter guard being installed into a white residential gutter under roof shingles",
  },
  valueLeft: {
    src: "/before-after/gutters/before.webp",
    alt: "Residential gutter channel filled with leaves and debris",
  },
  valueRight: {
    src: "/before-after/gutters/after-aligned.webp",
    alt: "Cleared residential gutter channel after debris removal",
  },
  processAssess: {
    src: "/services/gutter-cleaning-residential-roofline.webp",
    alt: "Residential gutter and roofline being assessed for gutter guard suitability",
  },
  processPrepare: {
    src: "/services/gutter-cleaning-hose.webp",
    alt: "Team member preparing and clearing a residential gutter before guard installation",
  },
  processInstall: {
    src: "/services/gutter-guards.webp",
    alt: "Micro-mesh gutter guard being fitted into a residential gutter",
  },
  processFinal: {
    src: "/our-work/gutter-detail-cleared.webp",
    alt: "Cleared gutter channel after preparation and installation review",
  },
} as const;

const introBenefits = [
  "Helps reduce debris buildup",
  "Supports clearer drainage",
  "Lower ongoing maintenance",
] as const;

const fitPoints = [
  {
    title: "Homes Near Trees",
    description:
      "Useful when nearby trees regularly drop leaves and debris into the gutter line.",
    icon: "tree" as const,
  },
  {
    title: "Recurring Leaf Buildup",
    description:
      "A practical option if gutters fill between seasonal cleanings.",
    icon: "leaf" as const,
  },
  {
    title: "Easier Long-Term Care",
    description:
      "Helpful for homeowners who want simpler upkeep between visits.",
    icon: "care" as const,
  },
  {
    title: "Good for Ongoing Protection",
    description:
      "Adds a layer of protection that helps keep gutters clearer over time.",
    icon: "shield" as const,
  },
] as const;

const processSteps = [
  {
    number: "01",
    title: "Assess the Gutter System",
    description:
      "We review the existing gutter setup and determine whether gutter guards are a good fit.",
    image: photos.processAssess,
  },
  {
    number: "02",
    title: "Prepare the Gutters",
    description:
      "We remove accessible debris and prepare the gutter area before installation.",
    image: photos.processPrepare,
  },
  {
    number: "03",
    title: "Install the Gutter Guards",
    description:
      "We fit the gutter guards securely to help reduce debris entry while allowing water flow.",
    image: photos.processInstall,
  },
  {
    number: "04",
    title: "Final Check",
    description:
      "We review the finished installation and make sure everything looks properly fitted and clean.",
    image: photos.processFinal,
  },
] as const;

const faqs = [
  {
    question: "Do gutter guards eliminate gutter cleaning completely?",
    answer:
      "No — they can help reduce debris buildup and maintenance, but gutters may still need occasional care.",
  },
  {
    question: "Are gutter guards worth it for every home?",
    answer:
      "Not always. They are often most useful for homes with nearby trees or recurring buildup.",
  },
  {
    question: "Can I ask about gutter guards in my quote?",
    answer:
      "Yes — we can discuss whether they are a good fit for your property as part of your free quote.",
  },
  {
    question: "Do gutter guards help with water flow?",
    answer:
      "They are designed to help keep larger debris out so water can move through the gutter system more effectively.",
  },
  {
    question: "What type of gutter guards do you install?",
    answer:
      "We install micro-mesh gutter guards designed to help reduce leaves and debris entering the gutter channel.",
  },
] as const;

function CheckCircleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.1 8.15 7.05 10l3.85-4.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FitIcon({ kind }: { kind: (typeof fitPoints)[number]["icon"] }) {
  const className = "size-7";

  if (kind === "tree") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <path
          d="M12 20v-6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M12 14c-3.2 0-5.5-2.1-5.5-4.75S9.5 4.5 12 4.5s5.5 2.1 5.5 4.75S15.2 14 12 14Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 11.5c-1.4.4-2.5 1.5-2.5 3 0 1.7 1.6 3 3.5 3h5c1.9 0 3.5-1.3 3.5-3 0-1.5-1.1-2.6-2.5-3"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "leaf") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <path
          d="M5 18c4-1 7-4 9-8 2-4 3-7 5-8-1 4-2 8-5 11-3 3-6 4-9 5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 14c2-1 4-3 6-6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "care") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <path
          d="M4.5 11.25 12 5.5l7.5 5.75"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 10.75V19h11V10.75"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 3.75 19 7v5.25c0 4.35-2.95 7.85-7 8.9-4.05-1.05-7-4.55-7-8.9V7l7-3.25Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.1 11.2 13.75 14.6 10.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Dedicated Gutter Guards page — visual, scannable, conversion-focused.
 */
export function GutterGuardsPageContent() {
  return (
    <main id="main-content" className="flex-1">
      <ServicePageHero
        eyebrow="Gutter Protection"
        title="Gutter Guards"
        description="A practical option for homeowners across Whitby and Durham Region who want to help keep gutters clearer between cleanings."
      />

      {/* Intro */}
      <section
        aria-labelledby="gutter-guards-intro-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)" }}
      >
        <Container width="portfolio">
          <div className="overflow-hidden rounded-[15px] border border-border bg-pure">
            <div className="grid items-stretch lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <figure className="relative m-0 min-h-[15rem] border-b border-border sm:min-h-[17rem] lg:min-h-[20rem] lg:border-b-0 lg:border-r">
                <Image
                  src={photos.intro.src}
                  alt={photos.intro.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-[center_40%]"
                  priority
                />
              </figure>

              <div className="flex flex-col justify-center bg-pure px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-10">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
                  Smarter Gutter Care
                </p>
                <h2
                  id="gutter-guards-intro-heading"
                  className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
                >
                  Help Protect Your Gutters Between Cleanings.
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-navy-muted">
                  Gutter guards help reduce leaves and debris entering your
                  gutter system, supporting clearer drainage and easier
                  maintenance between cleanings.
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
                  {introBenefits.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-midnight"
                    >
                      <span className="text-signature">
                        <CheckCircleIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Add Gutter Guards — navy + two photos */}
      <section
        aria-labelledby="gutter-guards-value-heading"
        className="text-pure"
        style={{
          backgroundColor: "#061A38",
          paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)",
        }}
      >
        <Container width="portfolio">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              Why Homeowners Choose Them
            </p>
            <h2
              id="gutter-guards-value-heading"
              className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-pure sm:mt-3 sm:leading-tight"
            >
              Why Add Gutter Guards?
            </h2>
            <p className="mx-auto mt-3.5 max-w-xl text-base leading-relaxed text-white/72">
              A practical upgrade for homeowners who want clearer gutters and
              simpler upkeep between professional cleanings.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {(
              [
                { ...photos.valueLeft, label: "Without protection" },
                { ...photos.valueRight, label: "After clearing" },
              ] as const
            ).map((item) => (
              <figure key={item.label} className="m-0 min-w-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[#0A274F] sm:aspect-[5/4]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm font-semibold tracking-tight text-white/80">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Fit / trust */}
      <section
        aria-labelledby="gutter-guards-fit-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)" }}
      >
        <Container width="portfolio">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
              A Good Fit for Many Homes
            </p>
            <h2
              id="gutter-guards-fit-heading"
              className="font-heading mt-2.5 text-[clamp(1.75rem,3.1vw,2.25rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
            >
              Are Gutter Guards Right for Your Property?
            </h2>
            <p className="mx-auto mt-3.5 max-w-xl text-base leading-relaxed text-navy-muted">
              Gutter guards may be especially useful for homes that deal with
              leaves, debris, and ongoing maintenance between cleanings.
            </p>
          </div>

          <ul className="mt-10 grid gap-8 sm:mt-11 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {fitPoints.map((item) => (
              <li
                key={item.title}
                className="flex min-w-0 flex-col items-center text-center"
              >
                <span className="text-signature">
                  <FitIcon kind={item.icon} />
                </span>
                <h3 className="font-heading mt-3.5 text-[1.05rem] font-semibold tracking-tight text-midnight">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-navy-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-9 max-w-2xl text-center text-sm leading-relaxed text-navy-muted sm:mt-10 sm:text-[0.95rem]">
            Gutter guards can help reduce maintenance, but they do not make
            gutters completely maintenance-free. Suitability depends on the home
            and roofline — request a quote to discuss your property.
          </p>
        </Container>
      </section>

      <CleaningProcessSection
        eyebrow="How It Works"
        title="Our Gutter Guard Process"
        description="We assess the gutter system, prepare the area, install the guards, and review the finished result."
        steps={processSteps}
        tone="navy"
      />

      {/* FAQ */}
      <section
        aria-labelledby="gutter-guards-faq-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)" }}
      >
        <Container width="portfolio">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
              Common Questions
            </p>
            <h2
              id="gutter-guards-faq-heading"
              className="font-heading mt-2.5 text-[clamp(1.75rem,3.1vw,2.25rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
            >
              Gutter Guard FAQs
            </h2>
          </div>

          <div className="mx-auto mt-9 max-w-3xl divide-y divide-border border-y border-border sm:mt-10">
            {faqs.map((item) => (
              <details key={item.question} className="group py-4 sm:py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="font-heading text-[1.02rem] font-semibold tracking-tight text-midnight sm:text-[1.08rem]">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className="mt-1 inline-flex size-5 shrink-0 items-center justify-center text-signature transition-transform duration-200 group-open:rotate-45"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="size-4">
                      <path
                        d="M8 3v10M3 8h10"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-2.5 max-w-2xl pr-8 text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <ServicePageCta
        eyebrow="Get a Free Quote"
        headline="Interested in Gutter Guards?"
        supporting="Request a free, personalized quote and ask whether gutter guards are a good fit for your home."
        service="gutter-cleaning"
      />
    </main>
  );
}
