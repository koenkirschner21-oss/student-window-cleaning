import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-midnight text-pure"
      style={{
        background:
          "linear-gradient(180deg, #061A38 0%, #071F42 55%, #061A38 100%)",
      }}
    >
      <Container className="grid items-center gap-10 py-12 sm:gap-12 sm:py-14 lg:grid-cols-2 lg:gap-14 lg:py-16">
        <div className="motion-fade-up max-w-xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky sm:text-xs">
            Window Cleaning in Whitby &amp; Durham Region
          </p>

          <h1
            id="hero-heading"
            className="font-heading mt-4 font-extrabold uppercase"
          >
            <span className="block text-[clamp(1.85rem,4.6vw,3.35rem)] leading-[1.05] tracking-[0.02em] text-pure">
              Student Run.
            </span>
            <span className="mt-1 block text-[clamp(1.45rem,3.7vw,2.75rem)] leading-[1.08] tracking-[0.015em] text-sky sm:mt-1.5">
              Professionally Done.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-white/70 sm:text-base">
            Professional window and gutter cleaning for homeowners across Whitby
            and Durham Region. Local students delivering quality you can count
            on.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
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

        <figure className="motion-soft-rise m-0 w-full max-w-lg justify-self-center lg:max-w-none lg:justify-self-stretch">
          <div
            className="aspect-[4/5] w-full rounded-md sm:aspect-[5/6] lg:aspect-[4/5]"
            style={{ backgroundColor: "#0A274F" }}
            role="img"
            aria-label="Placeholder for Student Window Cleaning service photography"
          />
        </figure>
      </Container>
    </section>
  );
}
