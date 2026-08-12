// Site-wide content + config for ProScore, free compliance assessment LP.
// Single source of truth for copy, form options, and tracking IDs.
// Outbound-only customer: there is NO phone number anywhere on this page.

export const CTA = {
  primary: "Get my free assessment",
  primaryLong: "Get my free compliance assessment",
  secondary: "See how ProScore works",
  formAnchor: "#assessment",
};

export const BRAND = {
  company: "ProScore",
  legal: "ProScore Technologies",
  tagline: "Get Compliant. Faster.",
  positioning: "Where Compliance Becomes Performance",
};

export const CURRENT_YEAR = new Date().getFullYear();

// ─── Hero ───
export const HERO = {
  kicker: "Get Compliant. Faster.",
  h1: "Prevailing wage and apprenticeship compliance, tracked in one place.",
  subhead:
    "ProScore is a dedicated control layer for Prevailing Wage and Apprenticeship tracking across IRA, OBBB, and Davis-Bacon projects. Capture, validate, and keep every labor hour audit-ready with real-time dashboards and automated reporting.",
  chips: [
    "43 states supported",
    "10M+ labor hours processed",
    "$25B+ in funding protected",
    "IRA, OBBB & Davis-Bacon",
  ],
};

// ─── Trusted-by band (verbatim wording from proscore.ai) ───
export const TRUSTED_HEADING = "Powering the industry leaders";

export const TRUSTED_LOGOS: { slug: string; name: string }[] = [
  { slug: "arevon", name: "Arevon" },
  { slug: "avantus", name: "Avantus" },
  { slug: "blackrock", name: "BlackRock" },
  { slug: "brookfield", name: "Brookfield" },
  { slug: "carlisle", name: "Carlisle" },
  { slug: "clearway", name: "Clearway Energy" },
  { slug: "cypress-creek", name: "Cypress Creek Renewables" },
  { slug: "edp", name: "EDP Renewables" },
  { slug: "first-solar", name: "First Solar" },
  { slug: "rwe", name: "RWE" },
  { slug: "totalenergies", name: "TotalEnergies" },
  { slug: "oxy", name: "Oxy" },
  { slug: "united-rentals", name: "United Rentals" },
];

// ─── The problem ───
export const PROBLEM = {
  eyebrow: "The compliance burden",
  heading: "Federal labor requirements were not built for spreadsheets.",
  intro:
    "Prevailing wage and apprenticeship rules decide whether your projects keep their tax credits and your milestone payments clear. Managing them by hand is where the exposure hides.",
  cards: [
    {
      id: "scattered-payroll",
      icon: "spreadsheet",
      title: "Certified payroll scattered everywhere",
      body: "Weekly certified payroll lives in a dozen spreadsheets, subcontractor emails, and PDFs that never quite agree. Reconciling wage determinations, fringe rates, and job classifications by hand takes days you do not have, and a single mismatched line can put a credit in question. When the numbers live in different places, no one has a clean view of where a project actually stands.",
    },
    {
      id: "apprentice-ratios",
      icon: "ratio",
      title: "Apprentice ratios you cannot see in time",
      body: "IRA and Davis-Bacon apprenticeship rules turn on labor-hour ratios and journeyworker-to-apprentice math that shift every week across every craft. Tracking that after the fact means you learn you missed a threshold once the hours are already logged. By then the fix is a good-faith-effort filing, not a schedule adjustment, and the risk sits on the project.",
    },
    {
      id: "audit-exposure",
      icon: "shield-alert",
      title: "Audit exposure and stalled payments",
      body: "When a reviewer, an owner, or the Department of Labor asks for records, scrambling to assemble them is a signal in itself. Gaps surface late, progress and milestone payments stall while questions get answered, and every untracked hour is money left on the table. Legacy back data for projects already underway only widens the gap you have to close.",
    },
  ],
};

