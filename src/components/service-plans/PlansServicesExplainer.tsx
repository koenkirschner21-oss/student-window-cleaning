import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { serviceOptions } from "@/lib/site";

export function PlansServicesExplainer() {
  return (
    <section
      aria-labelledby="plans-services-heading"
      className="bg-pure text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div className="max-w-xl">
            <h2
              id="plans-services-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
            >
              Choose Your Services, Then Your Visits
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              Choose the services your property needs, then select the number of
              cleaning visits that suits you. We&apos;ll prepare a personalized
              quote.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy-muted">
              Gutters are not automatically included in every plan — add them
              only when you need them.
            </p>
            <p className="mt-7">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-signature transition-colors hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
              >
                Explore Services
                <span aria-hidden className="translate-y-px">
                  →
                </span>
              </Link>
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {serviceOptions.map((service) => (
              <li
                key={service.id}
                className="rounded-md border border-border bg-cloud px-4 py-3.5"
              >
                <p className="font-heading text-sm font-semibold tracking-tight text-midnight">
                  {service.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
