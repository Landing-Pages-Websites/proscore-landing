"use client";

import { useEffect, useState } from "react";
import { CTA } from "@/lib/content";
import { Icon } from "@/components/icons";

// Mobile sticky action bar, the assessment CTA, always one tap away. No phone.
export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`sm:hidden fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-white/95 backdrop-blur-md px-3 py-2.5 transition-all duration-300 [box-shadow:0_-6px_24px_-12px_rgba(21,21,21,0.3)] ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={CTA.formAnchor}
        className="inline-flex w-full items-center justify-center gap-2 bg-[var(--color-lime)] text-[var(--color-ink)] rounded-lg px-5 py-3 font-semibold text-sm shadow-cta"
      >
        {CTA.primaryLong}
        <Icon name="arrow" className="w-4 h-4" strokeWidth={2.6} />
      </a>
    </div>
  );
}
