import { Reveal } from "@/components/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  intro?: string;
  align?: "start" | "center";
  onDark?: boolean;
  className?: string;
}

// Shared section header: lime rule + eyebrow, display heading, optional intro.
export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "start",
  onDark = false,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const headingColor = onDark ? "text-white" : "text-[var(--color-ink)]";
  const introColor = onDark ? "text-white/70" : "text-[var(--color-muted)]";
  const eyebrowColor = onDark ? "text-white/60" : "text-[var(--color-graphite)]";

  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="rule-lime" aria-hidden="true" />
        <p className={`font-feature-numeral text-[0.8125rem] font-bold uppercase tracking-[0.12em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      </div>
      <h2 className={`mt-4 font-display text-[2rem] md:text-4xl lg:text-[2.75rem] leading-[1.1] ${headingColor}`}>
        {heading}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${introColor}`}>{intro}</p>
      )}
    </Reveal>
  );
}
