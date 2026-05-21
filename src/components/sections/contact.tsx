"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FadeInSection } from "@/components/fade-in-section";
import { Container } from "@/components/container";

const matterTypes = [
  "Civil Litigation",
  "Family Law",
  "Criminal Defense",
  "Corporate & Contracts",
  "Local Government & Administrative Law",
  "Legal Aid & Pro Bono",
] as const;

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  matterType: z.enum(matterTypes, { message: "Please select a matter type" }),
  description: z
    .string()
    .min(20, "Please provide at least 20 characters")
    .max(1000, "Maximum 1000 characters"),
  consent: z.boolean().refine((v) => v === true, "You must acknowledge this to proceed"),
});

type FormData = z.infer<typeof schema>;

function FieldRow({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-5 border-b border-border">
      <div className="pt-0.5">
        <p className="font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {label}
          {hint && <span className="normal-case tracking-normal ml-1.5 text-muted-foreground/60">{hint}</span>}
        </p>
      </div>
      <div className="space-y-1.5">
        {children}
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    </div>
  );
}

const inputClass =
  "w-full bg-transparent border-0 border-b border-border pb-1 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false },
  });

  const descriptionValue = watch("description") ?? "";

  const onSubmit = async (data: FormData) => {
    setSendError(false);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      setSendError(true);
      return;
    }
    setSubmitted(true);
  };

  return (
    <Container as="section" id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <p className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-3">
                Contact
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light">
                Let&apos;s Talk.
              </h2>
            </div>
            <p className="font-serif italic text-base text-muted-foreground pb-1 hidden md:block">
              I read every inquiry personally.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* Left — info */}
          <FadeInSection delay={0.08}>
            <div className="space-y-10 lg:sticky lg:top-24 lg:self-start">
              <p className="font-sans text-base text-foreground leading-relaxed">
                Whether you&apos;re facing a legal challenge or simply need
                guidance, tell me what&apos;s going on. I&apos;ll get back to
                you within two business days.
              </p>

              <div className="space-y-0">
                {[
                  { label: "Email", value: "krystyllannbihag@gmail.com" },
                  { label: "Phone", value: "0992 524 3474" },
                  { label: "Office", value: "Cambaro, Mandaue City\nCebu 6014" },
                ].map(({ label, value }) => (
                  <div key={label} className="py-4 border-b border-border first:border-t">
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-1">
                      {label}
                    </p>
                    <p className="font-sans text-sm text-foreground whitespace-pre-line">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-secondary rounded-md">
                <p className="font-serif italic text-base text-foreground leading-relaxed">
                  &ldquo;No question is too small. Every matter deserves a clear first answer.&rdquo;
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Right — form */}
          <FadeInSection delay={0.14}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-center min-h-64 gap-4"
                >
                  <div className="w-10 h-px bg-primary" />
                  <p className="font-serif italic text-3xl text-foreground leading-snug">
                    Thank you.<br />I&apos;ll be in touch shortly.
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Expect a reply within two business days.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="border-t border-border">
                    <FieldRow label="Full Name" error={errors.fullName?.message}>
                      <input
                        {...register("fullName")}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </FieldRow>

                    <FieldRow label="Email" error={errors.email?.message}>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </FieldRow>

                    <FieldRow label="Phone" hint="(optional)">
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="09XX XXX XXXX"
                        className={inputClass}
                      />
                    </FieldRow>

                    <FieldRow label="Matter Type" error={errors.matterType?.message}>
                      <select
                        {...register("matterType")}
                        className="w-full appearance-none bg-transparent border-0 border-b border-border pb-1 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-200 cursor-pointer"
                      >
                        <option value="">Select a practice area…</option>
                        {matterTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </FieldRow>

                    <FieldRow
                      label="Your Situation"
                      error={errors.description?.message}
                    >
                      <textarea
                        {...register("description")}
                        rows={5}
                        placeholder="Briefly describe your legal matter…"
                        className="w-full bg-transparent border-0 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none resize-none transition-colors duration-200"
                      />
                      <p className="text-xs text-muted-foreground text-right">
                        {descriptionValue.length}/1000
                      </p>
                    </FieldRow>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3 mt-6">
                    <Controller
                      name="consent"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="consent"
                          checked={field.value ?? false}
                          onCheckedChange={(checked) => field.onChange(checked === true)}
                          className="mt-0.5 shrink-0"
                        />
                      )}
                    />
                    <div>
                      <Label
                        htmlFor="consent"
                        className="text-xs leading-snug cursor-pointer font-sans text-muted-foreground"
                      >
                        I understand this submission does not create an
                        attorney-client relationship until formally engaged.
                      </Label>
                      {errors.consent && (
                        <p className="text-xs text-destructive mt-1">
                          {errors.consent.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {sendError && (
                    <p className="mt-6 text-xs text-destructive">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="mt-4 w-full md:w-auto"
                  >
                    {isSubmitting ? "Sending…" : "Send Inquiry"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeInSection>

        </div>
      </div>
    </Container>
  );
}
