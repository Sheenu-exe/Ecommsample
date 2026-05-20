import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { CroissantMascot } from "./CroissantMascot";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div
        className="paper-grain relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-foreground stamp-shadow transition-transform duration-300 group-hover:-translate-y-1"
        style={{ backgroundColor: product.color, color: product.ink }}
      >
        <div className="absolute left-3 top-3 z-10 rounded-full border border-current px-2 py-0.5 font-display text-[10px] uppercase tracking-widest bg-background/80 backdrop-blur-sm">
          {product.category}
        </div>
        <div className="absolute inset-0 grid place-items-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-multiply opacity-90" 
          />
        </div>
        <div className="absolute bottom-3 right-3 z-10 rounded-full bg-card px-3 py-1 font-display text-sm font-700 text-foreground shadow-sm">
          ${product.price}
        </div>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-600 leading-tight">{product.name}</h3>
        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
          {product.sizes.length === 1 ? "One Size" : `${product.sizes.length} sizes`}
        </span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{product.blurb}</p>
    </Link>
  );
}
