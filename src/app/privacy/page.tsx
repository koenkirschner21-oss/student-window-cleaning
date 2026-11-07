import type { Metadata } from "next";
import { LegalScaffold } from "@/components/layout/LegalScaffold";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Draft privacy policy scaffold for ${site.name}. Final legal copy is pending business review.`,
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <LegalScaffold
      title="Privacy Policy"
      summary={`${site.name} respects your privacy. This draft outlines how we intend to handle information you share when requesting a quote or contacting us.`}
      sections={[
        {
          heading: "Information you provide",
          body: "When you submit a quote request or contact us, you may share details such as your name, phone number, email, location, service preferences, and optional notes or photos. We use that information to respond to your request and prepare a personalized quote.",
        },
        {
          heading: "How we use contact details",
          body: "We use the contact information you provide to follow up about your quote request and related cleaning services. We do not sell your personal information.",
        },
        {
          heading: "Website technology",
          body: "This website may use essential hosting and performance technologies provided by our hosting platform. A separate cookie preference system has not been connected yet. If analytics or marketing cookies are added later, this policy will be updated and a preference control can be introduced.",
        },
        {
          heading: "Contact",
          body: `For privacy questions about ${site.name}, use the phone number or email listed in the website footer.`,
        },
      ]}
    />
  );
}
