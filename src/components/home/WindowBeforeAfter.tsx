import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const images = [
  {
    src: "/before-after/windows/before.webp",
    alt: "Residential white-framed window on a brick home before cleaning, with visible water spots and film on the glass",
    label: "Before",
    objectPosition: "center 48%",
  },
  {
    src: "/before-after/windows/after.webp",
    alt: "Same style of residential brick-home window after cleaning, with clear streak-free glass and sharp reflections",
    label: "After",
    objectPosition: "center 48%",
  },
] as const;

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-3.5 shrink-0">
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.1 8.15 7.05 10l3.85-4.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
        paddingBlock: "clamp(1.35rem, 2.8vw, 2.25rem)",
      }}
    >
      <Container>
        <div
          className="rounded-[15px] px-4 py-5 text-pure sm:px-6 sm:py-6 md:px-8 md:py-7"
          style={{ backgroundColor: "#061A38" }}
        >
          <header className="mx-auto max-w-xl text-center">
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
              Real homes. Real results. See the difference our student-run team
              makes.
            </p>
          </header>

          <div className="mt-5 grid grid-cols-1 gap-3.5 sm:mt-5 sm:grid-cols-2 sm:gap-3.5 md:gap-4">
            {images.map((item) => (
              <figure key={item.label} className="m-0 min-w-0">
                <figcaption className="mb-2 flex justify-center">
                  <span className="inline-flex h-7 min-w-[5.75rem] items-center justify-center rounded-md bg-pure px-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-midnight sm:min-w-[6.25rem] sm:text-[0.7rem]">
                    {item.label}
                  </span>
                </figcaption>
                <div className="relative aspect-[16/11] overflow-hidden rounded-[12px] bg-[#0A274F] sm:aspect-[5/3.5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 560px"
                    className="object-cover"
                    style={{ objectPosition: item.objectPosition }}
                  />
                </div>
              </figure>
            ))}
          </div>

          <p className="mt-4 flex items-center justify-center gap-2 text-center text-[0.8rem] leading-snug text-white/70 sm:text-sm">
            <span className="text-signature">
              <CheckCircleIcon />
            </span>
            <span>Real cleaning results from our local student-run team.</span>
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-x-6">
            <Link
              href={quoteHref()}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-150 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/our-work"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 text-sm font-semibold tracking-tight text-pure transition-colors duration-150 hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              See More of Our Work
              <span aria-hidden className="translate-y-px">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
