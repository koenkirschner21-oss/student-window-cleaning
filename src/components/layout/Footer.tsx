import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight text-pure">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_auto] md:gap-12">
        <div className="space-y-5">
          <Link href="/" aria-label={`${site.name} home`} className="inline-block">
            <Image
              src="/brand/logos/primary-horizontal-on-dark.png"
              alt={site.name}
              width={2172}
              height={724}
              className="h-12 w-auto"
            />
          </Link>
          <p className="max-w-sm text-base leading-relaxed text-white/75">
            {site.tagline}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            Contact details, service area map, and social links will be added
            once verified. For now, use the quote form to reach the team.
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-sky">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="text-white/80 transition hover:text-pure">
                Home
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 transition hover:text-pure"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/quote"
                className="text-white/80 transition hover:text-pure"
              >
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <Image
            src="/brand/logos/heritage-badge.png"
            alt=""
            width={1536}
            height={1024}
            className="h-24 w-auto rounded-full bg-pure/5 object-contain"
          />
          <p className="text-xs text-white/45 md:text-right">
            Heritage mark — secondary branding
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.name}. All rights reserved.</p>
          <p>Website foundation in progress.</p>
        </Container>
      </div>
    </footer>
  );
}
