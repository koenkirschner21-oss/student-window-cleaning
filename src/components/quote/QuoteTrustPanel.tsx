export function QuoteTrustPanel() {
  return (
    <aside className="overflow-hidden rounded-md border border-border bg-pure text-midnight">
      <div
        className="relative aspect-[4/5] w-full sm:aspect-[5/6] lg:aspect-[4/5]"
        style={{
          background:
            "linear-gradient(165deg, #0A274F 0%, #061A38 55%, #041228 100%)",
        }}
        role="img"
        aria-label="Student Window Cleaning team photo placeholder — authentic approved photo needed"
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 55% at 55% 35%, color-mix(in srgb, var(--color-clear-sky) 26%, transparent), transparent 70%)",
          }}
        />
        <p className="absolute inset-x-0 bottom-0 px-4 pb-4 text-[0.7rem] font-medium tracking-wide text-white/55">
          Photo coming soon
        </p>
      </div>

      <div className="px-5 py-5 sm:px-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-signature">
          Local &amp; Student-Run
        </p>
        <h2 className="font-heading mt-2 text-xl font-semibold tracking-tight text-midnight sm:text-[1.35rem]">
          Real Students. Professional Results.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-navy-muted">
          Proudly serving homeowners across Whitby and Durham Region.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-navy-muted">
          Free virtual property assessment. No obligation.
        </p>
      </div>
    </aside>
  );
}
