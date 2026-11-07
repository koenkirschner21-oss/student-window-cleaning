import { AboutPhotoPlaceholder } from "@/components/about/AboutPhotoPlaceholder";
import { Container } from "@/components/ui/Container";

const standards = [
  {
    title: "Careful Workmanship",
    body: "We take the time to clean thoroughly and leave surfaces looking clear and well cared for.",
  },
  {
    title: "Respect for Your Property",
    body: "We work carefully around your home, treating entryways, landscaping, and interiors with care.",
  },
  {
    title: "Professional Communication",
    body: "From quote to follow-up, we keep conversations clear, responsive, and easy to work with.",
  },
] as const;

export function OurStandards() {
  return (
    <section
      aria-labelledby="our-standards-heading"
      className="bg-pure text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <AboutPhotoPlaceholder
            label="Detail-focused window cleaning workmanship"
            tone="cloud"
            aspect="square"
          />

          <div>
            <h2
              id="our-standards-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
            >
              The Standard Behind Every Clean.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-muted">
              The way we work matters as much as the finish — careful,
              respectful, and easy to communicate with.
            </p>

            <ul className="mt-8 space-y-7 border-t border-border pt-7">
              {standards.map((item) => (
                <li key={item.title}>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-midnight">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
