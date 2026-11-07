import { Container } from "@/components/ui/Container";

export function OurWorkHero() {
  return (
    <section
      aria-labelledby="our-work-heading"
      className="border-b border-border bg-cloud text-midnight"
    >
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="motion-fade-up max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
            Our Work
          </p>
          <h1
            id="our-work-heading"
            className="font-heading mt-3 text-[clamp(1.85rem,3.8vw,2.85rem)] font-semibold tracking-tight text-midnight"
          >
            See the Difference.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-muted">
            Explore real window and gutter cleaning work from homes and
            properties across Whitby and Durham Region.
          </p>
        </div>
      </Container>
    </section>
  );
}
