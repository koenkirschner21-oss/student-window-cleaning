import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref, type FrequencyId } from "@/lib/site";

const plans = [
  {
    id: "basic",
    name: "Basic",
    visits: "1 Visit",
    description: "One-Time Cleaning",
    benefits: ["One cleaning visit", "No ongoing commitment"],
    savings: "Standard Quote",
    savingsEmphasis: false,
    frequency: "one-time" as FrequencyId,
    featured: false,
    recommended: false,
  },
  {
    id: "best-value",
    name: "Best Value",
    visits: "2 Visits",
    description: "Twice-Yearly Cleaning",
    benefits: ["Two cleaning visits", "Priority scheduling"],
    savings: "$50 OFF EACH VISIT",
    savingsEmphasis: true,
    frequency: "two-visit" as FrequencyId,
    featured: true,
    recommended: true,
  },
  {
    id: "premium",
    name: "Premium",
    visits: "3 Visits",
    description: "Three Times Yearly",
    benefits: ["Three cleaning visits", "Priority scheduling"],
    savings: "$100 OFF EACH VISIT",
    savingsEmphasis: true,
    frequency: "three-visit" as FrequencyId,
    featured: false,
    recommended: false,
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

/**
 * Services page Cleaning Plans preview — three equal plan cards + explore link.
 * Savings copy matches quotePlanOptions; CTAs preselect frequency when supported.
 */
export function PlansPreview() {
  return (
    <section
      aria-labelledby="services-plans-heading"
      className="bg-ice text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="services-plans-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
          >
            Keep the Clear View, Season After Season.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted">
            Whether you need a one-time clean or prefer regular seasonal care,
            choose the option that works best for your home.
          </p>
        </div>

        <ul className="mt-10 grid items-stretch gap-5 sm:mt-12 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => {
            const featured = plan.featured;
            return (
              <li key={plan.id} className="flex min-w-0">
                <article
                  className={[
                    "flex w-full flex-col rounded-[1.125rem] border p-6 sm:p-7",
                    featured
                      ? "border-midnight bg-midnight text-pure"
                      : "border-border bg-pure text-midnight",
                  ].join(" ")}
                >
                  <div className="min-h-[1.75rem]">
                    {plan.recommended ? (
                      <p className="inline-flex rounded-md bg-signature/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-sky">
                        Recommended
                      </p>
                    ) : null}
                  </div>

                  <p
                    className={[
                      "mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em]",
                      featured ? "text-sky" : "text-signature",
                    ].join(" ")}
                  >
                    {plan.name}
                  </p>

                  <p
                    className={[
                      "font-heading mt-2 text-3xl font-extrabold tracking-tight sm:text-[2.15rem]",
                      featured ? "text-pure" : "text-midnight",
                    ].join(" ")}
                  >
                    {plan.visits}
                  </p>

                  <p
                    className={[
                      "mt-2 text-sm leading-relaxed",
                      featured ? "text-white/72" : "text-navy-muted",
                    ].join(" ")}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={[
                      "my-5 h-px w-full",
                      featured ? "bg-white/15" : "bg-border",
                    ].join(" ")}
                  />

                  <ul className="space-y-2.5">
                    {plan.benefits.map((item) => (
                      <li
                        key={item}
                        className={[
                          "flex items-start gap-2.5 text-sm leading-snug",
                          featured ? "text-white/85" : "text-navy-muted",
                        ].join(" ")}
                      >
                        <CheckIcon light={featured} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className={[
                      "mt-5 text-sm font-semibold tracking-tight",
                      featured
                        ? "text-sky"
                        : plan.savingsEmphasis
                          ? "text-signature"
                          : "text-midnight",
                    ].join(" ")}
                  >
                    {plan.savings}
                  </p>

                  <div className="mt-auto pt-6">
                    <Link
                      href={quoteHref({ frequency: plan.frequency })}
                      className={[
                        "inline-flex min-h-12 w-full items-center justify-center rounded-md px-5 text-sm font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3",
                        featured
                          ? "bg-signature text-pure hover:bg-[#0656d6] focus-visible:outline-sky"
                          : "border border-signature/40 bg-transparent text-signature hover:border-signature hover:bg-ice focus-visible:outline-signature",
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

        <p className="mt-9 text-center">
          <Link
            href="/cleaning-plans"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-muted transition-colors hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
          >
            Explore Cleaning Plans
            <span aria-hidden className="translate-y-px">
              →
            </span>
          </Link>
        </p>
      </Container>
    </section>
  );
}
