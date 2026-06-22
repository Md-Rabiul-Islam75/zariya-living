type IconName = "facebook" | "youtube" | "instagram" | "linkedin";

const PATHS: Record<IconName, React.ReactNode> = {
  facebook: (
    <path d="M14 8.5h2V5.5h-2c-1.93 0-3.5 1.57-3.5 3.5v1.5H8.5v3H10.5V20h3v-6.5H16l.5-3h-3V9c0-.28.22-.5.5-.5z" />
  ),
  youtube: (
    <path d="M21.6 8.2a2.4 2.4 0 0 0-1.69-1.7C18.4 6.1 12 6.1 12 6.1s-6.4 0-7.91.4A2.4 2.4 0 0 0 2.4 8.2 25 25 0 0 0 2 12a25 25 0 0 0 .4 3.8 2.4 2.4 0 0 0 1.69 1.7c1.51.4 7.91.4 7.91.4s6.4 0 7.91-.4a2.4 2.4 0 0 0 1.69-1.7A25 25 0 0 0 22 12a25 25 0 0 0-.4-3.8zM10 14.8V9.2l4.8 2.8z" />
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.4" cy="7.6" r="1" />
    </>
  ),
  linkedin: (
    <path d="M7.2 9.5H4.6V19h2.6zM5.9 5.4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19.4 19h-2.6v-4.6c0-1.1-.02-2.5-1.53-2.5s-1.77 1.2-1.77 2.42V19h-2.6V9.5h2.5v1.3h.04c.35-.66 1.2-1.36 2.47-1.36 2.64 0 3.13 1.74 3.13 4z" />
  ),
};

export function SocialIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
