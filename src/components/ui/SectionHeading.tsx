import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = dark ? "text-ink" : "text-foreground";
  const introColor = dark ? "text-ink/80" : "text-foreground/85";

  return (
    <div className={`flex max-w-3xl flex-col ${alignClass}`}>
      {eyebrow && (
        <Reveal direction="up">
          <span className={`mb-4 text-sm uppercase tracking-[0.35em] text-gold ${dark ? "font-semibold" : "font-light"}`}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.05}>
        <h2
          className={`font-serif text-3xl leading-tight sm:text-4xl md:text-5xl ${dark ? "font-medium" : "font-light"} ${titleColor}`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal direction="up" delay={0.1}>
          <p className={`mt-5 text-base font-light leading-relaxed md:text-lg ${introColor}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
