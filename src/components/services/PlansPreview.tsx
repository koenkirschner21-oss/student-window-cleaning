import Link from "next/link";
import { CleaningPlanCards } from "@/components/service-plans/CleaningPlanCards";
import { Container } from "@/components/ui/Container";

/**
 * Services page Cleaning Plans preview — shared plan cards + explore link.
 */
export function PlansPreview() {
  return (
    <section
      aria-labelledby="services-plans-heading"
      className="bg-pure text-midnight"
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

        <CleaningPlanCards className="mt-10 sm:mt-12" />

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
