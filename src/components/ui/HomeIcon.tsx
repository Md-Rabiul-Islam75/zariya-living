// Minimal line icons for the home-page cards, drawn to match the reference.

export type HomeIconName = "resort" | "agro" | "villa" | "taka";

export function HomeIcon({ name, className = "h-6 w-6" }: { name: HomeIconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "resort": // shield + check — experience & trust
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "agro": // leaf / droplet — nature
      return (
        <svg {...common}>
          <path d="M12 3c4 3 6 6 6 9a6 6 0 1 1-12 0c0-3 2-6 6-9z" />
          <path d="M12 8v9" />
        </svg>
      );
    case "villa": // waves — lagoon
      return (
        <svg {...common}>
          <path d="M3 8c1.5 0 1.5 1.5 3 1.5S7.5 8 9 8s1.5 1.5 3 1.5S13.5 8 15 8s1.5 1.5 3 1.5S19.5 8 21 8" />
          <path d="M3 13c1.5 0 1.5 1.5 3 1.5S7.5 13 9 13s1.5 1.5 3 1.5S13.5 13 15 13s1.5 1.5 3 1.5S19.5 13 21 13" />
          <path d="M3 18c1.5 0 1.5 1.5 3 1.5S7.5 18 9 18s1.5 1.5 3 1.5S13.5 18 15 18s1.5 1.5 3 1.5S19.5 18 21 18" />
        </svg>
      );
    case "taka": // ৳ in a circle — income
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 9.5c.4-.9 1.2-1.4 2.2-1.4 1.3 0 2.1.9 2.1 2.3V16" />
          <path d="M8 12.4h5.2" />
        </svg>
      );
  }
}
