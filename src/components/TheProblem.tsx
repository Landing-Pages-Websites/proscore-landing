"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { PROBLEM } from "@/lib/content";

export function TheProblem() {
  return (
    <section id="the-problem" className="relative py-20 md:py-28 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={PROBLEM.eyebrow}
          heading={PROBLEM.heading}
          intro={PROBLEM.intro}
          className="max-w-3xl"
        />

        <Reveal delay={80}>
          <figure className="mt-12 relative aspect-[16/7] overflow-hidden rounded-2xl shadow-card-lg ring-1 ring-[var(--color-border)]">
            <Image
              src="/images/street-work.jpg"
              alt="A worker in a ProScore hi-vis vest performing daylight street infrastructure work near road-closed signage"
              fill
              sizes="(min-width: 1280px) 1152px, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 left-6 right-6 font-display text-lg md:text-xl font-semibold text-white">
              Davis-Bacon covers infrastructure too. The records still have to add up.
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {PROBLEM.cards.map((card, i) => (
            <Reveal key={card.id} delay={i * 90}>
              <article className="group h-full rounded-2xl bg-white border border-[var(--color-border)] p-7 shadow-card transition-all duration-200 hover:border-[var(--color-lime)] hover:shadow-card-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-ink)] text-[var(--color-lime)] transition-colors">
                  <Icon name={card.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-[var(--color-ink)]">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <DualCTA secondaryHref="#platform" />
        </Reveal>
      </div>
    </section>
  );
}
