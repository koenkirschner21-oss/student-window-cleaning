import { AboutPhotoPlaceholder } from "@/components/about/AboutPhotoPlaceholder";
import { Container } from "@/components/ui/Container";

export function OurStory() {
  return (
    <section
      aria-labelledby="our-story-heading"
      className="bg-cloud text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <h2
              id="our-story-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
            >
              Our Story
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-muted">
              <p>
                Student Window Cleaning began with a simple goal: to provide
                reliable, professional window cleaning while creating meaningful
                opportunities for local students.
              </p>
              <p>
                What started as a student-led service has grown through hard
                work, customer relationships, and a commitment to doing the job
                properly.
              </p>
              <p>
                Today, we continue to bring that same approach to homes across
                Whitby and Durham Region.
              </p>
            </div>
          </div>

          <AboutPhotoPlaceholder
            label="Student Window Cleaning at work"
            tone="ice"
            aspect="portrait"
          />
        </div>
      </Container>
    </section>
  );
}
