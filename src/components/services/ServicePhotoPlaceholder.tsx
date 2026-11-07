type ServicePhotoPlaceholderProps = {
  label: string;
  tone?: "ice" | "navy" | "cloud";
  aspect?: "hero" | "detail" | "square";
  className?: string;
};

const toneStyle = {
  ice: {
    base: "linear-gradient(165deg, #F3F7FB 0%, #E9F3FC 52%, #D5E8F7 100%)",
    glow: "radial-gradient(70% 55% at 55% 35%, color-mix(in srgb, var(--color-clear-sky) 22%, transparent), transparent 72%)",
  },
  cloud: {
    base: "linear-gradient(160deg, #FFFFFF 0%, #F3F7FB 45%, #E9F3FC 100%)",
    glow: "radial-gradient(65% 50% at 40% 30%, color-mix(in srgb, var(--color-signature-blue) 12%, transparent), transparent 70%)",
  },
  navy: {
    base: "linear-gradient(165deg, #0A274F 0%, #061A38 55%, #041228 100%)",
    glow: "radial-gradient(70% 55% at 60% 30%, color-mix(in srgb, var(--color-clear-sky) 28%, transparent), transparent 70%)",
  },
} as const;

const aspectClass = {
  hero: "aspect-[16/10] sm:aspect-[21/9] lg:aspect-[2.4/1]",
  detail: "aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]",
  square: "aspect-[5/4]",
} as const;

export function ServicePhotoPlaceholder({
  label,
  tone = "ice",
  aspect = "detail",
  className = "",
}: ServicePhotoPlaceholderProps) {
  const palette = toneStyle[tone];

  return (
    <div
      className={`relative w-full overflow-hidden rounded-md ${aspectClass[aspect]} ${className}`.trim()}
      style={{ background: palette.base }}
      role="img"
      aria-label={`${label} — photography placeholder until authentic Student Window Cleaning photos are available`}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: palette.glow }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            tone === "navy"
              ? "linear-gradient(to top, rgba(4,18,40,0.55), transparent)"
              : "linear-gradient(to top, rgba(6,26,56,0.08), transparent)",
        }}
      />
      <p
        className={[
          "absolute inset-x-0 bottom-0 px-4 pb-4 text-[0.7rem] font-medium tracking-wide",
          tone === "navy" ? "text-white/55" : "text-navy-muted/80",
        ].join(" ")}
      >
        Photo coming soon
      </p>
    </div>
  );
}
