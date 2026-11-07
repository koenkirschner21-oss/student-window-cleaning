import Link from "next/link";
import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { Container } from "@/components/ui/Container";
import {
  contact,
  exploreLinks,
  legalLinks,
  serviceAreas,
  site,
  socialLinks,
} from "@/lib/site";

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="size-4 shrink-0"
    >
      <path d="M14.5 8.5V6.75c0-.69.56-1.25 1.25-1.25H17V3h-1.75A3.75 3.75 0 0 0 11.5 6.75V8.5H9.5v2.5h2v8h3v-8h2.15l.35-2.5H14.5Z" />
    </svg>
  );
}

const footerLinkClass =
  "text-sm text-white/75 transition-colors duration-150 hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky";

const columnHeadingClass =
  "font-heading text-xs font-semibold uppercase tracking-[0.16em] text-sky";

export function Footer() {
  const facebook = socialLinks.facebook;

  return (
    <footer className="border-t border-white/10 bg-midnight text-pure">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-8 lg:py-14">
        <div className="max-w-xs space-y-4">
          <div>
            <p className="font-heading text-lg font-semibold tracking-tight text-pure sm:text-xl">
              {site.name.toUpperCase()}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {site.tagline}
            </p>
          </div>
          <Link
            href="/quote"
            className="font-heading inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-150 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
          >
            Get a Free Quote
          </Link>
        </div>

        <div>
          <p className={columnHeadingClass}>Explore</p>
          <ul className="mt-4 space-y-2.5">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={columnHeadingClass}>Service Areas</p>
          <ul className="mt-4 space-y-2.5">
            {serviceAreas.map((area) => (
              <li key={area} className="text-sm text-white/75">
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={columnHeadingClass}>Contact</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={contact.phoneHref} className={footerLinkClass}>
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.emailHref}
                className={`${footerLinkClass} break-all`}
              >
                {contact.email}
              </a>
            </li>
            {facebook ? (
              <li>
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${footerLinkClass} inline-flex items-center gap-2`}
                >
                  <FacebookIcon />
                  <span>Facebook</span>
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>
            © <CopyrightYear /> {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-150 hover:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
