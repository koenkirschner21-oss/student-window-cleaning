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
    <main id="main-content" className="flex-1 bg-cloud">
      <Container className="py-9 sm:py-11 lg:py-12">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
            Get a Free Virtual Quote
          </p>
          <h1 className="font-heading mt-3 text-[clamp(1.65rem,3.4vw,2.45rem)] font-bold tracking-tight text-midnight">
            Request Your Free Virtual Quote
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-navy-muted">
            Tell us a bit about your home or business and we&apos;ll review the
            property and prepare a personalized quote. Fast, simple, and no
            obligation.
          </p>
          <p className="mt-3 text-sm text-navy-muted">
            Prefer to talk first? Call or text{" "}
            <a
              href={contact.phoneHref}
              className="font-semibold text-signature transition-colors hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
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

      {/* Contained trust band: space above form → whitespace below before footer */}
      <Container className="pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24">
        <div className="mx-auto max-w-[820px]">
          <QuoteTrustBand />
        </div>
      </Container>
    </main>
  );
}
