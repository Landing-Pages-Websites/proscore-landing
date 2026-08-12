"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { EPCS } from "@/lib/content";

export function ForEpcs() {
  return (
    <section id="for-epcs" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow={EPCS.eyebrow}
              heading={EPCS.heading}
              intro={EPCS.body}
            />
            <ul className="mt-8 space-y-4">
              {EPCS.points.map((pt, i) => (
                <Reveal key={pt} delay={i * 80}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-lime)] text-[var(--color-ink)]">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-[var(--color-charcoal)]">{pt}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Image */}
          <Reveal className="order-first lg:order-last">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-card-lg ring-1 ring-[var(--color-border)]">
              <Image
                src="/images/field-helmet.jpg"
                alt={EPCS.imageAlt}
                fill
                sizes="(min-width: 1024px) 46vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <DualCTA secondaryHref="#expert-support" />
        </Reveal>
      </div>
    </section>
  );
}
