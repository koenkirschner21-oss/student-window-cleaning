import { CleaningPlans } from "@/components/home/CleaningPlans";
import { FinalCta } from "@/components/home/FinalCta";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { Hero } from "@/components/home/Hero";
import { HomepageOurWorkShowcase } from "@/components/home/HomepageOurWorkShowcase";
import { OurServices } from "@/components/home/OurServices";
import { WindowBeforeAfter } from "@/components/home/WindowBeforeAfter";

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
