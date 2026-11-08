import { Container } from "@/components/ui/Container";

const commitments = [
  {
    title: "Student-Driven",
    body: "Creating meaningful opportunities for students to take initiative, gain experience, and take pride in their work.",
    icon: "cap" as const,
  },
  {
    title: "Built on Trust",
    body: "Earning customer confidence through dependable service, attention to detail, and genuine care.",
    icon: "handshake" as const,
  },
  {
    title: "Proudly Local",
    body: "Serving homes and businesses throughout Whitby and Durham Region while supporting local students.",
    icon: "pin" as const,
  },
] as const;

function GraduationCapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-5"
    >
      <path d="M2.5 9.5 12 4.5l9.5 5-9.5 5-9.5-5Z" />
      <path d="M6.5 11.6v4.2c0 .3 2.4 2.7 5.5 2.7s5.5-2.4 5.5-2.7v-4.2" />
      <path d="M21.5 9.5v5.2" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-5"
    >
      <path d="M7.5 13.5 4.8 10.8a2.1 2.1 0 0 1 0-3l2.2-2.2a2.1 2.1 0 0 1 3 0L12 7.6" />
      <path d="M16.5 10.5 19.2 13.2a2.1 2.1 0 0 1 0 3l-2.2 2.2a2.1 2.1 0 0 1-3 0L12 16.4" />
      <path d="M8.5 12.5 11 15a2 2 0 0 0 2.8 0l3.2-3.2a1.6 1.6 0 0 0 0-2.3l-.7-.7a1.6 1.6 0 0 0-2.3 0L12.5 10.3" />
      <path d="M9.2 15.8 7.5 17.5" />
      <path d="M11.2 17.2 9.8 18.6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-5"
    >
      <path d="M12 21s-6.5-5.2-6.5-10.2a6.5 6.5 0 1 1 13 0C18.5 15.8 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </svg>
  );
}

function CommitmentIcon({
  kind,
}: {
  kind: (typeof commitments)[number]["icon"];
}) {
  if (kind === "cap") return <GraduationCapIcon />;
  if (kind === "handshake") return <HandshakeIcon />;
  return <MapPinIcon />;
}

/**
 * Our Standard — compact Midnight Navy commitments band.
 * No photography; group photo belongs in the following section.
 */
export function OurStandards() {
  return (
    <section
      aria-labelledby="our-standards-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "clamp(3.5rem, 6vw, 5rem)" }}
    >
      <Container width="portfolio">
        <div
          className="rounded-lg px-6 py-9 text-pure sm:px-10 sm:py-10 lg:px-12 lg:py-11"
          style={{ backgroundColor: "#061A38" }}
        >
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#3999EA] sm:text-xs">
              Our Standard
            </p>
            <h2
              id="our-standards-heading"
              className="font-heading mt-2.5 text-2xl font-semibold tracking-tight text-pure sm:text-[1.85rem] sm:leading-tight"
            >
              Student-Run. Professionally Done.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/72">
              Being student-run is what makes us different. Our commitment to
              doing the job properly is what earns our customers&apos; trust.
            </p>
          </div>

          <hr className="mt-7 border-0 border-t border-white/15 sm:mt-8" />

          <ul className="mt-7 grid grid-cols-1 gap-8 sm:mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-9 lg:grid-cols-3 lg:gap-10">
            {commitments.map((item) => (
              <li key={item.title} className="min-w-0">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex text-[#3999EA]">
                    <CommitmentIcon kind={item.icon} />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold tracking-tight text-pure sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
