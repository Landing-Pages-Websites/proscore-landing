"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { TRUSTED_HEADING, TRUSTED_LOGOS } from "@/lib/content";

// White-on-transparent PNGs → shown on the near-black ground so they read cleanly.
export function TrustedBy() {
  return (
    <section id="trusted-by" className="relative isolate overflow-hidden bg-[var(--color-ink)] py-14 md:py-16">
      <div className="absolute inset-0 z-0 tex-grid opacity-40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-feature-numeral text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/55">
            {TRUSTED_HEADING}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 grid grid-cols-2 items-center gap-x-6 gap-y-9 sm:grid-cols-3 md:gap-x-10 lg:grid-cols-5 xl:grid-cols-7">
            {TRUSTED_LOGOS.map(({ slug, name }) => (
              <li key={slug} className="flex items-center justify-center">
                <Image
                  src={`/logos/${slug}.png`}
                  alt={name}
                  width={200}
                  height={80}
                  sizes="(min-width: 1280px) 130px, (min-width: 1024px) 150px, (min-width: 640px) 22vw, 40vw"
                  className="h-7 md:h-8 w-auto max-w-[130px] object-contain opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <DualCTA onDark secondaryHref="#platform" />
        </Reveal>
      </div>
    </section>
  );
}
