import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

type LegalScaffoldProps = {
  title: string;
  summary: string;
  sections: readonly { heading: string; body: string }[];
};

export function LegalScaffold({ title, summary, sections }: LegalScaffoldProps) {
  return (
    <main id="main-content" className="flex-1 bg-cloud text-midnight">
      <Container className="max-w-3xl py-12 sm:py-16">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
          Legal draft
        </p>
        <h1 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-midnight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-navy-muted">
          {summary}
        </p>
        <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          This page is a maintainable scaffold for business review. It does not
          invent payment, refund, guarantee, or data-processing practices beyond
          what {site.name} has confirmed. Replace this draft with finalized legal
          copy before relying on it as a complete policy.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-xl font-semibold tracking-tight text-midnight">
                {section.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-navy-muted">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm text-navy-muted">
          Questions about this draft?{" "}
          <Link
            href="/quote"
            className="font-semibold text-signature hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
          >
            Request a quote
          </Link>{" "}
          or use the contact details in the site footer.
        </p>
      </Container>
    </main>
  );
}
