import { AboutPhotoPlaceholder } from "@/components/about/AboutPhotoPlaceholder";
import { Container } from "@/components/ui/Container";

export function BehindTheBusiness() {
  return (
    <section
      aria-labelledby="behind-business-heading"
      className="bg-ice text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div className="max-w-2xl">
          <h2
            id="behind-business-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
          >
            The People Behind the Work.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted">
            Behind every clean is a team of hardworking students who take pride
            in their work and the relationships they build with customers.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-12 sm:gap-5 lg:mt-12">
          <div className="sm:col-span-7">
            <AboutPhotoPlaceholder
              label="Student team working on exterior windows"
              tone="ice"
              aspect="wide"
            />
          </div>
          <div className="grid gap-4 sm:col-span-5 sm:grid-rows-2">
            <AboutPhotoPlaceholder
              label="Student Window Cleaning crew on site"
              tone="cloud"
              aspect="square"
            />
            <AboutPhotoPlaceholder
              label="Careful finishing details on the job"
              tone="navy"
              aspect="square"
              caption="Photo coming soon"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
