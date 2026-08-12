"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { WORKFORCE } from "@/lib/content";

export function Workforce() {
  return (
    <section id="workforce" className="relative py-20 md:py-28 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-center">
          {/* Image */}
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card-lg ring-1 ring-[var(--color-border)]">
              <Image
                src="/images/crew-training.jpg"
                alt={WORKFORCE.imageAlt}
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Copy + quote */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={WORKFORCE.eyebrow}
              heading={WORKFORCE.heading}
              intro={WORKFORCE.body}
            />

            <Reveal delay={100}>
              <figure className="mt-8 rounded-2xl border border-[var(--color-border)] bg-white p-7 md:p-8 shadow-card">
                <Icon
                  name="quote"
                  className="h-8 w-8 text-[var(--color-lime)]"
                  strokeWidth={0}
                  fill="currentColor"
                />
                <blockquote className="mt-4 font-display text-xl md:text-2xl leading-snug text-[var(--color-ink)]">
                  &ldquo;{WORKFORCE.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 text-sm">
                  <span className="h-9 w-1 rounded-full bg-[var(--color-lime)]" aria-hidden="true" />
                  <span className="font-semibold text-[var(--color-charcoal)]">
                    {WORKFORCE.quoteAttribution}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <Reveal delay={140}>
          <DualCTA secondaryHref="#for-epcs" />
        </Reveal>
      </div>
    </section>
  );
}
