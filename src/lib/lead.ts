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
} as const;

export type LeadKind = keyof typeof LEAD_KINDS;
