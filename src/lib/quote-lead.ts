import {
  isPropertyTypeId,
  isServiceId,
  propertyTypeOptions,
  serviceOptions,
  type PropertyTypeId,
  type ServiceId,
} from "@/lib/site";

export const quoteSources = ["homepage", "quote-page"] as const;
export type QuoteSource = (typeof quoteSources)[number];

export type QuoteLeadInput = {
  source: QuoteSource;
  services: ServiceId[];
  propertyType: PropertyTypeId;
  name: string;
  phone: string;
  email?: string;
  address: string;
  notes?: string;
  /** Optional plan id when submitted from the dedicated quote page. */
  frequency?: string;
};

export type QuoteLeadRecord = QuoteLeadInput & {
  id: string;
  createdAt: string;
};

const windowServiceIds = new Set<ServiceId>(["exterior", "interior-exterior"]);

export function normalizeQuoteServices(services: ServiceId[]): ServiceId[] {
  const unique = Array.from(new Set(services));
  const windowPick = unique.find((id) => windowServiceIds.has(id));
  const gutter = unique.includes("gutter-cleaning")
    ? (["gutter-cleaning"] as ServiceId[])
    : [];
  return windowPick ? [windowPick, ...gutter] : gutter;
}

export function normalizePhone(value: string) {
  return value.replace(/\D/g, "");
}

export function isValidNaPhone(value: string) {
  const digits = normalizePhone(value);
  if (digits.length === 10) return true;
  if (digits.length === 11 && digits.startsWith("1")) return true;
  return false;
}

export function isValidOptionalEmail(value: string) {
  if (!value.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function parseQuoteLeadPayload(
  body: unknown,
): { ok: true; data: QuoteLeadInput } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const raw = body as Record<string, unknown>;
  const source = raw.source;
  if (source !== "homepage" && source !== "quote-page") {
    return { ok: false, error: "Missing or invalid quote source." };
  }

  const servicesRaw = Array.isArray(raw.services) ? raw.services : [];
  const services = normalizeQuoteServices(
    servicesRaw.filter((value): value is ServiceId => isServiceId(String(value))),
  );
  if (services.length === 0) {
    return { ok: false, error: "Select at least one service." };
  }

  const propertyType = String(raw.propertyType ?? "");
  if (!isPropertyTypeId(propertyType)) {
    return { ok: false, error: "Choose a valid property type." };
  }

  const name = String(raw.name ?? "").trim();
  const phone = String(raw.phone ?? "").trim();
  const email = String(raw.email ?? "").trim();
  const address = String(raw.address ?? "").trim();
  const notes = String(raw.notes ?? "").trim();
  const frequency = String(raw.frequency ?? "").trim();

  if (!name) return { ok: false, error: "Full name is required." };
  if (!isValidNaPhone(phone)) {
    return { ok: false, error: "Enter a valid North American phone number." };
  }
  if (!isValidOptionalEmail(email)) {
    return { ok: false, error: "Enter a valid email address or leave it blank." };
  }
  if (!address) return { ok: false, error: "Property address is required." };

  return {
    ok: true,
    data: {
      source,
      services,
      propertyType,
      name,
      phone,
      email: email || undefined,
      address,
      notes: notes || undefined,
      frequency: frequency || undefined,
    },
  };
}

export function formatLeadForEmail(lead: QuoteLeadRecord) {
  const serviceLabels = lead.services
    .map(
      (id) => serviceOptions.find((option) => option.id === id)?.label ?? id,
    )
    .join(", ");
  const propertyLabel =
    propertyTypeOptions.find((option) => option.id === lead.propertyType)
      ?.label ?? lead.propertyType;

  return [
    `New quote request (${lead.source})`,
    `ID: ${lead.id}`,
    `Received: ${lead.createdAt}`,
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "(not provided)"}`,
    `Address: ${lead.address}`,
    `Services: ${serviceLabels}`,
    `Property: ${propertyLabel}`,
    lead.frequency ? `Plan: ${lead.frequency}` : null,
    lead.notes ? `Notes: ${lead.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
