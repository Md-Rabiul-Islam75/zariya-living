"use client";

import { useRef, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { showToast } from "@/components/site/Toast";
import { HONEYPOT_FIELD, sendLead, type LeadKind } from "@/lib/lead";
import { CONTACT } from "@/lib/site-data";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Every enquiry form on the site. Validation and messages follow the design:
 * the first empty or invalid field is focused and named in an error toast. On
 * success the details go to /api/lead, which emails them to the team.
 *
 * Inputs need a `name`. Where a form has several submit buttons, the label of the
 * button pressed is sent as the visitor's request.
 */
export function LeadForm({
  kind,
  className,
  style,
  children,
  ...rest
}: {
  kind: LeadKind;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  "data-reveal"?: string;
  "data-delay"?: string;
}) {
  const sending = useRef(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending.current) return;

    const form = e.currentTarget;
    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input, select"),
    ).filter((f) => f.name !== HONEYPOT_FIELD);

    for (const field of fields) {
      field.removeAttribute("aria-invalid");
      const value = field.value.trim();
      const badEmail = field.type === "email" && !!value && !EMAIL_RE.test(value);
      if (!value || badEmail) {
        field.setAttribute("aria-invalid", "true");
        field.focus();
        const label =
          field.closest("label")?.querySelector("span")?.textContent ??
          field.getAttribute("aria-label") ??
          field.getAttribute("placeholder") ??
          "this field";
        showToast(
          badEmail
            ? "Email Address: please enter a valid email, like name@example.com."
            : `Required: please fill in “${label.trim()}”.`,
          "error",
        );
        return;
      }
    }

    const submitter = (e.nativeEvent as SubmitEvent).submitter;
    sending.current = true;
    const sent = await sendLead(
      kind,
      Object.fromEntries(new FormData(form)),
      submitter?.textContent?.trim() ?? "",
    );
    sending.current = false;

    if (sent) {
      showToast("Thank you. Our team will be in touch with you shortly.");
      form.reset();
    } else {
      showToast(
        `Sorry, we could not send that. Please call or WhatsApp us on ${CONTACT.phone}.`,
        "error",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className={className} style={style} {...rest}>
      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <input
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px opacity-0"
      />
      {children}
    </form>
  );
}
