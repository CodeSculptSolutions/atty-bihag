"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

function LadyJusticeSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary/70 ${className ?? ""}`}
      aria-label="Lady Justice"
    >
      {/* Decorative background ring */}
      <circle cx="100" cy="216" r="82" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 9" opacity="0.18" />

      {/* === SCALES — animated sway === */}
      <motion.g
        animate={{ rotate: [0, 3, 0, -3, 0] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        style={{ transformOrigin: "100px 66px" }}
      >
        {/* Finial + flanking cross-stars */}
        <line x1="86" y1="8" x2="86" y2="16" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <line x1="82" y1="12" x2="90" y2="12" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <line x1="114" y1="8" x2="114" y2="16" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <line x1="110" y1="12" x2="118" y2="12" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <circle cx="100" cy="12" r="4.5" fill="currentColor" />

        {/* Staff up to beam */}
        <line x1="100" y1="17" x2="100" y2="60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

        {/* Beam */}
        <line x1="22" y1="66" x2="178" y2="66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Pivot */}
        <circle cx="100" cy="66" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="66" r="2.5" fill="currentColor" />

        {/* Left side — lighter, higher */}
        <circle cx="22" cy="66" r="2.5" fill="currentColor" />
        <line x1="22" y1="68" x2="22" y2="106" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="22" y1="106" x2="22" y2="150" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" />
        <circle cx="22" cy="150" r="2" fill="currentColor" />
        <path d="M 4 150 Q 22 170 40 150" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Right side — heavier, lower */}
        <circle cx="178" cy="66" r="2.5" fill="currentColor" />
        <line x1="178" y1="68" x2="178" y2="118" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="178" y1="118" x2="178" y2="162" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" />
        <circle cx="178" cy="162" r="2" fill="currentColor" />
        <path d="M 160 162 Q 178 182 196 162" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* === FIGURE === */}
      {/* Staff continues through figure */}
      <line x1="100" y1="73" x2="100" y2="196" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Laurel ring behind head */}
      <circle cx="100" cy="216" r="28" stroke="currentColor" strokeWidth="0.8" opacity="0.28" />
      {/* Head */}
      <circle cx="100" cy="216" r="20" stroke="currentColor" strokeWidth="1.5" />
      {/* Crown ticks */}
      <line x1="92" y1="196" x2="92" y2="190" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <line x1="100" y1="196" x2="100" y2="188" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <line x1="108" y1="196" x2="108" y2="190" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      {/* Blindfold */}
      <line x1="80" y1="213" x2="120" y2="213" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="80" y1="217" x2="120" y2="217" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

      {/* Neck */}
      <line x1="100" y1="236" x2="100" y2="248" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Shoulders */}
      <line x1="100" y1="248" x2="40" y2="274" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="248" x2="160" y2="274" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Robe sides */}
      <line x1="40" y1="274" x2="30" y2="378" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="160" y1="274" x2="170" y2="378" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Hem */}
      <line x1="30" y1="378" x2="170" y2="378" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Spine dashed */}
      <line x1="100" y1="248" x2="100" y2="378" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 8" />

      {/* V-collar */}
      <path d="M 82 248 L 100 268 L 118 248" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Lapels */}
      <line x1="82" y1="248" x2="62" y2="286" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="118" y1="248" x2="138" y2="286" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* Robe fold lines */}
      <line x1="68" y1="306" x2="56" y2="360" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <line x1="132" y1="306" x2="144" y2="360" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <line x1="86" y1="296" x2="82" y2="358" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />
      <line x1="114" y1="296" x2="118" y2="358" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.25" />

      {/* === SWORD (right of figure) === */}
      <circle cx="174" cy="252" r="4" stroke="currentColor" strokeWidth="1.2" />
      <line x1="174" y1="256" x2="174" y2="268" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="165" y1="268" x2="183" y2="268" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="174" y1="270" x2="174" y2="366" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 170 366 L 174 380 L 178 366" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* === BASE === */}
      <line x1="58" y1="388" x2="142" y2="388" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="44" y1="398" x2="156" y2="398" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="408" x2="170" y2="408" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

const chips = ["BAR ADMITTED · 2025", "IBP CEBU CHAPTER", "SALAS LAW OFFICE"];

export function Hero() {
  const { scrollY } = useScroll();
  const yLeft    = useTransform(scrollY, [0, 520], [0, -90]);
  const opLeft   = useTransform(scrollY, [0, 380], [1, 0]);
  const opScroll = useTransform(scrollY, [0, 120], [1, 0]);

  const scrollToContact  = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToPractice = () => document.getElementById("practice-areas")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative flex min-h-screen overflow-hidden">

      {/* ── BACKGROUND IMAGE ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/law-background.jpg"
          alt=""
          fill
          priority
          className="object-cover object-right"
        />
        {/* Blur layer — strong on left, fades to none on right */}
        <div
          className="absolute inset-0 backdrop-blur-[6px]"
          style={{ maskImage: "linear-gradient(to right, black 0%, black 30%, transparent 65%)" }}
        />
        {/* Color fade — background color on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/70 to-background/10" />
      </div>

      {/* ── LEFT: content column ─────────────────────────────── */}
      <motion.div
        style={{ y: yLeft, opacity: opLeft }}
        className="relative z-10 flex flex-1 flex-col justify-between py-20 px-6 md:px-12 lg:pl-24 lg:pr-12 min-w-0"
      >
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
      </motion.div>

      {/* ── RIGHT: spacer so image fills right side ──────────── */}
      <div className="hidden lg:block w-[38%] shrink-0" />

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
    </section>
  );
}
