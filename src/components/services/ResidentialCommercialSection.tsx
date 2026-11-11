import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref } from "@/lib/site";

const showcases = [
  {
    id: "residential-cleaning",
    title: "Residential Cleaning",
    description:
      "Keep your home looking its best with dependable, student-run cleaning.",
    checks: [
      "Detached and semi-detached homes",
      "Townhouses and residential properties",
      "One-time or seasonal service",
    ],
    // Authentic portfolio home — landscape crop; no property-type preselect.
    href: quoteHref(),
    cta: "Get a Residential Quote",
    image: {
      src: "/quote/residential-property.webp",
      alt: "Landscape view of a modern two-story home with white-trimmed windows, garage, and driveway",
      objectPosition: "center 42%",
    },
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning",
    description:
      "Present a clean, welcoming storefront or workplace to your customers.",
    checks: [
      "Storefronts and retail spaces",
      "Offices and local businesses",
      "Flexible cleaning schedules",
    ],
    href: quoteHref({ propertyType: "commercial" }),
    cta: "Get a Commercial Quote",
    image: {
      src: "/our-work/projects/commercial-montessori-img-5402.webp",
      alt: "Montessori Learning Centre storefront with brick pillars and glass windows",
      objectPosition: "center 40%",
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
 * Residential & Commercial showcases — photography-led cards after Gutters.
 */
export function ResidentialCommercialSection() {
  return (
    <section
      id="residential-commercial"
      aria-labelledby="residential-commercial-heading"
      className="scroll-mt-28 text-midnight"
      style={{
        backgroundColor: "#FFFFFF",
        paddingBlock: "clamp(3.5rem, 6vw, 5rem)",
      }}
    >
      <Container width="portfolio">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
            Who We Serve
          </p>
          <h2
            id="residential-commercial-heading"
            className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
          >
            Residential &amp; Commercial Cleaning
          </h2>
          <p className="mx-auto mt-3.5 max-w-lg text-base leading-relaxed text-navy-muted">
            Professional cleaning for homes and local businesses across Whitby
            and Durham Region.
          </p>
        </div>

        <ul className="mt-9 grid list-none items-stretch gap-6 p-0 sm:mt-10 md:grid-cols-2 md:gap-7">
          {showcases.map((showcase) => (
            <li key={showcase.id} className="min-w-0">
              <article
                id={showcase.id}
                className="scroll-mt-28 flex h-full flex-col overflow-hidden rounded-[14px] border border-border bg-pure"
              >
                <div className="px-5 pt-5 sm:px-6 sm:pt-6">
                  <h3 className="font-heading text-[1.35rem] font-semibold tracking-tight text-midnight sm:text-[1.5rem]">
                    {showcase.title}
                  </h3>
                </div>

                <figure className="relative m-0 mt-4 aspect-[16/10] w-full bg-cloud">
                  <Image
                    src={showcase.image.src}
                    alt={showcase.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 36rem"
                    className="object-cover"
                    style={{ objectPosition: showcase.image.objectPosition }}
                  />
                </figure>

                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                  <p className="text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]">
                    {showcase.description}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {showcase.checks.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-snug text-navy-muted"
                      >
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Link
                      href={showcase.href}
                      className="inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature sm:w-auto"
                    >
                      {showcase.cta}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
