import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const services = [
  {
    id: "exterior-window-cleaning",
    title: "Exterior Window Cleaning",
    href: "/services/exterior-window-cleaning",
    description:
      "A focused clean for your home's exterior glass and accessible details.",
    checks: [
      "Exterior window glass",
      "Accessible frames, sills and tracks",
    ],
    image: {
      src: "/our-work/exterior-squeegee-soapy.webp",
      alt: "Student Window Cleaning team member squeegeeing soapy exterior window glass",
      position: "object-[55%_50%]",
    },
  },
  {
    id: "interior-exterior-window-cleaning",
    title: "Interior & Exterior Window Cleaning",
    href: "/services/interior-window-cleaning",
    description:
      "A complete inside-and-out refresh for clearer views throughout your home.",
    checks: [
      "Both sides of the glass",
      "Accessible interior and exterior frames, sills and tracks",
    ],
    image: {
      src: "/our-work/interior-exterior-pole.webp",
      alt: "Student Window Cleaning team member cleaning a window with a telescopic pole",
      position: "object-[40%_50%]",
    },
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    href: "/services/gutter-cleaning",
    description:
      "Debris removal and accessible downspout clearing to help keep water flowing properly.",
    checks: ["Gutter debris removal", "Accessible downspout clearing"],
    image: {
      src: "/our-work/gutter-cleaning-hose.webp",
      alt: "Student Window Cleaning team member flushing a residential gutter with a hose from a ladder",
      position: "object-[center_45%]",
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
 * Cleaning Plans service selection — equal-height interactive cards linking to /services.
 */
export function PlansServicesExplainer() {
  return (
    <section
      aria-labelledby="plans-services-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "clamp(3rem, 5vw, 4.5rem)" }}
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
            Choose Your Services
          </p>
          <h2
            id="plans-services-heading"
            className="font-heading mt-2.5 text-3xl font-semibold tracking-tight text-midnight sm:mt-3 sm:text-[2.15rem] sm:leading-tight"
          >
            Find the Right Clean for Your Home.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-muted">
            Choose the cleaning services your property needs, then select the
            number of visits that works for you.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy-muted">
            Window cleaning and gutter cleaning are quoted based on your
            property&apos;s needs.
          </p>
        </div>

        <ul className="mt-8 grid items-stretch gap-5 sm:mt-9 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id} className="flex min-w-0">
              <Link
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                className="flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-[1.25rem] border border-border bg-pure shadow-none transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-[2px] hover:border-signature hover:shadow-[0_10px_28px_-18px_rgba(8,101,248,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none"
              >
                <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden bg-cloud">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover ${service.image.position}`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-heading min-h-[3.25rem] text-lg font-semibold tracking-tight text-midnight sm:min-h-[3.5rem] sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 min-h-[2.75rem] text-sm leading-relaxed text-navy-muted">
                    {service.description}
                  </p>
                  <div className="my-4 h-px w-full bg-border" />
                  <ul className="mt-auto space-y-2.5">
                    {service.checks.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-snug text-navy-muted"
                      >
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-border pt-6 sm:mt-9 sm:pt-7">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-signature transition-colors hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
          >
            Explore All Services
            <span aria-hidden className="translate-y-px">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
