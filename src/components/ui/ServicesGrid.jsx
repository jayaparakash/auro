import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations/motionPresets";

const services = [
  {
    title: "Residential Construction",
    desc: "Custom homes and luxury residences built with precision craftsmanship and attention to every detail.",
    bullets: ["Custom Design", "Smart Home Integration", "Sustainable Materials", "Energy Efficiency"],
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80",
    icon: "🏠",
  },
  {
    title: "Commercial Projects",
    desc: "Large-scale commercial developments from office buildings to retail complexes with innovative solutions.",
    bullets: ["Project Management", "LEED Certification", "Timeline Optimization", "Budget Control"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    icon: "🏢",
  },
  {
    title: "Renovations & Remodeling",
    desc: "Transform existing spaces into modern, functional environments while preserving structural integrity.",
    bullets: ["Kitchen Remodeling", "Bathroom Upgrades", "Space Optimization", "Historic Preservation"],
    image:
      "https://images.unsplash.com/photo-1581579185169-7bfbdbd76b3f?auto=format&fit=crop&w=1600&q=80",
    icon: "🛠️",
  },
  {
    title: "Project Management",
    desc: "End-to-end construction management ensuring projects are delivered on time and within budget.",
    bullets: ["Timeline Planning", "Quality Control", "Budget Management", "Stakeholder Communication"],
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80",
    icon: "📋",
  },
];

function Bullet({ children }) {
  return (
    <div className="flex items-start gap-2 text-sm text-base-content/70">
      <span className="text-warning mt-[2px]">✔</span>
      <span>{children}</span>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      {services.map((s) => (
        <motion.div
          key={s.title}
          variants={fadeInUp}
          className="rounded-2xl border border-base-200 bg-base-100 shadow-sm overflow-hidden"
        >
          <div className="relative">
            <img
              src={s.image}
              alt={s.title}
              className="h-[220px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute left-5 bottom-5 w-12 h-12 rounded-xl bg-warning grid place-items-center text-xl text-white shadow">
              {s.icon}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-base-content/70">{s.desc}</p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {s.bullets.map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </div>

            <div className="mt-6">
              <button className="btn btn-ghost w-full rounded-xl border border-base-200 normal-case">
                Learn More →
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
