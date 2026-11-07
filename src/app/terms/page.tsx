import type { Metadata } from "next";
import { LegalScaffold } from "@/components/layout/LegalScaffold";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Draft terms and conditions scaffold for ${site.name}. Final legal copy is pending business review.`,
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <LegalScaffold
      title="Terms & Conditions"
      summary={`These draft terms describe how visitors may use the ${site.name} website. They are a scaffold for business review and are not a complete service contract.`}
      sections={[
        {
          heading: "Website use",
          body: "This website provides information about our window and gutter cleaning services and a way to request a free quote. Content is provided for general information and may be updated from time to time.",
        },
        {
          heading: "Quote requests",
          body: "Submitting the quote form is a request for a personalized quote — not a confirmed booking, appointment, or instant price. Quotes and scheduling are confirmed by the team after reviewing your details.",
        },
        {
          heading: "Service details",
          body: "Service inclusions, visit plans, and availability are described on the site for guidance. Final scope and timing are agreed with you before work proceeds. This draft does not invent payment, refund, or guarantee terms.",
        },
        {
          heading: "Contact",
          body: `Questions about these draft terms can be directed to ${site.name} using the contact details in the website footer.`,
        },
      ]}
    />
  );
}
