import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/layout/ScaffoldPage";

export const metadata: Metadata = {
  title: "Cleaning Plans",
  description:
    "Cleaning plan options for Student Window Cleaning. Detailed plan pages are coming in a later phase.",
};

export default function CleaningPlansPage() {
  return (
    <ScaffoldPage
      title="Cleaning Plans"
      description="Phase 1 includes a homepage summary of one-time, seasonal, and recurring options. This dedicated plans page will expand once pricing guidance and plan details are approved — without inventing rates."
    />
  );
}
