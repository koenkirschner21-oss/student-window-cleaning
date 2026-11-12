import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

type WindowCleaningCrossSellProps = {
  headingId: string;
  eyebrow: string;
  headline: string;
  description: string;
  image: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
  /** Place the photograph on the right on desktop. */
  imageOnRight?: boolean;
};

/**
 * Compact white complementary-service recommendation for window pages.
 * CTA always preselects Interior & Exterior on the quote form.
 */
export function WindowCleaningCrossSell({
  headingId,
  eyebrow,
  headline,
  description,
  image,
  imageOnRight = false,
}: WindowCleaningCrossSellProps) {
  const media = (
    <div className="relative min-h-[11.5rem] overflow-hidden rounded-[12px] bg-cloud md:min-h-0 md:rounded-[14px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 44vw"
        className={`object-cover ${image.objectPosition ?? "object-center"}`}
      />
    </div>
  );

  const copy = (
    <div className="flex flex-col justify-center py-1 md:py-0">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-[0.7rem]">
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="font-heading mt-2 text-xl font-semibold tracking-tight text-midnight sm:text-[1.4rem] sm:leading-snug"
      >
        {headline}
      </h2>
      <p className="mt-2.5 max-w-md text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]">
        {description}
      </p>
      <div className="mt-5">
        <Link
          href={quoteHref({ service: "interior-exterior" })}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
        >
          Combine Interior &amp; Exterior
        </Link>
      </div>
    </div>
  );

  return (
    <section
      aria-labelledby={headingId}
      className="bg-pure text-midnight"
      style={{ paddingBlock: "clamp(2.25rem, 4vw, 3.5rem)" }}
    >
      <Container width="portfolio">
        <div className="grid min-h-[13.5rem] gap-5 sm:min-h-[14.25rem] sm:gap-6 md:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] md:items-stretch md:gap-8 lg:min-h-[15rem] lg:gap-10">
          {imageOnRight ? (
            <>
              {copy}
              {media}
            </>
          ) : (
            <>
              {media}
              {copy}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
