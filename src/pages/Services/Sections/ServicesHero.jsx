import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <div className="flex items-center gap-2 text-auro-accent font-medium">
              <span className="badge badge-ghost gap-2 bg-white/70 border border-black/5">
                <span>🏅</span>
                Premium Construction Services
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-auro-ink md:text-5xl">
              Residential Construction
            </h1>
            <p className="mt-2 text-xl font-semibold text-auro-brand">
              Building Dreams Into Reality
            </p>

            <p className="mt-4 text-auro-muted leading-relaxed">
              From custom homes to major renovations, we transform your vision into a living
              space that reflects your lifestyle and values.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-6 border-y border-black/5 py-6">
              <Stat value="500+" label="Homes Built" />
              <Stat value="98%" label="Client Satisfaction" />
              <Stat value="25+" label="Years Experience" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="btn border-0 bg-auro-accent text-white hover:bg-auro-accent/90">
                🧾 Get Cost Estimate
              </button>
              <button className="btn btn-outline border-black/10 text-auro-ink hover:bg-white">
                📅 Schedule Consultation
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="h-1 w-16 rounded-full bg-auro-brand" />
              <div className="h-1 w-10 rounded-full bg-black/10" />
              <div className="h-1 w-10 rounded-full bg-black/10" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1800&auto=format&fit=crop"
                alt="Residential construction"
                className="h-[320px] w-full object-cover md:h-[440px]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-auro-brand">{value}</div>
      <div className="mt-1 text-sm text-auro-muted">{label}</div>
    </div>
  );
}
