import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { locations } from "@/data/placeholderData";
import { MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — AgileBoardTech" },
      { name: "description", content: "Find a AgileBoardTech office near you." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Locations" title="Local presence, national reach." lead="35+ offices and a coast-to-coast network of consultants." />
      <section className="container-page py-16">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="aspect-[16/7] w-full bg-muted">
           <iframe
  title="AgileBoardTech Location"
  className="size-full"
  loading="lazy"
  src="https://maps.google.com/maps?q=Ghaziabad,Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
/>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <article key={l.id} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">{l.name}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 size-4 shrink-0 text-brand" />{l.address}</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><Phone className="size-4 text-brand" />{l.phone}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
