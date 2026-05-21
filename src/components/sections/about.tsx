"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "@/components/fade-in-section";
import { Container } from "@/components/container";

const stats = [
  { value: "2025", label: "Bar Admitted" },
  { value: "5+", label: "Years in Legal Practice" },
  { value: "Cum\nLaude", label: "University of San Carlos" },
];

export function About() {
  return (
    <Container as="section" id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        <FadeInSection>
          <p className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-16">
            About
          </p>
        </FadeInSection>

        {/* Hero quote block */}
        <FadeInSection delay={0.1}>
          <div className="relative mb-20">
            {/* Decorative open-quote */}
            <span
              className="absolute -top-10 -left-4 font-serif text-[160px] leading-none text-primary/10 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="relative font-serif italic text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08] tracking-tight max-w-5xl">
              The law, at its best, is an instrument of dignity.
            </blockquote>

            <div className="mt-10 flex items-center gap-6">
              <div className="w-12 h-px bg-primary" />
              <p className="font-sans text-sm text-muted-foreground uppercase tracking-[0.16em]">
                Krystyll Ann Bihag · Attorney-at-Law
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Full-width divider */}
        <div className="w-full h-px bg-border mb-20" />

        {/* Stats + Prose grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 lg:gap-24">

          {/* Left — stat tower */}
          <FadeInSection delay={0.15}>
            <div className="flex flex-col gap-0">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                  className="py-8 border-t border-border last:border-b"
                >
                  <p className="font-serif text-6xl md:text-7xl text-primary font-light leading-none mb-2 whitespace-pre-line">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeInSection>

          {/* Right — prose with drop cap */}
          <FadeInSection delay={0.2}>
            <div className="space-y-7">
              <p className="font-sans text-base leading-relaxed text-foreground">
                <span className="float-left font-serif text-7xl text-primary leading-[0.82] mr-3 mt-1 select-none">
                  I
                </span>
                &rsquo;m a Cebu-based attorney admitted to the Philippine Bar in
                2025. My practice is rooted in five years of legal work across
                government, private practice, and the courts — experience that
                taught me how the law actually moves through people&apos;s lives.
              </p>

              <p className="font-sans text-base leading-relaxed text-foreground">
                I graduated Cum Laude from the University of San Carlos with a
                degree in Political Science, majoring in International Relations
                and Foreign Service, and earned my Juris Doctor from the
                University of Cebu. Before entering private practice, I served as
                Attorney I at the Local Government of Mandaue City, where I
                drafted ordinances and legal opinions on matters of public
                concern.
              </p>

              <p className="font-sans text-base leading-relaxed text-foreground">
                My commitments outside the office — to social justice, to the
                welfare of women and children, to communities that the system too
                often overlooks — are not separate from how I practice. They
                shape it.
              </p>

              <div className="pt-6 border-t border-border">
                <p className="font-serif italic text-xl text-muted-foreground leading-relaxed">
                  Practicing in Cebu, Philippines — with conviction, clarity,
                  and care for every client who walks through the door.
                </p>
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </Container>
  );
}
