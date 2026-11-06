import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-cloud"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F3F7FB 48%, #E9F3FC 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-clear-sky) 28%, white) 0%, transparent 70%)",
        }}
      />

      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24">
        <div className="motion-fade-up max-w-xl">
          <p className="text-sm font-semibold tracking-wide text-signature">
            Student run. Professionally done.
          </p>
          <h1
            id="hero-heading"
            className="font-heading mt-4 text-[2.15rem] font-semibold leading-[1.12] tracking-tight text-midnight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            Professional Window Cleaning in Whitby &amp; Durham Region.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-navy-muted sm:text-lg">
            Reliable interior and exterior window cleaning, gutter cleaning, and
            seasonal care plans from a local, student-run team. Clear results,
            professional service, and free quotes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/quote" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>
        </div>

        <figure className="motion-soft-rise m-0">
          <div className="overflow-hidden rounded-lg border border-border bg-pure shadow-[0_18px_50px_color-mix(in_srgb,var(--color-midnight-navy)_8%,transparent)]">
            <div
              className="relative flex aspect-[4/5] w-full flex-col justify-end sm:aspect-[5/6] lg:aspect-[4/5]"
              style={{
                background:
                  "linear-gradient(165deg, #FFFFFF 0%, #F3F7FB 42%, #E9F3FC 100%)",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-6 rounded-md border border-dashed border-midnight/15"
              />
              <figcaption className="relative border-t border-border bg-pure px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signature">
                  Photo coming soon
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-muted">
                  Real Student Window Cleaning work will sit in this frame. No
                  stock or AI stand-ins.
                </p>
              </figcaption>
            </div>
          </div>
        </figure>
      </Container>
    </section>
  );
}
