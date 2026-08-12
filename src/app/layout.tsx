import type { Metadata } from "next";
import { Roboto, Poppins, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-display-active",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-active",
  display: "swap",
});

const feature = DM_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-feature-active",
  display: "swap",
});

// === MEGA TAG CONFIG === (real ProScore values, Google-only launch, so NO pixelId)
const SITE_KEY = "9qirwolo309v37wn";
const SITE_ID = "0b9272f3-f341-4d84-952e-0f4927d4eb89";
const GTM_ID = "GTM-P7JPFD6S";

export const metadata: Metadata = {
  metadataBase: new URL("https://go.proscore.ai"),
  title:
    "ProScore: Free Compliance Assessment for Prevailing Wage & Apprenticeship | IRA, OBBB, Davis-Bacon",
  description:
    "ProScore is a dedicated control layer for Prevailing Wage and Apprenticeship tracking across IRA, OBBB, and Davis-Bacon projects. Centralize certified payroll, apprenticeship, and compliance records for audit-ready results. Get a free compliance assessment.",
  openGraph: {
    title: "ProScore: Get Compliant. Faster.",
    description:
      "One control layer for prevailing wage and apprenticeship tracking across IRA, OBBB, and Davis-Bacon. Real-time dashboards, automated reporting, and centralized audit-ready records. Get a free compliance assessment.",
    images: ["/images/hero-solar-site.jpg"],
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: { index: false, follow: false }, // paid-ads LP, not indexed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const megaTagConfig = `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}",gtmId:"${GTM_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`;

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${feature.variable}`}
    >
      <head>
        <meta name="mega-site-id" content={SITE_ID} />
        <script
          id="mega-tag-config"
          dangerouslySetInnerHTML={{ __html: megaTagConfig }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={SITE_ID}
          async
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        {children}
        {/* CallTrackingMetrics, universal Mega account (never remove) */}
        <Script
          src="https://572388.tctm.co/t.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
