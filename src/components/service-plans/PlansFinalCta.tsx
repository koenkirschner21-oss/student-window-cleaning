import Link from "next/link";
import { Container } from "@/components/ui/Container";

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-4 shrink-0">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m8.6 12.1 2.2 2.2 4.6-4.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-4 shrink-0">
      <path
        d="m3.5 9.5 8.5-4.5 8.5 4.5-8.5 4.5L3.5 9.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 12.2v3.3c0 .8 2.2 2 5 2s5-1.2 5-2v-3.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 9.8v4.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Cleaning Plans final CTA — full-width Midnight Navy band above the footer.
 */
export function PlansFinalCta() {
  return (
    <section
      aria-labelledby="plans-final-cta-heading"
      className="border-t border-white/10 text-pure"
      style={{
        backgroundColor: "#061A38",
        paddingBlock: "clamp(3.25rem, 5.5vw, 4.5rem)",
      }}
    >
      <Container>
        <div className="mx-auto max-w-[50rem] text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#3999EA] sm:text-xs">
            Ready for a Cleaner Home?
          </p>
          <h2
            id="plans-final-cta-heading"
            className="font-heading mx-auto mt-3 max-w-[40rem] text-[clamp(1.65rem,3.2vw,2.15rem)] font-semibold tracking-tight text-pure sm:leading-tight"
          >
            Your Clean. Your Schedule. More Savings.
          </h2>
          <p className="mx-auto mt-3.5 max-w-[40rem] text-base leading-relaxed text-white/72">
            Choose the services and cleaning plan that work for your home. Get a
            free personalized quote from our local student-run team.
          </p>
          <p className="mt-7 sm:mt-8">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
            >
              Get My Free Quote
              <span aria-hidden className="translate-y-px text-base leading-none">
                →
              </span>
            </Link>
          </p>
          <ul className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/70">
            <li className="inline-flex items-center gap-2">
              <span className="text-[#3999EA]">
                <CheckCircleIcon />
              </span>
              <span>Free personalized quote</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="text-[#3999EA]">
                <GraduationCapIcon />
              </span>
              <span>Support local students</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
