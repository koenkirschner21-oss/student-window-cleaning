import { QuoteForm } from "@/components/quote/QuoteForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

function GraduationCapIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="size-4 shrink-0 text-sky"
    >
      <path
        d="M1.5 8.2 10 3.5l8.5 4.7L10 12.9 1.5 8.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M5.2 10.1v3.2c0 .4.9 1.7 4.8 1.7s4.8-1.3 4.8-1.7v-3.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 8.4v4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FinalCta() {
  return (
    <section
      id="quote"
      aria-labelledby="quote-section-heading"
      className="relative overflow-hidden bg-midnight text-pure"
      style={{
        background:
          "linear-gradient(165deg, #061A38 0%, #0A274F 48%, #061A38 100%)",
        paddingBlock: "var(--space-section-y)",
      }}
    >
      <Container width="wide">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <div className="max-w-xl lg:py-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              Let&apos;s Get Started
            </p>
            <h2
              id="quote-section-heading"
              className="font-heading mt-3 text-[clamp(1.85rem,3.4vw,2.75rem)] font-semibold tracking-tight text-pure"
            >
              Ready for a Clearer View?
            </h2>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/72 sm:text-base">
              Tell us what your home needs, and we&apos;ll help you find the
              right cleaning option. No obligation, just a personalized quote.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/55">
              <GraduationCapIcon />
              <span>{site.tagline}</span>
            </p>
          </div>

          <QuoteForm className="w-full" />
        </div>
      </Container>
    </section>
  );
}
