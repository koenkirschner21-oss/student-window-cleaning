import Image from "next/image";
import {
  CalendarCheck,
  Leaf,
  ShieldCheck,
  TreePine,
  type LucideIcon,
} from "lucide-react";
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
    src: "/before-after/gutter-guards/before-clogged-gutter-leaves-debris.webp",
    alt: "Open residential gutter filled with dry brown leaves and debris along a shingled roofline",
  },
  valueRight: {
    src: "/before-after/gutter-guards/after-mesh-gutter-guard-installed.webp",
    alt: "Residential gutter fitted with a black mesh guard covering the channel along a shingled roofline",
  },
  processAssess: {
    src: "/services/gutter-guards/process-assess-technician-ladder.webp",
    alt: "Technician on a ladder inspecting a residential gutter system during assessment",
    objectPosition: "center 35%",
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
    src: "/services/gutter-guards/process-final-check-mesh-installed.webp",
    alt: "Installed perforated mesh gutter guard along a residential roofline during final review",
    objectPosition: "center 28%",
  },
} as const;

const introBenefits = [
  "Helps reduce debris buildup",
  "Supports clearer drainage",
  "Lower ongoing maintenance",
] as const;

const fitPoints: readonly {
  title: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Homes Near Trees",
    Icon: TreePine,
  },
  {
    title: "Recurring Leaf Buildup",
    Icon: Leaf,
  },
  {
    title: "Easier Long-Term Care",
    Icon: CalendarCheck,
  },
  {
    title: "Good for Ongoing Protection",
    Icon: ShieldCheck,
  },
];

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

          <div className="mx-auto mt-9 max-w-[52rem] sm:mt-10">
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-5 lg:gap-6">
              {(
                [
                  { ...photos.valueLeft, label: "Before" },
                  { ...photos.valueRight, label: "After" },
                ] as const
              ).map((item) => (
                <figure key={item.label} className="m-0 min-w-0">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[14px] bg-[#0A274F]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 26rem"
                      className="object-cover object-center"
                    />
                  </div>
                  <figcaption className="mt-3 flex justify-center">
                    <span className="inline-flex h-8 w-[6.75rem] items-center justify-center rounded-md bg-pure text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-midnight sm:w-[7.25rem] sm:text-xs">
                      {item.label}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Fit / trust */}
      <section
        aria-labelledby="gutter-guards-fit-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(2.75rem, 5vw, 4rem)" }}
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

          <ul className="mt-9 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-9 lg:grid-cols-4 lg:gap-x-10">
            {fitPoints.map(({ title, Icon }) => (
              <li
                key={title}
                className="flex min-w-0 flex-col items-center text-center"
              >
                <Icon
                  aria-hidden
                  className="size-11 text-signature sm:size-12"
                  strokeWidth={1.75}
                />
                <h3 className="font-heading mt-4 text-[1.1rem] font-semibold tracking-tight text-midnight sm:text-[1.15rem]">
                  {title}
                </h3>
              </li>
            ))}
          </ul>
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
