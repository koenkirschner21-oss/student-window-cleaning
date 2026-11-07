import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function OurWorkFinalCta() {
  return (
    <section
      aria-labelledby="our-work-final-cta-heading"
      className="bg-midnight text-pure"
      style={{
        background:
          "linear-gradient(165deg, #061A38 0%, #0A274F 48%, #061A38 100%)",
        paddingBlock: "var(--space-section-y)",
      }}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="our-work-final-cta-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-pure sm:text-[2.15rem] sm:leading-tight"
          >
            Like What You See?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/72">
            Bring the same professional care to your home. Request a free window
            or gutter cleaning quote.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 bg-transparent px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:border-white/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
