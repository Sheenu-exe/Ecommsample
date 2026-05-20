import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PRODUCTS, type Product } from "./products";

export type CartItem = { slug: string; size: string; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (slug: string, size: string) => void;
  remove: (slug: string, size: string) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  detailed: Array<CartItem & { product: Product }>;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "crumb_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  const add = useCallback((slug: string, size: string) => {
    setItems((cur) => {
      const i = cur.findIndex((x) => x.slug === slug && x.size === size);
      if (i === -1) return [...cur, { slug, size, qty: 1 }];
      const next = [...cur];
      next[i] = { ...next[i], qty: next[i].qty + 1 };
      return next;
    });
  }, []);

  const remove = useCallback((slug: string, size: string) => {
    setItems((cur) => cur.filter((x) => !(x.slug === slug && x.size === size)));
  }, []);

  const setQty = useCallback((slug: string, size: string, qty: number) => {
    setItems((cur) => cur.map((x) => (x.slug === slug && x.size === size ? { ...x, qty: Math.max(1, qty) } : x)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartCtx>(() => {
    const detailed = items
      .map((it) => {
        const product = PRODUCTS.find((p) => p.slug === it.slug);
        return product ? { ...it, product } : null;
      })
      .filter(Boolean) as Array<CartItem & { product: Product }>;
    const count = detailed.reduce((s, x) => s + x.qty, 0);
    const subtotal = detailed.reduce((s, x) => s + x.qty * x.product.price, 0);
    return { items, add, remove, setQty, clear, count, subtotal, detailed };
  }, [items, add, remove, setQty, clear]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
