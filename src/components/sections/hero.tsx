"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

function ScalesOfJusticeSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      className={`text-primary/70 ${className ?? ""}`}
      aria-label="Scales of Justice"
    >
      {/* ── BACKGROUND DEPTH RINGS ── */}
      <circle cx="180" cy="215" r="170" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
      <circle cx="180" cy="215" r="128" stroke="currentColor" strokeWidth="0.5" opacity="0.06" strokeDasharray="2 14" />
      <circle cx="180" cy="215" r="86" stroke="currentColor" strokeWidth="0.4" opacity="0.05" />

      {/* ── ANIMATED SCALES (sway around pivot) ── */}
      <motion.g
        animate={{ rotate: [0, 2.5, 0, -2.5, 0] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        style={{ transformOrigin: "180px 152px" }}
      >
        {/* Diamond finial */}
        <path
          d="M 180 36 L 189 50 L 180 64 L 171 50 Z"
          stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"
        />
        <circle cx="180" cy="50" r="3" fill="currentColor" opacity="0.5" />
        {/* Flanking tick marks */}
        <line x1="158" y1="50" x2="166" y2="50" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
        <line x1="194" y1="50" x2="202" y2="50" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />

        {/* Staff up to beam */}
        <line x1="180" y1="64" x2="180" y2="144" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

        {/* Beam */}
        <line x1="44" y1="152" x2="316" y2="152" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Beam shadow (depth) */}
        <line x1="44" y1="154.5" x2="316" y2="154.5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
        {/* Graduation ticks on beam */}
        <line x1="112" y1="147" x2="112" y2="157" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
        <line x1="248" y1="147" x2="248" y2="157" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
        <line x1="146" y1="148" x2="146" y2="156" stroke="currentColor" strokeWidth="0.6" opacity="0.18" />
        <line x1="214" y1="148" x2="214" y2="156" stroke="currentColor" strokeWidth="0.6" opacity="0.18" />

        {/* Pivot — triple ring */}
        <circle cx="180" cy="152" r="13" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="180" cy="152" r="7.5" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <circle cx="180" cy="152" r="3" fill="currentColor" />

        {/* ══ LEFT ASSEMBLY ══ */}
        <circle cx="44" cy="152" r="4" fill="currentColor" />
        {/* Arm */}
        <line x1="44" y1="156" x2="44" y2="198" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        {/* Chain links — alternating vertical / horizontal ellipses */}
        <ellipse cx="44" cy="210" rx="3.5" ry="6.5" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="44" cy="226" rx="6.5" ry="3.5" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="44" cy="241" rx="3.5" ry="6.5" stroke="currentColor" strokeWidth="1" />
        {/* Suspension dot */}
        <circle cx="44" cy="252" r="2.5" fill="currentColor" opacity="0.6" />
        {/* Pan outer rim */}
        <ellipse cx="44" cy="264" rx="43" ry="11" stroke="currentColor" strokeWidth="1.5" />
        {/* Pan inner rim (depth) */}
        <ellipse cx="44" cy="264" rx="34" ry="7.5" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        {/* Pan bowl */}
        <path d="M 1 264 C 1 290 20 298 44 300 C 68 298 87 290 87 264"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Bowl bottom highlight */}
        <line x1="32" y1="299" x2="56" y2="299" stroke="currentColor" strokeWidth="0.7" opacity="0.3" strokeLinecap="round" />

        {/* ══ RIGHT ASSEMBLY ══ */}
        <circle cx="316" cy="152" r="4" fill="currentColor" />
        {/* Arm */}
        <line x1="316" y1="156" x2="316" y2="198" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        {/* Chain links */}
        <ellipse cx="316" cy="210" rx="3.5" ry="6.5" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="316" cy="226" rx="6.5" ry="3.5" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="316" cy="241" rx="3.5" ry="6.5" stroke="currentColor" strokeWidth="1" />
        {/* Suspension dot */}
        <circle cx="316" cy="252" r="2.5" fill="currentColor" opacity="0.6" />
        {/* Pan outer rim */}
        <ellipse cx="316" cy="264" rx="43" ry="11" stroke="currentColor" strokeWidth="1.5" />
        {/* Pan inner rim (depth) */}
        <ellipse cx="316" cy="264" rx="34" ry="7.5" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        {/* Pan bowl */}
        <path d="M 273 264 C 273 290 292 298 316 300 C 340 298 359 290 359 264"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Bowl bottom highlight */}
        <line x1="304" y1="299" x2="328" y2="299" stroke="currentColor" strokeWidth="0.7" opacity="0.3" strokeLinecap="round" />
      </motion.g>

      {/* ── STAFF (static — doesn't sway with beam) ── */}
      <line x1="180" y1="165" x2="180" y2="372" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Mid-staff accent */}
      <line x1="170" y1="268" x2="190" y2="268" stroke="currentColor" strokeWidth="0.8" opacity="0.25" strokeLinecap="round" />
      <circle cx="180" cy="268" r="2" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />

      {/* ── PEDESTAL ── */}
      {/* Neck piece */}
      <path d="M 168 372 L 192 372 L 196 382 L 164 382 Z"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      {/* Steps — widening downward */}
      <line x1="148" y1="390" x2="212" y2="390" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="126" y1="401" x2="234" y2="401" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="104" y1="413" x2="256" y2="413" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Step corner accents */}
      <line x1="126" y1="394" x2="126" y2="401" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      <line x1="234" y1="394" x2="234" y2="401" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

