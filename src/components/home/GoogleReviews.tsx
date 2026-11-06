import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export function GoogleReviews() {
  return (
    <Section id="reviews" tone="white">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Heading level={2} eyebrow="Google reviews" className="max-w-md">
          Real customer feedback will live here.
        </Heading>
        <div className="rounded-lg border border-dashed border-border-strong bg-cloud px-6 py-8">
          <p className="font-heading text-lg font-semibold text-midnight">
            Reviews placeholder
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-navy-muted">
            We are not showing star ratings, review counts, or testimonials until
            they can be pulled from a verified Google Business Profile. When that
            connection is ready, this section will surface honest, attributable
            feedback — no invented quotes.
          </p>
        </div>
      </div>
    </Section>
  );
}
