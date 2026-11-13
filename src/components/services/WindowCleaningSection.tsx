import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const offers = [
  {
    id: "exterior-window-cleaning",
    title: "Exterior Window Cleaning",
    href: "/services/exterior-window-cleaning",
    exploreLabel: "Explore Exterior Cleaning",
    description:
      "Refresh your home's exterior with professionally cleaned windows that leave your property looking brighter and well cared for.",
    checks: [
      "Exterior window glass",
      "Exterior frames, sills & tracks",
      "Sliding doors & deck glass",
    ],
    image: {
      src: "/services/exterior-squeegee-soapy.webp",
      alt: "Student Window Cleaning team member squeegeeing soapy exterior window glass",
      objectPosition: "55% 50%",
    },
  },
  {
    id: "interior-window-cleaning",
    title: "Interior Window Cleaning",
    href: "/services/interior-window-cleaning",
    exploreLabel: "Explore Interior Cleaning",
    description:
      "Enjoy cleaner glass and clearer views from inside your home, with careful attention to the details around every window.",
    checks: [
      "Interior window glass",
      "Interior frames & sills",
      "Interior tracks & sliding doors",
    ],
    image: {
      src: "/services/interior-exterior-pole.webp",
      alt: "Student Window Cleaning team member cleaning a window with a telescopic pole",
      objectPosition: "40% 50%",
    },
  },
] as const;

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="mt-0.5 size-3.5 shrink-0 text-signature"
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
 * Services overview — exterior/interior cards linking to dedicated pages,
 * then the unchanged screen-cleaning add-on.
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
        <h2 id="window-cleaning-heading" className="sr-only">
          Window Cleaning Services
        </h2>

        <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-7">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              id={offer.id}
              href={offer.href}
              aria-label={`${offer.exploreLabel} — ${offer.title}`}
              className="scroll-mt-28 flex h-full flex-col overflow-hidden rounded-[14px] border border-border bg-pure shadow-none transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-[2px] hover:border-signature hover:shadow-[0_10px_28px_-18px_rgba(8,101,248,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none"
            >
              <div className="px-5 pt-5 sm:px-6 sm:pt-6">
                <h3 className="font-heading text-[1.35rem] font-semibold tracking-tight text-midnight sm:text-[1.5rem]">
                  {offer.title}
                </h3>
              </div>

              <div className="relative mt-4 aspect-[16/10] w-full bg-cloud">
                <Image
                  src={offer.image.src}
                  alt={offer.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 36rem"
                  className="object-cover"
                  style={{ objectPosition: offer.image.objectPosition }}
                />
              </div>

              <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-5">
                <p className="text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]">
                  {offer.description}
                </p>
                <ul className="mt-4 space-y-2.5">
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
                <p className="mt-auto pt-5 text-sm font-semibold text-signature">
                  {offer.exploreLabel}
                  <span aria-hidden className="ml-1.5">
                    →
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        <aside
          className="mt-8 overflow-hidden rounded-[15px] sm:mt-9"
          aria-labelledby="screen-cleaning-addon-heading"
        >
          <div className="grid min-h-[13.75rem] sm:min-h-[14.5rem] md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:min-h-[15.5rem] lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
            <div className="relative min-h-[11.5rem] bg-[#0A274F] md:min-h-0">
              <Image
                src="/our-work/screen-cleaning-action.webp"
                alt="Student Window Cleaning team member scrubbing a residential window screen outdoors"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-[center_40%]"
              />
            </div>
            <div
              className="flex flex-col justify-center px-5 py-6 text-pure sm:px-7 sm:py-7 lg:px-8"
              style={{ backgroundColor: "#061A38" }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-[0.7rem]">
                Optional Add-On
              </p>
              <h3
                id="screen-cleaning-addon-heading"
                className="font-heading mt-2 text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]"
              >
                Screen Cleaning Also Available
              </h3>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                Complete your window cleaning with freshly cleaned screens. Add
                screen cleaning to your personalized quote for an even clearer
                finish.
              </p>
              <div className="mt-5">
                <Link
                  href={quoteHref()}
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
                >
                  Add Screen Cleaning to My Quote
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
