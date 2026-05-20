import { createFileRoute, Link } from "@tanstack/react-router";
import { CroissantMascot } from "@/components/CroissantMascot";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Crumb Club" },
      { name: "description", content: "Crumb Club is a small-batch apparel label born in a corner café in 2021." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b-2 border-foreground bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <span className="font-display text-xs uppercase tracking-[0.25em]">Our story</span>
          <h1 className="mt-2 font-display text-6xl font-700 leading-[0.9] md:text-8xl">
            Born in a<br/>corner café.
          </h1>
          <p className="mt-6 max-w-xl text-lg/relaxed text-primary-foreground/85">
            Crumb Club started as a chalkboard sketch on a slow Tuesday in 2021. Three espresso machines, one stubborn idea, and a croissant that wouldn't sit still.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-3">
        {[
          { n: "01", t: "Drawn by hand", b: "Every print, mark, and label is drawn by our in-house illustrator. No filters, no generators." },
          { n: "02", t: "Made in small batches", b: "We make 200–500 of each piece. When it's gone, it's gone. We'd rather sell out than overproduce." },
          { n: "03", t: "Built to outlast trends", b: "Heavyweight cottons, reinforced seams, garment-dyed finishes. Pieces that age like good leather." },
        ].map((v) => (
          <div key={v.n}>
            <p className="font-display text-7xl font-700 text-primary">{v.n}</p>
            <h3 className="mt-2 font-display text-2xl">{v.t}</h3>
            <p className="mt-3 text-muted-foreground">{v.b}</p>
          </div>
        ))}
      </section>

      <section className="border-y-2 border-foreground bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div className="paper-grain rounded-3xl border-2 border-foreground bg-[color:var(--accent)] p-10 text-primary-foreground stamp-shadow">
            <CroissantMascot className="h-64 w-full" stroke="var(--cream)" />
            <p className="mt-6 font-display text-3xl">"Stay buttery."</p>
            <p className="mt-2 text-sm opacity-80">— Our unofficial motto</p>
          </div>
          <div>
            <h2 className="font-display text-5xl font-700">A club, not a brand.</h2>
            <p className="mt-6 text-muted-foreground">
              We're not trying to be everywhere. We're trying to be somewhere — a corner of the internet (and the city) where people who care about coffee, clothes, and slow mornings can find each other.
            </p>
            <p className="mt-4 text-muted-foreground">
              Membership is free. Subscribe to the newsletter, come by the shop, wear the croissant. That's it.
            </p>
            <Link to="/shop" className="btn-stamp mt-8">Shop the drop</Link>
          </div>
        </div>
      </section>
    </>
  );
}
