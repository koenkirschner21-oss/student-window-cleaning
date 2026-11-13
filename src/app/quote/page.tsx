import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { QuoteFormWithSearchParams } from "@/components/quote/QuoteFormWithSearchParams";
import { QuoteTrustBand } from "@/components/quote/QuoteTrustBand";
import { Container } from "@/components/ui/Container";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Virtual Quote | Window Cleaning in Whitby",
  description:
    "Request a free virtual window and gutter cleaning quote from Student Window Cleaning in Whitby and Durham Region. Fast, simple, and no obligation.",
  alternates: {
    canonical: "/quote",
  },
  openGraph: {
    title: "Get a Free Virtual Quote | Student Window Cleaning",
    description:
      "Tell us about your home or business. We’ll review the property and prepare a personalized virtual quote — no obligation.",
    url: "/quote",
  },
};

export default function QuotePage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Full-width Midnight Navy — form remains white focal point */}
      <section
        aria-labelledby="quote-page-heading"
        className="text-pure"
        style={{ backgroundColor: "#061A38" }}
      >
        <Container className="py-9 sm:py-11 lg:py-12">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
              Get a Free Virtual Quote
            </p>
            <h1
              id="quote-page-heading"
              className="font-heading mt-3 text-[clamp(1.65rem,3.4vw,2.45rem)] font-bold tracking-tight text-pure"
            >
              Request Your Free Virtual Quote
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/72">
              Tell us a bit about your home or business and we&apos;ll review
              the property and prepare a personalized quote. Fast, simple, and
              no obligation.
            </p>
            <p className="mt-3 text-sm text-white/70">
              Prefer to talk first? Call or text{" "}
              <a
                href={contact.phoneHref}
                className="font-semibold text-sky transition-colors hover:text-pure focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
              >
                {contact.phoneDisplay}
              </a>
              .
            </p>
          </header>

          <div className="mx-auto mt-8 w-full max-w-[820px] lg:mt-10">
            <Suspense fallback={<QuoteForm />}>
              <QuoteFormWithSearchParams />
            </Suspense>
          </div>
        </Container>
      </section>

      {/* White band with contained navy promotional card */}
      <section
        className="bg-pure"
        style={{ paddingBlock: "clamp(2.75rem, 5vw, 4rem)" }}
      >
        <Container>
          <div className="mx-auto w-full max-w-[1160px]">
            <QuoteTrustBand />
          </div>
        </Container>
      </section>
    </main>
  );
}
