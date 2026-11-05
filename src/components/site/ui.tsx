import type { HTMLAttributes, ReactNode } from "react";

/** The 1320px page container. `data-container` handles the mobile side padding. */
export function Container({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-container="" className={`mx-auto max-w-[1320px] px-12 ${className}`} {...rest}>
      {children}
    </div>
  );
}

type RevealProps = { "data-reveal"?: string; "data-delay"?: string };

/**
 * The uppercase section label with its gold rule. `center` adds a second rule on
 * the right, for centred headings.
 */
export function Eyebrow({
  children,
  color = "#DFC1A5",
  rule = 40,
  track = ".22em",
  center = false,
  className = "",
  ...rest
}: {
  children: ReactNode;
  color?: string;
  rule?: number;
  track?: string;
  center?: boolean;
  className?: string;
} & RevealProps) {
  const line = <span data-rule="" style={{ width: rule, height: 1, background: color }} />;
  return (
    <div className={`flex items-center gap-[14px] ${className}`} {...rest}>
      {line}
      <span
        className="text-[14px] font-semibold uppercase"
        style={{ letterSpacing: track, color }}
      >
        {children}
      </span>
      {center && line}
    </div>
  );
}

/** The WhatsApp glyph used in the header and the mobile bar. */
export function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c2 .9 2 .6 2.4.6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}
