"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { PROOF } from "@/lib/content";

export function Proof() {
  return (
    <section
      id="proof"
      className="relative isolate overflow-hidden bg-[var(--color-ink)] py-20 md:py-28 text-white"
    >
      <div className="absolute inset-0 z-0 tex-grid opacity-40" aria-hidden="true" />
      <div className="absolute bottom-[-12rem] left-[-12rem] z-0 h-[30rem] w-[30rem] rounded-full bg-[var(--color-lime)]/12 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={PROOF.eyebrow}
          heading={PROOF.heading}
          onDark
          align="center"
          className="max-w-3xl"
        />

        {/* Stat band */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-5">
          {PROOF.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 60}>
              <div className="flex h-full flex-col items-center justify-center bg-[var(--color-ink)] p-6 text-center">
                <p className="font-feature-numeral text-4xl md:text-[2.75rem] font-bold text-[var(--color-lime)] leading-none">
                  {stat.value}
                </p>
                <p className="mt-2.5 text-sm text-white/65 leading-snug">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* News proof points */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {PROOF.news.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-white/12 bg-white/[0.04] p-6">
                <p className="font-feature-numeral text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-lime)]">
                  {item.title}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <DualCTA onDark secondaryHref="#faq" />
        </Reveal>
      </div>
    </section>
  );
}
