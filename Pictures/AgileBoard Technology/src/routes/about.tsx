import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/site/Section";
import { milestones, teamMembers } from "@/data/placeholderData";
import { Award, Building2, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AgileBoardTech" },
      { name: "description", content: "60+ years of meaningful work, an office-occasional culture, and a leadership team focused on impact." },
      { property: "og:title", content: "About AgileBoardTech" },
      { property: "og:description", content: "History, leadership and values of AgileBoardTech." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="About" title="A firm built on knowledge and people." lead="From a single Tampa office in 1962 to a national specialty firm, our mission has not changed: have a meaningful impact on every life we serve." />

      <section className="container-page py-20">
        <SectionHeader eyebrow="Our history" title="Milestones" />
        <ol className="mt-10 relative border-l border-border pl-6">
          {milestones.map((m) => (
            <li key={m.year} className="mb-8 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 size-3 rounded-full bg-brand" />
              <p className="text-sm font-semibold text-brand">{m.year}</p>
              <p className="mt-1 text-base">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <div className="container-page grid gap-10 md:grid-cols-3">
          {[
            { Icon: Heart, t: "Mission", d: "To Have a Meaningful Impact on All the Lives We Serve®." },
            { Icon: Award, t: "Recognition", d: "Great Place to Work® certified and named to Fortune's Best Workplaces lists." },
            { Icon: Building2, t: "Office-occasional", d: "A hybrid model that keeps teams connected without demanding a daily commute." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="size-7 text-brand" />
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeader eyebrow="Leadership" title="The team driving the work" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m, i) => (
            <div key={m.id} className="rounded-2xl border border-border bg-card p-6">
              <img src={`https://picsum.photos/seed/team-${i}/160/160`} alt="" className="size-16 rounded-full object-cover" />
              <h3 className="mt-4 text-lg font-bold">{m.name}</h3>
              <p className="text-sm text-brand">{m.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
