import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, type Product } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Crumb Club" },
      { name: "description", content: "Tees, hoodies, hats, and accessories. Small-batch apparel from Crumb Club." },
    ],
  }),
  component: Shop,
});

const CATEGORIES: Array<Product["category"] | "All"> = ["All", "Tees", "Hoodies", "Hats", "Accessories"];

function Shop() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const list = cat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-4 border-b-2 border-foreground pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <Link to="/">Home</Link> / Shop
          </span>
          <h1 className="mt-2 font-display text-6xl font-700 md:text-7xl">All goods.</h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            {list.length} pieces, all made in small batches. Quietly weird, built to last.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border-2 border-foreground px-4 py-2 font-display text-xs uppercase tracking-wider transition ${
                cat === c ? "bg-foreground text-background" : "bg-card hover:bg-foreground hover:text-background"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
