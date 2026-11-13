import type { Metadata } from "next";
import { Suspense } from "react";
import { headers } from "next/headers";
import { DM_Sans, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { RequestConnectionMarker } from "@/components/seo/RequestConnectionMarker";
import {
  buildOrganizationLocalBusinessJsonLd,
  defaultOgImage,
  robotsForHostname,
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
 * Robots meta uses the same hostname policy as `src/proxy.ts` X-Robots-Tag
 * (`shouldIndexHostname` / `robotsForHostname`) so HTML and headers stay aligned.
 */
export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host =
    headerList.get("x-forwarded-host") ?? headerList.get("host");

  return {
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
    robots: robotsForHostname(host),
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
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-pure font-sans text-midnight">
        <Suspense fallback={null}>
          <RequestConnectionMarker />
        </Suspense>
        <JsonLd data={buildOrganizationLocalBusinessJsonLd()} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
