import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, subtitle, align = "left" }: {
  eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, lead, children }: {
  eyebrow?: string; title: string; lead?: string; children?: ReactNode;
}) {
  return (
    <section className="hero-gradient text-white">
      <div className="container-page py-20 sm:py-28">
        {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{eyebrow}</p>}
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg text-white/80">{lead}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
