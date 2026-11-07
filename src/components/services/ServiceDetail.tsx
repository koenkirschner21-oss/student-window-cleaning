import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ServicePhotoPlaceholder } from "@/components/services/ServicePhotoPlaceholder";
import { quoteHref, type ServiceId } from "@/lib/site";

type ServiceDetailProps = {
  id: string;
  title: string;
  description: string;
  inclusions: readonly string[];
  quoteService: ServiceId;
  imageSide?: "left" | "right";
  tone?: "white" | "cloud";
};

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

export function ServiceDetail({
  id,
  title,
  description,
  inclusions,
  quoteService,
  imageSide = "left",
  tone = "white",
}: ServiceDetailProps) {
  const headingId = `${id}-heading`;
  const imageFirst = imageSide === "left";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`scroll-mt-28 ${tone === "cloud" ? "bg-cloud" : "bg-pure"} text-midnight`}
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div
          className={[
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
            imageFirst ? "" : "lg:[&>*:first-child]:order-2",
          ].join(" ")}
        >
          <ServicePhotoPlaceholder label={title} tone="ice" aspect="detail" />

          <div className="max-w-xl">
            <h2
              id={headingId}
              className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
            >
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              {description}
            </p>

            <h3 className="font-heading mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-signature">
              What&apos;s Included
            </h3>
            <ul className="mt-3 space-y-2.5">
              {inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-snug text-navy-muted sm:text-[0.95rem]"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8">
              <Link
                href={quoteHref({ service: quoteService })}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
              >
                Get a Free Quote
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
