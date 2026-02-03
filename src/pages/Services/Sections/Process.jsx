import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Initial Consultation",
    time: "1-2 Days",
    desc: "We begin with a comprehensive consultation to understand your vision, requirements, budget, and timeline.",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde16?q=80&w=1800&auto=format&fit=crop",
    included: ["Site assessment and measurements", "Budget discussion and planning", "Timeline expectations review", "Material preferences exploration"],
  },
  {
    title: "Design & Planning",
    time: "1-3 Weeks",
    desc: "Detailed plans, 3D visualizations, and collaboration to refine every detail.",
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1800&auto=format&fit=crop",
    included: ["Architectural drawings", "3D visualization", "Engineering review", "Final scope approval"],
  },
  {
    title: "Permits & Approvals",
    time: "2-4 Weeks",
    desc: "We handle permit applications and approvals, ensuring compliance with local regulations.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1800&auto=format&fit=crop",
    included: ["Permit filing", "Code compliance checks", "HOA coordination (if needed)", "Inspection scheduling"],
  },
  {
    title: "Construction Phase",
    time: "Varies by Project",
    desc: "Skilled craftsmen bring the project to life with regular updates and quality checkpoints.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1800&auto=format&fit=crop",
    included: ["Daily site management", "Quality control", "Progress updates", "Safety compliance"],
  },
  {
    title: "Quality Inspection",
    time: "3-5 Days",
    desc: "Rigorous quality checks ensure every aspect meets our standards and your expectations.",
    img: "https://images.unsplash.com/photo-1581579186989-0f4ad1f6c1b3?q=80&w=1800&auto=format&fit=crop",
    included: ["Punch list review", "Fixes & refinements", "Final cleaning", "Documentation prep"],
  },
  {
    title: "Final Walkthrough & Handover",
    time: "1 Day",
    desc: "We walkthrough systems and features. You receive documentation, warranties and maintenance guides.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1800&auto=format&fit=crop",
    included: ["Client walkthrough", "Warranty handover", "Maintenance guidance", "Project closeout"],
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const current = useMemo(() => steps[active], [active]);

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
            <span>🔗</span> Our Process
          </div>
          <h2 className="mt-4 text-5xl font-extrabold text-auro-ink">From Vision to Reality</h2>
          <p className="mt-3 text-auro-muted max-w-3xl mx-auto">
            Our proven six-step process ensures your project is completed on time, within budget,
            and exceeds expectations at every stage.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* LEFT LIST */}
          <div className="space-y-2">
            {steps.map((s, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(idx)}
                  className={[
                    "w-full text-left rounded-xl2 border transition p-5",
                    isActive
                      ? "bg-white border-auro-brand shadow-soft"
                      : "bg-white/60 border-black/5 hover:bg-white",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-extrabold text-xl text-auro-ink">{s.title}</div>
                      <p className="mt-1 text-sm text-auro-muted line-clamp-2">{s.desc}</p>
                    </div>
                    <div className="text-sm text-auro-muted whitespace-nowrap">{s.time}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT DETAIL */}
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-xl2 bg-white shadow-soft overflow-hidden"
          >
            <div className="relative">
              <img
                src={current.img}
                alt={current.title}
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute left-4 bottom-4">
                <span className="badge bg-white/75 border-0">Step {active + 1} of 6</span>
                <div className="mt-2 text-3xl font-extrabold text-white">{current.title}</div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-auro-muted leading-relaxed">{current.desc}</p>

              <div className="mt-6 text-sm font-bold text-auro-ink/70">WHAT&apos;S INCLUDED</div>
              <ul className="mt-3 space-y-2">
                {current.included.map((x) => (
                  <li key={x} className="flex items-center gap-3 text-auro-muted">
                    <span className="text-green-600">✅</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
