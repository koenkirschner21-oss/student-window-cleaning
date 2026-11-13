import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Compact homepage Our Work teaser — navy content left, photo right
 * (alternates with the quote section layout above).
 */
export function HomepageOurWorkShowcase() {
  return (
    <section
      id="our-work-showcase"
      aria-labelledby="our-work-showcase-heading"
      className="bg-pure"
      style={{
        backgroundColor: "#FFFFFF",
        paddingBlock: "clamp(3.5rem, 6vw, 5rem)",
      }}
    >
      <Container>
        <aside className="overflow-hidden rounded-[15px]">
          <div className="grid min-h-[17.5rem] md:min-h-[18.75rem] md:grid-cols-2 lg:min-h-[20rem]">
            <div
              className="flex flex-col justify-center px-5 py-7 text-pure sm:px-7 sm:py-8 lg:px-9"
              style={{ backgroundColor: "#061A38" }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-[0.7rem]">
                Our Work
              </p>
              <h2
                id="our-work-showcase-heading"
                className="font-heading mt-2 text-xl font-semibold tracking-tight text-pure sm:text-[1.4rem]"
              >
                See the Results for Yourself.
              </h2>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                Explore homes and commercial properties we&apos;ve worked on
                across Whitby and Durham Region.
              </p>
              <div className="mt-5">
                <Link
                  href="/our-work"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-pure/85 bg-transparent px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:border-pure hover:bg-pure/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky motion-reduce:transition-none"
                >
                  Explore Our Work →
                </Link>
              </div>
            </div>

            <div className="relative min-h-[13rem] md:min-h-0">
              <Image
                src="/about/student-community-lang-group.webp"
                alt="University student community group in professional attire posing together in front of a Gordon S. Lang School of Business and Economics banner"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority={false}
              />
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
