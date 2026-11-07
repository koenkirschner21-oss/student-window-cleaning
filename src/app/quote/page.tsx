import type { Metadata } from "next";
import { Suspense } from "react";
import {
  QuoteBrandAside,
  QuoteExpectations,
} from "@/components/quote/QuoteBrandAside";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { QuoteFormWithSearchParams } from "@/components/quote/QuoteFormWithSearchParams";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Get a Free Quote | Window Cleaning in Whitby",
  description:
    "Request a free Student Window Cleaning quote for window and gutter cleaning in Whitby and Durham Region. Tell us about your property — we’ll prepare a personalized quote.",
  alternates: {
    canonical: "/quote",
  },
  openGraph: {
    title: "Get a Free Quote | Student Window Cleaning",
    description:
      "Tell us about your property and services. Get a free, personalized window or gutter cleaning quote — not an online booking.",
    url: "/quote",
  },
};

export default function QuotePage() {
  return (
    <main id="main-content" className="flex-1 bg-cloud">
      <Container className="py-10 sm:py-12 lg:py-14">
        <header className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
            Get a Free Quote
          </p>
          <h1 className="font-heading mt-3 text-[clamp(1.75rem,3.6vw,2.65rem)] font-semibold tracking-tight text-midnight">
            Let&apos;s Get Your Windows Looking Their Best.
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-navy-muted">
            Tell us a little about your property and the services you&apos;re
            interested in. We&apos;ll help you find the right cleaning option.
          </p>
        </header>

        <div className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10 xl:gap-12">
          <div className="min-w-0">
            <Suspense fallback={<QuoteForm />}>
              <QuoteFormWithSearchParams />
            </Suspense>
            <div className="mt-5 lg:hidden">
              <QuoteExpectations />
            </div>
          </div>

          <aside className="min-w-0 space-y-5">
            <QuoteBrandAside />
            <div className="hidden lg:block">
              <QuoteExpectations />
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
