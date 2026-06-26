import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Users, Rocket } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions — AgileBoard Technology" },
      {
        name: "description",
        content:
          "Explore AgileBoard's three solution offerings: Talent, Team, and Project. Find the right engagement model for your business.",
      },
      { property: "og:title", content: "Solutions — AgileBoard Technology" },
      {
        property: "og:description",
        content:
          "Talent, Team, and Project solutions designed to scale with your goals.",
      },
    ],
  }),
  component: SolutionsIndex,
});

const solutions = [
  {
    to: "/solutions/talent",
    eyebrow: "Talent",
    title: "Specialized talent, placed fast.",
    description:
      "Vetted professionals embedded into your teams to accelerate delivery on critical roles.",
    bullets: ["Contract & contract-to-hire", "Direct placement", "Niche tech & business skills"],
    icon: Users,
  },
  {
    to: "/solutions/team",
    eyebrow: "Team",
    title: "Managed teams that own outcomes.",
    description:
      "Cross-functional pods led by AgileBoard, accountable for delivery against your roadmap.",
    bullets: ["Squad-based delivery", "Embedded leadership", "Predictable cadence"],
    icon: Briefcase,
  },
  {
    to: "/solutions/project",
    eyebrow: "Project",
    title: "Strategy connected to execution.",
    description:
      "End-to-end programs for your most challenging initiatives — from define to adopt.",
    bullets: ["Cloud & platform modernization", "Data, analytics & AI", "Enterprise rollouts"],
    icon: Rocket,
  },
];

function SolutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Three ways to partner with AgileBoard."
        lead="Whether you need a single expert, a managed team, or a full program — we have an engagement model built for the work."
      />

      <section className="container-page py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {solutions.map(({ to, eyebrow, title, description, bullets, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="size-5" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                {eyebrow}
              </p>
              <h3 className="text-xl font-bold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{description}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 flex-none rounded-full bg-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeader
            eyebrow="Not sure where to start?"
            title="We'll help you pick the right model."
            align="center"
            subtitle="Tell us about the work, the timeline, and your team — we'll recommend an engagement that fits."
          />
          <div className="mt-8 flex justify-center">
            <Link
              to="/careers"
              className="inline-flex h-11 items-center rounded-md bg-brand px-6 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
