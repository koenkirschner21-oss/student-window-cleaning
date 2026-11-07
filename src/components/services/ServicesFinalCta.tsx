import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function ServicesFinalCta() {
  return (
    <section
      aria-labelledby="services-final-cta-heading"
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
            id="services-final-cta-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-pure sm:text-[2.15rem] sm:leading-tight"
          >
            Ready to See the Difference?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/72">
            Tell us what your home needs and request a free, personalized
            cleaning quote.
          </p>
          <p className="mt-8">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
            >
              Get a Free Quote
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