const chips = ["BAR ADMITTED · 2025", "IBP CEBU CHAPTER"];

export function Hero() {
  const { scrollY } = useScroll();
  const yLeft    = useTransform(scrollY, [0, 520], [0, -90]);
  const opLeft   = useTransform(scrollY, [0, 380], [1, 0]);
  const yRight   = useTransform(scrollY, [0, 520], [0, -42]);
  const opRight  = useTransform(scrollY, [0, 480], [1, 0]);
  const opScroll = useTransform(scrollY, [0, 120], [1, 0]);

  const scrollToContact  = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToPractice = () => document.getElementById("practice-areas")?.scrollIntoView({ behavior: "smooth" });

  return (
    <Container as="section" id="hero" className="relative min-h-screen">
      <div className="max-w-7xl mx-auto w-full flex min-h-screen">
      {/* ── LEFT: content column ─────────────────────────────── */}
      <motion.div
        style={{ y: yLeft, opacity: opLeft }}
        className="flex flex-1 min-w-0"
      >
        <div className="flex flex-col justify-between w-full py-24">

          {/* TOP — eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            Attorney-at-Law · Est. 2025
          </motion.p>

          {/* MIDDLE — name + body */}
          <div className="space-y-8 my-auto py-12">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.02] tracking-tight"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                Krystyll Ann
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="font-serif italic text-6xl md:text-7xl lg:text-8xl text-primary leading-[1.02] tracking-tight"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                Bihag.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="space-y-5 max-w-md"
            >
              <p className="font-serif italic text-xl text-muted-foreground">
                Practicing in Cebu, Philippines.
              </p>
              <div className="w-10 h-px bg-primary" />
              <p className="font-sans text-base text-foreground leading-relaxed">
                Practicing law with conviction, clarity, and care for every
                client who walks through the door.
              </p>
              <div className="flex items-center gap-5 flex-wrap pt-1">
                <Button size="lg" onClick={scrollToContact}>
                  Schedule a Consultation
                </Button>
                <button
                  onClick={scrollToPractice}
                  className="font-sans text-sm text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-all duration-300"
                >
                  View practice areas →
                </button>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM — credential chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4 flex-wrap"
          >
            {chips.map((chip, i) => (
              <span key={chip} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="text-muted-foreground/30 text-xs select-none">|</span>
                )}
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {chip}
                </span>
              </span>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* ── RIGHT: sand panel with scales ────────────────────── */}
      <motion.div
        initial={{ x: 40 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{ y: yRight, opacity: opRight, overflow: "visible" }}
        className="hidden lg:flex w-[38%] shrink-0 flex-col items-start justify-center relative pl-6"
      >
        <ScalesOfJusticeSVG className="h-[68vh] w-auto max-w-full" />
        <p className="absolute bottom-8 right-8 text-xs uppercase tracking-[0.18em] text-muted-foreground/50 text-right leading-relaxed">
          Cebu,<br />Philippines
        </p>
      </motion.div>
      </div> {/* end max-w-7xl wrapper */}

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <motion.div
        style={{ opacity: opScroll }}
        className="absolute bottom-8 left-24 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Scroll
        </span>
        <motion.div
          className="w-px h-7 bg-muted-foreground/30 origin-top"
          animate={{ scaleY: [1, 0.35, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </Container>
  );
}
