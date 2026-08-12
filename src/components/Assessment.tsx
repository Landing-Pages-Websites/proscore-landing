"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { FormCard } from "@/components/FormCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";

const REASSURANCE = [
  "Open to anyone who submits. No screening, no application.",
  "A ProScore compliance specialist follows up by email.",
  "Built for IRA, OBBB, and Davis-Bacon projects.",
];

export function Assessment() {
  return (
    <section id="assessment" className="relative py-20 md:py-28 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Free compliance assessment"
          heading="Get your free compliance assessment."
          intro="Tell us where your projects stand today. We will show you how ProScore centralizes prevailing wage and apprenticeship tracking into one audit-ready system."
          align="center"
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Supporting image + reassurance */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl shadow-card-lg ring-1 ring-[var(--color-border)]">
              <Image
                src="/images/site-worker.jpg"
                alt="A ProScore worker in a hard hat and hi-vis vest standing in front of shipping containers on a project site"
                fill
                sizes="(min-width: 1024px) 46vw, 90vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/90 via-[var(--color-ink)]/40 to-transparent" />
              <ul className="relative z-10 space-y-3 p-6 md:p-8">
                {REASSURANCE.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-white">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-lime)] text-[var(--color-ink)]">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium leading-snug">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="order-1 lg:order-2">
            <FormCard
              idPrefix="assessment"
              eyebrow="Free compliance assessment"
              heading="Start your assessment"
              subheading="No cost, no obligation. Every request gets a response by email."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
