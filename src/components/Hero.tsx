"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { FormCard } from "@/components/FormCard";
import { Icon } from "@/components/icons";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-white pt-20 md:pt-28 pb-14 md:pb-24"
    >
      {/* Background photo, visible on the right, whited-out under the copy */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-solar-site.jpg"
          alt="A ProScore hard hat resting on a steel beam with a solar array and active construction site behind it in bright daylight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        {/* Desktop: opaque white on the left fading to clear over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/25 lg:via-white/80 lg:to-transparent" />
        {/* Mobile: extra light wash keeps dark copy legible over the photo */}
        <div className="absolute inset-0 bg-white/45 lg:hidden" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-x-14 lg:gap-y-8 lg:items-center">
        {/* Kicker + headline, first on every breakpoint */}
        <div className="order-1 lg:col-start-1 lg:row-start-1 lg:self-end">
          <Reveal className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="rule-lime" aria-hidden="true" />
              <p className="font-feature-numeral text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-green-deep)]">
                {HERO.kicker}
              </p>
            </div>
            <h1 className="font-display font-extrabold text-[var(--color-ink)] leading-[1.06] tracking-[-0.02em] text-[2.1rem] sm:text-5xl lg:text-[3.4rem]">
              {HERO.h1}
            </h1>
          </Reveal>
        </div>

        {/* Form, right column on desktop, spans both copy rows */}
        <div className="order-2 w-full max-w-md lg:max-w-none lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-self-end">
          <Reveal delay={120}>
            <FormCard
              idPrefix="hero"
              eyebrow="Free compliance assessment"
              heading="Get compliant. Faster."
              subheading="Tell us where your projects stand. A ProScore compliance specialist follows up by email. No cost, no obligation."
            />
          </Reveal>
        </div>

        {/* Subhead + trust chips, below the form on mobile, under the H1 on desktop */}
        <div className="order-3 lg:col-start-1 lg:row-start-2 lg:self-start">
          <Reveal className="space-y-6">
            <p className="max-w-xl text-base md:text-lg leading-relaxed text-[var(--color-muted)]">
              {HERO.subhead}
            </p>
            <ul className="flex flex-wrap gap-2">
              {HERO.chips.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--color-charcoal)] shadow-[0_1px_2px_rgba(21,21,21,0.05)]"
                >
                  <Icon
                    name="check"
                    className="w-3.5 h-3.5 text-[var(--color-green-deep)]"
                    strokeWidth={2.8}
                  />
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
