import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const exteriorChecks = [
  "Exterior window glass",
  "Accessible exterior frames",
  "Applicable exterior sills and tracks",
] as const;

const interiorChecks = [
  "Interior window glass",
  "Accessible interior frames and sills",
  "Careful work around furnishings",
] as const;

const offers = [
  {
    id: "exterior-window-cleaning",
    title: "Exterior Window Cleaning",
    description:
      "Clear away outdoor buildup so your home’s exterior glass looks sharp from the curb.",
    checks: exteriorChecks,
    image: {
      src: "/services/exterior-squeegee-soapy.webp",
      alt: "Student Window Cleaning team member squeegeeing soapy exterior window glass",
      objectPosition: "55% 50%",
    },
  },
  {
    id: "interior-window-cleaning",
    title: "Interior Window Cleaning",
    description:
      "Refresh the glass inside your home for clearer views and a brighter living space.",
    checks: interiorChecks,
    image: {
      src: "/services/interior-exterior-pole.webp",
      alt: "Student Window Cleaning team member cleaning a window with a telescopic pole",
      objectPosition: "40% 50%",
    },
  },
] as const;

function CheckIcon({ className = "text-signature" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`mt-0.5 size-3.5 shrink-0 ${className}`}
    >
      <path
        d="M3.2 8.2 6.4 11.3 12.8 4.7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Window Cleaning service section — photography-led intro, two clear offers,
 * and a compact screen-cleaning add-on.
 */
export function WindowCleaningSection() {
  return (
    <section
      id="window-cleaning"
      aria-labelledby="window-cleaning-heading"
      className="scroll-mt-28 text-midnight"
      style={{
        backgroundColor: "#FFFFFF",
        paddingBlock: "clamp(3.5rem, 6vw, 5rem)",
      }}
    >
      <Container width="portfolio">
        {/* Intro */}
        <div className="overflow-hidden rounded-[15px] border border-border bg-cloud/40">
          <div className="grid items-stretch lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="flex flex-col justify-center px-5 py-7 sm:px-7 sm:py-8 lg:px-9 lg:py-10">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
                Professional Window Care
              </p>
              <h2
                id="window-cleaning-heading"
                className="font-heading mt-2.5 text-3xl font-semibold tracking-tight text-midnight sm:mt-3 sm:text-[2.15rem] sm:leading-tight"
              >
                Window Cleaning
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-navy-muted">
                Clean glass transforms how your home looks and feels. Choose
                exterior cleaning, interior cleaning, or both — with screen
                cleaning available as an add-on.
              </p>
            </div>

            <figure className="m-0 relative min-h-[14rem] border-t border-border lg:min-h-0 lg:border-l lg:border-t-0">
              <div className="absolute inset-0">
                <Image
                  src="/services/window-cleaning-intro-soapy.webp"
                  alt="Close-up of a professional squeegee clearing soapy foam from window glass to reveal clear blue sky"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </figure>
          </div>
        </div>

        {/* Two offers — title above image */}
        <div className="mt-9 grid gap-6 sm:mt-10 md:grid-cols-2 md:gap-7">
          {offers.map((offer) => (
            <article
              key={offer.id}
              id={offer.id}
              className="scroll-mt-28 overflow-hidden rounded-[14px] border border-border bg-pure"
            >
              <div className="border-b border-border px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="font-heading text-xl font-semibold tracking-tight text-midnight sm:text-[1.3rem]">
                  {offer.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]">
                  {offer.description}
                </p>
              </div>

              <div className="relative aspect-[16/10] w-full bg-cloud">
                <Image
                  src={offer.image.src}
                  alt={offer.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 36rem"
                  className="object-cover"
                  style={{ objectPosition: offer.image.objectPosition }}
                />
              </div>

              <ul className="space-y-2.5 px-5 py-5 sm:px-6">
                {offer.checks.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-snug text-navy-muted"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Compact screen-cleaning add-on */}
        <aside
          className="mt-7 overflow-hidden rounded-[14px] sm:mt-8"
          aria-labelledby="screen-cleaning-addon-heading"
        >
          <div
            className="grid items-center gap-5 px-5 py-5 sm:grid-cols-[minmax(0,7.5rem)_minmax(0,1fr)] sm:gap-6 sm:px-6 sm:py-5"
            style={{ backgroundColor: "#061A38" }}
          >
            <div className="relative mx-auto aspect-square w-full max-w-[7.5rem] overflow-hidden rounded-lg bg-[#0A274F] sm:mx-0 sm:max-w-none">
              <Image
                src="/our-work/screen-cleaning-action.webp"
                alt="Student Window Cleaning team member scrubbing a residential window screen outdoors"
                fill
                sizes="120px"
                className="object-cover object-center"
              />
            </div>
            <div className="text-center text-pure sm:text-left">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-sky sm:text-[0.7rem]">
                Optional Add-On
              </p>
              <h3
                id="screen-cleaning-addon-heading"
                className="font-heading mt-1.5 text-lg font-semibold tracking-tight text-pure sm:text-xl"
              >
                Screen Cleaning Available
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/72">
                Add a thorough screen clean to your window service for an even
                clearer finish.
              </p>
            </div>
          </div>
        </aside>

        {/* Centered CTA */}
        <div className="mt-10 flex flex-col items-center text-center sm:mt-12">
          <p className="max-w-md text-sm leading-relaxed text-navy-muted sm:text-base">
            Tell us about your property and we&apos;ll prepare a free
            personalized quote.
          </p>
          <Link
            href={quoteHref({ service: "exterior" })}
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-7 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
          >
            Get a Free Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
