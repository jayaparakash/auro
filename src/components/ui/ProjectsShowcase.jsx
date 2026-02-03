import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations/motionPresets";

const all = [
  {
    id: "p1",
    category: "Residential",
    title: "Mountain Retreat",
    location: "Aspen, CO",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    sqft: "5,800 sq ft",
    rating: 5,
  },
  {
    id: "p2",
    category: "Commercial",
    title: "Retail Plaza",
    location: "Miami, FL",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    sqft: "32,000 sq ft",
    rating: 5,
  },
  {
    id: "p3",
    category: "Restoration",
    title: "Historic Bank Conversion",
    location: "Boston, MA",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1529421308418-eab98863cee5?auto=format&fit=crop&w=1600&q=80",
    sqft: "12,000 sq ft",
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="text-warning flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function ProjectsShowcase() {
  const tabs = ["All Projects", "Residential", "Commercial", "Restoration"];
  const [active, setActive] = useState("All Projects");

  const filtered = useMemo(() => {
    if (active === "All Projects") return all;
    return all.filter((p) => p.category === active);
  }, [active]);

  return (
    <div>
      {/* Filter pills */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {tabs.map((t) => {
          const on = t === active;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`btn rounded-full normal-case px-6 ${
                on ? "btn-warning" : "btn-ghost border border-base-200"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        {filtered.map((p) => (
          <motion.div
            key={p.id}
            variants={fadeInUp}
            className="rounded-2xl overflow-hidden border border-base-200 bg-base-100 shadow-sm"
          >
            <div className="relative">
              <img
                src={p.image}
                alt={p.title}
                className="h-[240px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 badge badge-warning rounded-full px-4 py-3">
                {p.category}
              </div>

              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-2xl font-semibold drop-shadow">{p.title}</p>
                <div className="mt-1 text-white/85 text-sm flex gap-3">
                  <span>📍 {p.location}</span>
                  <span>📅 {p.year}</span>
                </div>
              </div>
            </div>

            <div className="p-5">
              <p className="text-base-content/70 text-sm">
                Contemporary project showcasing premium materials, efficient planning, and modern design.
              </p>

              <div className="mt-4 flex items-center justify-between text-sm text-base-content/70">
                <span>↗ {p.sqft}</span>
                <Stars count={p.rating} />
              </div>

              <div className="mt-5">
                <button className="btn btn-ghost w-full rounded-xl border border-base-200 normal-case">
                  View Details →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
