import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref, type FrequencyId } from "@/lib/site";

type PlanCard = {
  id: string;
  name: string;
  frequency: FrequencyId;
  featured: boolean;
  recommended: boolean;
  primary: string;
  frequencyLabel: string;
  supporting?: string;
  savingsSupporting?: string;
  benefits: readonly string[];
  pricingLine?: string;
};

const plans: readonly PlanCard[] = [
  {
    id: "basic",
    name: "Basic",
    frequency: "one-time",
    featured: false,
    recommended: false,
    primary: "1 Visit",
    frequencyLabel: "One-Time Cleaning",
    supporting:
      "Professional window cleaning whenever your home needs a refresh.",
    benefits: [
      "One cleaning visit",
      "Choose your cleaning services",
      "No ongoing commitment",
    ],
    pricingLine: "Personalized Quote",
  },
  {
    id: "best-value",
    name: "Best Value",
    frequency: "two-visit",
    featured: true,
    recommended: true,
    primary: "$50 OFF",
    frequencyLabel: "Twice-Yearly Cleaning",
    savingsSupporting: "EACH VISIT",
    benefits: [
      "Two cleaning visits per year",
      "$50 off each visit",
      "Priority scheduling, subject to availability",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    frequency: "three-visit",
    featured: false,
    recommended: false,
    primary: "$100 OFF",
    frequencyLabel: "Three Times Yearly",
    savingsSupporting: "EACH VISIT",
    benefits: [
      "Three cleaning visits per year",
      "$100 off each visit",
      "Priority scheduling, subject to availability",
    ],
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
 * Cleaning Plans comparison cards — Basic / Best Value / Premium.
 * Content and frequency preselects match quotePlanOptions.
 */
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
                      "font-heading mt-2 text-3xl font-extrabold tracking-tight sm:text-[2.35rem]",
                      featured ? "text-pure" : "text-midnight",
                    ].join(" ")}
                  >
                    {plan.primary}
                  </p>

                  {plan.savingsSupporting ? (
                    <p
                      className={[
                        "mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em]",
                        featured ? "text-sky" : "text-signature",
                      ].join(" ")}
                    >
                      {plan.savingsSupporting}
                    </p>
                  ) : null}

                  <p
                    className={[
                      "mt-3 text-sm font-medium tracking-tight",
                      featured ? "text-white/85" : "text-midnight",
                    ].join(" ")}
                  >
                    {plan.frequencyLabel}
                  </p>

                  {plan.supporting ? (
                    <p
                      className={[
                        "mt-2 text-sm leading-relaxed",
                        featured ? "text-white/70" : "text-navy-muted",
                      ].join(" ")}
                    >
                      {plan.supporting}
                    </p>
                  ) : null}

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

                  {plan.pricingLine ? (
                    <p
                      className={[
                        "mt-5 text-sm font-semibold tracking-tight",
                        featured ? "text-sky" : "text-midnight",
                      ].join(" ")}
                    >
                      {plan.pricingLine}
                    </p>
                  ) : (
                    <div className="mt-5 h-5" aria-hidden />
                  )}

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
      </Container>
    </section>
  );
}
