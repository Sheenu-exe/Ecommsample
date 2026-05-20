import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { CroissantMascot } from "./CroissantMascot";

export function Footer() {
  return (
    <footer className="mt-32 border-t-2 border-foreground bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <CroissantMascot className="h-14 w-14" stroke="var(--cream)" />
              <h3 className="font-display text-4xl font-700 leading-none">crumb<br/>club</h3>
            </div>
            <p className="mt-6 max-w-md text-sm/relaxed text-primary-foreground/80">
              Crafted apparel for slow mornings, big appetites, and bigger ideas. Made in small batches, shipped worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest opacity-70">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/shop" className="hover:underline">All Goods</Link></li>
              <li><Link to="/shop" className="hover:underline">Tees</Link></li>
              <li><Link to="/shop" className="hover:underline">Hoodies</Link></li>
              <li><Link to="/shop" className="hover:underline">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest opacity-70">Club</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:underline">Our Story</Link></li>
              <li><Link to="/journal" className="hover:underline">Journal</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/contact" className="hover:underline">Stockists</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-primary-foreground/20 pt-8 md:flex-row md:items-center">
          <p className="text-xs uppercase tracking-widest opacity-70">
            © {new Date().getFullYear()} Crumb Club. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
