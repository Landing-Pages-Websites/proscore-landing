"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { FAQ } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Before you request your assessment"
          heading="Questions compliance teams ask us."
          align="center"
        />

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div
                  className={`rounded-xl border transition-colors ${
                    isOpen
                      ? "border-[var(--color-lime)] bg-white shadow-card"
                      : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-lime)]/60"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 p-5 md:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] rounded-xl"
                    >
                      <span className="font-display text-lg md:text-xl leading-snug text-[var(--color-ink)]">
                        {item.q}
                      </span>
                      <Icon
                        name="plus"
                        className={`mt-1 h-5 w-5 shrink-0 text-[var(--color-green-deep)] transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={2.2}
                      />
                    </button>
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-6 text-[15px] leading-relaxed text-[var(--color-muted)]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <DualCTA secondaryHref="#platform" />
        </Reveal>
      </div>
    </section>
  );
}
