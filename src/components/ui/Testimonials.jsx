import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations/motionPresets";
import FadeIn from "../animations/FadeIn.jsx";

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-warning">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-xl leading-none">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid lg:grid-cols-2 gap-10 items-center"
    >
      {/* Left Video Card */}
      <motion.div variants={fadeInUp} className="relative">
        <div className="relative overflow-hidden rounded-2xl shadow-sm border border-base-200">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="Client Project"
            className="h-[320px] sm:h-[360px] w-full object-cover"
            loading="lazy"
          />

          {/* play button */}
          <button
            className="absolute inset-0 grid place-items-center"
            aria-label="Play testimonial"
          >
            <div className="w-20 h-20 rounded-full bg-warning/95 grid place-items-center shadow-md">
              <span className="text-white text-2xl">▶</span>
            </div>
          </button>

          {/* bottom label */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="inline-flex px-3 py-1.5 rounded-lg bg-black/60 text-white text-sm">
              Custom Luxury Villa
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Quote */}
      <motion.div variants={fadeInUp} className="lg:pl-2">
        <StarRow />

        <p className="mt-4 text-base-content/80 leading-relaxed text-base sm:text-lg">
          "ConstructPro transformed our vision into reality beyond our wildest dreams.
          Their attention to detail, commitment to quality, and transparent communication
          throughout the entire process made what could have been a stressful experience
          into an exciting journey. The craftsmanship is exceptional, and they completed
          the project ahead of schedule."
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-base-200 ring-offset-2 ring-offset-base-100">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Sarah Mitchell"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <p className="font-semibold text-base-content">Sarah Mitchell</p>
            <p className="text-sm text-base-content/60">Homeowner</p>
          </div>
        </div>

        {/* subtle divider like in screenshot */}
        <FadeIn className="mt-10 h-px bg-base-200" />
      </motion.div>
    </motion.div>
  );
}
