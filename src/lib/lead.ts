// Shared between the enquiry forms and the /api/lead route.

export const HONEYPOT_FIELD = "website";

export const LEAD_KINDS = {
  home: "Home page enquiry",
  footer: "Footer message",
  visit: "Visit booking",
  contact: "Contact form",
  "projects-notify": "New projects notification",
  "community-join": "Community join request",
  "events-notify": "Events notification",
  "offers-apply": "Founding 10 application",
  "offers-footer": "Founding 10 footer message",
} as const;

export type LeadKind = keyof typeof LEAD_KINDS;

/** Sends an enquiry to /api/lead. Returns false if it could not be delivered. */
export async function sendLead(
  kind: LeadKind,
  fields: Record<string, FormDataEntryValue>,
  request = "",
) {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, request, fields }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
