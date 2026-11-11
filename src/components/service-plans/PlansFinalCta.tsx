import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Cleaning Plans final CTA — contained Midnight Navy card on white.
 */
export function PlansFinalCta() {
  return (
    <section
      aria-labelledby="plans-final-cta-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "clamp(3rem, 5.5vw, 4.5rem)" }}
    >
      <Container width="portfolio">
        <div
          className="rounded-[1.125rem] px-5 py-10 text-center text-pure sm:px-10 sm:py-12"
          style={{ backgroundColor: "#061A38" }}
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#3999EA] sm:text-xs">
            Ready for a Clearer Home?
          </p>
          <h2
            id="plans-final-cta-heading"
            className="font-heading mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-pure sm:text-[1.95rem] sm:leading-tight"
          >
            Your Clean. Your Schedule. More Savings.
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-base leading-relaxed text-white/72">
            Find the right cleaning plan and get a free, personalized quote from
            our local student-run team.
          </p>
          <div className="mt-7 flex flex-col items-center gap-4 sm:mt-8">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
            >
              Get My Free Quote
              <span aria-hidden className="translate-y-px text-base leading-none">
                →
              </span>
            </Link>
            <p className="text-sm text-white/70 sm:text-base">
              Free personalized quote · Support local students
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
