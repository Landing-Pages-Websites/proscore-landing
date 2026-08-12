"use client";

import { useRef, useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import { CTA, COMPLIANCE_TIMELINE_OPTIONS } from "@/lib/content";
import { Icon } from "@/components/icons";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    MegaTag?: {
      trackEvent?: (event: string, payload?: Record<string, unknown>) => void;
    };
  }
}

// ─── Validation (inline per-field, no native tooltips) ───
const EMAIL_RE = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
// NANP: area code & exchange each start 2-9 and may not be an N11.
const NANP_RE = /^[2-9](?!11)\d{2}[2-9](?!11)\d{2}\d{4}$/;

type FieldKey = "firstName" | "lastName" | "email" | "phone" | "complianceTimeline";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  complianceTimeline: string;
  discussionTopic: string;
}

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  complianceTimeline: "",
  discussionTopic: "",
};

type FieldErrors = Partial<Record<FieldKey, string>>;

const REQUIRED_ORDER: FieldKey[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "complianceTimeline",
];

function validateField(key: FieldKey, value: string): string | undefined {
  switch (key) {
    case "firstName":
      return value.trim() ? undefined : "First name is required.";
    case "lastName":
      return value.trim() ? undefined : "Last name is required.";
    case "email": {
      const v = value.trim();
      if (!v) return "Email address is required.";
      if (!EMAIL_RE.test(v)) return "Please enter a valid email address.";
      return undefined;
    }
    case "phone": {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "Phone number is required.";
      if (digits.length !== 10) return "Please enter a valid 10-digit phone number.";
      if (!NANP_RE.test(digits)) return "Please enter a valid US phone number.";
      return undefined;
    }
    case "complianceTimeline":
      return value ? undefined : "Please choose a timeline.";
  }
}

