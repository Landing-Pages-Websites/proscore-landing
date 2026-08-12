"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { FINAL_CTA } from "@/lib/content";

export function FinalCta() {
  return (
    <section
      id="final-cta"
      className="relative isolate overflow-hidden bg-[var(--color-ink)] py-20 md:py-28 text-white"
    >
      <div className="absolute inset-0 z-0 tex-grid opacity-30" aria-hidden="true" />
      <div className="absolute bottom-[-14rem] left-1/2 z-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[var(--color-lime)]/12 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 md:px-8 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="rule-lime" aria-hidden="true" />
            <p className="font-feature-numeral text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-white/60">
              {FINAL_CTA.eyebrow}
            </p>
          </div>
          <h2 className="mt-4 font-display text-[2.15rem] md:text-4xl lg:text-[2.9rem] leading-[1.08] text-white">
            {FINAL_CTA.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            {FINAL_CTA.body}
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/70">
            <Icon name="check" className="h-4 w-4 text-[var(--color-lime)]" strokeWidth={2.6} />
            Every request gets a response by email.
          </div>

          <DualCTA
            onDark
            primaryLabel="Get my free compliance assessment"
            secondaryHref="#faq"
            secondaryLabel="Read the FAQ"
          />
        </Reveal>
      </div>
    </section>
  );
}
