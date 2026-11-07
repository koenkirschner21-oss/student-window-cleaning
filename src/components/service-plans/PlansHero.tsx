import { Container } from "@/components/ui/Container";

export function PlansHero() {
  return (
    <section
      aria-labelledby="service-plans-heading"
      className="border-b border-border bg-cloud text-midnight"
    >
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="motion-fade-up max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
            Cleaning Plans
          </p>
          <h1
            id="service-plans-heading"
            className="font-heading mt-3 text-[clamp(1.85rem,3.8vw,2.85rem)] font-semibold tracking-tight text-midnight"
          >
            Window Cleaning Service Plans
          </h1>
          <p className="mt-3 font-heading text-lg font-semibold tracking-tight text-signature sm:text-xl">
            Professional Care. On Your Schedule.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-muted">
            From a one-time clean to regular seasonal care, choose the service
            plan that works for your home.
          </p>
        </div>
      </Container>
    </section>
  );
}
