import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Services overview — problem/solution bridge into dedicated gutter guards page.
 */
export function GutterGuardsFeature() {
  return (
    <section
      id="gutter-guards"
      aria-labelledby="gutter-guards-overview-heading"
      className="scroll-mt-28 bg-white text-midnight"
      style={{ paddingBlock: "clamp(3rem, 5vw, 4.5rem)" }}
    >
      <Container width="portfolio">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="gutter-guards-overview-heading"
            className="font-heading text-[clamp(1.65rem,3vw,2.15rem)] font-semibold tracking-tight text-midnight sm:leading-tight"
          >
            Tired of Cleaning Your Gutters Every Season?
          </h2>
        </div>

        <aside
          className="mt-8 overflow-hidden rounded-[15px] sm:mt-9"
          aria-labelledby="gutter-guards-feature-heading"
        >
          <div className="grid min-h-[13.75rem] sm:min-h-[14.5rem] md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:min-h-[15.5rem] lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
            <div className="relative min-h-[11.5rem] bg-[#061A38] md:min-h-0">
              <Image
                src="/services/gutter-guards.webp"
                alt="Close-up of micro-mesh gutter guard being installed into a white residential gutter under roof shingles"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-[center_40%]"
              />
            </div>
            <div
              className="flex flex-col justify-center px-5 py-6 text-pure sm:px-7 sm:py-7 lg:px-8"
              style={{ backgroundColor: "#0A274F" }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-[0.7rem]">
                Complementary Service
              </p>
              <h3
                id="gutter-guards-feature-heading"
                className="font-heading mt-2 text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]"
              >
                Gutter Guards: A Smarter Way to Protect Your Gutters
              </h3>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                Help reduce leaves and debris collecting in your gutters. Gutter
                guards can make ongoing maintenance easier and help keep your
                gutter system clearer between cleanings.
              </p>
              <div className="mt-5">
                <Link
                  href="/services/gutter-guards"
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
                >
                  Explore Gutter Guards
                  <span aria-hidden className="ml-1.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
