import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Cleaning Plans final CTA — student-focused split card (photo + navy panel).
 * Dedicated to /cleaning-plans; do not swap shared CTAs for this layout.
 */
export function PlansFinalCta() {
  return (
    <section
      aria-labelledby="plans-final-cta-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "clamp(3rem, 5.5vw, 4.5rem)" }}
    >
      <Container width="portfolio">
        <div className="overflow-hidden rounded-[1.125rem]">
          <div className="grid min-h-[18rem] md:min-h-[19.5rem] md:grid-cols-2 lg:min-h-[21rem]">
            <div className="relative min-h-[14rem] md:min-h-0">
              <Image
                src="/about/student-community-lang-group.webp"
                alt="University student community group in professional attire posing together in front of a Gordon S. Lang School of Business and Economics banner"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority={false}
              />
            </div>

            <div
              className="flex flex-col justify-center px-5 py-8 text-pure sm:px-8 sm:py-10 lg:px-10 lg:py-11"
              style={{ backgroundColor: "#061A38" }}
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#3999EA] sm:text-xs">
                Support Local Students
              </p>
              <h2
                id="plans-final-cta-heading"
                className="font-heading mt-3 max-w-md text-2xl font-semibold tracking-tight text-pure sm:text-[1.85rem] sm:leading-tight"
              >
                Cleaner Windows. Smarter Savings. A Stronger Local Community.
              </h2>
              <p className="mt-3.5 max-w-md text-base leading-relaxed text-white/72">
                Choose a cleaning plan that works for your schedule while
                supporting our hardworking student-run team. Get a free
                personalized quote and find the right plan for your home.
              </p>
              <div className="mt-7 flex flex-col items-start gap-3.5 sm:mt-8">
                <Link
                  href="/quote"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
                >
                  Get My Free Quote
                  <span
                    aria-hidden
                    className="translate-y-px text-base leading-none"
                  >
                    →
                  </span>
                </Link>
                <p className="text-sm text-white/70">
                  Free personalized quote · Support local students
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
