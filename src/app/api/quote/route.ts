import { randomUUID } from "node:crypto";
import { deliverQuoteLead } from "@/lib/quote-delivery";
import { parseQuoteLeadPayload, type QuoteLeadRecord } from "@/lib/quote-lead";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = parseQuoteLeadPayload(body);
  if (!parsed.ok) {
    return Response.json({ error: parsed.error }, { status: 400 });
  }

  const lead: QuoteLeadRecord = {
    ...parsed.data,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const delivery = await deliverQuoteLead(lead);
  if (!delivery.ok) {
    const status = delivery.code === "not_configured" ? 503 : 502;
    return Response.json(
      {
        error: delivery.error,
        code: delivery.code,
      },
      { status },
    );
  }

  return Response.json(
    {
      ok: true,
      id: lead.id,
      channel: delivery.channel,
    },
    { status: 201 },
  );
}
