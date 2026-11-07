import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function ServicesHero() {
  return (
    <section
      aria-labelledby="services-page-heading"
      className="relative overflow-hidden bg-midnight text-pure"
    >
      <div className="absolute inset-0" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(165deg, #0A274F 0%, #061A38 48%, #041228 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(70% 55% at 72% 35%, color-mix(in srgb, var(--color-clear-sky) 26%, transparent), transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(6,26,56,0.88) 0%, rgba(6,26,56,0.72) 48%, rgba(6,26,56,0.45) 100%)",
          }}
        />
      </div>

      <Container className="relative py-14 sm:py-16 lg:py-[4.75rem]">
        <div className="motion-fade-up max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
            Our Services
          </p>
          <h1
            id="services-page-heading"
            className="font-heading mt-3 text-[clamp(2rem,4.2vw,3.15rem)] font-semibold tracking-tight text-pure"
          >
            A Higher Standard of Clean.
          </h1>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/72 sm:text-base">
            Professional window and gutter cleaning in Whitby and Durham Region,
            delivered with attention to detail and care for your property.
          </p>
          <p className="mt-3 text-xs font-medium tracking-wide text-white/40">
            Hero photography placeholder — authentic SWC photos coming soon.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#exterior-window-cleaning"
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
