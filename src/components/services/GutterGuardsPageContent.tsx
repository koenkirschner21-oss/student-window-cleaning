import Image from "next/image";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { Container } from "@/components/ui/Container";

const introBenefits = [
  "Helps reduce debris buildup",
  "Supports clearer drainage",
  "Lower ongoing maintenance",
] as const;

const valuePoints = [
  {
    title: "Less Debris Buildup",
    description:
      "Helps limit leaves and larger debris entering the gutter channel.",
    icon: "leaf" as const,
  },
  {
    title: "Better Water Flow",
    description: "Supports more consistent drainage during rain.",
    icon: "droplets" as const,
  },
  {
    title: "Less Frequent Buildup",
    description:
      "Helps reduce how quickly gutters collect debris between cleanings.",
    icon: "clock" as const,
  },
  {
    title: "Easier Ongoing Maintenance",
    description: "Can help make routine upkeep simpler over time.",
    icon: "wrench" as const,
  },
] as const;

const fitPoints = [
  {
    title: "Homes Near Trees",
    description:
      "Useful when nearby trees regularly drop leaves and debris into the gutter line.",
  },
  {
    title: "Recurring Leaf Buildup",
    description:
      "A practical option if you notice gutters filling between seasonal cleanings.",
  },
  {
    title: "Easier Long-Term Care",
    description:
      "Helpful for homeowners who want added protection and simpler upkeep between visits.",
  },
] as const;

