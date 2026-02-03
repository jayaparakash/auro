import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations/motionPresets";

const features = [
  { title: "Free Consultation", desc: "30-minute project assessment", icon: "🕒" },
  { title: "Detailed Quote", desc: "Transparent pricing breakdown", icon: "📄" },
  { title: "Flexible Scheduling", desc: "Work around your timeline", icon: "📅" },
  { title: "Quality Guarantee", desc: "100% satisfaction promise", icon: "🛡️" },
];

export default function CtaBlock() {
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-2xl overflow-hidden"
    >
      <div className="relative bg-slate-700 text-white">
        {/* subtle right warm glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-700 to-amber-800/40 pointer-events-none" />

        <div className="relative px-6 sm:px-10 lg:px-14 py-14 sm:py-16 text-center">
          <motion.h3 variants={fadeInUp} className="text-4xl sm:text-5xl font-semibold">
            Ready to Start Your Project?
          </motion.h3>

          <motion.p variants={fadeInUp} className="mt-4 text-white/80 max-w-3xl mx-auto">
            Transform your vision into reality with Auro. Schedule a free consultation today and
            discover how we can bring your construction dreams to life.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="btn btn-warning rounded-xl normal-case">
              📅 Schedule Free Consultation
            </button>

            <button className="btn btn-outline border-white/35 text-white hover:bg-white/10 rounded-xl normal-case">
              📞 Call (555) 123-4567
            </button>
          </motion.div>

          {/* Feature cards row */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white/10 border border-white/10 rounded-2xl px-6 py-7 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-warning/90 grid place-items-center text-xl">
                  {f.icon}
                </div>
                <p className="mt-5 text-lg font-semibold">{f.title}</p>
                <p className="mt-2 text-sm text-white/80">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
