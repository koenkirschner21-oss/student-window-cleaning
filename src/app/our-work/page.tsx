import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/layout/ScaffoldPage";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Student Window Cleaning project gallery scaffolding. Real job photos will appear when available.",
};

export default function OurWorkPage() {
  return (
    <ScaffoldPage
      title="Our Work"
      description="No gallery is shown on the homepage in Phase 1, and this page stays intentionally light until real Student Window Cleaning photos are provided. Stock and AI stand-ins will not be used as finished work."
    />
  );
}
