import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { contact, quoteHref, type ServiceId } from "@/lib/site";

type ServicePageCtaProps = {
  headline: string;
  supporting: string;
  service?: ServiceId;
};

/**
 * Contained navy quote CTA used on dedicated service pages.
 */
export function ServicePageCta({
  headline,
  supporting,
  service,
}: ServicePageCtaProps) {
  return (
    <section
      aria-labelledby="service-page-cta-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "clamp(3rem, 5.5vw, 4.5rem)" }}
    >
      <Container width="portfolio">
        <div
          className="rounded-[1.125rem] px-5 py-10 text-center text-pure sm:px-10 sm:py-12"
          style={{ backgroundColor: "#061A38" }}
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#3999EA] sm:text-xs">
            Get a Free Quote
          </p>
          <h2
            id="service-page-cta-heading"
            className="font-heading mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-pure sm:text-[1.95rem] sm:leading-tight"
          >
            {headline}
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-base leading-relaxed text-white/72">
            {supporting}
          </p>
          <div className="mt-7 flex flex-col items-center gap-4 sm:mt-8">
            <Link
              href={service ? quoteHref({ service }) : quoteHref()}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
            >
              Get a Free Quote
            </Link>
            <p className="text-sm text-white/70 sm:text-base">
              Prefer to talk?{" "}
              <a
                href={contact.phoneHref}
                className="font-semibold text-pure underline-offset-2 transition-colors hover:text-[#3999EA] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
              >
                {contact.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
