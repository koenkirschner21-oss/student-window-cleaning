import Link from "next/link";
import { FacebookReel } from "@/components/about/FacebookReel";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/lib/site";

export function AboutSocial() {
  const links = [
    socialLinks.facebook
      ? { label: "Facebook", href: socialLinks.facebook }
      : null,
    socialLinks.instagram
      ? { label: "Instagram", href: socialLinks.instagram }
      : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <section
      aria-labelledby="about-social-heading"
      className="bg-pure text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-14">
          <div className="max-w-xl">
            <h2
              id="about-social-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-[2.15rem] sm:leading-tight"
            >
              See Our Work in Action.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              Follow Student Window Cleaning for helpful cleaning tips,
              behind-the-scenes videos, and a closer look at our work.
            </p>

            {links.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center rounded-md border border-border-strong bg-pure px-4 text-sm font-semibold text-midnight transition-colors hover:border-signature hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-sm leading-relaxed text-navy-muted">
                Official social profile links will appear here once verified.
                Configure{" "}
                <code className="rounded bg-ice px-1.5 py-0.5 text-xs text-midnight">
                  socialLinks
                </code>{" "}
                in{" "}
                <code className="rounded bg-ice px-1.5 py-0.5 text-xs">
                  site.ts
                </code>
                .
              </p>
            )}

            <p className="mt-8">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-signature transition-colors hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
              >
                Browse Our Work
                <span aria-hidden className="translate-y-px">
                  →
                </span>
              </Link>
            </p>
          </div>

          <FacebookReel />
        </div>
      </Container>
    </section>
  );
}
