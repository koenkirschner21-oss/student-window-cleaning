import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const services = [
  {
    id: "exterior-window-cleaning",
    title: "Exterior",
    href: "/services#exterior-window-cleaning",
    image: {
      src: "/our-work/cleaning-action-bay-window.webp",
      alt: "Student Window Cleaning team member washing the exterior glass of a residential bay window",
      objectPosition: "center 42%",
    },
    inclusions: [
      "Exterior glass",
      "Frames & sills",
      "Sliding doors & deck glass",
    ],
  },
  {
    id: "interior-exterior-window-cleaning",
    title: "Interior & Exterior",
    href: "/services#interior-exterior-window-cleaning",
    image: {
      src: "/our-work/cleaning-action-branded-scrub.webp",
      alt: "Student Window Cleaning team member scrubbing a residential window with a branded microfiber tool",
      objectPosition: "center 28%",
    },
    inclusions: [
      "Inside & outside glass",
      "Interior & exterior frames",
      "Sills & applicable glass surfaces",
    ],
  },
  {
    id: "gutter-cleaning",
    title: "Gutter",
    href: "/services#gutter-cleaning",
    image: {
      src: "/our-work/gutter-detail-debris.webp",
      alt: "Close-up of a residential gutter holding leaf debris along a shingle roofline",
      objectPosition: "center center",
    },
    inclusions: [
      "Leaves & debris removal",
      "Accessible gutter clearing",
      "Seasonal maintenance",
    ],
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

export function OurServices() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-pure text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <header className="max-w-2xl text-left">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="font-heading mt-2.5 text-[2.125rem] font-semibold leading-tight tracking-tight text-midnight sm:mt-3 sm:text-[2.35rem]"
          >
            Our Services
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-muted sm:text-lg">
            Professional window and gutter cleaning tailored to your property.
          </p>
        </header>

        <ul className="mt-10 grid list-none justify-items-stretch gap-10 p-0 sm:mt-11 md:grid-cols-[repeat(3,minmax(0,19.6875rem))] md:justify-start md:gap-6 lg:mt-12 lg:gap-7">
          {services.map((service) => (
            <li key={service.id} className="group flex min-w-0 flex-col">
              <Link
                href={service.href}
                className="block rounded-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
                aria-label={`${service.title} — view service details`}
              >
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[19.6875rem] overflow-hidden rounded-[13px] bg-cloud md:mx-0 md:max-w-none">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 768px) min(100vw, 19.6875rem), 315px"
                    className="object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.02]"
                    style={{ objectPosition: service.image.objectPosition }}
                  />
                </div>
              </Link>

              <h3 className="font-heading mt-5 text-lg font-semibold tracking-tight text-midnight sm:text-xl">
                {service.title}
              </h3>

              <ul className="mt-3 space-y-2">
                {service.inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-snug text-navy-muted sm:text-[0.95rem]"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-signature transition-colors hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
                >
                  View Service Details
                  <span aria-hidden className="translate-y-px text-base leading-none">
                    →
                  </span>
                </Link>
              </p>
            </li>
          ))}
        </ul>

        <aside
          className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          aria-labelledby="screen-cleaning-heading"
        >
          <div className="max-w-xl">
            <p
              id="screen-cleaning-heading"
              className="font-heading text-base font-semibold tracking-tight text-midnight sm:text-lg"
            >
              Screen Cleaning Also Available
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-navy-muted">
              Add window screen cleaning to your visit — it is not included
              automatically with our core services.
            </p>
          </div>
          <p className="shrink-0">
            <Link
              href="/quote"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-signature transition-colors hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
            >
              Learn More
              <span aria-hidden className="translate-y-px text-base leading-none">
                →
              </span>
            </Link>
          </p>
        </aside>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-lg bg-ice/70 px-5 py-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5">
          <p className="font-heading text-base font-semibold tracking-tight text-midnight sm:text-lg">
            Not Sure Which Service You Need?
          </p>
          <Link
            href="/quote"
            className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
          >
            Get a Free Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
