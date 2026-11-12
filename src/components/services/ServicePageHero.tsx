import { Container } from "@/components/ui/Container";

type ServicePageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * Compact Midnight Navy hero for dedicated service pages.
 */
export function ServicePageHero({
  eyebrow,
  title,
  description,
}: ServicePageHeroProps) {
  return (
    <section
      aria-labelledby="service-page-heading"
      className="bg-midnight text-pure"
      style={{ backgroundColor: "#061A38" }}
    >
      <Container className="flex min-h-[12rem] items-center justify-center py-10 sm:min-h-[13.5rem] sm:py-11 lg:min-h-[14.5rem] lg:py-12">
        <div className="mx-auto max-w-[56rem] text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#3999EA] sm:text-xs">
            {eyebrow}
          </p>
          <h1
            id="service-page-heading"
            className="font-heading mt-2.5 text-[clamp(1.85rem,3.6vw,2.5rem)] font-semibold tracking-tight text-pure sm:mt-3"
          >
            {title}
          </h1>
          <p className="mx-auto mt-3 max-w-[42rem] text-[0.95rem] leading-relaxed text-white/72 sm:mt-3.5 sm:text-base">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
