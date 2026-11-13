import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref, type QuotePlanId } from "@/lib/site";

type BenefitValue = "yes" | "no";

const benefits = [
  {
    label: "Professional cleaning visit(s)",
    values: { basic: "yes", "best-value": "yes", premium: "yes" },
  },
  {
    label: "No automatic recurring subscription",
    values: { basic: "yes", "best-value": "yes", premium: "yes" },
  },
  {
    label: "Multi-visit discounts",
    values: { basic: "no", "best-value": "yes", premium: "yes" },
  },
  {
    label: "Three planned visits",
    values: { basic: "no", "best-value": "no", premium: "yes" },
  },
] as const satisfies ReadonlyArray<{
  label: string;
  values: Record<"basic" | "best-value" | "premium", BenefitValue>;
}>;

const plans = [
  {
    id: "basic",
    frequency: "one-time" as QuotePlanId,
    featured: false,
    eyebrow: "Basic",
    primary: "1 Visit",
    label: "One-Time Cleaning",
  },
  {
    id: "best-value",
    frequency: "two-visit" as QuotePlanId,
    featured: true,
    badge: "Best Value",
    primary: "$50 OFF",
    eachVisit: true,
    label: "2 Cleaning Visits",
  },
  {
    id: "premium",
    frequency: "three-visit" as QuotePlanId,
    featured: false,
    eyebrow: "Premium",
    primary: "$100 OFF",
    eachVisit: true,
    label: "3 Cleaning Visits",
  },
] as const;

function CheckIcon({ light }: { light?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`mt-0.5 size-3.5 shrink-0 ${light ? "text-pure" : "text-signature"}`}
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

function CrossIcon({ light }: { light?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`mt-0.5 size-3.5 shrink-0 ${light ? "text-white/40" : "text-[#8D9AAF]"}`}
    >
      <path
        d="M4.2 4.2 11.8 11.8M11.8 4.2 4.2 11.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CleaningPlans() {
  return (
    <section
      id="cleaning-plans"
      aria-labelledby="cleaning-plans-heading"
      className="bg-midnight text-pure py-20 lg:py-24"
    >
      <Container>
        <header className="max-w-2xl text-left">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
            Our Cleaning Plans
          </p>
          <h2
            id="cleaning-plans-heading"
            className="font-heading mt-3 text-[2.375rem] font-bold leading-tight tracking-tight text-pure sm:text-[2.5rem] lg:text-[2.75rem]"
          >
            More Visits. Bigger Savings.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Choose a one-time clean or save on every visit with our seasonal
            cleaning plans. Find the right level of care for your home.
          </p>
        </header>

        {/*
          Compact content-aware subgrid (5 zones). Longest content in a zone
          sets that zone’s height — no fixed card heights or spacer rows.
          Mobile: per-card auto rows (no desktop blank space).
        */}
        <ul className="mt-10 grid list-none gap-x-6 gap-y-6 p-0 md:grid-cols-2 lg:mt-11 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
          {plans.map((plan) => {
            const featured = plan.featured;
            const planKey = plan.id as "basic" | "best-value" | "premium";

            return (
              <li
                key={plan.id}
                className="min-w-0 lg:row-span-5 lg:grid lg:grid-rows-subgrid"
              >
                <article
                  className={[
                    "grid h-full w-full grid-rows-[repeat(5,auto)] rounded-[15px] p-6 sm:p-7 lg:row-span-5 lg:grid-rows-subgrid",
                    featured
                      ? "border border-signature bg-signature text-pure shadow-[0_10px_28px_color-mix(in_srgb,var(--color-signature-blue)_28%,transparent)]"
                      : "border border-white/15 bg-pure text-midnight",
                  ].join(" ")}
                >
                  {/* Zone 1 — plan name / badge (content-sized) */}
                  <div className="flex items-start">
                    {"badge" in plan && plan.badge ? (
                      <p className="inline-flex w-fit rounded-md bg-pure px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-signature">
                        {plan.badge}
                      </p>
                    ) : "eyebrow" in plan && plan.eyebrow ? (
                      <p className="py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-signature">
                        {plan.eyebrow}
                      </p>
                    ) : null}
                  </div>

                  {/* Zone 2 — primary offer (shared type size so lines match) */}
                  <p
                    className={[
                      "font-heading mt-2 text-4xl font-extrabold tracking-tight sm:text-[2.65rem]",
                      featured ? "text-pure" : "text-midnight",
                    ].join(" ")}
                  >
                    {plan.primary}
                  </p>

                  {/* Zone 3 — supporting visit info (EACH VISIT + frequency; labels bottom-align) */}
                  <div className="mt-1.5 flex flex-col justify-end">
                    {"eachVisit" in plan && plan.eachVisit ? (
                      <p
                        className={[
                          "text-[0.65rem] font-semibold uppercase tracking-[0.16em]",
                          featured ? "text-pure/80" : "text-signature",
                        ].join(" ")}
                      >
                        Each Visit
                      </p>
                    ) : null}
                    <p
                      className={[
                        "text-sm font-semibold tracking-tight sm:text-[0.95rem]",
                        "eachVisit" in plan && plan.eachVisit ? "mt-1.5" : "",
                        featured ? "text-pure" : "text-midnight",
                      ].join(" ")}
                    >
                      {plan.label}
                    </p>
                  </div>

                  {/* Zone 4 — four benefit rows */}
                  <ul
                    className={[
                      "mt-3.5 grid list-none grid-rows-4 content-start p-0",
                      featured
                        ? "border-t border-white/15"
                        : "border-t border-[color-mix(in_srgb,var(--color-midnight-navy)_8%,transparent)]",
                    ].join(" ")}
                    aria-label={`${plan.id} benefits`}
                  >
                    {benefits.map((benefit, index) => {
                      const included = benefit.values[planKey] === "yes";
                      return (
                        <li
                          key={benefit.label}
                          className={[
                            "flex items-start gap-2.5 py-2 text-sm leading-snug",
                            index > 0
                              ? featured
                                ? "border-t border-white/15"
                                : "border-t border-[color-mix(in_srgb,var(--color-midnight-navy)_8%,transparent)]"
                              : "",
                            featured
                              ? included
                                ? "text-white/90"
                                : "text-white/45"
                              : included
                                ? "text-navy-muted"
                                : "text-[#8D9AAF]",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {included ? (
                            <CheckIcon light={featured} />
                          ) : (
                            <CrossIcon light={featured} />
                          )}
                          <span>{benefit.label}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Zone 5 — CTA */}
                  <div className="pt-5">
                    <Link
                      href={quoteHref({ frequency: plan.frequency })}
                      className={[
                        "inline-flex min-h-12 w-full items-center justify-center rounded-md px-5 text-sm font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3",
                        featured
                          ? "bg-midnight text-pure hover:bg-[#0a2548] focus-visible:outline-pure"
                          : "border border-signature/45 bg-transparent text-signature hover:border-signature hover:bg-ice focus-visible:outline-signature",
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

        <p className="mt-8">
          <Link
            href="/cleaning-plans"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-pure transition-colors hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
          >
            Explore All Cleaning Plans
            <span aria-hidden className="translate-y-px">
              →
            </span>
          </Link>
        </p>
      </Container>
    </section>
  );
}
