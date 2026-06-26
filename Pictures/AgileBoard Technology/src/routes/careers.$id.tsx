import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { jobs } from "@/data/placeholderData";
import { ArrowLeft, Check, MapPin } from "lucide-react";

export const Route = createFileRoute("/careers/$id")({
  loader: ({ params }) => {
    const job = jobs.find((j) => j.id === params.id);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.job.title} — AgileBoardTech Careers` : "Job — AgileBoardTech Careers" },
      { name: "description", content: loaderData?.job.description ?? "Open role at AgileBoardTech." },
    ],
  }),
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl font-bold">Role not found</h1>
      <Link to="/careers" className="mt-6 inline-flex items-center gap-2 text-brand hover:underline"><ArrowLeft className="size-4" />Back to careers</Link>
    </div>
  ),
  component: Page,
});

function Page() {
  const { job } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={job.category} title={job.title}>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/80">
          <span className="inline-flex items-center gap-1"><MapPin className="size-4" />{job.location}</span>
          <span>{job.type}</span>
          <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
        </p>
      </PageHero>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="text-xl font-bold">About the role</h2>
          <p className="mt-3 text-muted-foreground">{job.description}</p>

          <h3 className="mt-10 text-xl font-bold">What you'll bring</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {job.requirements.map((r: string) => (
              <li key={r} className="flex items-start gap-2"><Check className="mt-0.5 size-4 text-brand" />{r}</li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-bold">Apply now</h3>
          <p className="mt-2 text-sm text-muted-foreground">Submit your resume and a recruiter will reach out within two business days.</p>
          <Link to="/careers" hash="submit" className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground hover:bg-brand/90">Apply now</Link>
          <Link to="/careers" className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"><ArrowLeft className="size-3" />All roles</Link>
        </aside>
      </section>
    </>
  );
}
