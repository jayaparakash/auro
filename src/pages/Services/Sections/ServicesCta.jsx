import { motion } from "framer-motion";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const tiles = [
  { title: "25+ Years Experience", sub: "Proven track record of excellence", icon: "🏅" },
  { title: "Expert Team", sub: "Licensed and certified professionals", icon: "👥" },
  { title: "Quality Guarantee", sub: "Comprehensive warranty coverage", icon: "🛡️" },
  { title: "On-Time Delivery", sub: "98% projects completed on schedule", icon: "⏱️" },
];

export default function ServicesCta() {
  return (
    <section className="pt-10">
      <div className="bg-auro-brand/95">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="text-center text-white"
          >
            <h3 className="text-5xl font-extrabold">Ready to Start Your Project?</h3>
            <p className="mt-3 text-white/85">
              Let&apos;s transform your vision into reality. Schedule a free consultation today.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {tiles.map((t) => (
              <div key={t.title} className="rounded-xl2 bg-white/10 p-6 text-white">
                <div className="h-14 w-14 rounded-full bg-white/10 grid place-items-center text-2xl">
                  {t.icon}
                </div>
                <div className="mt-4 font-extrabold text-lg">{t.title}</div>
                <div className="mt-1 text-sm text-white/80">{t.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PrimaryButton>📅 Schedule Free Consultation</PrimaryButton>
             
            <button className="btn bg-white text-auro-brand border-0 hover:bg-white/90">
              📞 Call (555) 123-4567
            </button>
          </div>

          <div className="mt-6 text-center text-white/80 text-sm">
            ✅ No obligation • Free estimates • Licensed & insured
          </div>
        </div>
      </div>
    </section>
  );
}
