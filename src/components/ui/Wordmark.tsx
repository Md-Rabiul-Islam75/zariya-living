/**
 * Text-based Zariya wordmark — used in the navbar and footer so the logo stays
 * crisp on the dark teal background (the PNG logo blends into it).
 *
 *   ZARIYA
 *   ------
 *   LIVING
 */
export function Wordmark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const scale = {
    sm: { z: "text-lg", l: "text-[0.5rem]" },
    md: { z: "text-2xl", l: "text-[0.6rem]" },
    lg: { z: "text-4xl", l: "text-[0.8rem]" },
  }[size];

  return (
    <span className={`inline-flex flex-col items-center leading-none text-gold ${className}`}>
      <span className={`font-serif font-light tracking-[0.3em] pl-[0.3em] ${scale.z}`}>
        ZARIYA
      </span>
      <span className="mt-1.5 mb-1 h-px w-full bg-current opacity-50" />
      <span className={`font-sans font-light tracking-[0.45em] pl-[0.45em] ${scale.l}`}>
        LIVING
      </span>
    </span>
  );
}
