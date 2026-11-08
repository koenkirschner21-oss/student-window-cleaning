import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function OurWorkFinalCta() {
  return (
    <section
      aria-labelledby="our-work-final-cta-heading"
      className="bg-pure text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div className="mx-auto max-w-2xl rounded-md border border-border bg-ice px-6 py-10 text-center sm:px-10 sm:py-12">
          <h2
            id="our-work-final-cta-heading"
            className="font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-[1.85rem] sm:leading-tight"
          >
            Ready for a Clearer View?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-navy-muted">
            See what professional window cleaning can do for your property.
            Request your free virtual quote today.
          </p>
          <div className="mt-7">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature sm:text-base"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
