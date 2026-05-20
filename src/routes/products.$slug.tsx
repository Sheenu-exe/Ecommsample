import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag, Truck, RotateCcw } from "lucide-react";
import { getProduct, PRODUCTS } from "@/lib/products";
import { CroissantMascot } from "@/components/CroissantMascot";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.product.name} — Crumb Club` : "Crumb Club" },
      { name: "description", content: loaderData?.product.blurb ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-5xl font-700">Not in stock.</h1>
      <p className="mt-3 text-muted-foreground">That piece doesn't exist (yet).</p>
      <Link to="/shop" className="btn-stamp mt-6">Back to shop</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="btn-stamp mt-6">Retry</button>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3 w-3" /> Back to shop
        </Link>

        <div className="mt-6 grid gap-12 md:grid-cols-2">
          {/* visual */}
          <div
            className="paper-grain relative aspect-square overflow-hidden rounded-3xl border-2 border-foreground stamp-shadow"
            style={{ backgroundColor: product.color, color: product.ink }}
          >
            <div className="absolute left-4 top-4 z-10 rounded-full border border-current px-3 py-1 font-display text-[10px] uppercase tracking-widest bg-background/80 backdrop-blur-sm">
              {product.category}
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="h-full w-full object-cover mix-blend-multiply opacity-90" 
              />
            </div>
            <div className="absolute bottom-4 right-4 z-10 rounded-full bg-card px-3 py-1 font-display text-xs uppercase tracking-widest text-foreground shadow-sm">
              Drop 04
            </div>
          </div>

          {/* info */}
          <div>
            <h1 className="font-display text-5xl font-700 md:text-6xl">{product.name}</h1>
            <p className="mt-2 font-display text-2xl text-primary">${product.price}</p>
            <p className="mt-6 text-muted-foreground">{product.description}</p>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="font-display text-xs uppercase tracking-widest">Size</p>
                <button className="font-display text-xs uppercase tracking-widest text-muted-foreground underline underline-offset-4">
                  Size guide
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s: string) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`min-w-12 rounded-full border-2 border-foreground px-4 py-2 font-display text-sm transition ${
                      size === s ? "bg-foreground text-background" : "bg-card hover:bg-foreground hover:text-background"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-full border-2 border-foreground">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center hover:bg-foreground hover:text-background rounded-l-full"><Minus className="h-4 w-4" /></button>
                <span className="grid h-11 w-10 place-items-center font-display text-lg">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="grid h-11 w-11 place-items-center hover:bg-foreground hover:text-background rounded-r-full"><Plus className="h-4 w-4" /></button>
              </div>
              <button
                onClick={() => {
                  for (let i = 0; i < qty; i++) add(product.slug, size);
                }}
                className="btn-stamp flex-1"
              >
                <ShoppingBag className="h-4 w-4" /> Add to bag
              </button>
            </div>

            <div className="mt-10 grid gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="flex items-center gap-3"><Truck className="h-4 w-4 text-primary" /> Free shipping over $80</div>
              <div className="flex items-center gap-3"><RotateCcw className="h-4 w-4 text-primary" /> 30-day easy returns</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <h2 className="font-display text-3xl font-700">You might also like</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group block">
              <div
                className="paper-grain relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-foreground stamp-shadow"
                style={{ backgroundColor: p.color, color: p.ink }}
              >
                <div className="absolute inset-0 grid place-items-center">
                  <img 
                    src={p.image} 
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105 mix-blend-multiply opacity-90" 
                  />
                </div>
              </div>
              <h3 className="mt-2 font-display text-base">{p.name}</h3>
              <p className="text-sm text-muted-foreground">${p.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
