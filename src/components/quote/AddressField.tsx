"use client";

import { addressAutocomplete } from "@/lib/site";

type AddressFieldProps = {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  invalid?: boolean;
  className?: string;
};

/**
 * Property street address input.
 * When `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` (or another provider) is configured,
 * wire Places Autocomplete here. Until then, this is a clean manual fallback
 * that preserves entered text and stays integration-ready.
 */
export function AddressField({
  id = "street-address",
  name = "streetAddress",
  value,
  onChange,
  invalid,
  className = "",
}: AddressFieldProps) {
  const apiKey =
    typeof process !== "undefined"
      ? process.env[addressAutocomplete.apiKeyEnv]
      : undefined;
  const placesReady = Boolean(apiKey && addressAutocomplete.provider);

  return (
    <div>
      <input
        id={id}
        type="text"
        name={name}
        autoComplete="street-address"
        required
        aria-invalid={invalid || undefined}
        aria-describedby={`${id}-hint`}
        className={className}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Street number and name"
      />
      <p id={`${id}-hint`} className="mt-1.5 text-xs text-navy-muted">
        {placesReady
          ? "Start typing to search for your property address."
          : "Enter your full street address. Address autocomplete can be enabled once a Places API key is configured."}
      </p>
    </div>
  );
}
