"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { PAYMENTS } from "@/lib/content";

export function FasterPayments() {
  return (
    <section
      id="faster-payments"
      className="relative isolate overflow-hidden bg-[var(--color-ink)] py-20 md:py-28 text-white"
    >
      <div className="absolute inset-0 z-0 tex-grid opacity-40" aria-hidden="true" />
      <div className="absolute top-[-12rem] right-[-12rem] z-0 h-[30rem] w-[30rem] rounded-full bg-[var(--color-lime)]/12 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={PAYMENTS.eyebrow}
          heading={PAYMENTS.heading}
          intro={PAYMENTS.body}
          onDark
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PAYMENTS.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-white/12 bg-white/[0.04] p-7 transition-colors hover:border-[var(--color-lime)]/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-lime)] text-[var(--color-ink)]">
                  <Icon name={p.icon} className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-xl text-white">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <DualCTA onDark secondaryHref="#workforce" />
        </Reveal>
      </div>
    </section>
  );
}