// ─── Platform ───
export const PLATFORM = {
  eyebrow: "The platform",
  heading: "One control layer for prevailing wage and apprenticeship.",
  body: "Stop managing federal requirements in spreadsheets and start using a dedicated control layer for your whole portfolio. ProScore centralizes payroll, apprenticeship, and compliance records into one system built for audit-ready results.",
  bullets: [
    {
      icon: "activity",
      title: "Real-time dashboards",
      body: "See wage-determination coverage, apprentice ratios, and labor-hour totals update as the data comes in, across every project in your portfolio.",
    },
    {
      icon: "file-check",
      title: "Automated reporting",
      body: "Turn validated labor hours into certified payroll and compliance reporting without rebuilding a spreadsheet every week.",
    },
    {
      icon: "database",
      title: "Centralized records",
      body: "Bring payroll, apprenticeship, and compliance records into one place so a request for records is a query, not a fire drill.",
    },
  ],
  imageAlt:
    "A ProScore field worker in a hi-vis vest reviewing the ProScore compliance dashboard on a tablet in a truck cab, with a solar field visible through the windshield",
};

// ─── Faster payments (the money angle) ───
export const PAYMENTS = {
  eyebrow: "The business case",
  heading: "Move compliance from a cost center to a profit center.",
  body: "Every untracked hour is money left on the table. When prevailing wage and apprenticeship data is validated as it comes in, certified payroll clears faster, milestone reviews move without the back-and-forth, and progress payments are not held hostage to a records request.",
  points: [
    {
      icon: "trending",
      title: "Faster progress and milestone payments",
      body: "Clean, validated records mean owner and lender reviews have less to question, so the paperwork that gates a payment moves through instead of stalling.",
    },
    {
      icon: "credit",
      title: "Protect the tax credits you earned",
      body: "IRA and OBBB bonus credits depend on meeting prevailing wage and apprenticeship requirements. Tracking them in real time is designed to surface gaps before they cost you.",
    },
    {
      icon: "layers",
      title: "One view across the portfolio",
      body: "Roll every project up into a single picture so leadership can see compliance and cash-flow risk together, not project by project.",
    },
  ],
};

// ─── Workforce + apprenticeship (CEO quote lives here) ───
export const WORKFORCE = {
  eyebrow: "Workforce & apprenticeship",
  heading: "Workforce development and compliance in one system.",
  body: "Apprenticeship is not just a compliance line, it is how the industry builds the workforce it needs. ProScore keeps apprenticeship tracking alongside your compliance records so ratios, hours, and program participation live in the same place as the rest of the project.",
  quote:
    "We help people get started, stay supported, move through training, and build something lasting for themselves and their families.",
  quoteAttribution: "Britt Hager, CEO, ProScore",
  imageAlt:
    "A crew in hard hats and hi-vis gathered around an on-site, hands-on training session",
};

// ─── For EPCs and developers ───
export const EPCS = {
  eyebrow: "For EPCs & developers",
  heading: "Oversight across every project and contractor.",
  body: "Whether you are preparing legacy data for audit or securing new projects, ProScore gives EPCs and developers a portfolio view of prevailing wage and apprenticeship compliance across contractors and subcontractors, so you can hold the whole book of work to one standard.",
  points: [
    "Roll subcontractor certified payroll into one portfolio view instead of chasing it project by project.",
    "Bring legacy back data into a structured, audit-ready record for projects already underway.",
    "Give owners and lenders a clear, current picture of compliance across the portfolio.",
  ],
  imageAlt:
    "A ProScore-branded hard hat resting on a stump with a work truck and open land behind it in golden daylight",
};

// ─── Expert support ───
export const SUPPORT = {
  eyebrow: "Managed & advisory services",
  heading: "Software, and the people who know the rules.",
  body: "ProScore is not just software. Real people help teams get started, stay supported, and move through the requirements, so prevailing wage and apprenticeship compliance is something your team can actually run.",
  points: [
    {
      icon: "rocket",
      title: "Get started fast",
      body: "Onboarding help to stand up your projects, import records, and get your team working in the platform.",
    },
    {
      icon: "headset",
      title: "Stay supported",
      body: "Ongoing support from people who understand IRA, OBBB, and Davis-Bacon, not a generic ticket queue.",
    },
    {
      icon: "compass",
      title: "Advisory when it counts",
      body: "Guidance through the requirements and audit preparation, so a hard question has an answer before it is asked.",
    },
  ],
  imageAlt:
    "A ProScore crew member in a hi-vis vest carrying a hard hat on a work site",
};

