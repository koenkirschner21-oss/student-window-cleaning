import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { contact } from "@/lib/site";

/**
 * Wider contained Midnight Navy closing CTA with white page separation before the footer.
 */
export function OurWorkFinalCta() {
  return (
    <section
      aria-labelledby="our-work-final-cta-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container width="portfolio">
        <div className="mx-auto max-w-[72rem] rounded-md bg-midnight px-6 py-11 text-center text-pure sm:px-12 sm:py-14 lg:px-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
            Let&apos;s Get Started
          </p>
          <h2
            id="our-work-final-cta-heading"
            className="font-heading mt-3 text-2xl font-semibold tracking-tight text-pure sm:text-[1.95rem] sm:leading-tight"
          >
            Let&apos;s Take Care of Your Property.
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-base leading-relaxed text-pure/78">
            Every property is different. Request a free personalized virtual
            quote and we&apos;ll take it from there.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/quote"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-clear-sky sm:w-auto sm:text-base"
            >
              Get a Free Quote
            </Link>
            <a
              href={contact.phoneHref}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-pure/35 bg-transparent px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:border-pure/60 hover:bg-pure/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-clear-sky sm:w-auto sm:text-base"
            >
              Call {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
