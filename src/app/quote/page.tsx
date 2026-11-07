import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { QuoteFormWithSearchParams } from "@/components/quote/QuoteFormWithSearchParams";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free Student Window Cleaning quote. Frontend form only until a submission backend is connected.",
};

export default function QuotePage() {
  return (
    <main id="main-content" className="flex-1 bg-cloud">
      <Container className="grid gap-10 py-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:py-20">
        <div className="max-w-md lg:pt-2">
          <Heading level={1} eyebrow="Free quote">
            Share a few details and we’ll take it from there.
          </Heading>
          <p className="mt-4 text-base leading-relaxed text-navy-muted">
            Same two-step form as the homepage. Requests are not booked
            automatically, and quotes are prepared by the team — not calculated
            online.
          </p>
        </div>
        <Suspense fallback={<QuoteForm />}>
          <QuoteFormWithSearchParams />
        </Suspense>
      </Container>
    </main>
  );
}
