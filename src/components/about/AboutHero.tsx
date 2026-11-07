import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-page-heading"
      className="bg-pure text-midnight"
    >
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(165deg, #0A274F 0%, #061A38 48%, #041228 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(70% 55% at 70% 40%, color-mix(in srgb, var(--color-clear-sky) 26%, transparent), transparent 68%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(6,26,56,0.82) 0%, rgba(6,26,56,0.55) 55%, rgba(6,26,56,0.28) 100%)",
          }}
        />

        <Container className="relative py-16 sm:py-[4.5rem] lg:py-20">
          <div className="motion-fade-up max-w-2xl text-pure">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              About Student Window Cleaning
            </p>
            <h1
              id="about-page-heading"
              className="font-heading mt-3 text-[clamp(1.9rem,4vw,3rem)] font-semibold tracking-tight"
            >
              Built by Students. Driven by Quality.
            </h1>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/72 sm:text-base">
              Student Window Cleaning is a locally operated, student-run
              business serving homeowners across Whitby and Durham Region.
              We&apos;re committed to professional service, careful workmanship,
              and results we&apos;re proud to stand behind.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/quote"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
              >
                Get a Free Quote
              </Link>
            </div>
            <p className="mt-6 text-xs font-medium tracking-wide text-white/40">
              Team-at-job photography placeholder — authentic SWC photos coming
              soon.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
