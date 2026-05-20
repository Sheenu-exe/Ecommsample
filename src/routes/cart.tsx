import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart";
import { CroissantMascot } from "@/components/CroissantMascot";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [{ title: "Your Bag — Crumb Club" }],
  }),
  component: CartPage,
});

function CartPage() {
  const { detailed, setQty, remove, subtotal, clear } = useCart();
  const shipping = subtotal === 0 ? 0 : subtotal >= 80 ? 0 : 8;
  const total = subtotal + shipping;

  if (detailed.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <CroissantMascot className="mx-auto h-32 w-32" stroke="var(--primary)" />
        <h1 className="mt-6 font-display text-5xl font-700">Your bag is empty.</h1>
        <p className="mt-3 text-muted-foreground">The croissant is lonely. Add something cozy.</p>
        <Link to="/shop" className="btn-stamp mt-8">Browse the shop <ArrowRight className="h-4 w-4" /></Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="border-b-2 border-foreground pb-6">
        <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <Link to="/">Home</Link> / Bag
        </span>
        <h1 className="mt-2 font-display text-6xl font-700">Your bag.</h1>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {detailed.map((it) => (
            <div key={`${it.slug}-${it.size}`} className="flex gap-4 rounded-2xl border-2 border-foreground bg-card p-4 stamp-shadow">
              <div
                className="paper-grain grid aspect-square w-28 shrink-0 place-items-center overflow-hidden rounded-xl border-2 border-foreground sm:w-36"
                style={{ backgroundColor: it.product.color, color: it.product.ink }}
              >
                <img 
                  src={it.product.image} 
                  alt={it.product.name}
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Link to="/products/$slug" params={{ slug: it.slug }} className="font-display text-xl hover:text-primary">
                      {it.product.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">Size: {it.size}</p>
                  </div>
                  <p className="font-display text-lg">${it.product.price * it.qty}</p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                  <div className="flex items-center rounded-full border-2 border-foreground">
                    <button onClick={() => setQty(it.slug, it.size, it.qty - 1)} className="grid h-9 w-9 place-items-center hover:bg-foreground hover:text-background rounded-l-full"><Minus className="h-3 w-3" /></button>
                    <span className="grid h-9 w-8 place-items-center font-display text-sm">{it.qty}</span>
                    <button onClick={() => setQty(it.slug, it.size, it.qty + 1)} className="grid h-9 w-9 place-items-center hover:bg-foreground hover:text-background rounded-r-full"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => remove(it.slug, it.size)} className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-3 w-3" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clear} className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
            Clear bag
          </button>
        </div>

        <aside className="h-fit rounded-2xl border-2 border-foreground bg-primary p-6 text-primary-foreground stamp-shadow">
          <h2 className="font-display text-2xl">Summary</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between"><dt className="opacity-80">Subtotal</dt><dd>${subtotal.toFixed(2)}</dd></div>
            <div className="flex justify-between"><dt className="opacity-80">Shipping</dt><dd>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</dd></div>
            <div className="flex justify-between border-t border-primary-foreground/20 pt-3 font-display text-lg"><dt>Total</dt><dd>${total.toFixed(2)}</dd></div>
          </dl>
          <button className="btn-stamp mt-6 w-full" style={{ background: "var(--cream)", color: "var(--ink)" }}>
            Checkout <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-xs opacity-70">Demo only — no payment processed.</p>
        </aside>
      </div>
    </section>
  );
}
