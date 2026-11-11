import { Container } from "@/components/ui/Container";
import { CleaningPlanCards } from "@/components/service-plans/CleaningPlanCards";

/**
 * Cleaning Plans comparison cards — Basic / Best Value / Premium.
 * Card UI shared with the Services page preview.
 */
export function PlansComparison() {
  return (
    <section
      aria-labelledby="plans-comparison-heading"
      className="bg-pure text-midnight pt-10 pb-[var(--space-section-y)] sm:pt-12 lg:pt-14"
    >
      <Container>
        <div className="max-w-2xl">
          <h2
            id="plans-comparison-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
          >
            Save Up to $100 on Every Visit.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-muted">
            Keep your windows looking their best while saving with our seasonal
            cleaning plans. Choose a one-time clean or schedule multiple visits
            throughout the year.
          </p>
        </div>

        <CleaningPlanCards className="mt-8 sm:mt-9 md:grid-cols-2 lg:mt-10" />
      </Container>
    </section>
  );
}
