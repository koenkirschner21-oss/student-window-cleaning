import Image from "next/image";
import { Container } from "@/components/ui/Container";

/**
 * Our Story — circular heritage badge left, editorial copy right.
 * Hero and sections below this block are out of scope.
 */
export function OurStory() {
  return (
    <section
      aria-labelledby="our-story-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "clamp(5rem, 8vw, 6rem)" }}
    >
      <Container width="portfolio">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex justify-center md:justify-start">
            {/* Source is 1536×1024 with a full-height circular mark (~230–256px diameter). */}
            <Image
              src="/brand/logos/heritage-badge.png"
              alt="Student Window Cleaning circular logo"
              width={1536}
              height={1024}
              className="h-auto w-[345px] sm:w-[368px] lg:w-[384px]"
              sizes="(max-width: 768px) 345px, 384px"
            />
          </div>

          <div className="max-w-xl md:justify-self-end">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-muted sm:text-xs">
              Our Story
            </p>
            <h2
              id="our-story-heading"
              className="font-heading mt-2.5 text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
            >
              A Business Built on Opportunity.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-muted">
              <p>
                Student Window Cleaning began with a simple idea: create
                meaningful opportunities for students while delivering dependable
                window cleaning to local homeowners.
              </p>
              <p>
                Over the years, we&apos;ve grown through hard work, customer
                relationships, and taking pride in every job we complete.
              </p>
              <p>
                Today, we&apos;re still proudly student-run, bringing that same
                commitment to homes and businesses throughout Whitby and Durham
                Region.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
