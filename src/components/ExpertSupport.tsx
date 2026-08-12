"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { SUPPORT } from "@/lib/content";

export function ExpertSupport() {
  return (
    <section id="expert-support" className="relative py-20 md:py-28 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-center">
          {/* Image */}
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card-lg ring-1 ring-[var(--color-border)]">
              <Image
                src="/images/crew-member.jpg"
                alt={SUPPORT.imageAlt}
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Copy + points */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={SUPPORT.eyebrow}
              heading={SUPPORT.heading}
              intro={SUPPORT.body}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {SUPPORT.points.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <article className="h-full rounded-xl border border-[var(--color-border)] bg-white p-5 shadow-card">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-ink)] text-[var(--color-lime)]">
                      <Icon name={p.icon} className="h-5 w-5" strokeWidth={1.9} />
                    </div>
                    <h3 className="mt-4 font-display text-[1.05rem] text-[var(--color-ink)]">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{p.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={140}>
          <DualCTA secondaryHref="#proof" />
        </Reveal>
      </div>
    </section>
  );
}
