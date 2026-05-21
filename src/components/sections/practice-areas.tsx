"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  Heart,
  ShieldCheck,
  Briefcase,
  Building2,
  Users,
  ChevronDown,
} from "lucide-react";
import { FadeInSection } from "@/components/fade-in-section";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const areas: {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  detail: string;
}[] = [
  {
    id: "civil",
    icon: Scale,
    title: "Civil Litigation",
    tagline: "Disputes, contracts, and property matters",
    detail:
      "I represent individuals and businesses in civil disputes, from contractual disagreements to property and obligation cases. My approach is preparation-first: clear records, considered strategy, and honest assessment of where a case actually stands.",
  },
  {
    id: "family",
    icon: Heart,
    title: "Family Law",
    tagline: "Annulment, custody, support",
    detail:
      "Family cases require both legal precision and human steadiness. I handle annulment, custody, and support matters with discretion and a clear-eyed view of what's best for the people involved — especially children.",
  },
  {
    id: "criminal",
    icon: ShieldCheck,
    title: "Criminal Defense",
    tagline: "Protecting your rights at every stage",
    detail:
      "From investigation through trial, I defend clients facing criminal charges with rigorous attention to procedure and evidence. Everyone deserves a defense that takes their case seriously from day one.",
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate & Contracts",
    tagline: "Drafting, review, advisory",
    detail:
      "I draft and review contracts, advise on corporate compliance, and help small businesses navigate the legal side of running an operation in the Philippines without unnecessary complication.",
  },
  {
    id: "lgu",
    icon: Building2,
    title: "Local Government & Administrative Law",
    tagline: "Drawing on years of LGU practice",
    detail:
      "My years at the Local Government of Mandaue City — drafting ordinances and legal opinions — give me practical fluency in how local government actually works. I advise clients on permits, ordinances, and administrative proceedings.",
  },
  {
    id: "probo",
    icon: Users,
    title: "Legal Aid & Pro Bono",
    tagline: "Rooted in advocacy for vulnerable communities",
    detail:
      "I take selected cases on legal aid or pro bono terms, particularly those involving women, children, and communities with limited access to legal representation. If your matter qualifies, please reach out.",
  },
];

function AreaCard({
  area,
  index,
  isOpen,
  onToggle,
}: {
  area: (typeof areas)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = area.icon;

  return (
    <div
      onClick={onToggle}
      className={cn(
        "group flex flex-col justify-between cursor-pointer rounded-md border transition-all duration-200",
        "bg-secondary border-border/60 p-7 min-h-[240px]",
        "hover:-translate-y-1 hover:shadow-sm hover:border-primary/30",
        isOpen && "border-primary/40 shadow-sm"
      )}
    >
      {/* Top row — icon + number */}
      <div className="flex items-start justify-between mb-6">
        <div
          className={cn(
            "p-2.5 rounded-md transition-colors duration-200",
            "bg-primary/8 group-hover:bg-primary/14",
            isOpen && "bg-primary/14"
          )}
        >
          <Icon
            className={cn(
              "w-5 h-5 transition-colors duration-200",
              "text-primary/70 group-hover:text-primary",
              isOpen && "text-primary"
            )}
            strokeWidth={1.5}
          />
        </div>
        <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground/50 pt-1">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title + tagline */}
      <div className="flex-1 mt-auto">
        <h3 className="font-serif text-xl text-foreground font-light leading-snug mb-1.5">
          {area.title}
        </h3>
        <p className="font-sans text-xs text-muted-foreground leading-relaxed">
          {area.tagline}
        </p>
      </div>

      {/* Expand detail */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-foreground leading-relaxed mt-4 pt-4 border-t border-border/60">
              {area.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chevron indicator */}
      <div className="flex justify-end mt-4">
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22 }}
        >
          <ChevronDown
            className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-200"
            strokeWidth={1.5}
          />
        </motion.div>
      </div>
    </div>
  );
}

export function PracticeAreas() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  return (
    <Container as="section" id="practice-areas" className="py-24">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Practice Areas
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light">
                How I Can Help
              </h2>
            </div>
            <p className="font-serif italic text-base text-muted-foreground pb-1 hidden md:block">
              Six areas. One standard of care.
            </p>
          </div>
        </FadeInSection>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area, index) => (
            <FadeInSection key={area.id} delay={index * 0.07}>
              <AreaCard
                area={area}
                index={index}
                isOpen={expanded === area.id}
                onToggle={() => toggle(area.id)}
              />
            </FadeInSection>
          ))}
        </div>

      </div>
    </Container>
  );
}
