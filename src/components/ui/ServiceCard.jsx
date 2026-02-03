import { motion } from "framer-motion";

export default function ServiceCard({ item, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="rounded-3xl bg-auro-bg border border-black/5 shadow-sm overflow-hidden"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-[260px] w-full object-cover rounded-t-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        {item.tag ? (
          <div className="absolute top-4 right-4">
            <span className="badge rounded-full bg-[#D6B04E] text-black border-none px-4 py-3 font-semibold">
              {item.tag}
            </span>
          </div>
        ) : null}

        <div className="absolute left-6 bottom-5 text-white">
          <h3 className="text-3xl font-semibold">{item.title}</h3>
          <p className="text-white/85 text-sm mt-1">
            {item.desc.slice(0, 52)}...
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-auro-muted">
          <div className="flex items-center gap-2">
            <span className="opacity-70">🕒</span>
            <span>{item.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-70">💲</span>
            <span className="text-auro-brand font-semibold">{item.budget}</span>
          </div>
        </div>

        <p className="mt-4 text-auro-ink/80 leading-relaxed">{item.desc}</p>

        <div className="mt-5">
          <p className="text-xs font-semibold tracking-wider text-auro-ink/60">
            KEY FEATURES
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.features.map((f) => (
              <span
                key={f}
                className="badge badge-outline rounded-full px-3 py-3 text-auro-ink/70 border-black/10 bg-white/50"
              >
                ✓ {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
