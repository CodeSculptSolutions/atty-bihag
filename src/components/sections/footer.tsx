import { Container } from "@/components/container";

export function Footer() {
  return (
    <Container as="footer" className="mt-auto">

      {/* Closing flourish */}
      <div className="max-w-7xl mx-auto py-16 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-foreground font-light leading-snug mb-4">
              Thank you for visiting.
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              Cebu, Philippines · Est. 2025
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="font-serif text-2xl md:text-4xl text-primary/20 leading-none">KAB</span>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Krystyll Ann Bihag, Atty.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pb-8 flex flex-col md:flex-row md:items-start gap-3 md:gap-16">
        <p className="font-sans text-xs text-muted-foreground shrink-0">
          © 2026 Krystyll Ann Bihag, Atty.
        </p>
        <a
          href="https://codesculptsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors shrink-0"
        >
          Built by Code Sculpt Solutions
        </a>
        <p className="font-sans text-xs text-muted-foreground/70 leading-relaxed">
          The information on this site is for general purposes and does not
          constitute legal advice. No attorney-client relationship is created by
          visiting this site or submitting an inquiry.
        </p>
      </div>

    </Container>
  );
}
