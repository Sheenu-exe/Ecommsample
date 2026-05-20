const items = [
  "Free shipping over $80",
  "New drop · Field Beanie",
  "Open daily · 8am to 6pm",
  "Made in small batches",
  "Crafted brews · Cozy vibes",
  "Coffee & pastries since 2021",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-foreground text-background">
      <div className="marquee flex w-max gap-12 whitespace-nowrap py-3">
        {loop.map((t, i) => (
          <span key={i} className="font-display text-sm font-500 uppercase tracking-[0.25em]">
            ✦ {t}
          </span>
        ))}
      </div>
    </div>
  );
}
