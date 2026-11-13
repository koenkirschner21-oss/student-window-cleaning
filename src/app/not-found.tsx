import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main id="main-content" className="flex-1 bg-pure text-midnight">
      <Container className="py-20 sm:py-24">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature">
          404
        </p>
        <h1 className="font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-muted">
          That link doesn&apos;t match a page on this site. Head home or request
          a free quote instead.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold text-pure transition-colors hover:bg-[#0656d6]"
          >
            Back to Home
          </Link>
          <Link
            href="/quote"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-signature/40 px-5 text-sm font-semibold text-signature transition-colors hover:bg-ice"
          >
            Get a Free Quote
          </Link>
        </div>
      </Container>
    </main>
  );
}
