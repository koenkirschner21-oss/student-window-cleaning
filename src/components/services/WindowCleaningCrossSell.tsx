import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const CROSS_SELL_IMAGE = {
  src: "/services/cross-sell/clearer-view.webp",
  alt: "Professional squeegee clearing soapy foam from window glass to reveal clear blue sky",
} as const;

type WindowCleaningCrossSellProps = {
  headingId: string;
  eyebrow: string;
  headline: string;
  description: string;
  points: readonly [string, string, string];
  /** Place the photograph on the right on desktop. */
  imageOnRight?: boolean;
};

function CheckCircleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.1 8.15 7.05 10l3.85-4.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Compact white complementary-service recommendation for window pages.
 * CTA always preselects Interior & Exterior on the quote form.
 */
export function WindowCleaningCrossSell({
  headingId,
  eyebrow,
  headline,
  description,
  points,
  imageOnRight = false,
}: WindowCleaningCrossSellProps) {
  const media = (
    <div className="relative min-h-[12rem] overflow-hidden rounded-[12px] bg-cloud sm:min-h-[13rem] md:min-h-0 md:rounded-[14px]">
      <Image
        src={CROSS_SELL_IMAGE.src}
        alt={CROSS_SELL_IMAGE.alt}
        fill
        sizes="(max-width: 768px) 100vw, 46vw"
        className="object-cover object-center"
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
        className="font-heading mt-2 text-xl font-semibold tracking-tight text-midnight sm:text-[1.45rem] sm:leading-snug"
      >
        {headline}
      </h2>
      <p className="mt-2.5 max-w-md text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]">
        {description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5">
        {points.map((point) => (
          <li
            key={point}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-midnight"
          >
            <span className="text-signature">
              <CheckCircleIcon />
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <Link
          href={quoteHref({ service: "interior-exterior" })}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
        >
          Add Both Services to My Quote
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
        <div className="grid min-h-[13.75rem] gap-5 sm:min-h-[14.5rem] sm:gap-6 md:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] md:items-stretch md:gap-8 lg:min-h-[15.25rem] lg:gap-10">
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
