import { FacebookReel } from "@/components/about/FacebookReel";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/lib/site";

const REEL_HREF =
  socialLinks.facebookReelShare ??
  socialLinks.facebookReel ??
  "https://www.facebook.com/share/r/18tUKafgk3/";

/**
 * Behind the Clean — full-bleed Midnight band with Facebook Reel.
 */
export function AboutSocial() {
  return (
    <section
      aria-labelledby="behind-the-clean-heading"
      className="bg-midnight text-pure"
      style={{ backgroundColor: "#061A38" }}
    >
      <Container
        width="portfolio"
        className="py-10 sm:py-12 lg:py-16"
      >
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="mx-auto max-w-md text-center md:mx-0 md:max-w-xl md:justify-self-start md:text-left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#3999EA] sm:text-xs">
              Behind the Clean
            </p>
            <h2
              id="behind-the-clean-heading"
              className="font-heading mt-2.5 text-3xl font-semibold tracking-tight text-pure sm:text-[2.15rem] sm:leading-tight"
            >
              See Our Work in Action.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/72">
              Get a closer look at the techniques and care behind our
              student-run window cleaning service.
            </p>
            <p className="mt-6">
              <a
                href={REEL_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3999EA] transition-colors hover:text-pure focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
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
