export type Product = {
  slug: string;
  name: string;
  price: number;
  category: "Tees" | "Hoodies" | "Hats" | "Accessories";
  color: string; // tailwind-ish background for mock
  ink: string;
  blurb: string;
  description: string;
  sizes: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "crumb-mascot-tee",
    name: "Mascot Tee",
    price: 38,
    category: "Tees",
    color: "var(--primary)",
    ink: "var(--cream)",
    blurb: "Heavyweight cotton, signature croissant print.",
    description:
      "A 240gsm heavyweight cotton tee with a hand-drawn screen print of our running croissant. Boxy fit, dropped shoulder. Pre-shrunk and built to outlive the trend cycle.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "club-hoodie",
    name: "Club Hoodie",
    price: 89,
    category: "Hoodies",
    color: "var(--cream)",
    ink: "var(--primary)",
    blurb: "Brushed fleece. Embroidered chest mark.",
    description:
      "A 450gsm brushed fleece hoodie with a tonal embroidered chest mark. Self-fabric drawcord, kangaroo pocket, ribbed cuffs. Wears in beautifully.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "bakers-cap",
    name: "Baker's Cap",
    price: 32,
    category: "Hats",
    color: "var(--accent)",
    ink: "var(--cream)",
    blurb: "Unstructured 6-panel. Garment dyed.",
    description:
      "A washed cotton 6-panel cap with brass slide-buckle closure. Soft crown, curved brim, woven label at the back.",
    sizes: ["One Size"],
  },
  {
    slug: "crumb-tote",
    name: "Crumb Tote",
    price: 22,
    category: "Accessories",
    color: "var(--primary)",
    ink: "var(--cream)",
    blurb: "Heavy canvas. Big enough for groceries.",
    description:
      "A 14oz natural canvas tote with reinforced straps. Roomy enough for a baguette, two pastries, and your laptop.",
    sizes: ["One Size"],
  },
  {
    slug: "logotype-crewneck",
    name: "Logotype Crewneck",
    price: 78,
    category: "Hoodies",
    color: "var(--cream)",
    ink: "var(--accent)",
    blurb: "Heavyweight crew. Front logotype print.",
    description:
      "A 380gsm loopback cotton crewneck with our outlined logotype across the chest. Relaxed fit, ribbed hem and cuffs.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "cc-monogram-tee",
    name: "CC Monogram Tee",
    price: 36,
    category: "Tees",
    color: "var(--accent)",
    ink: "var(--cream)",
    blurb: "Submark print, classic fit.",
    description:
      "Classic-fit 200gsm cotton tee with the CC submark printed large at the back. Pairs with everything.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "field-beanie",
    name: "Field Beanie",
    price: 28,
    category: "Hats",
    color: "var(--primary)",
    ink: "var(--cream)",
    blurb: "Ribbed knit, woven label.",
    description:
      "Soft acrylic ribbed beanie with a folded cuff and woven label. Warm without the itch.",
    sizes: ["One Size"],
  },
  {
    slug: "club-socks",
    name: "Club Socks",
    price: 14,
    category: "Accessories",
    color: "var(--cream)",
    ink: "var(--primary)",
    blurb: "Crew length. Terry footbed.",
    description:
      "Crew-length cotton blend socks with a terry footbed and woven Crumb Club logo. Sold as a single pair.",
    sizes: ["One Size"],
  },
];

export const getProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);
