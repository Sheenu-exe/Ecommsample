import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  { slug: "the-cold-brew-diaries", title: "The Cold Brew Diaries", date: "May 12, 2026", cat: "Café", excerpt: "Notes from a summer of pulling shots, debating beans, and inventing the 4pm cortado." },
  { slug: "drop-04-behind-the-print", title: "Drop 04 — Behind the Print", date: "Apr 28, 2026", cat: "Drop Notes", excerpt: "How a single sketch on a napkin became a 380gsm crewneck." },
  { slug: "small-batches-big-questions", title: "Small Batches, Big Questions", date: "Mar 15, 2026", cat: "Studio", excerpt: "Why we make less than the market wants — and why we sleep better for it." },
  { slug: "field-notes-tokyo", title: "Field Notes — Tokyo", date: "Feb 02, 2026", cat: "Travel", excerpt: "Five cafés, three thrift stores, and one perfectly weathered tote." },
];

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Crumb Club" },
      { name: "description", content: "Drop notes, café diaries, and field reports from the Crumb Club studio." },
    ],
  }),
  component: Journal,
});

function Journal() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="border-b-2 border-foreground pb-8">
        <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <Link to="/">Home</Link> / Journal
        </span>
        <h1 className="mt-2 font-display text-6xl font-700 md:text-7xl">The Journal.</h1>
        <p className="mt-3 max-w-md text-muted-foreground">Drop notes, café diaries, and the occasional rant about supply chains.</p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {POSTS.map((p, i) => (
          <article
            key={p.slug}
            className={`group flex flex-col justify-between rounded-3xl border-2 border-foreground p-8 stamp-shadow ${
              i % 2 === 0 ? "bg-card" : "bg-primary text-primary-foreground"
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-current px-3 py-1 font-display text-[10px] uppercase tracking-widest">
                  {p.cat}
                </span>
                <span className="font-display text-xs uppercase tracking-widest opacity-70">{p.date}</span>
              </div>
              <h2 className="mt-6 font-display text-4xl font-700 leading-tight">{p.title}</h2>
              <p className="mt-3 text-sm/relaxed opacity-80">{p.excerpt}</p>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-2 font-display text-sm uppercase tracking-widest underline underline-offset-8">
              Read post <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
