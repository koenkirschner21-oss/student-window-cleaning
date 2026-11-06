import { Container } from "@/components/ui/Container";

const items = [
  {
    title: "Student-run",
    detail: "A young team representing the brand with care on every visit.",
  },
  {
    title: "Professionally done",
    detail: "Clear communication and a finished look that respects your home.",
  },
  {
    title: "Free quotes",
    detail: "Tell us about the property — no online price calculator or booking.",
  },
  {
    title: "Photo-ready proof",
    detail: "Work gallery and verified review counts land once assets are ready.",
  },
] as const;

export function TrustStrip() {
  return (
    <section
      aria-label="Why homeowners choose us"
      className="border-b border-border bg-cloud"
    >
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-12">
        {items.map((item) => (
          <div key={item.title} className="min-w-0">
            <p className="font-heading text-base font-semibold text-midnight">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy-muted">
              {item.detail}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
