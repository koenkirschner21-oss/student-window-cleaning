import Image from "next/image";
import { Container } from "@/components/ui/Container";

/**
 * Student Community — editorial photo + copy.
 * Photo shows a university student community group (Lang School backdrop).
 * Do not imply pictured individuals are Student Window Cleaning employees.
 */
export function BehindTheBusiness() {
  return (
    <section
      aria-labelledby="student-community-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "clamp(5rem, 8vw, 6rem)" }}
    >
      <Container width="portfolio">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <figure className="m-0 min-w-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-cloud">
              <Image
                src="/about/student-community-lang-group.webp"
                alt="University student community group gathered in front of a Gordon S. Lang School of Business and Economics banner"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </figure>

          <div className="max-w-xl md:justify-self-stretch">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-muted sm:text-xs">
              Rooted in Student Life
            </p>
            <h2
              id="student-community-heading"
              className="font-heading mt-2.5 text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
            >
              Built Around Student Ambition.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-muted">
              <p>
                Student Window Cleaning is about more than clean windows.
                It&apos;s about students taking initiative, gaining real-world
                experience, and building something they&apos;re proud of.
              </p>
              <p>
                Our connection to the student community inspires the way we
                approach our work: with energy, responsibility, and a willingness
                to keep learning.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
