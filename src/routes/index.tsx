import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Package, Sparkles } from "lucide-react";
import { CroissantMascot } from "@/components/CroissantMascot";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crumb Club — Apparel for slow mornings" },
      { name: "description", content: "Heavyweight tees, hoodies, and accessories. Crafted brews, cozy vibes, great conversations." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-foreground bg-primary text-primary-foreground">
        <div className="paper-grain absolute inset-0 opacity-30" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <span className="inline-block rounded-full border-2 border-primary-foreground px-3 py-1 font-display text-xs uppercase tracking-[0.25em]">
              Est. 2021 · Drop 04
            </span>
            <h1 className="mt-6 font-display text-[14vw] font-700 leading-[0.85] sm:text-[10vw] md:text-[8rem]">
              crumb<br/>
              <span className="italic text-primary-foreground/80">club</span>
            </h1>
            <p className="mt-6 max-w-md text-lg/relaxed text-primary-foreground/85">
              Heavyweight cotton, hand-drawn prints, and quiet luxury for people who take their coffee seriously.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-stamp" style={{ background: "var(--cream)", color: "var(--ink)" }}>
                Shop the drop <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="btn-ghost" style={{ borderColor: "var(--cream)", color: "var(--cream)" }}>
                Our story
              </Link>
            </div>
          </div>
          <div className="relative md:col-span-5">
            <div className="paper-grain relative aspect-square rounded-3xl border-2 border-primary-foreground bg-[color:var(--cream)] p-8 text-foreground stamp-shadow">
              <div className="absolute left-4 top-4 rounded-full bg-foreground px-3 py-1 font-display text-[10px] uppercase tracking-widest text-background">
                Brandmark
              </div>
              <CroissantMascot className="h-full w-full" stroke="var(--primary)" />
              <div className="absolute bottom-4 right-4 font-display text-xs uppercase tracking-widest opacity-70">
                #0725b0
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rotate-[-8deg] rounded-2xl border-2 border-foreground bg-card px-4 py-3 stamp-shadow md:block">
              <p className="font-display text-sm">Crafted brews,<br/>cozy vibes.</p>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
              The Drop
            </span>
            <h2 className="mt-2 font-display text-5xl font-700 md:text-6xl">
              Fresh out the oven.
            </h2>
          </div>
          <Link to="/shop" className="hidden font-display text-sm uppercase tracking-wider underline underline-offset-8 hover:text-primary md:inline">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="border-y-2 border-foreground bg-card">
        <div className="mx-auto grid max-w-7xl gap-px bg-foreground md:grid-cols-3">
          {[
            { icon: Package, title: "Small batches", body: "No deadstock. No waste. Numbered drops only." },
            { icon: Coffee, title: "Coffee-shop tested", body: "Born in a corner café. Worn by the regulars." },
            { icon: Sparkles, title: "Quietly weird", body: "Hand-drawn marks. Nothing AI about it." },
          ].map((v) => (
            <div key={v.title} className="bg-card p-8">
              <v.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-display text-2xl">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POSTER BLOCK */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="paper-grain relative aspect-[3/4] overflow-hidden rounded-3xl border-2 border-foreground bg-card stamp-shadow">
            <div className="flex h-full flex-col justify-between p-8">
              <div>
                <h3 className="font-display text-6xl font-700 leading-none text-foreground md:text-7xl">
                  COFFEE&<br/>PASTRIES
                </h3>
                <div className="mt-6 flex gap-3 text-primary">
                  <span className="inline-block h-6 w-6 rounded-full border-2 border-current" />
                  <span className="inline-block h-6 w-6 rounded-full border-2 border-current" />
                  <span className="inline-block h-6 w-6 rounded-full border-2 border-current" />
                </div>
              </div>
              <CroissantMascot className="h-40 w-40 self-end" stroke="var(--primary)" />
              <div>
                <p className="font-display text-4xl font-700 md:text-5xl">
                  OPEN DAILY<br/>8 AM TO 6 PM
                </p>
                <p className="mt-3 font-display text-xs uppercase tracking-widest text-muted-foreground">
                  123 anywhere st., any city
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Manifesto
            </span>
            <h2 className="mt-2 font-display text-5xl font-700 md:text-6xl">
              For people who linger.
            </h2>
            <p className="mt-6 max-w-md text-lg/relaxed text-muted-foreground">
              We started Crumb Club in a corner shop with three espresso machines and one stubborn idea: clothing should feel as good as a quiet morning before the city wakes up.
            </p>
            <p className="mt-4 max-w-md text-lg/relaxed text-muted-foreground">
              Every piece is drawn by hand, printed in small batches, and finished by people we know by name.
            </p>
            <Link to="/about" className="btn-stamp mt-8">
              Read the manifesto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="paper-grain rounded-3xl border-2 border-foreground bg-primary p-10 text-primary-foreground stamp-shadow md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-4xl font-700 md:text-5xl">Join the club.</h3>
              <p className="mt-3 text-primary-foreground/80">
                Early access to drops, café events, and the occasional bad joke.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@morning.coffee"
                className="h-12 flex-1 rounded-full border-2 border-primary-foreground bg-transparent px-5 font-sans text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none"
              />
              <button className="btn-stamp h-12" style={{ background: "var(--cream)", color: "var(--ink)" }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
