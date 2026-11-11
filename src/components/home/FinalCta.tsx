import Image from "next/image";
import { HomepageQuoteStarter } from "@/components/home/HomepageQuoteStarter";
import { Container } from "@/components/ui/Container";
import { homepageQuotePhoto } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="quote"
      aria-labelledby="quote-section-heading"
      className="bg-pure text-midnight"
      style={{ paddingBlock: "clamp(2.75rem, 6vw, 4.5rem)" }}
    >
      <Container>
        <div
          className="overflow-hidden rounded-[18px] px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-9"
          style={{ backgroundColor: "#061A38" }}
        >
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              Let&apos;s Get Started
            </p>
            <h2
              id="quote-section-heading"
              className="font-heading mt-2.5 text-[clamp(1.75rem,3.2vw,2.45rem)] font-semibold tracking-tight text-pure"
            >
              Ready for a Clearer View?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Tell us a little about your property and the services you need.
              We&apos;ll help you get started with a free, personalized quote.
            </p>
          </header>

          <div className="mt-7 grid items-start gap-6 lg:mt-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 xl:gap-10">
            <div className="relative hidden overflow-hidden rounded-[14px] bg-[color-mix(in_srgb,#3999EA_12%,#061A38)] lg:block lg:aspect-[4/5] lg:max-h-[28rem] xl:max-h-[30rem]">
              <Image
                src={homepageQuotePhoto.src}
                alt={homepageQuotePhoto.alt}
                fill
                sizes="(max-width: 1024px) 0px, 42vw"
                className="object-cover"
                style={{ objectPosition: homepageQuotePhoto.objectPosition }}
                priority={false}
              />
            </div>

            <div className="min-w-0">
              <HomepageQuoteStarter />
            </div>
          </div>

          {/* Mobile: photo under form only when space allows — compact landscape crop. */}
          <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-[14px] bg-[color-mix(in_srgb,#3999EA_12%,#061A38)] sm:aspect-[16/9] lg:hidden">
            <Image
              src={homepageQuotePhoto.src}
              alt={homepageQuotePhoto.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 0px"
              className="object-cover"
              style={{ objectPosition: homepageQuotePhoto.objectPosition }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
