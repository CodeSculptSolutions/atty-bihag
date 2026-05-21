import { FadeInSection } from "@/components/fade-in-section";
import { Container } from "@/components/container";

const pillars = [
  {
    number: "01",
    heading: "Diligence",
    body: "Every case receives the research and preparation it deserves. I build files carefully, anticipate arguments, and never treat a matter as routine.",
  },
  {
    number: "02",
    heading: "Clarity",
    body: "Legal advice you can actually understand and act on. No jargon, no hedging — just an honest picture of where you stand and what your options are.",
  },
  {
    number: "03",
    heading: "Conviction",
    body: "Advocacy grounded in social justice and respect for human dignity. I take positions I believe in and defend them with rigor.",
  },
];

export function Approach() {
  return (
    <Container as="section" id="approach" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-20">
            <div>
              <p className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-3">
                Approach
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light">
                How I Work
              </h2>
            </div>
            <p className="font-sans text-sm text-muted-foreground max-w-xs pb-1 hidden md:block leading-relaxed">
              Three principles that guide every engagement — from the first consultation to the final resolution.
            </p>
          </div>
        </FadeInSection>

        {/* Pillars */}
        <FadeInSection delay={0.1}>
          <div className="space-y-0">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.number}
                className="grid grid-cols-1 md:grid-cols-[120px_1fr_1.4fr] gap-6 md:gap-12 py-10 border-t border-border last:border-b group"
              >
                {/* Number */}
                <div className="flex items-start">
                  <span className="font-serif text-5xl text-primary/20 font-light leading-none group-hover:text-primary/40 transition-colors duration-300">
                    {pillar.number}
                  </span>
                </div>

                {/* Heading */}
                <div className="flex items-start">
                  <h3 className="font-serif text-3xl text-foreground font-light leading-tight">
                    {pillar.heading}
                  </h3>
                </div>

                {/* Body */}
                <div className="flex items-start">
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-md">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Bottom pull quote */}
        <FadeInSection delay={0.2}>
          <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
            <div className="w-12 h-px bg-primary shrink-0" />
            <p className="font-serif italic text-xl md:text-2xl text-foreground leading-snug">
              &ldquo;Preparation is not a preference. It is the baseline.&rdquo;
            </p>
          </div>
        </FadeInSection>

      </div>
    </Container>
  );
}
