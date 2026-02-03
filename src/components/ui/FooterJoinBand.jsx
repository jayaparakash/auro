import { motion } from "framer-motion";
import { fadeIn } from "../animations/motionPresets";

export default function FooterJoinBand() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-2xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-slate-700 via-slate-700 to-amber-800/60 text-white px-6 sm:px-10 py-10 text-center">
        <div className="h-px bg-white/15 mb-6" />

        <p className="text-white/90">
          Join 500+ satisfied clients who trusted Auro with their construction projects
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <div className="avatar-group -space-x-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="avatar">
                <div className="w-10 rounded-full ring ring-white/20">
                  <img
                    alt="client"
                    src={`https://i.pravatar.cc/80?img=${i + 12}`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          <span className="text-white/90 text-sm">+495 more</span>
        </div>
      </div>
    </motion.div>
  );
}
