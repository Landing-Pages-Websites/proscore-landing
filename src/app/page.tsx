"use client";

import { useTracking } from "@/hooks/useTracking";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { TheProblem } from "@/components/TheProblem";
import { Platform } from "@/components/Platform";
import { FasterPayments } from "@/components/FasterPayments";
import { Workforce } from "@/components/Workforce";
import { ForEpcs } from "@/components/ForEpcs";
import { ExpertSupport } from "@/components/ExpertSupport";
import { Proof } from "@/components/Proof";
import { Faq } from "@/components/Faq";
import { Assessment } from "@/components/Assessment";
import { FinalCta } from "@/components/FinalCta";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingCTA } from "@/components/FloatingCTA";
import { TRACKING } from "@/lib/content";

export default function Page() {
  useTracking({
    siteKey: TRACKING.siteKey,
    siteId: TRACKING.siteId,
    gtmId: TRACKING.gtmId,
  });

  return (
    <main className="overflow-x-hidden bg-white">
      <QueryParamPersistence />
      <Header />
      <Hero />
      <TrustedBy />
      <TheProblem />
      <Platform />
      <FasterPayments />
      <Workforce />
      <ForEpcs />
      <ExpertSupport />
      <Proof />
      <Faq />
      <Assessment />
      <FinalCta />
      <SiteFooter />
      <FloatingCTA />
    </main>
  );
}
