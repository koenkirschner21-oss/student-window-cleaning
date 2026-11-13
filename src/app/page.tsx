import type { Metadata } from "next";
import { CleaningPlans } from "@/components/home/CleaningPlans";
import { FinalCta } from "@/components/home/FinalCta";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { Hero } from "@/components/home/Hero";
import { HomepageOurWorkShowcase } from "@/components/home/HomepageOurWorkShowcase";
import { OurServices } from "@/components/home/OurServices";
import { WindowBeforeAfter } from "@/components/home/WindowBeforeAfter";
import { defaultOgImage, socialImages } from "@/lib/seo";

const homeTitle = "Window Cleaning in Whitby | Student-Run Professionals";
const homeDescription =
  "Student Window Cleaning provides professional window and gutter cleaning for homes across Whitby and Durham Region. Student-run. Request a free virtual quote.";

export const metadata: Metadata = {
  title: {
    absolute: homeTitle,
  },
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    images: socialImages(defaultOgImage),
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [defaultOgImage.url],
  },
};

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <OurServices />
      <CleaningPlans />
      <WindowBeforeAfter />
      <GoogleReviews />
      <FinalCta />
      <HomepageOurWorkShowcase />
    </main>
  );
}
