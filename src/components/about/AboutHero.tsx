import Image from "next/image";
import { Container } from "@/components/ui/Container";

/**
 * About page hero — Midnight split with authentic team photo (IMG_3243).
 * No CTA: header already provides Get a Free Quote.
 */
export function AboutHero() {
  return (
    <section
      aria-labelledby="about-page-heading"
      className="bg-midnight text-pure"
      style={{ backgroundColor: "#061A38" }}
    >
      <Container
        width="portfolio"
        className="grid items-center gap-8 py-10 sm:gap-10 sm:py-11 md:grid-cols-[1.2fr_1fr] md:gap-10 md:py-12 lg:grid-cols-[1.22fr_1fr] lg:min-h-[32rem] lg:max-h-[35rem] lg:gap-12 lg:py-0"
      >
        <div className="motion-fade-up max-w-xl lg:py-14">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#3999EA] sm:text-xs">
            About Student Window Cleaning
          </p>
          <h1
            id="about-page-heading"
            className="font-heading mt-3 text-[clamp(1.85rem,3.8vw,2.85rem)] font-semibold tracking-tight text-pure"
          >
            Built by Students. Driven by Quality.
          </h1>
          <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/72 sm:mt-5 sm:text-base">
            A student-run team bringing professional window cleaning and genuine
            care to homes across Whitby and Durham Region.
          </p>
        </div>

        <figure className="motion-soft-rise m-0 flex w-full justify-center lg:justify-end lg:py-10">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg bg-[#0A274F] md:max-w-none lg:h-[28rem] lg:w-auto lg:max-w-full">
            <Image
              src="/about/about-hero-student-window-cleaning.webp"
              alt="Student Window Cleaning team member cleaning a residential window with a squeegee"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 22rem"
              className="object-cover object-[center_18%]"
            />
          </div>
        </figure>
      </Container>
    </section>
  );
}
