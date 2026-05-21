"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "@/components/fade-in-section";
import { Container } from "@/components/container";

const stats = [
  { value: "2025", label: "Philippine Bar Admitted" },
  { value: "5+",   label: "Years Legal Experience" },
  { value: "CL",   label: "Cum Laude · USC" },
];

const timeline = [
  {
    year: "2025",
    category: "Bar & Membership",
    items: [
      "Admitted to the Philippine Bar",
      "Integrated Bar of the Philippines · Cebu Chapter",
      "Trial Academy Modules 1 & 2 · IBP Cebu",
      "Legal Aid Primer & Katarungang Pambarangay Law · IBP Cebu",
      "Unified Legal Aid Services Rules · IBP Cebu",
    ],
  },
  {
    year: "2024",
    category: "Juris Doctor",
    items: [
      "University of Cebu",
    ],
  },
  {
    year: "2020–24",
    category: "Government Practice",
    items: [
      "Attorney I · Local Government of Mandaue City",
      "Drafted ordinances and legal opinions on matters of public concern",
    ],
  },
  {
    year: "2018",
    category: "Bachelor of Arts · Cum Laude",
    items: [
      "Political Science, Major in International Relations & Foreign Service",
      "University of San Carlos · Civil Service Honor Graduate (PD 907)",
    ],
  },
];

export function Credentials() {
  return (
    <Container as="section" id="credentials" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeInSection>
          <p className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-3">
            Credentials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light mb-10 md:mb-14">
            Background &amp; Training
          </h2>
        </FadeInSection>

        {/* Stat bar */}
        <FadeInSection delay={0.08}>
          <div className="grid grid-cols-3 border-t border-b border-border mb-12 md:mb-20">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={[
                  "py-5 px-3 sm:py-8 sm:px-6",
                  i > 0 ? "border-l border-border" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <p className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-primary font-light leading-none mb-1 sm:mb-2">
                  {s.value}
                </p>
                <p className="font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Timeline + aside */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-24">

          {/* Left — vertical timeline */}
          <FadeInSection delay={0.12}>
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border" />

              <div className="space-y-0">
                {timeline.map((entry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                    className="relative pl-10 pb-10"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background" />

                    <p className="font-serif text-sm text-primary mb-0.5">
                      {entry.year}
                    </p>
                    <p className="text-xs uppercase tracking-[0.13em] text-muted-foreground mb-2">
                      {entry.category}
                    </p>
                    {entry.items.map((item, j) => (
                      <p
                        key={j}
                        className="font-sans text-sm text-foreground leading-relaxed"
                      >
                        {item}
                      </p>
                    ))}
                  </motion.div>
                ))}

                {/* Terminal dot */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-3.5 h-3.5 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Right — aside */}
          <FadeInSection delay={0.18}>
            <div className="flex flex-col gap-12 lg:sticky lg:top-24 lg:self-start">

              {/* Pull quote */}
              <div className="border-l-2 border-primary pl-6">
                <p className="font-serif italic text-2xl text-foreground leading-snug mb-4">
                  &ldquo;Five years of work before the bar exam — not despite it, but because of it.&rdquo;
                </p>
                <p className="font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  On her path to practice
                </p>
              </div>

              {/* Currently at */}
              <div className="p-6 bg-secondary rounded-md">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-4">
                  Currently
                </p>
                <p className="font-serif text-xl text-foreground font-light leading-snug mb-1">
                  Associate Attorney
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  Cebu, Philippines
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-sans text-xs text-primary uppercase tracking-[0.12em]">
                    Accepting new clients
                  </span>
                </div>
              </div>

              {/* Honors */}
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-4">
                  Honors
                </p>
                <div className="space-y-3">
                  {[
                    "Cum Laude · University of San Carlos",
                    "Civil Service Honor Graduate · PD 907",
                  ].map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-primary mt-[7px] shrink-0" />
                      <p className="font-sans text-sm text-foreground">{h}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </FadeInSection>

        </div>
      </div>
    </Container>
  );
}
