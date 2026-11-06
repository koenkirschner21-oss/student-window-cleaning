import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/brand/logos/primary-horizontal-navy-on-white.png",
        width: 2172,
        height: 724,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ["/brand/logos/primary-horizontal-navy-on-white.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
