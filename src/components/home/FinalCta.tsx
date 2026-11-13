import Image from "next/image";
import { HomepageQuoteForm } from "@/components/home/HomepageQuoteForm";
import { Container } from "@/components/ui/Container";
import { homepageQuotePhoto } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="quote"
      aria-labelledby="quote-section-heading"
      className="text-pure"
      style={{
        backgroundColor: "#061A38",
        paddingBlock: "clamp(2.75rem, 5.5vw, 4.25rem)",
      }}
    >
      <Container>
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
          {/* Mobile: compact photo before form so the CTA stays reachable. */}
          <div className="relative aspect-[16/11] overflow-hidden rounded-[14px] bg-[#0A274F] sm:aspect-[16/10] lg:hidden">
            <Image
              src={homepageQuotePhoto.src}
              alt={homepageQuotePhoto.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 0px"
              className="object-cover"
              style={{ objectPosition: homepageQuotePhoto.objectPosition }}
              priority={false}
            />
          </div>

          <div className="relative hidden overflow-hidden rounded-[14px] bg-[#0A274F] lg:block lg:aspect-[4/5] lg:max-h-[34rem] xl:max-h-[36rem]">
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
            <HomepageQuoteForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
