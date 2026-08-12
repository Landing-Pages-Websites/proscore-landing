"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CTA } from "@/lib/content";
import { Icon } from "@/components/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_1px_12px_-6px_rgba(21,21,21,0.22)]"
          : "bg-white/90 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between gap-4 py-2.5 md:py-3">
        <a
          href="#hero"
          className="flex items-center rounded-md max-w-[190px] md:max-w-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)]"
          aria-label="ProScore home"
        >
          <Image
            src="/logo.png"
            alt="ProScore"
            width={1071}
            height={204}
            priority
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        <a
          href={CTA.formAnchor}
          className="inline-flex shrink-0 items-center gap-2 bg-[var(--color-lime)] text-[var(--color-ink)] hover:bg-[var(--color-lime-hover)] transition-colors rounded-lg px-3.5 sm:px-4 md:px-5 py-2 md:py-2.5 font-semibold text-sm shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] focus-visible:ring-offset-2"
        >
          <span className="sm:hidden">Free assessment</span>
          <span className="hidden sm:inline">{CTA.primary}</span>
          <Icon name="arrow" className="hidden sm:block w-3.5 h-3.5" strokeWidth={2.6} />
        </a>
      </div>
    </header>
  );
}
