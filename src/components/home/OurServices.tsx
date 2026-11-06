import Link from "next/link";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

const services = [
  {
    title: "Exterior window cleaning",
    body: "Sills-to-glass exterior cleans for a brighter curb look after rain, pollen, or winter film.",
  },
  {
    title: "Interior glass",
    body: "Careful indoor cleaning for living spaces, offices, and hard-to-reach panes.",
  },
  {
    title: "Screens, tracks & sills",
    body: "Detail work that makes the whole frame feel finished — not just the glass.",
  },
  {
    title: "Gutter cleaning",
    body: "Clear debris so water can move the way it should. Available on its own or with windows.",
  },
] as const;

export function OurServices() {
  return (
    <Section id="services" tone="white">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Heading
          level={2}
          eyebrow="Our services"
          className="max-w-xl"
        >
          Clean glass and tidy exteriors, handled with care.
        </Heading>
        <p className="max-w-md text-base leading-relaxed text-navy-muted md:pb-1">
          Full service pages are coming next. For Phase 1, this overview covers
          what we typically take on.
        </p>
      </div>

      <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {services.map((service, index) => (
          <li key={service.title} className="border-t border-border pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signature">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-heading mt-3 text-xl font-semibold text-midnight">
              {service.title}
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-navy-muted">
              {service.body}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-10">
        <Link
          href="/services"
          className="text-sm font-semibold text-signature underline-offset-4 hover:underline"
        >
          Browse the services overview
        </Link>
      </p>
    </Section>
  );
}
