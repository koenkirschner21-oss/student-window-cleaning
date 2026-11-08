import { Container } from "@/components/ui/Container";

/**
 * Cleaning Plans hero — compact full-width Midnight Navy, centered editorial.
 */
export function PlansHero() {
  return (
    <section
      aria-labelledby="service-plans-heading"
      className="bg-midnight text-pure"
      style={{ backgroundColor: "#061A38" }}
    >
      <Container className="flex items-center justify-center py-10 sm:py-11 lg:py-12">
        <div className="motion-fade-up mx-auto max-w-[45rem] text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#3999EA] sm:text-xs">
            Cleaning Plans
          </p>
          <h1
            id="service-plans-heading"
            className="font-heading mt-2.5 text-[clamp(1.85rem,3.6vw,2.5rem)] font-semibold tracking-tight text-pure sm:mt-3"
          >
            A Clearer View. More Savings.
          </h1>
          <p className="mx-auto mt-3 max-w-[42rem] text-[0.95rem] leading-relaxed text-white/72 sm:mt-3.5 sm:text-base">
            Choose a one-time clean or save up to $100 per visit with seasonal
            window cleaning from our local student-run team.
          </p>
        </div>
      </Container>
    </section>
  );
}
