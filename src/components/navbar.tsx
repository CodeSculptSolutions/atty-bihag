"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={false}
    >
      {/* Main bar */}
      <motion.div
        animate={
          scrolled
            ? { backgroundColor: "hsl(36 38% 96% / 0.92)", borderBottomColor: "hsl(24 13% 38% / 0.12)" }
            : { backgroundColor: "hsl(36 38% 96% / 0)",    borderBottomColor: "hsl(24 13% 38% / 0)" }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="border-b backdrop-blur-md px-6 md:px-10 lg:px-24"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

          {/* Left — brand */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-4 group"
          >
            <span className="font-serif text-xl text-primary leading-none tracking-tight">
              KAB
            </span>
            <motion.span
              animate={{ opacity: scrolled ? 1 : 0, x: scrolled ? 0 : -6 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground"
            >
              Krystyll Ann Bihag, Atty.
            </motion.span>
          </button>

          {/* Right — links + CTA */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              {[
                { label: "About", id: "about" },
                { label: "Practice", id: "practice-areas" },
                { label: "Credentials", id: "credentials" },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {label}
                </button>
              ))}
            </nav>

            <Button
              size="sm"
              onClick={() => scrollTo("contact")}
              className="font-sans text-xs"
            >
              Get in Touch
            </Button>
          </div>

        </div>
      </motion.div>

      {/* Scroll progress bar */}
      <div className="h-px bg-border/40 w-full">
        <motion.div
          style={{ width: progressWidth }}
          className="h-full bg-primary/60"
        />
      </div>
    </motion.header>
  );
}