const processSteps = [
  {
    number: "01",
    title: "Assess the Gutter System",
    description:
      "We review the existing gutter setup and determine whether gutter guards are a good fit.",
    icon: "assess" as const,
  },
  {
    number: "02",
    title: "Prepare the Gutters",
    description:
      "We remove accessible debris and prepare the gutter area before installation.",
    icon: "prepare" as const,
  },
  {
    number: "03",
    title: "Install the Micro-Mesh Guards",
    description:
      "We fit the gutter guards securely to help reduce debris entry while allowing water flow.",
    icon: "install" as const,
  },
  {
    number: "04",
    title: "Final Check",
    description:
      "We review the finished installation and make sure everything looks properly fitted and clean.",
    icon: "check" as const,
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
    question: "Do you install micro-mesh gutter guards?",
    answer:
      "Yes — we offer micro-mesh gutter guards designed to help reduce leaves and debris entering the gutter channel.",
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

function ValueIcon({
  kind,
}: {
  kind: (typeof valuePoints)[number]["icon"];
}) {
  const className = "size-9";

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

  if (kind === "droplets") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <path
          d="M8.5 14.5c0 1.9-1.3 3.5-3 3.5s-3-1.6-3-3.5C2.5 11.8 5.5 8 5.5 8s3 3.8 3 6.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 16.5c0 2.5-1.8 4.5-4 4.5s-4-2-4-4.5C11.5 13 15.5 8 15.5 8s4 5 4 8.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M12 8.5V12l2.75 2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M14.5 6.5 17.5 9.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M5.5 15.5 14 7l3 3-8.5 8.5H5.5v-3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 19.5h15"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProcessIcon({
  kind,
}: {
  kind: (typeof processSteps)[number]["icon"];
}) {
  const className = "size-7";

  if (kind === "assess") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M16 16.5 20 20.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "prepare") {
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

  if (kind === "install") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <rect
          x="3.5"
          y="8"
          width="17"
          height="5"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M5.5 8V6.5h13V8M7 13v3.5M12 13v3.5M17 13v3.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M8.5 12.25 10.9 14.6 15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Dedicated Gutter Guards page — premium, educational, conversion-focused.
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
                  src="/services/gutter-guards.webp"
                  alt="Close-up of micro-mesh gutter guard being installed into a white residential gutter under roof shingles"
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
                  Micro-mesh gutter guards are designed to help reduce leaves
                  and debris entering the gutter system. They can support better
                  drainage and reduce buildup between cleanings, making ongoing
                  maintenance easier — without completely eliminating the need
                  for care.
                </p>
                <p className="mt-3 max-w-md text-base leading-relaxed text-navy-muted">
                  Ask about gutter guards as part of your personalized quote and
                  we&apos;ll help you decide if they&apos;re a good fit for your
                  home.
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

      {/* Why choose them */}
      <section
        aria-labelledby="gutter-guards-value-heading"
        className="bg-white text-midnight"
        style={{
          paddingBlock:
            "clamp(1.25rem, 2.5vw, 2rem) clamp(3.25rem, 5.5vw, 4.75rem)",
        }}
      >
        <Container width="portfolio">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
              Why Homeowners Choose Them
            </p>
            <h2
              id="gutter-guards-value-heading"
              className="font-heading mt-2.5 text-[clamp(1.75rem,3.1vw,2.25rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
            >
              Why Add Micro-Mesh Gutter Guards?
            </h2>
            <p className="mx-auto mt-3.5 max-w-xl text-base leading-relaxed text-navy-muted">
              A practical upgrade for homeowners who want clearer gutters and
              simpler upkeep between professional cleanings.
            </p>
          </div>

          <ul className="mt-10 grid gap-8 sm:mt-11 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {valuePoints.map((item) => (
              <li
                key={item.title}
                className="flex min-w-0 flex-col items-center text-center"
              >
                <span className="text-signature">
                  <ValueIcon kind={item.icon} />
                </span>
                <h3 className="font-heading mt-4 text-[1.05rem] font-semibold tracking-tight text-midnight sm:text-[1.1rem]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[16.5rem] text-sm leading-relaxed text-navy-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Is it right for your home */}
      <section
        aria-labelledby="gutter-guards-fit-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(2.5rem, 4.5vw, 4rem)" }}
      >
        <Container width="portfolio">
          <div className="overflow-hidden rounded-[15px] border border-border bg-pure">
            <div className="grid items-stretch lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <figure className="relative m-0 min-h-[14rem] border-b border-border sm:min-h-[16rem] lg:min-h-[20rem] lg:border-b-0 lg:border-r">
                <Image
                  src="/services/gutter-cleaning-residential-roofline.webp"
                  alt="Residential roofline with gutters along a home exterior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-[center_40%]"
                />
              </figure>

              <div className="flex flex-col justify-center px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-10">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
                  A Good Fit for Many Homes
                </p>
                <h2
                  id="gutter-guards-fit-heading"
                  className="font-heading mt-2.5 text-[clamp(1.75rem,3vw,2.15rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
                >
                  Are Gutter Guards Right for Your Property?
                </h2>
                <p className="mt-3.5 max-w-md text-base leading-relaxed text-navy-muted">
                  Micro-mesh gutter guards may be especially useful for homes
                  near trees, properties with recurring leaf buildup, and
                  homeowners who want easier long-term maintenance between
                  cleanings.
                </p>
                <ul className="mt-5 space-y-3.5">
                  {fitPoints.map((item) => (
                    <li key={item.title} className="min-w-0">
                      <p className="font-heading text-[0.98rem] font-semibold tracking-tight text-midnight">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-navy-muted">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-navy-muted">
                  Gutter guards can help reduce maintenance, but they do not
                  make gutters completely maintenance-free. Suitability depends
                  on the home and roofline — the best next step is to request a
                  quote and discuss your property.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process — navy */}
      <section
        aria-labelledby="gutter-guards-process-heading"
        className="text-pure"
        style={{
          backgroundColor: "#061A38",
          paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)",
        }}
      >
        <Container width="portfolio">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              How It Works
            </p>
            <h2
              id="gutter-guards-process-heading"
              className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-pure sm:mt-3 sm:leading-tight"
            >
              Our Gutter Guard Process
            </h2>
            <p className="mx-auto mt-3.5 max-w-lg text-base leading-relaxed text-white/72">
              We assess the gutter system, prepare the area, install the
              micro-mesh guards, and review the finished result.
            </p>
          </div>

          <ol className="mt-10 grid list-none grid-cols-1 gap-8 p-0 sm:mt-11 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="flex min-w-0 flex-col items-center text-center"
              >
                <span className="inline-flex size-[3.75rem] items-center justify-center rounded-[0.85rem] bg-[#0A274F] text-signature">
                  <ProcessIcon kind={step.icon} />
                </span>
                <span className="mt-3 text-[0.75rem] font-semibold tracking-[0.14em] text-sky tabular-nums">
                  {step.number}
                </span>
                <h3 className="font-heading mt-1.5 text-base font-semibold tracking-tight text-pure lg:text-[1.05rem]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[16.5rem] text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

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
        supporting="Request a free, personalized quote and ask whether micro-mesh gutter guards are a good fit for your home."
        service="gutter-cleaning"
      />
    </main>
  );
}
