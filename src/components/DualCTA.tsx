"use client";

import { CTA } from "@/lib/content";
import { Icon } from "@/components/icons";

interface DualCTAProps {
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Use on dark bands, switches the text link to a light-on-dark style. */
  onDark?: boolean;
}

export function DualCTA({
  primaryLabel = CTA.primary,
  primaryHref = CTA.formAnchor,
  secondaryLabel = CTA.secondary,
  secondaryHref = "#platform",
  onDark = false,
}: DualCTAProps) {
  const linkClasses = onDark
    ? "text-white hover:text-[var(--color-lime)]"
    : "text-[var(--color-green-deep)] hover:text-[var(--color-charcoal)]";

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      <a
        href={primaryHref}
        className="inline-flex items-center gap-2 bg-[var(--color-lime)] text-[var(--color-ink)] hover:bg-[var(--color-lime-hover)] hover:-translate-y-0.5 active:translate-y-0 transition-all rounded-lg px-7 py-3.5 font-semibold text-base shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] focus-visible:ring-offset-2"
      >
        {primaryLabel}
        <Icon name="arrow" className="w-4 h-4" strokeWidth={2.6} />
      </a>
      <a
        href={secondaryHref}
        className={`group inline-flex items-center gap-1.5 font-semibold text-[15px] ${linkClasses} transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] rounded-md px-1`}
      >
        {secondaryLabel}
        <Icon
          name="arrow"
          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
          strokeWidth={2.4}
        />
      </a>
    </div>
  );
}
