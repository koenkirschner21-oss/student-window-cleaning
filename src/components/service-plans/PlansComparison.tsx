import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref, type FrequencyId } from "@/lib/site";

const plans = [
  {
    id: "basic",
    name: "Basic",
    visits: "1 Visit",
    description: "A professional one-time clean whenever you need it.",
    inclusions: [
      "One cleaning visit",
      "Choice of cleaning services",
      "No ongoing commitment",
    ],
    frequency: "one-time" as FrequencyId,
    featured: false,
  },
  {
    id: "best-value",
    name: "Best Value",
    visits: "2 Visits",
    description:
      "Convenient seasonal care to keep your windows looking their best.",
    inclusions: [
      "Two cleaning visits",
      "Choice of cleaning services",
      "Scheduled repeat care, subject to agreed timing",
    ],
    frequency: "two-visit" as FrequencyId,
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    visits: "3 Visits",
    description:
      "More frequent cleaning for consistently well-maintained windows.",
    inclusions: [
      "Three cleaning visits",
      "Choice of cleaning services",
      "More frequent ongoing maintenance, subject to agreed timing",
    ],
    frequency: "three-visit" as FrequencyId,
    featured: false,
  },
] as const;

function CheckIcon({ light }: { light?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`mt-0.5 size-3.5 shrink-0 ${light ? "text-sky" : "text-signature"}`}
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

export function PlansComparison() {
  return (
    <section
      aria-labelledby="plans-comparison-heading"
      className="bg-pure text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div className="max-w-2xl">
          <h2
            id="plans-comparison-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
          >
            Choose Your Cleaning Visits
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-muted">
            Each service plan is defined by visit count. Select the services you
            need, then request a quote — this is not an online booking.
          </p>
        </div>

        <ul className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => {
            const featured = plan.featured;
            return (
              <li key={plan.id} className="flex min-w-0">
                <article
                  className={[
                    "relative flex w-full flex-col rounded-lg border p-6 sm:p-7",
                    featured
                      ? "border-midnight bg-midnight text-pure lg:-translate-y-1"
                      : "border-border bg-pure text-midnight",
                  ].join(" ")}
                >
                  {featured ? (
                    <p className="mb-3 inline-flex w-fit rounded-md bg-signature px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-pure">
                      Recommended
                    </p>
                  ) : null}

                  <p
                    className={[
                      "text-[0.65rem] font-semibold uppercase tracking-[0.14em]",
                      featured ? "text-sky" : "text-signature",
                    ].join(" ")}
                  >
                    {plan.name}
                  </p>

                  <p
                    className={[
                      "font-heading mt-2 font-extrabold tracking-tight",
                      featured
                        ? "text-3xl text-pure sm:text-4xl"
                        : "text-3xl text-midnight sm:text-4xl",
                    ].join(" ")}
                  >
                    {plan.visits}
                  </p>

                  <p
                    className={[
                      "mt-3 text-sm leading-relaxed sm:text-[0.95rem]",
                      featured ? "text-white/75" : "text-navy-muted",
                    ].join(" ")}
                  >
                    {plan.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {plan.inclusions.map((item) => (
                      <li
                        key={item}
                        className={[
                          "flex items-start gap-2 text-sm leading-snug",
                          featured ? "text-white/85" : "text-navy-muted",
                        ].join(" ")}
                      >
                        <CheckIcon light={featured} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <Link
                      href={quoteHref({ frequency: plan.frequency })}
                      className={[
                        "inline-flex min-h-12 w-full items-center justify-center rounded-md px-5 text-sm font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature",
                        featured
                          ? "bg-signature text-pure hover:bg-[#0656d6]"
                          : "border border-signature/40 bg-transparent text-signature hover:border-signature hover:bg-ice",
                      ].join(" ")}
                    >
                      Get a Free Quote
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
