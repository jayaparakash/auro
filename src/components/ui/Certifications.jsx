import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations/motionPresets";

const items = [
  { title: "LEED Certified", subtitle: "Green Building Council", icon: "🍃" },
  { title: "ISO 9001", subtitle: "Quality Management", icon: "✅" },
  { title: "OSHA Compliant", subtitle: "Safety Standards", icon: "🛡️" },
  { title: "BBB A+ Rating", subtitle: "Better Business Bureau", icon: "🏅" },
];

export default function Certifications() {
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {items.map((it) => (
        <motion.div
          key={it.title}
          variants={fadeInUp}
          className="bg-slate-700 text-white rounded-2xl px-6 py-8 shadow-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-warning/90 grid place-items-center text-xl">
            {it.icon}
          </div>

          <p className="mt-5 font-semibold text-lg">{it.title}</p>
          <p className="mt-1 text-white/75 text-sm">{it.subtitle}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
