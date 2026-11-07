import Link from "next/link";
import { Container } from "@/components/ui/Container";

const plans = [
  {
    name: "Basic",
    visits: "1 Visit",
    summary: "A professional one-time clean whenever you need it.",
  },
  {
    name: "Best Value",
    visits: "2 Visits",
    summary: "Seasonal window care with a second visit built in.",
  },
  {
    name: "Premium",
    visits: "3 Visits",
    summary: "More frequent care for a consistently clear view.",
  },
] as const;

export function PlansPreview() {
  return (
    <section
      aria-labelledby="services-plans-heading"
      className="bg-ice text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div className="max-w-2xl">
          <h2
            id="services-plans-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
          >
            Keep the Clear View, Season After Season.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted">
            Whether you&apos;re looking for a one-time clean or ongoing seasonal
            care, we offer flexible cleaning options to suit your home.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-5 lg:mt-12">
          {plans.map((plan) => (
            <li key={plan.name} className="min-w-0 border-t border-border-strong pt-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-signature">
                {plan.name}
              </p>
              <p className="font-heading mt-2 text-2xl font-extrabold tracking-tight text-midnight">
                {plan.visits}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                {plan.summary}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-9">
          <Link
            href="/cleaning-plans"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-midnight transition-colors hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
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
