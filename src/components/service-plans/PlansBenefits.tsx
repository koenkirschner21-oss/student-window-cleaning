import { Container } from "@/components/ui/Container";

const benefits = [
  {
    title: "Consistent Care",
    body: "Seasonal cleaning helps your windows stay clearer with steady attention across the year.",
  },
  {
    title: "Convenient Scheduling",
    body: "Choose a visit count that fits your home's rhythm, then agree on timing that works for you.",
  },
  {
    title: "Less to Remember",
    body: "Multi-visit plans keep follow-up care planned ahead — subject to agreed timing — so upkeep is simpler.",
  },
] as const;

export function PlansBenefits() {
  return (
    <section
      aria-labelledby="plans-benefits-heading"
      className="bg-ice text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div className="max-w-2xl">
          <h2
            id="plans-benefits-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
          >
            Keep Your Windows Looking Their Best.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-muted">
            Recurring seasonal cleaning is about steady care — not automatic
            billing or guaranteed dates.
          </p>
        </div>

        <ul className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-12 lg:gap-10">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="min-w-0">
              <h3 className="font-heading text-lg font-semibold tracking-tight text-midnight">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]">
                {benefit.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
