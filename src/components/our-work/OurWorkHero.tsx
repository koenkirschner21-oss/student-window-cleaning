import { Container } from "@/components/ui/Container";

export function OurWorkHero() {
  return (
    <section
      aria-labelledby="our-work-heading"
      className="bg-midnight text-pure"
      style={{ backgroundColor: "#061A38" }}
    >
      <Container className="py-8 text-center sm:py-10 lg:py-11">
        <div className="motion-fade-up mx-auto max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
            Our Work
          </p>
          <h1
            id="our-work-heading"
            className="font-heading mt-2.5 text-[clamp(1.85rem,3.8vw,2.85rem)] font-semibold tracking-tight text-pure"
          >
            See the Difference.
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/72">
            Explore homes and commercial properties serviced by our student-run
            team across Whitby and Durham Region.
          </p>
        </div>
      </Container>
    </section>
  );
}
