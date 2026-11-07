import { site } from "@/lib/site";

export function QuoteBrandAside() {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-pure">
      <div
        className="relative aspect-[5/4] w-full"
        style={{
          background:
            "linear-gradient(165deg, #0A274F 0%, #061A38 55%, #041228 100%)",
        }}
        role="img"
        aria-label="Student Window Cleaning team at a job site — photography placeholder until authentic photos are available"
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 55% at 55% 35%, color-mix(in srgb, var(--color-clear-sky) 28%, transparent), transparent 70%)",
          }}
        />
        <p className="absolute inset-x-0 bottom-0 px-4 pb-4 text-[0.7rem] font-medium tracking-wide text-white/55">
          Team photo coming soon
        </p>
      </div>

      <div className="px-5 py-5 sm:px-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-signature">
          Local &amp; student-run
        </p>
        <h2 className="font-heading mt-2 text-xl font-semibold tracking-tight text-midnight sm:text-[1.35rem]">
          Proudly Student-Run. Committed to Quality.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-navy-muted">
          When you choose {site.name}, you&apos;re supporting a local
          student-run business dedicated to delivering professional service and
          exceptional care for your home.
        </p>
      </div>
    </div>
  );
}

export function QuoteExpectations() {
  return (
    <div className="rounded-md border border-border bg-pure px-5 py-4 sm:px-6">
      <h2 className="font-heading text-sm font-semibold tracking-tight text-midnight">
        What to expect
      </h2>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-navy-muted">
        <li>Your request is for a free, personalized quote.</li>
        <li>This is not a confirmed booking.</li>
        <li>Pricing is prepared for your property — not calculated online.</li>
      </ul>
    </div>
  );
}
