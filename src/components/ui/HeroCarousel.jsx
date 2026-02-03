import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroCarousel({ slides, interval = 4500 }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const current = slides[index];

  const variants = useMemo(
    () => ({
      enter: (dir) => ({
        x: dir > 0 ? 60 : -60,
        opacity: 0,
        scale: 0.985,
        filter: "blur(6px)",
      }),
      center: {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
          mass: 0.9,
        },
      },
      exit: (dir) => ({
        x: dir > 0 ? -40 : 40,
        opacity: 0,
        scale: 0.99,
        filter: "blur(4px)",
        transition: { duration: 0.22 },
      }),
    }),
    []
  );

  function go(nextDir) {
    setDirection(nextDir);
    setIndex((p) => {
      const n = p + nextDir;
      if (n < 0) return slides.length - 1;
      if (n >= slides.length) return 0;
      return n;
    });
  }

  useEffect(() => {
    const t = setInterval(() => go(1), interval);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, slides.length]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={current.id}
          className="relative h-[520px] sm:h-[560px] lg:h-[640px]"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            const swipe = info.offset.x;
            if (swipe < -80) go(1);
            if (swipe > 80) go(-1);
          }}
        >
          {/* Background image */}
          <img
            src={current.image}
            alt={current.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-10 lg:px-14 max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <span className="badge badge-warning badge-lg rounded-xl">
                  {current.badge}
                </span>
                <span className="text-white/80 text-sm">{current.location}</span>
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.05]">
                {current.title}
              </h1>

              <p className="mt-4 text-white/85 text-base sm:text-lg max-w-2xl">
                {current.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="btn rounded-xl bg-auro-brand hover:bg-auro-brandDark border-none text-white normal-case"
>
                  Schedule Consultation
                </button>
                <button className="btn btn-outline btn-ghost text-white border-white/35 rounded-xl normal-case">
                  View All Projects →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={() => go(-1)}
        className="btn btn-circle btn-ghost absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/45"
        aria-label="Previous"
      >
        ❮
      </button>
      <button
        onClick={() => go(1)}
        className="btn btn-circle btn-ghost absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/45"
        aria-label="Next"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-3 py-2 rounded-full">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-warning" : "w-3 bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
