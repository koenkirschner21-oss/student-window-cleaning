import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const services = [
  {
    id: "exterior-window-cleaning",
    title: "Exterior Window Cleaning",
    description:
      "A focused clean for your home's exterior glass and accessible details.",
    checks: [
      "Exterior window glass",
      "Accessible frames, sills and tracks",
    ],
    image: {
      src: "/about/about-hero-student-window-cleaning.webp",
      alt: "Student Window Cleaning team member cleaning exterior residential glass with a squeegee",
      position: "object-[center_18%]",
    },
  },
  {
    id: "interior-exterior-window-cleaning",
    title: "Interior & Exterior Window Cleaning",
    description:
      "A complete inside-and-out refresh for clearer views throughout your home.",
    checks: [
      "Both sides of the glass",
      "Accessible interior and exterior frames, sills and tracks",
    ],
    image: {
      src: "/our-work/cleaning-action-squeegee.webp",
      alt: "Close-up of a Student Window Cleaning team member squeegeeing residential window glass",
      position: "object-[center_35%]",
    },
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description:
      "Debris removal and accessible downspout clearing to help keep water flowing properly.",
    checks: ["Gutter debris removal", "Accessible downspout clearing"],
    image: {
      src: "/our-work/gutter-detail-debris.webp",
      alt: "Close-up of a residential gutter holding leaf debris along a shingle roofline",
      position: "object-center",
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
 * Cleaning Plans service selection — photo-led cards for each service option.
 * No per-card quote CTAs; services are selected during the quote flow.
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
              <article className="flex w-full flex-col overflow-hidden rounded-[1.25rem] border border-border bg-pure">
                <div className="relative aspect-[5/3] w-full overflow-hidden bg-cloud">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover ${service.image.position}`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-midnight sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-muted">
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
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-7">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-signature transition-colors hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
          >
            Explore All Services
            <span aria-hidden className="translate-y-px">
              →
            </span>
          </Link>
          <div className="hidden h-4 w-px shrink-0 bg-border sm:block" aria-hidden />
          <p className="text-sm leading-relaxed text-navy-muted sm:text-right">
            Select your services when requesting a free quote.
          </p>
        </div>
      </Container>
    </section>
  );
}
