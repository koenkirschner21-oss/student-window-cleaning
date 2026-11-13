import Image from "next/image";
import { Container } from "@/components/ui/Container";

type CompareImage = {
  src: string;
  alt: string;
  label: string;
  objectPosition?: string;
};

type BeforeAfterCompareProps = {
  id: string;
  eyebrow: string;
  heading: string;
  supporting: string;
  before: CompareImage;
  after: CompareImage;
  /** Visual tone for surrounding page context. */
  tone?: "light" | "on-navy";
  className?: string;
};

/**
 * Editorial side-by-side before/after — preferred when viewpoints differ
 * enough that a drag slider would mislead.
 */
export function BeforeAfterCompare({
  id,
  eyebrow,
  heading,
  supporting,
  before,
  after,
  tone = "light",
  className = "",
}: BeforeAfterCompareProps) {
  const onNavy = tone === "on-navy";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={[
        onNavy ? "text-pure" : "bg-pure text-midnight",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        paddingBlock: onNavy
          ? undefined
          : "clamp(2.75rem, 5.5vw, 4rem)",
        ...(onNavy ? {} : { backgroundColor: "#FFFFFF" }),
      }}
    >
      <Container>
        <header className={onNavy ? "max-w-2xl" : "mx-auto max-w-2xl text-center"}>
          <p
            className={[
              "text-[0.7rem] font-semibold uppercase tracking-[0.18em] sm:text-xs",
              onNavy ? "text-sky" : "text-signature",
            ].join(" ")}
          >
            {eyebrow}
          </p>
          <h2
            id={`${id}-heading`}
            className={[
              "font-heading mt-2.5 text-[clamp(1.7rem,3vw,2.25rem)] font-semibold tracking-tight",
              onNavy ? "text-pure" : "text-midnight",
            ].join(" ")}
          >
            {heading}
          </h2>
          <p
            className={[
              "mt-3 text-sm leading-relaxed sm:text-base",
              onNavy ? "text-white/72" : "text-navy-muted",
            ].join(" ")}
          >
            {supporting}
          </p>
        </header>

        <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {[before, after].map((item) => (
            <figure key={item.label} className="m-0 min-w-0">
              <div
                className={[
                  "relative aspect-[4/5] overflow-hidden rounded-[14px] sm:aspect-[5/6]",
                  onNavy
                    ? "border border-white/10 bg-[#0A274F]"
                    : "border border-border bg-cloud",
                ].join(" ")}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover"
                  style={{
                    objectPosition: item.objectPosition ?? "center",
                  }}
                />
                <span
                  className={[
                    "absolute left-3 top-3 rounded-md px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em]",
                    onNavy
                      ? "bg-pure/95 text-midnight"
                      : "bg-midnight/90 text-pure",
                  ].join(" ")}
                >
                  {item.label}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
