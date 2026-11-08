import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { contact } from "@/lib/site";

/**
 * Option A — centered Midnight Navy CTA (contained, not full-bleed hero).
 */
export function OurWorkFinalCta() {
  return (
    <section
      aria-labelledby="our-work-final-cta-heading"
      className="bg-white text-midnight pt-16 pb-[4.5rem] sm:pt-20 sm:pb-20"
    >
      <Container width="portfolio">
        <div className="rounded-lg bg-midnight px-6 py-12 text-center text-pure sm:px-12 sm:py-14">
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
            From family homes to commercial spaces, we&apos;re here to help.
            Request a personalized virtual quote, free of charge.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-clear-sky sm:text-base"
            >
              Get a Free Quote
            </Link>
            <p className="text-sm text-pure/70 sm:text-base">
              Prefer to talk?{" "}
              <a
                href={contact.phoneHref}
                className="font-semibold text-pure underline-offset-2 transition-colors hover:text-sky hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-clear-sky"
              >
                {contact.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
