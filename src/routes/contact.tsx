import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Crumb Club" },
      { name: "description", content: "Visit the café, drop us a line, or become a stockist." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="border-b-2 border-foreground pb-8">
        <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <Link to="/">Home</Link> / Contact
        </span>
        <h1 className="mt-2 font-display text-6xl font-700 md:text-7xl">Say hi.</h1>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch."); }}>
          <div>
            <label className="font-display text-xs uppercase tracking-widest">Name</label>
            <input required className="mt-2 h-12 w-full rounded-full border-2 border-foreground bg-card px-5 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="font-display text-xs uppercase tracking-widest">Email</label>
            <input required type="email" className="mt-2 h-12 w-full rounded-full border-2 border-foreground bg-card px-5 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="font-display text-xs uppercase tracking-widest">Topic</label>
            <select className="mt-2 h-12 w-full rounded-full border-2 border-foreground bg-card px-5 focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Order question</option>
              <option>Wholesale / stockist</option>
              <option>Press</option>
              <option>Just saying hi</option>
            </select>
          </div>
          <div>
            <label className="font-display text-xs uppercase tracking-widest">Message</label>
            <textarea required rows={6} className="mt-2 w-full rounded-2xl border-2 border-foreground bg-card px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <button className="btn-stamp">Send message</button>
        </form>

        <aside className="space-y-6">
          <div className="rounded-3xl border-2 border-foreground bg-primary p-8 text-primary-foreground stamp-shadow">
            <h2 className="font-display text-3xl">Crumb Club HQ</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4" /> 123 Anywhere St., Any City, ST 12345</li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4" /> Open daily · 8am to 6pm</li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4" /> hello@crumbclub.com</li>
            </ul>
          </div>

          <div className="paper-grain rounded-3xl border-2 border-foreground bg-card p-8 stamp-shadow">
            <h3 className="font-display text-2xl">Wholesale</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              We work with a small number of independent shops, cafés, and concept stores. Drop us a line with your shop name and Instagram.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
