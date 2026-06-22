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
  const titleColor = dark ? "text-teal-deep" : "text-foreground";
  const introColor = dark ? "text-teal-deep/70" : "text-foreground/70";

  return (
    <div className={`flex max-w-3xl flex-col ${alignClass}`}>
      {eyebrow && (
        <Reveal direction="up">
          <span className="mb-4 text-xs font-light uppercase tracking-[0.35em] text-gold">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.05}>
        <h2 className={`font-serif text-3xl font-light leading-tight sm:text-4xl md:text-5xl ${titleColor}`}>
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
