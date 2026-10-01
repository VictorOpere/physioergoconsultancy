"use client";

import { useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { areasOfInterest, site } from "@/lib/content";

type FieldName =
  | "fullName"
  | "organization"
  | "email"
  | "phone"
  | "interest"
  | "message";

type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const initialValues: Values = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.organization.trim()) {
    errors.organization = "Please enter your organisation.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your work email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.interest) {
    errors.interest = "Please choose an area of interest.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us a little about your needs.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please provide a little more detail (at least 20 characters).";
  }

  return errors;
}

const fieldClass =
  "w-full rounded-2xl border bg-surface px-4 py-3.5 text-[0.97rem] text-ink transition-colors duration-200 placeholder:text-ink-soft/70 focus:outline-none focus-visible:border-leaf-600";

export function ContactForm() {
  const baseId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const fieldId = (name: FieldName) => `${baseId}-${name}`;
  const errorId = (name: FieldName) => `${baseId}-${name}-error`;

  const update = (name: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (submitted) {
      setErrors(validate({ ...values, [name]: value }));
    }
  };

  const describedBy = (name: FieldName) =>
    errors[name] ? errorId(name) : undefined;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0] as FieldName | undefined;
    if (firstError) {
      setStatus("idle");
      formRef.current
        ?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstError))}`)
        ?.focus();
      return;
    }

    // No backend is connected, so the enquiry is handed to the visitor's mail client.
    setStatus("success");
  };

  const mailtoHref = `${site.emailHref}?subject=${encodeURIComponent(
    `Consultation request — ${values.interest || "General Enquiry"}`,
  )}&body=${encodeURIComponent(
    [
      `Name: ${values.fullName}`,
      `Organisation: ${values.organization}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "—"}`,
      `Area of interest: ${values.interest}`,
      "",
      values.message,
    ].join("\n"),
  )}`;

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-panel border border-leaf-200 bg-leaf-50 p-8 text-center sm:p-12"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leaf-700 text-canvas">
          <Icon name="check" size={26} strokeWidth={2} />
        </span>
        <h3 className="text-subsection mt-6 text-ink">
          Thank you, {values.fullName.split(" ")[0]}.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          Your details are ready to send. Choose the button below to open the
          message in your email app, and the PhysioErgo team will respond
          directly.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2.5 rounded-full bg-leaf-700 px-7 py-3.5 font-semibold text-canvas shadow-soft transition-colors duration-200 hover:bg-leaf-800"
          >
            <Icon name="mail" size={18} />
            Send Your Enquiry
          </a>
          <button
            type="button"
            onClick={() => {
              setValues(initialValues);
              setErrors({});
              setSubmitted(false);
              setStatus("idle");
            }}
            className="inline-flex items-center rounded-full border border-leaf-300 px-7 py-3.5 font-semibold text-ink transition-colors duration-200 hover:bg-leaf-100"
          >
            Start a New Enquiry
          </button>
        </div>
      </div>
    );
  }

  const hasErrors = submitted && Object.keys(errors).length > 0;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-panel border border-line bg-surface p-7 shadow-soft sm:p-9"
    >
      <p aria-live="polite" className="sr-only">
        {hasErrors
          ? `The form has ${Object.keys(errors).length} field${
              Object.keys(errors).length === 1 ? "" : "s"
            } that need attention.`
          : ""}
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="fullName"
          value={values.fullName}
          error={errors.fullName}
          onChange={update}
          id={fieldId("fullName")}
          errorId={errorId("fullName")}
          describedBy={describedBy("fullName")}
          autoComplete="name"
          required
        />
        <Field
          label="Organization"
          name="organization"
          value={values.organization}
          error={errors.organization}
          onChange={update}
          id={fieldId("organization")}
          errorId={errorId("organization")}
          describedBy={describedBy("organization")}
          autoComplete="organization"
          required
        />
        <Field
          label="Work Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={update}
          id={fieldId("email")}
          errorId={errorId("email")}
          describedBy={describedBy("email")}
          autoComplete="email"
          required
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={update}
          id={fieldId("phone")}
          errorId={errorId("phone")}
          describedBy={describedBy("phone")}
          autoComplete="tel"
          optional
        />

        <div className="sm:col-span-2">
          <label
            htmlFor={fieldId("interest")}
            className="mb-2 block text-[0.86rem] font-semibold tracking-[0.02em] text-ink"
          >
            Area of Interest
          </label>
          <select
            id={fieldId("interest")}
            name="interest"
            value={values.interest}
            onChange={(event) => update("interest", event.target.value)}
            aria-invalid={errors.interest ? true : undefined}
            aria-describedby={describedBy("interest")}
            className={`${fieldClass} appearance-none ${
              errors.interest ? "border-red-700" : "border-line"
            }`}
          >
            <option value="">Select an area…</option>
            {areasOfInterest.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          <FieldError id={errorId("interest")} message={errors.interest} />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={fieldId("message")}
            className="mb-2 block text-[0.86rem] font-semibold tracking-[0.02em] text-ink"
          >
            Message
          </label>
          <textarea
            id={fieldId("message")}
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={describedBy("message")}
            placeholder="Tell us about your workplace and what you would like to improve."
            className={`${fieldClass} resize-y ${
              errors.message ? "border-red-700" : "border-line"
            }`}
          />
          <FieldError id={errorId("message")} message={errors.message} />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          Request a Consultation
        </Button>
        <p className="text-[0.84rem] leading-relaxed text-ink-soft">
          Prefer email? Write to{" "}
          <a
            href={site.emailHref}
            className="font-medium text-leaf-700 underline underline-offset-4"
          >
            {site.email}
          </a>
        </p>
      </div>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-[0.83rem] font-medium text-red-700">
      {message}
    </p>
  );
}

interface FieldProps {
  label: string;
  name: FieldName;
  value: string;
  error?: string;
  onChange: (name: FieldName, value: string) => void;
  id: string;
  errorId: string;
  describedBy?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  id,
  errorId,
  describedBy,
  type = "text",
  autoComplete,
  optional = false,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[0.86rem] font-semibold tracking-[0.02em] text-ink"
      >
        {label}
        {optional ? (
          <span className="ml-1.5 font-normal text-ink-soft">(optional)</span>
        ) : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(name, event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`${fieldClass} ${error ? "border-red-700" : "border-line"}`}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}
