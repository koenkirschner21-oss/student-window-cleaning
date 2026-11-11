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
 * Compact homepage proof module — side-by-side because the source frames
 * were captured from slightly different viewpoints.
 */
export function WindowBeforeAfter() {
  return (
    <section
      id="window-results"
      aria-labelledby="window-results-heading"
      className="bg-pure text-midnight"
      style={{
        backgroundColor: "#FFFFFF",
        paddingBlock: "clamp(1.75rem, 3.5vw, 2.5rem)",
      }}
    >
      <Container>
        <div className="mx-auto max-w-3xl rounded-[14px] border border-border bg-pure px-4 py-6 sm:px-6 sm:py-7">
          <header className="mx-auto max-w-md text-center">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-signature sm:text-[0.7rem]">
              See the Difference
            </p>
            <h2
              id="window-results-heading"
              className="font-heading mt-1.5 text-[clamp(1.35rem,2.4vw,1.65rem)] font-semibold tracking-tight text-midnight"
            >
              Before &amp; After Results
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-navy-muted">
              Real results from our window cleaning work.
            </p>
          </header>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3.5">
            {images.map((item) => (
              <figure key={item.label} className="m-0 min-w-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] border border-border bg-cloud sm:rounded-[12px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 45vw, 280px"
                    className="object-cover"
                    style={{ objectPosition: item.objectPosition }}
                  />
                  <span className="absolute left-2 top-2 rounded-md bg-midnight/90 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-pure sm:left-2.5 sm:top-2.5 sm:px-2.5 sm:text-[0.65rem]">
                    {item.label}
                  </span>
                </div>
              </figure>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 sm:mt-6">
            <Link
              href={quoteHref()}
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-signature px-4 text-sm font-semibold tracking-tight text-pure transition-colors duration-150 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/our-work"
              className="inline-flex min-h-10 items-center justify-center text-sm font-semibold tracking-tight text-navy-muted transition-colors duration-150 hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
