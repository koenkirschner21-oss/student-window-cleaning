import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildOrganizationLocalBusinessJsonLd,
  defaultOgImage,
  socialImages,
} from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

/**
 * HTML robots follow the configured public origin in `site.url`.
 * While that origin is still `*.vercel.app`, pages stay noindex.
 * After launch (custom domain on `site.url`), HTML allows indexing;
 * `src/proxy.ts` still forces noindex on every `*.vercel.app` host via
 * X-Robots-Tag so the temporary host never becomes indexable.
 */
const publicHostIsTemporary = new URL(site.url).hostname.endsWith(
  ".vercel.app",
);

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Window Cleaning in Whitby`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Window Cleaning in Whitby`,
    description: site.description,
    images: socialImages(defaultOgImage),
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Window Cleaning in Whitby`,
    description: site.description,
    images: [defaultOgImage.url],
  },
  robots: {
    index: !publicHostIsTemporary,
    follow: true,
    googleBot: {
      index: !publicHostIsTemporary,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: "/brand/logos/worker-icon-navy-on-white.png",
        type: "image/png",
      },
    ],
    apple: [{ url: "/brand/logos/worker-icon-navy-on-white.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-pure font-sans text-midnight">
        <JsonLd data={buildOrganizationLocalBusinessJsonLd()} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
