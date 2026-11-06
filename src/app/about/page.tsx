import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/layout/ScaffoldPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Student Window Cleaning. Team story and verified facts will be added when ready.",
};

export default function AboutPage() {
  return (
    <ScaffoldPage
      title="About Us"
      description="We’re holding this page as scaffolding until verified story details, photos, and contact facts are ready. The homepage tagline already captures the brand promise: student run, professionally done."
    />
  );
}
