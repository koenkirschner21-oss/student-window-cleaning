import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-midnight text-pure"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 70% 20%, color-mix(in srgb, var(--color-clear-sky) 42%, transparent), transparent 55%), linear-gradient(160deg, #041028 0%, #061A38 42%, #0A3F86 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 w-full opacity-40 sm:w-[58%]"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, color-mix(in srgb, var(--color-ice-blue) 14%, transparent) 48%, color-mix(in srgb, var(--color-clear-sky) 28%, transparent) 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 28%, black 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.28) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at 70% 40%, black 0%, transparent 70%)",
        }}
      />

      <Container className="grid min-h-[min(88vh,52rem)] items-center gap-10 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-24">
        <div className="motion-fade-up max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
            {site.name}
          </p>
          <h1
            id="hero-heading"
            className="font-heading mt-4 text-4xl font-semibold tracking-tight text-pure sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05]"
          >
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
            Clear windows and tidy exteriors for homes that want a careful,
            student-run finish — without the guesswork of a surprise visit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/quote" variant="onDark" size="lg">
              Get a Free Quote
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="lg"
              className="border-white/25 bg-transparent text-pure hover:border-white/50 hover:bg-white/10 hover:text-pure"
            >
              View services
            </Button>
          </div>
        </div>

        <div className="motion-soft-rise relative min-h-[18rem] overflow-hidden rounded-[1.4rem] border border-white/15 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:min-h-[22rem]">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(145deg, color-mix(in srgb, var(--color-ice-blue) 35%, transparent), transparent 40%), linear-gradient(25deg, #0b2a5a, #1a6fbf 55%, #9fd0ff)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-[12%] rounded-[1rem] border border-white/35 bg-white/10 backdrop-blur-[2px]"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#041028]/90 via-[#041028]/35 to-transparent p-6 pt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky">
              Photography placeholder
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
              Real Student Window Cleaning job photos will replace this panel.
              No stock or AI stand-ins are being used as finished work.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
