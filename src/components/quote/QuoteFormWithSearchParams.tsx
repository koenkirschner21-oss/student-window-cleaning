"use client";

import { useSearchParams } from "next/navigation";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { isFrequencyId, isServiceId, type ServiceId } from "@/lib/site";

function parseServices(raw: string | null): ServiceId[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((value) => value.trim())
    .filter(isServiceId);
}

export function QuoteFormWithSearchParams() {
  const searchParams = useSearchParams();
  const rawFrequency = searchParams.get("frequency");
  const initialFrequency = isFrequencyId(rawFrequency) ? rawFrequency : "";
  const initialServices = parseServices(searchParams.get("service"));

  return (
    <QuoteForm
      initialFrequency={initialFrequency}
      initialServices={initialServices}
    />
  );
}
