import { QuoteForm } from "@/components/quote/QuoteForm";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export function FinalCta() {
  return (
    <Section id="quote" tone="cloud" width="wide">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="max-w-md lg:pt-4">
          <Heading level={2} eyebrow="Request a quote">
            Tell us about your windows. We’ll follow up with a human reply.
          </Heading>
          <p className="mt-4 text-base leading-relaxed text-navy-muted">
            Two short steps — services first, then your contact details. This is
            a quote request, not an instant booking, and nothing is priced
            automatically online.
          </p>
        </div>
        <QuoteForm />
      </div>
    </Section>
  );
}
