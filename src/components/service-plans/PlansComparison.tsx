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
            Find the Right Cleaning Plan
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-muted">
            From a one-time refresh to regular seasonal care, choose the plan
            that fits your home. Every option starts with a free personalized
            quote.
          </p>
        </div>

        <CleaningPlanCards className="mt-8 sm:mt-9 md:grid-cols-2 lg:mt-10" />
      </Container>
    </section>
  );
}
