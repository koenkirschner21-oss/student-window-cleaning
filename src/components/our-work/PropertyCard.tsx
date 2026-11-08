import type { WorkProject } from "@/lib/our-work";

type PropertyCardProps = {
  project: WorkProject;
  /** Wider media frame for commercial cards. */
  variant?: "residential" | "commercial";
};

function HouseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="size-4 text-signature"
    >
      <path
        d="M4.5 10.5 12 4.5l7.5 6V19a1 1 0 0 1-1 1h-4.25v-5.25h-4.5V20H5.5a1 1 0 0 1-1-1v-8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="size-4 text-signature"
    >
      <path
        d="M5.5 20.5V5.75A1.25 1.25 0 0 1 6.75 4.5h6a1.25 1.25 0 0 1 1.25 1.25V20.5M13.999 9.5h3.75A1.25 1.25 0 0 1 19 10.75V20.5M5.5 20.5h13M8.25 8h2.5M8.25 11.5h2.5M8.25 15h2.5M15.75 13h1M15.75 16.25h1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Non-interactive project card — subtle hover only.
 * No buttons, links, or lightbox until media is ready.
 */
export function PropertyCard({
  project,
  variant = "residential",
}: PropertyCardProps) {
  const aspect =
    variant === "commercial" ? "aspect-[16/10]" : "aspect-[4/3]";

  return (
    <article className="group min-w-0">
      <div
        className={`relative w-full overflow-hidden rounded-md border border-border bg-cloud ${aspect}`}
        style={{
          background:
            "linear-gradient(160deg, #F7FAFC 0%, #E9F3FC 48%, #DEEAF6 100%)",
        }}
        role="img"
        aria-label={`${project.title} — media coming soon`}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-50 transition-opacity duration-300 motion-safe:group-hover:opacity-70"
          style={{
            background:
              "radial-gradient(70% 55% at 50% 40%, color-mix(in srgb, var(--color-clear-sky) 20%, transparent), transparent 72%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.02]"
        />
        <div
          aria-hidden
          className="absolute inset-0 border border-transparent transition-[border-color,box-shadow] duration-300 motion-safe:group-hover:border-signature/25 motion-safe:group-hover:shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-signature-blue)_18%,transparent)]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-pure/70 text-signature shadow-sm backdrop-blur-[2px] transition-transform duration-300 motion-safe:group-hover:scale-105">
            {variant === "commercial" ? <BuildingIcon /> : <HouseIcon />}
          </span>
        </div>
      </div>

      <div className="mt-3.5 px-0.5">
        {project.typeLabel ? (
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-signature">
            {project.typeLabel}
          </p>
        ) : null}
        <h3 className="font-heading mt-1 text-base font-semibold tracking-tight text-midnight sm:text-[1.05rem]">
          {project.title}
        </h3>
      </div>
    </article>
  );
}
