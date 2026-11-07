import Link from "next/link";
import { Container } from "@/components/ui/Container";

const services = [
  {
    id: "exterior-window-cleaning",
    title: "Exterior Window Cleaning",
    href: "/services#exterior-window-cleaning",
    inclusions: [
      "Exterior glass",
      "Frames & sills",
      "Sliding doors & deck glass",
    ],
  },
  {
    id: "interior-exterior-window-cleaning",
    title: "Interior & Exterior Window Cleaning",
    href: "/services#interior-exterior-window-cleaning",
    inclusions: [
      "Inside & outside glass",
      "Interior & exterior frames",
      "Sills & applicable glass surfaces",
    ],
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    href: "/services#gutter-cleaning",
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

function ServicePhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-ice transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.015]"
      style={{
        background:
          "linear-gradient(165deg, #F3F7FB 0%, #E9F3FC 55%, #DCEAF7 100%)",
      }}
      role="img"
      aria-label={`${label} photography placeholder`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 35%, color-mix(in srgb, var(--color-clear-sky) 18%, transparent), transparent 70%)",
        }}
      />
      <p className="absolute inset-x-0 bottom-0 px-4 pb-4 text-[0.7rem] font-medium tracking-wide text-navy-muted/80">
        Photo coming soon
      </p>
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
        <div className="max-w-2xl">
          <h2
            id="services-heading"
            className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-4xl"
          >
            Our Services
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-muted sm:text-lg">
            Professional window and gutter cleaning tailored to your property.
          </p>
        </div>

        <ul className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-10">
          {services.map((service) => (
            <li key={service.id} className="group min-w-0">
              <ServicePhotoPlaceholder label={service.title} />
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
                  Explore Service
                  <span aria-hidden className="translate-y-px text-base leading-none">
                    →
                  </span>
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