// ─── Proof (verified stats + news) ───
export const PROOF = {
  eyebrow: "The proof",
  heading: "Trusted on the projects building the energy transition.",
  stats: [
    { value: "10M+", label: "Labor hours processed" },
    { value: "300", label: "Partners across projects" },
    { value: "43", label: "States actively supported" },
    { value: "10 GW", label: "Infrastructure projects supported" },
    { value: "$25B+", label: "In funding protected" },
  ],
  news: [
    {
      title: "Moss",
      body: "ProScore closed a contract with top solar EPC Moss.",
    },
    {
      title: "Qcells",
      body: "A strategic partnership with Qcells makes the ProScore platform the system of record for Qcells project teams.",
    },
    {
      title: "United Rentals",
      body: "A workforce-development partnership with United Rentals and United Academy expands access to standardized, portable operator credentials.",
    },
  ],
};

// ─── FAQ ───
export const FAQ = [
  {
    q: "What does the free compliance assessment include?",
    a: "A working review of how your prevailing wage and apprenticeship compliance is tracked today, where the gaps and audit exposure sit, and how ProScore would centralize payroll, apprenticeship, and compliance records into one audit-ready system. You will see the platform mapped to your projects. There is no cost and no obligation.",
  },
  {
    q: "Who is the assessment for?",
    a: "Contractors, EPCs, and developers on IRA, OBBB, and Davis-Bacon projects, and the compliance managers and workforce-management leads who own these requirements. It is open to anyone who submits the form. It is not an application and there is no screening.",
  },
  {
    q: "How does ProScore handle IRA, OBBB, and Davis-Bacon at the same time?",
    a: "ProScore is a single control layer built for Prevailing Wage and Apprenticeship tracking across all three. Wage determinations, fringe rates, job classifications, and apprenticeship ratios are tracked in one place, so a project running under more than one framework does not mean more than one spreadsheet.",
  },
  {
    q: "What happens to our legacy or back data?",
    a: "Whether you are preparing legacy data for audit or securing new projects, ProScore is built to bring existing records into a structured, audit-ready format. During the assessment we walk through how your back data for projects already underway would come into the system.",
  },
  {
    q: "How does apprenticeship ratio tracking work?",
    a: "ProScore tracks labor hours and journeyworker-to-apprentice ratios as the data comes in, across crafts and projects, so ratios are visible in real time rather than reconstructed after the hours are logged. Apprenticeship tracking lives alongside your compliance records in the same system.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Every submission is routed to a ProScore compliance specialist who will follow up by email to schedule your assessment. There is no wrong answer on the form, and every request gets a response.",
  },
];

// ─── Final CTA ───
export const FINAL_CTA = {
  eyebrow: "Get started",
  heading: "See your compliance exposure before an auditor does.",
  body: "Get a free compliance assessment and see how ProScore centralizes prevailing wage and apprenticeship tracking across your portfolio. A compliance specialist follows up by email. Every request gets a response.",
};

// ─── Form select options (wired exactly to the FormCard contract) ───
// QUALIFYING options gate the qualified_lead optimization event only.
// They never block routing and never show a disqualified state.
export const COMPLIANCE_TIMELINE_OPTIONS: {
  value: string;
  qualifying: boolean;
}[] = [
  { value: "Right now / actively on a project", qualifying: true },
  { value: "Within the next 3 months", qualifying: true },
  { value: "Beyond 3 months", qualifying: false },
  { value: "Just researching", qualifying: false },
];

// ─── Mega tracking, real ProScore IDs. NO Meta Pixel (Google-only launch). ───
export const TRACKING = {
  siteKey: "9qirwolo309v37wn",
  siteId: "0b9272f3-f341-4d84-952e-0f4927d4eb89",
  gtmId: "GTM-P7JPFD6S",
};

// Mega submission API expects snake_case keys: customer_id, site_id, source_provider.
// customerId and siteId are DIFFERENT values, never set them equal.
export const FORM = {
  customerId: "24e514a1-db16-48f9-b20a-3da230459cf2",
  siteId: "0b9272f3-f341-4d84-952e-0f4927d4eb89",
  sourceProvider: "proscore-landing",
  // snake_case mirrors for documentation + lint visibility:
  customer_id: "24e514a1-db16-48f9-b20a-3da230459cf2",
  site_id: "0b9272f3-f341-4d84-952e-0f4927d4eb89",
};
