import { FacebookReel } from "@/components/about/FacebookReel";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/lib/site";

const REEL_HREF =
  socialLinks.facebookReelShare ??
  socialLinks.facebookReel ??
  "https://www.facebook.com/share/r/18tUKafgk3/";

/**
 * Behind the Clean — Facebook Reel editorial section.
 */
export function AboutSocial() {
  return (
    <section
      aria-labelledby="behind-the-clean-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "clamp(5rem, 8vw, 6rem)" }}
    >
      <Container width="portfolio">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
          <div className="mx-auto max-w-md text-center md:mx-0 md:max-w-xl md:justify-self-center md:text-left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-muted sm:text-xs">
              Behind the Clean
            </p>
            <h2
              id="behind-the-clean-heading"
              className="font-heading mt-2.5 text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
            >
              See Our Work in Action.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              Take a closer look at Student Window Cleaning and learn more about
              the care that goes into our work.
            </p>
            <p className="mt-6">
              <a
                href={REEL_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-signature transition-colors hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
              >
                Watch on Facebook
                <span aria-hidden className="translate-y-px">
                  →
                </span>
              </a>
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <FacebookReel />
          </div>
        </div>
      </Container>
    </section>
  );
}
