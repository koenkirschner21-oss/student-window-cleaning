import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Overview of Student Window Cleaning services. Full service details are being prepared for Phase 2.",
};

const serviceAnchors = [
  {
    id: "exterior-window-cleaning",
    title: "Exterior Window Cleaning",
  },
  {
    id: "interior-exterior-window-cleaning",
    title: "Interior & Exterior Window Cleaning",
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
  },
] as const;

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1 bg-cloud">
      <Container className="py-16 sm:py-20">
        <Heading level={1} eyebrow="Coming into focus">
          Services
        </Heading>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-muted">
          This page is scaffolded for navigation. Detailed service copy,
          process notes, and photography will land in a later phase. Use the
          homepage overview or request a quote in the meantime.
        </p>

        <div className="mt-12 space-y-8">
          {serviceAnchors.map((service) => (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-28 border-t border-border pt-6"
            >
              <h2 className="font-heading text-xl font-semibold text-midnight">
                {service.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-muted">
                Full details for this service are coming soon.
              </p>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/quote">Get a Free Quote</Button>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </Container>
    </main>
  );
}
