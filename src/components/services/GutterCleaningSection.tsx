import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const benefits = [
  {
    title: "Gutter Debris Removal",
    description:
      "Removal of accumulated leaves and debris from gutter channels.",
  },
  {
    title: "Downspout Clearing",
    description:
      "Clearing reachable downspout blockages to support proper drainage.",
  },
  {
    title: "Care for Your Property",
    description:
      "Careful work around landscaping with responsible debris handling.",
  },
] as const;

/**
 * Services overview — concise gutter cleaning intro linking to dedicated page.
 */
export function GutterCleaningSection() {
  return (
    <section
      id="gutter-cleaning"
      aria-labelledby="gutter-cleaning-heading"
      className="scroll-mt-28 text-pure"
      style={{
        backgroundColor: "#061A38",
        paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)",
      }}
    >
      <Container width="portfolio">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-10 xl:gap-12">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              Professional Gutter Care
            </p>
            <h2
              id="gutter-cleaning-heading"
              className="font-heading mt-2 text-[clamp(2rem,3.4vw,2.45rem)] font-semibold tracking-tight text-pure sm:mt-2.5 sm:leading-tight"
            >
              Gutter Cleaning
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-white/72 sm:text-[1.05rem]">
              Leaves and debris can block gutters and cause overflow during
              rain. Our student-run team clears accessible buildup so water can
              drain properly and your home stays better protected.
            </p>

            <ul className="mt-7 space-y-4">
              {benefits.map((item) => (
                <li key={item.title} className="min-w-0">
                  <p className="font-heading text-[1.05rem] font-semibold tracking-tight text-pure">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/services/gutter-cleaning"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
              >
                Explore Gutter Cleaning
                <span aria-hidden className="ml-1.5">
                  →
                </span>
              </Link>
            </div>
          </div>

          <figure className="m-0 w-full justify-self-center lg:justify-self-end">
            <div className="relative aspect-[4/5] w-full max-w-[24rem] overflow-hidden rounded-[14px] border border-white/10 bg-[#0A274F] sm:aspect-[5/6] lg:ml-auto lg:h-[24.5rem] lg:w-[22.5rem] lg:max-w-none lg:aspect-auto">
              <Image
                src="/services/gutter-cleaning-hose.webp"
                alt="Team member on a ladder flushing a residential roof gutter with a hose nozzle"
                fill
                sizes="(max-width: 1024px) min(100vw, 24rem), 22.5rem"
                className="object-cover object-[center_35%]"
              />
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}
