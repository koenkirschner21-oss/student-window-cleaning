import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const services = [
  {
    id: "exterior-window-cleaning",
    title: "Exterior",
    href: "/services#exterior-window-cleaning",
    image: {
      src: "/our-work/exterior-squeegee-soapy.webp",
      alt: "Student Window Cleaning team member squeegeeing soapy exterior window glass",
      objectPosition: "55% 50%",
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
      src: "/our-work/interior-exterior-pole.webp",
      alt: "Student Window Cleaning team member cleaning a window with a telescopic pole",
      objectPosition: "40% 50%",
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
      src: "/our-work/gutter-cleaning-hose.webp",
      alt: "Student Window Cleaning team member flushing a residential gutter with a hose from a ladder",
      objectPosition: "center 45%",
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

function ScreenCleaningPhoto() {
  return (
    <div className="relative h-full min-h-[11.5rem] w-full overflow-hidden bg-cloud sm:min-h-0">
      <Image
        src="/our-work/screen-cleaning-action.webp"
        alt="Student Window Cleaning team member scrubbing a residential window screen outdoors"
        fill
        sizes="(max-width: 768px) 100vw, 42vw"
        className="object-cover"
        style={{ objectPosition: "center 40%" }}
      />
    </div>
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

        <ul className="mt-9 grid list-none justify-items-stretch gap-6 p-0 sm:mt-10 md:grid-cols-[repeat(3,minmax(0,19.6875rem))] md:justify-start md:gap-6 lg:mt-11 lg:gap-7">
          {services.map((service) => (
            <li key={service.id} className="min-w-0">
              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-[15px] border border-[color-mix(in_srgb,var(--color-midnight-navy)_10%,transparent)] bg-pure no-underline transition-[border-color,transform,box-shadow] duration-200 ease-out motion-safe:hover:-translate-y-[2px] hover:border-[color-mix(in_srgb,var(--color-midnight-navy)_22%,transparent)] motion-safe:hover:shadow-[0_8px_24px_color-mix(in_srgb,var(--color-midnight-navy)_8%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-cloud">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 768px) min(100vw, 19.6875rem), 315px"
                    className="object-cover"
                    style={{ objectPosition: service.image.objectPosition }}
                  />
                </div>

                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-midnight sm:text-xl">
                    {service.title}
                  </h3>

                  <ul className="mt-3 list-none p-0">
                    {service.inclusions.map((item, index) => (
                      <li
                        key={item}
                        className={[
                          "flex items-start gap-2 py-2.5 text-sm leading-snug text-navy-muted sm:py-3 sm:text-[0.95rem]",
                          index > 0
                            ? "border-t border-[color-mix(in_srgb,var(--color-midnight-navy)_8%,transparent)]"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-midnight">
                    View Service Details
                    <span
                      aria-hidden
                      className="translate-y-px text-base leading-none transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <aside
          className="mt-8 overflow-hidden rounded-[15px] sm:mt-10 lg:mt-11"
          aria-labelledby="screen-cleaning-heading"
        >
          <div className="grid min-h-[13.75rem] sm:min-h-[14.5rem] md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:min-h-[15.5rem] lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
            <div className="min-h-[11.5rem] md:min-h-0">
              <ScreenCleaningPhoto />
            </div>
            <div
              className="flex flex-col justify-center px-5 py-6 text-pure sm:px-7 sm:py-7 lg:px-8"
              style={{ backgroundColor: "#061A38" }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-[0.7rem]">
                Additional Service
              </p>
              <h3
                id="screen-cleaning-heading"
                className="font-heading mt-2 text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]"
              >
                Screen Cleaning Also Available
              </h3>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                Give your screens a thorough clean as an optional add-on — not
                included automatically with our core services.
              </p>
              <p className="mt-5">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-pure transition-colors hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
                >
                  Get a Free Quote
                  <span aria-hidden className="translate-y-px text-base leading-none">
                    →
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