function validateAll(data: FormState): FieldErrors {
  const errors: FieldErrors = {};
  REQUIRED_ORDER.forEach((k) => {
    const err = validateField(k, data[k]);
    if (err) errors[k] = err;
  });
  return errors;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (!digits) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isQualifying(timeline: string): boolean {
  return COMPLIANCE_TIMELINE_OPTIONS.some(
    (o) => o.value === timeline && o.qualifying
  );
}

interface FormCardProps {
  idPrefix?: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  submitLabel?: string;
  routeSlug?: string;
  thankYouBody?: string;
}

export function FormCard({
  idPrefix = "hero",
  eyebrow = "Free compliance assessment",
  heading = "See your compliance exposure",
  subheading = "No cost, no obligation. A ProScore compliance specialist follows up by email.",
  submitLabel = CTA.primaryLong,
  routeSlug,
  thankYouBody = "Your request is in. A ProScore compliance specialist will follow up by email to schedule your free compliance assessment, built around your projects.",
}: FormCardProps) {
  const { submit } = useMegaLeadForm();

  const [data, setData] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Synchronous re-entrancy latch, blocks duplicate fires from rapid clicks
  // before React re-renders with the disabled state.
  const inFlightRef = useRef(false);
  const fieldRefs = useRef<Partial<Record<FieldKey, HTMLElement | null>>>({});

  const update = (k: keyof FormState, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((prev) => {
      if (!(k in prev)) return prev;
      const key = k as FieldKey;
      if (!prev[key] || validateField(key, v)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const markTouched = (k: FieldKey, currentValue: string) => {
    setTouched((t) => ({ ...t, [k]: true }));
    const err = validateField(k, currentValue);
    setErrors((prev) => {
      const next = { ...prev };
      if (err) next[k] = err;
      else delete next[k];
      return next;
    });
  };

  const fireTracking = (leadTier: "qualified" | "nurture", route: string) => {
    if (typeof window === "undefined") return;
    const base = { form_route: route, lead_tier: leadTier };
    // Mega optimizer event FIRST, then the GTM dataLayer signal.
    window.MegaTag?.trackEvent?.("form_submit", base);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "form_submit", ...base });
    // Qualified-lead optimization event only for qualifying timelines.
    if (leadTier === "qualified") {
      window.MegaTag?.trackEvent?.("qualified_lead", base);
      window.dataLayer.push({ event: "qualified_lead", ...base });
    }
  };

  const focusFirstBad = (allErrors: FieldErrors) => {
    const firstBad = REQUIRED_ORDER.find((k) => allErrors[k]);
    if (!firstBad) return;
    const el = fieldRefs.current[firstBad];
    try {
      el?.focus({ preventScroll: false });
    } catch {
      el?.focus();
    }
  };

  // Validate FIRST, then submit. Button is type="button" so the optimizer's
  // capture-phase listener never fires on empty/invalid clicks.
  const handleValidateAndSubmit = async () => {
    if (inFlightRef.current || submitting || submitted) return;
    const allErrors = validateAll(data);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        complianceTimeline: true,
      });
      focusFirstBad(allErrors);
      return;
    }
    inFlightRef.current = true;
    setSubmitting(true);
    const qualifying = isQualifying(data.complianceTimeline);
    const leadTier: "qualified" | "nurture" = qualifying ? "qualified" : "nurture";
    const route =
      routeSlug ||
      (typeof window !== "undefined" ? window.location.pathname : "/");
    try {
      await submit({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim(),
        phone: data.phone.replace(/\D/g, ""),
        complianceTimeline: data.complianceTimeline,
        discussionTopic: data.discussionTopic.trim(),
        leadTier,
        route_slug: route,
      });
      fireTracking(leadTier, route);
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      // Still fire tracking + show thank-you so the user isn't stranded.
      fireTracking(leadTier, route);
      setSubmitted(true);
    } finally {
      inFlightRef.current = false;
      setSubmitting(false);
    }
  };

  const cardBase = "bg-white border border-[var(--color-border)] shadow-card-lg";

  if (submitted) {
    return (
      <div className={`${cardBase} rounded-2xl p-8 md:p-10`}>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[var(--color-lime)]/15">
            <Icon name="check" className="w-7 h-7 text-[var(--color-green-deep)]" strokeWidth={2.6} />
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-charcoal)]">
            Assessment request received.
          </h3>
          <p className="text-[var(--color-muted)] text-base leading-relaxed">
            {thankYouBody}
          </p>
        </div>
      </div>
    );
  }

  const showErr = (k: FieldKey) => Boolean(touched[k] && errors[k]);
  const errId = (k: FieldKey) => `${idPrefix}-${k}-error`;
  const fieldCls =
    "w-full rounded-lg px-3.5 py-2.5 text-sm bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-charcoal)] placeholder:text-[var(--color-muted-soft)] transition-colors focus:outline-none focus:border-[var(--color-green-deep)] focus:ring-2 focus:ring-[var(--color-lime)]/45";
  const inputCls = (k: FieldKey) => `${fieldCls} ${showErr(k) ? "lp-input-error" : ""}`;

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      noValidate
      aria-label="Request a free ProScore compliance assessment"
      className={`${cardBase} rounded-2xl p-6 md:p-7 space-y-3.5`}
    >
      <div className="space-y-1.5 mb-1">
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="font-display text-xl md:text-[1.6rem] leading-tight text-[var(--color-charcoal)]">
          {heading}
        </h3>
        <p className="text-sm text-[var(--color-muted)] leading-snug">{subheading}</p>
      </div>

      {/* First / Last */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`${idPrefix}-firstName`} className="sr-only">First name</label>
          <input
            ref={(el) => { fieldRefs.current.firstName = el; }}
            id={`${idPrefix}-firstName`}
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="First name"
            value={data.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            onBlur={(e) => markTouched("firstName", e.target.value)}
            className={inputCls("firstName")}
            aria-invalid={showErr("firstName") || undefined}
            aria-describedby={showErr("firstName") ? errId("firstName") : undefined}
            disabled={submitting}
          />
          {showErr("firstName") && (
            <p id={errId("firstName")} role="alert" aria-live="polite" className="lp-field-error">
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${idPrefix}-lastName`} className="sr-only">Last name</label>
          <input
            ref={(el) => { fieldRefs.current.lastName = el; }}
            id={`${idPrefix}-lastName`}
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Last name"
            value={data.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            onBlur={(e) => markTouched("lastName", e.target.value)}
            className={inputCls("lastName")}
            aria-invalid={showErr("lastName") || undefined}
            aria-describedby={showErr("lastName") ? errId("lastName") : undefined}
            disabled={submitting}
          />
          {showErr("lastName") && (
            <p id={errId("lastName")} role="alert" aria-live="polite" className="lp-field-error">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor={`${idPrefix}-email`} className="sr-only">Work email</label>
        <input
          ref={(el) => { fieldRefs.current.email = el; }}
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          required
          pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}"
          autoComplete="email"
          placeholder="Work email"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          onBlur={(e) => markTouched("email", e.target.value)}
          className={inputCls("email")}
          aria-invalid={showErr("email") || undefined}
          aria-describedby={showErr("email") ? errId("email") : undefined}
          disabled={submitting}
        />
        {showErr("email") && (
          <p id={errId("email")} role="alert" aria-live="polite" className="lp-field-error">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone (visitor's own number, required) */}
      <div>
        <label htmlFor={`${idPrefix}-phone`} className="sr-only">Phone number</label>
        <input
          ref={(el) => { fieldRefs.current.phone = el; }}
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          required
          inputMode="numeric"
          pattern="\(\d{3}\) \d{3}-\d{4}"
          autoComplete="tel"
          placeholder="Phone number"
          value={data.phone}
          onChange={(e) => update("phone", formatPhone(e.target.value))}
          onBlur={(e) => markTouched("phone", e.target.value)}
          className={inputCls("phone")}
          aria-invalid={showErr("phone") || undefined}
          aria-describedby={showErr("phone") ? errId("phone") : undefined}
          disabled={submitting}
        />
        {showErr("phone") && (
          <p id={errId("phone")} role="alert" aria-live="polite" className="lp-field-error">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Compliance timeline (required) */}
      <div>
        <label htmlFor={`${idPrefix}-complianceTimeline`} className="sr-only">
          When do you need compliance support?
        </label>
        <div className="relative">
          <select
            ref={(el) => { fieldRefs.current.complianceTimeline = el; }}
            id={`${idPrefix}-complianceTimeline`}
            name="complianceTimeline"
            required
            value={data.complianceTimeline}
            onChange={(e) => {
              update("complianceTimeline", e.target.value);
              markTouched("complianceTimeline", e.target.value);
            }}
            onBlur={(e) => markTouched("complianceTimeline", e.target.value)}
            className={`${inputCls("complianceTimeline")} appearance-none pr-9 ${data.complianceTimeline ? "" : "text-[var(--color-muted-soft)]"}`}
            aria-invalid={showErr("complianceTimeline") || undefined}
            aria-describedby={showErr("complianceTimeline") ? errId("complianceTimeline") : undefined}
            disabled={submitting}
          >
            <option value="">When do you need compliance support?</option>
            {COMPLIANCE_TIMELINE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} className="text-[var(--color-charcoal)]">
                {o.value}
              </option>
            ))}
          </select>
          <ChevronDown />
        </div>
        {showErr("complianceTimeline") && (
          <p id={errId("complianceTimeline")} role="alert" aria-live="polite" className="lp-field-error">
            {errors.complianceTimeline}
          </p>
        )}
      </div>

      {/* Discussion topic (optional, never blocks submit) */}
      <div>
        <label htmlFor={`${idPrefix}-discussionTopic`} className="sr-only">
          What would you like to discuss? (optional)
        </label>
        <textarea
          id={`${idPrefix}-discussionTopic`}
          name="discussionTopic"
          rows={3}
          placeholder="What would you like to discuss? (optional)"
          value={data.discussionTopic}
          onChange={(e) => update("discussionTopic", e.target.value)}
          className={`${fieldCls} resize-y min-h-[68px]`}
          disabled={submitting}
        />
      </div>

      <button
        type="button"
        onClick={handleValidateAndSubmit}
        disabled={submitting || submitted}
        className="mt-1 w-full rounded-lg px-6 py-3.5 font-semibold text-base bg-[var(--color-lime)] text-[var(--color-ink)] shadow-cta transition-all hover:bg-[var(--color-lime-hover)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
      >
        {submitting ? "Submitting…" : submitLabel}
        {!submitting && <Icon name="arrow" className="w-4 h-4" strokeWidth={2.6} />}
      </button>

      <p className="text-xs text-center leading-relaxed text-[var(--color-muted)]">
        No spam. We&apos;ll only use your details to arrange your assessment.
      </p>
    </form>
  );
}

function ChevronDown() {
  return (
    <svg
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
