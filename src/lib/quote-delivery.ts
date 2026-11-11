import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { contact } from "@/lib/site";
import {
  formatLeadForEmail,
  type QuoteLeadRecord,
} from "@/lib/quote-lead";

export type QuoteDeliveryResult =
  | { ok: true; channel: "email" | "local-file" }
  | { ok: false; error: string; code: "not_configured" | "delivery_failed" };

function notifyTo() {
  return (
    process.env.QUOTE_NOTIFY_TO?.trim() ||
    contact.email ||
    ""
  );
}

async function deliverByResend(lead: QuoteLeadRecord): Promise<QuoteDeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = notifyTo();
  if (!apiKey || !to) {
    return {
      ok: false,
      error: "Quote notification delivery is not configured.",
      code: "not_configured",
    };
  }

  const from =
    process.env.QUOTE_NOTIFY_FROM?.trim() ||
    "Student Window Cleaning <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Quote request from ${lead.name} (${lead.source})`,
      text: formatLeadForEmail(lead),
      reply_to: lead.email || undefined,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    return {
      ok: false,
      error: detail || "Email provider rejected the quote notification.",
      code: "delivery_failed",
    };
  }

  return { ok: true, channel: "email" };
}

async function deliverLocally(lead: QuoteLeadRecord): Promise<QuoteDeliveryResult> {
  const dir = path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  await appendFile(
    path.join(dir, "quote-leads.jsonl"),
    `${JSON.stringify(lead)}\n`,
    "utf8",
  );
  return { ok: true, channel: "local-file" };
}

/**
 * Deliver a validated quote lead.
 * Production: Resend email when RESEND_API_KEY + notify address are set.
 * Development fallback: append-only local JSONL (never pretends success in prod).
 */
export async function deliverQuoteLead(
  lead: QuoteLeadRecord,
): Promise<QuoteDeliveryResult> {
  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());
  if (hasResend) {
    return deliverByResend(lead);
  }

  if (process.env.NODE_ENV !== "production") {
    return deliverLocally(lead);
  }

  return {
    ok: false,
    error:
      "Quote requests can’t be delivered yet — email delivery is not configured on this deployment.",
    code: "not_configured",
  };
}
