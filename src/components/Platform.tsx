"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { PLATFORM } from "@/lib/content";

export function Platform() {
  return (
    <section id="platform" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Image */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card-lg ring-1 ring-[var(--color-border)]">
              <Image
                src="/images/field-dashboard.jpg"
                alt={PLATFORM.imageAlt}
                fill
                sizes="(min-width: 1024px) 46vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow={PLATFORM.eyebrow}
              heading={PLATFORM.heading}
              intro={PLATFORM.body}
            />
            <ul className="mt-8 space-y-5">
              {PLATFORM.bullets.map((b, i) => (
                <Reveal key={b.title} delay={i * 80}>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-green-deep)]">
                      <Icon name={b.icon} className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-[var(--color-ink)]">{b.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-[var(--color-muted)]">
                        {b.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={120}>
          <DualCTA secondaryHref="#faster-payments" />
        </Reveal>
      </div>
    </section>
  );
}
