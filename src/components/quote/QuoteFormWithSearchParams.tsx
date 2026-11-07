"use client";

import { useSearchParams } from "next/navigation";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { isFrequencyId } from "@/lib/site";

export function QuoteFormWithSearchParams() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("frequency");
  const initialFrequency = isFrequencyId(raw) ? raw : "";

  return <QuoteForm initialFrequency={initialFrequency} />;
}
