import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { key: "res", label: "Residential Construction", icon: "🏠" },
  { key: "com", label: "Commercial Projects", icon: "🏢" },
  { key: "ren", label: "Renovations & Remodeling", icon: "🛠️" },
];

const rows = [
  { feature: "Typical Timeline", res: "3-12 months", com: "6-18 months" },
  { feature: "Starting Budget", res: "$100,000", com: "$500,000" },
  { feature: "Project Complexity", res: "Medium to High", com: "High" },
  { feature: "Customization Level", res: "Highly Customizable", com: "Moderate" },
  { feature: "Permit Requirements", res: "Standard Residential", com: "Commercial & Zoning" },
  { feature: "Warranty Coverage", res: "10 Years Structural", com: "5 Years Structural" },
];

const included = {
  res: [
    "Custom floor plans",
    "Material selection assistance",
    "Interior design consultation",
    "Landscaping coordination",
    "Smart home integration",
    "Energy efficiency optimization",
  ],
  com: [
    "Code compliance management",
    "ADA accessibility features",
    "Commercial HVAC systems",
    "Fire safety systems",
    "Parking lot construction",
    "Signage coordination",
  ],
};

export default function ServiceComparison() {
  const [active, setActive] = useState("res");

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
          <div className="badge bg-white/70 border border-black/5 gap-2">
            🔁 Service Comparison
          </div>
          <h2 className="mt-4 text-5xl font-extrabold text-auro-ink">Compare Our Services</h2>
          <p className="mt-3 text-auro-muted max-w-3xl mx-auto">
            Understand the differences between our service offerings to choose the perfect fit.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((t) => {
            const on = t.key === active;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={[
                  "btn rounded-full border-black/5",
                  on ? "bg-auro-brand text-white border-0 hover:bg-auro-brand/90" : "bg-white",
                ].join(" ")}
              >
                <span>{t.icon}</span>
                {t.label}
                {on && <span className="ml-1">✓</span>}
              </button>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl2 bg-white shadow-soft">
          <div className="bg-auro-bg px-6 py-5 font-semibold text-auro-ink grid grid-cols-3">
            <div>FEATURE</div>
            <div className="text-auro-brand">🏠 Residential Construction</div>
            <div className="text-auro-accent">🏢 Commercial Projects</div>
          </div>

          <div className="divide-y divide-black/5">
            {rows.map((r) => (
              <div key={r.feature} className="grid grid-cols-3 px-6 py-4 text-sm">
                <div className="text-auro-muted">{r.feature}</div>
                <div className="font-semibold text-auro-ink">{r.res}</div>
                <div className="font-semibold text-auro-ink">{r.com}</div>
              </div>
            ))}

            <div className="grid grid-cols-3 px-6 py-6">
              <div className="text-auro-muted">What&apos;s Included</div>

              <ul className="space-y-2 text-sm">
                {included.res.map((x) => (
                  <li key={x} className="flex items-center gap-2 text-auro-ink">
                    <span className="text-emerald-600">✓</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2 text-sm">
                {included.com.map((x) => (
                  <li key={x} className="flex items-center gap-2 text-auro-ink">
                    <span className="text-emerald-600">✓</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 px-6 py-6 lg:grid-cols-3 lg:items-center">
              <div className="text-auro-muted">Best For</div>
              <div className="italic text-auro-ink">
                Homeowners building dream homes or major renovations
              </div>
              <div className="italic text-auro-ink">
                Businesses needing functional commercial spaces
              </div>

              <div className="lg:col-span-3 grid gap-3 md:grid-cols-2">
                <button className="btn border-0 bg-auro-accent text-white hover:bg-auro-accent/90">
                  Get Started →
                </button>
                <button className="btn border-0 bg-auro-accent text-white hover:bg-auro-accent/90">
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="btn bg-white border-black/10 hover:bg-white/80">
            💬 Talk to Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
