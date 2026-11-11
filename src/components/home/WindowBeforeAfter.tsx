import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const images = [
  {
    src: "/before-after/windows/before.webp",
    alt: "Residential white-framed window on a brick home before cleaning, with visible water spots and film on the glass",
    label: "Before",
    objectPosition: "center 45%",
  },
  {
    src: "/before-after/windows/after.webp",
    alt: "Same style of residential brick-home window after cleaning, with clear streak-free glass and sharp reflections",
    label: "After",
    objectPosition: "center 42%",
  },
] as const;

/**
 * Compact homepage proof module — midnight-navy card on a white section.
 * Side-by-side because source frames were captured from different viewpoints.
 */
export function WindowBeforeAfter() {
  return (
    <section
      id="window-results"
      aria-labelledby="window-results-heading"
      className="bg-pure"
      style={{
        backgroundColor: "#FFFFFF",
        paddingBlock: "clamp(1.75rem, 3.5vw, 2.75rem)",
      }}
    >
      <Container>
        {/* ~12% wider than prior max-w-3xl (48rem → 54rem), still under site max-w-6xl */}
        <div
          className="mx-auto max-w-[54rem] rounded-[14px] px-4 py-6 text-pure sm:px-7 sm:py-7 md:px-8"
          style={{ backgroundColor: "#061A38" }}
        >
          <header className="mx-auto max-w-lg text-center">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/80 sm:text-[0.7rem]">
              See the Difference
            </p>
            <h2
              id="window-results-heading"
              className="font-heading mt-1.5 text-[clamp(1.4rem,2.5vw,1.75rem)] font-semibold tracking-tight text-pure"
            >
              Results You Can See.
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-white/80">
              Real window cleaning results from our team.
            </p>
          </header>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-4 md:gap-5">
            {images.map((item) => (
              <figure key={item.label} className="m-0 min-w-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#0A274F]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 42vw, 400px"
                    className="object-cover"
                    style={{ objectPosition: item.objectPosition }}
                  />
                </div>
                <figcaption className="mt-2.5 flex justify-center">
                  <span
                    className="inline-flex h-8 w-[6.75rem] items-center justify-center rounded-md bg-pure text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-midnight sm:w-[7.25rem] sm:text-xs"
                    style={{ color: "#061A38" }}
                  >
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-7 sm:flex-row sm:gap-x-6">
            <Link
              href={quoteHref()}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-150 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
              style={{ backgroundColor: "#0865F8" }}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/our-work"
              className="inline-flex min-h-11 items-center justify-center text-sm font-semibold tracking-tight text-pure underline-offset-4 transition-colors duration-150 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              View Our Work →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
