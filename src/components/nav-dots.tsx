"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero",           label: "Home" },
  { id: "about",          label: "About" },
  { id: "practice-areas", label: "Practice" },
  { id: "approach",       label: "Approach" },
  { id: "credentials",    label: "Credentials" },
  { id: "contact",        label: "Contact" },
];

export function NavDots() {
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      let current = "hero";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.45) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-start gap-0"
      aria-label="Section navigation"
    >
      {/* Vertical track */}
      <div className="absolute left-[5px] top-3 bottom-3 w-px bg-border/60" />

      {sections.map(({ id, label }, i) => {
        const isActive  = active  === id;
        const isHovered = hovered === id;
        const showLabel = isActive || isHovered;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            aria-label={`Go to ${label}`}
            className="relative flex items-center gap-3 py-3 group"
          >
            {/* Dot */}
            <motion.div
              animate={
                isActive
                  ? { scale: 1, backgroundColor: "hsl(17 71% 25%)", opacity: 1 }
                  : isHovered
                  ? { scale: 0.9, backgroundColor: "hsl(17 71% 25% / 0.5)", opacity: 1 }
                  : { scale: 0.7, backgroundColor: "hsl(24 13% 38% / 0.35)", opacity: 1 }
              }
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="w-2.5 h-2.5 rounded-full shrink-0 relative z-10"
            />

            {/* Active ring pulse */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key="ring"
                  initial={{ scale: 0.6, opacity: 0.6 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", repeat: Infinity, repeatDelay: 1.4 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary z-0"
                />
              )}
            </AnimatePresence>

            {/* Label */}
            <AnimatePresence>
              {showLabel && (
                <motion.span
                  key="label"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className={[
                    "font-sans text-[10px] uppercase tracking-[0.18em] whitespace-nowrap",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  ].join(" ")}
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        );
      })}
    </nav>
  );
}
