import { CleaningPlans } from "@/components/home/CleaningPlans";
import { FinalCta } from "@/components/home/FinalCta";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { Hero } from "@/components/home/Hero";
import { OurServices } from "@/components/home/OurServices";
import { TrustStrip } from "@/components/home/TrustStrip";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <TrustStrip />
      <OurServices />
      <CleaningPlans />
      <GoogleReviews />
      <FinalCta />
    </main>
  );
}
