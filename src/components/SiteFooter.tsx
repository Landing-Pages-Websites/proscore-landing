import Image from "next/image";
import { BRAND, CURRENT_YEAR } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[190px] md:max-w-none">
            <Image
              src="/logo-white.png"
              alt="ProScore"
              width={1071}
              height={204}
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>
          <p className="font-feature-numeral text-sm font-semibold uppercase tracking-[0.14em] text-white/45">
            {BRAND.tagline}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {CURRENT_YEAR} {BRAND.legal}. All rights reserved.</p>
          <p className="text-white/45">
            Compliance tracking for Prevailing Wage and Apprenticeship across IRA, OBBB, and Davis-Bacon projects.
          </p>
        </div>
      </div>
    </footer>
  );
}
