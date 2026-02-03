import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const categories = [
  { key: "flooring", label: "Flooring", icon: "🧱" },
  { key: "countertops", label: "Countertops", icon: "⬜" },
  { key: "cabinets", label: "Cabinets", icon: "📦" },
  { key: "fixtures", label: "Fixtures", icon: "💡" },
  { key: "exterior", label: "Exterior", icon: "🏠" },
];

const data = {
  flooring: [
    { name: "Hardwood Oak", type: "Natural Wood", price: "$8-12/sq ft", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1800&auto=format&fit=crop", d: 4, m: 4, i: 3 },
    { name: "Porcelain Tile", type: "Ceramic", price: "$5-10/sq ft", img: "https://images.unsplash.com/photo-1556912167-f556f1f39df8?q=80&w=1800&auto=format&fit=crop", d: 4, m: 4, i: 5 },
    { name: "Luxury Vinyl Plank", type: "Synthetic", price: "$3-7/sq ft", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1800&auto=format&fit=crop", d: 4, m: 3, i: 4 },
  ],
};

export default function Materials() {
  const [cat, setCat] = useState("flooring");
  const items = useMemo(() => data[cat] ?? [], [cat]);

  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <div className="badge bg-white/70 border border-black/5 gap-2 text-auro-accent font-semibold">
            🎨 Material Selection
          </div>
          <h2 className="mt-4 text-5xl font-extrabold text-auro-ink">Explore Premium Materials</h2>
          <p className="mt-3 text-auro-muted max-w-3xl mx-auto">
            Compare materials, understand their properties, and make informed decisions for your project.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((c) => {
            const active = c.key === cat;
            return (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={[
                  "btn rounded-full border-black/5",
                  active
                    ? "bg-auro-brand text-white hover:bg-auro-brand/90 border-0"
                    : "bg-white hover:bg-white/80",
                ].join(" ")}
              >
                <span>{c.icon}</span>
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between text-sm text-auro-muted">
          <span>{items.length} options available</span>
          <button className="btn btn-sm bg-white border-black/5 hover:bg-white/80">
            🔀 Compare (0/3)
          </button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((x) => (
            <MaterialCard key={x.name} item={x} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Dots({ value, total = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={[
            "h-2 w-2 rounded-full",
            i < value ? "bg-emerald-600" : "bg-black/10",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

function MaterialCard({ item }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="rounded-xl2 bg-white shadow-soft overflow-hidden"
    >
      <img src={item.img} alt={item.name} className="h-64 w-full object-cover" loading="lazy" />

      <div className="p-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-xl font-extrabold text-auro-ink">{item.name}</div>
            <div className="text-sm text-auro-muted">{item.type}</div>
          </div>
          <div className="text-sm font-bold text-auro-accent">{item.price}</div>
        </div>

        <div className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-auro-muted">Durability</span>
            <Dots value={item.d} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-auro-muted">Maintenance</span>
            <Dots value={item.m} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-auro-muted">Installation</span>
            <Dots value={item.i} total={6} />
          </div>
        </div>

        <button className="btn mt-6 w-full border-0 bg-auro-accent text-white hover:bg-auro-accent/90">
          Select Material
        </button>
      </div>
    </motion.article>
  );
}
