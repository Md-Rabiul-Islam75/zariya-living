import nodemailer from "nodemailer";
import { HONEYPOT_FIELD, LEAD_KINDS, type LeadKind } from "@/lib/lead";

const MAX_BODY_BYTES = 20_000;
const MAX_FIELD_LENGTH = 4_000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

// Simple per-IP limit. It lives in memory, which is enough for one server.
const recent = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  if (recent.size > 5_000) recent.clear();
  recent.set(ip, hits);
  return hits.length > RATE_LIMIT;
}

function smtpConfig() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, MAIL_FROM, MAIL_TO } =
    process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !MAIL_TO) return null;
  return {
    transport: {
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === "true",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    },
    from: MAIL_FROM,
    to: MAIL_TO,
  };
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return Response.json({ ok: false, error: "too_large" }, { status: 413 });
  }

  let body: { kind?: string; request?: string; fields?: Record<string, unknown> };
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const kind = body.kind as LeadKind;
  if (!body.fields || !Object.hasOwn(LEAD_KINDS, kind)) {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Bots fill the hidden field. Accept quietly so they do not retry.
  if (body.fields[HONEYPOT_FIELD]) return Response.json({ ok: true });

  const fields = Object.entries(body.fields)
    .filter(([key]) => key !== HONEYPOT_FIELD)
    .map(([key, value]) => [key, String(value).slice(0, MAX_FIELD_LENGTH)] as const);

  const label = LEAD_KINDS[kind];
  const visitorRequest = body.request?.slice(0, 120);
  const lines = [
    `Form: ${label}`,
    ...(visitorRequest ? [`Request: ${visitorRequest}`] : []),
    "",
    ...fields.map(([key, value]) => `${key}: ${value}`),
  ];

  const config = smtpConfig();
  if (!config) {
    // SMTP is not filled in yet. Never tell a visitor it worked in production.
    if (process.env.NODE_ENV !== "production") {
      console.info("[lead] SMTP not configured, enquiry not sent:\n" + lines.join("\n"));
      return Response.json({ ok: true, dev: true });
    }
    console.error("[lead] SMTP is not configured. Fill in the SMTP_* values in .env.");
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const replyTo = fields.find(([key]) => key === "email")?.[1];
  try {
    await nodemailer.createTransport(config.transport).sendMail({
      from: config.from,
      to: config.to,
      replyTo,
      subject: `Website: ${label}${visitorRequest ? ` (${visitorRequest})` : ""}`,
      text: lines.join("\n"),
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[lead] Could not send email", error);
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
