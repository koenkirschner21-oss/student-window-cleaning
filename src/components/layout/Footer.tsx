import Image from "next/image";
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
      aria-hidden
      className="size-[1.375rem] shrink-0"
    >
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#FFFFFF"
        d="M13.35 19.2v-6.3h2.12l.32-2.46h-2.44V8.87c0-.71.2-1.2 1.22-1.2h1.3V5.47c-.22-.03-.99-.1-1.89-.1-1.87 0-3.15 1.14-3.15 3.24v1.81H8.7v2.46h2.13v6.32h2.52Z"
      />
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
      <Container className="grid items-start gap-10 py-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0 lg:py-14 xl:gap-x-12">
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-3 sm:gap-3.5">
              <Image
                src="/brand/logos/worker-symbol-white.png"
                alt=""
                width={393}
                height={512}
                className="h-12 w-auto shrink-0 sm:h-14"
                sizes="56px"
                priority={false}
              />
              <p className="font-heading text-[0.95rem] font-semibold leading-[1.15] tracking-tight text-pure sm:text-lg">
                <span className="block">STUDENT WINDOW</span>
                <span className="block">CLEANING</span>
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
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
                className={`${footerLinkClass} break-all lg:break-words`}
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
                  className={`${footerLinkClass} inline-flex items-center gap-2.5`}
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
