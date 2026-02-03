import { motion } from "framer-motion";

function Dots({ value = 3 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < value ? "bg-green-700" : "bg-black/10"
          }`}
        />
      ))}
    </div>
  );
}

export default function MaterialCard({ item, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="rounded-3xl bg-auro-bg border border-black/5 shadow-sm overflow-hidden"
    >
      <img
        src={item.image}
        alt={item.name}
        className="h-[260px] w-full object-cover"
        loading="lazy"
      />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">{item.name}</h3>
            <p className="text-auro-muted text-sm">{item.type}</p>
          </div>
          <p className="text-auro-brand font-semibold">{item.price}</p>
        </div>

        <div className="mt-5 space-y-3 text-sm text-auro-ink/75">
          <div className="flex items-center justify-between">
            <span>Durability</span>
            <Dots value={item.ratings.durability} />
          </div>
          <div className="flex items-center justify-between">
            <span>Maintenance</span>
            <Dots value={item.ratings.maintenance} />
          </div>
          <div className="flex items-center justify-between">
            <span>Cost</span>
            <Dots value={item.ratings.cost} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
