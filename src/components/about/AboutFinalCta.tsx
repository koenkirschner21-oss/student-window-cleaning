import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { contact } from "@/lib/site";

/**
 * About closing CTA — contained Midnight panel on white (not full-bleed).
 */
export function AboutFinalCta() {
  return (
    <section
      aria-labelledby="about-final-cta-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "clamp(4rem, 7vw, 5rem)" }}
    >
      <Container width="portfolio">
        <div
          className="rounded-xl px-6 py-12 text-center text-pure sm:px-10 sm:py-14"
          style={{ backgroundColor: "#061A38" }}
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#3999EA] sm:text-xs">
            Support Local Students
          </p>
          <h2
            id="about-final-cta-heading"
            className="font-heading mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-pure sm:text-[1.95rem] sm:leading-tight"
          >
            Ready to Support Local Students?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/72">
            When you choose Student Window Cleaning, you&apos;re supporting
            hardworking local students while getting the professional care your
            property deserves.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
            >
              Get a Free Quote
            </Link>
            <p className="text-sm text-white/70 sm:text-base">
              Or call{" "}
              <a
                href="tel:9055500400"
                className="font-semibold text-pure underline-offset-2 transition-colors hover:text-[#3999EA] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
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
