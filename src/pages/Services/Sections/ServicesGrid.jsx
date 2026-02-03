import { motion } from "framer-motion";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const cards = [
  {
    title: "Residential Construction",
    popular: true,
    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1800&auto=format&fit=crop",
    subtitle: "Custom homes built to your exact specifications with premium craftsmanship",
    metaL: "3-12 months",
    metaR: "$100k-$2M+",
  },
  {
    title: "Commercial Build-Outs",
    popular: false,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop",
    subtitle: "Professional commercial spaces designed for business success",
    metaL: "6-18 months",
    metaR: "$500k-$10M+",
  },
  {
    title: "Kitchen Remodeling",
    popular: true,
    img: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1800&auto=format&fit=crop",
    subtitle: "Transform your kitchen into a culinary masterpiece",
    metaL: "6-12 weeks",
    metaR: "$25k-$150k",
  },
];

const more = [
  {
    title: "Bathroom Renovation",
    img: "https://images.unsplash.com/photo-1600566753151-384129cf4e3f?q=80&w=1800&auto=format&fit=crop",
    metaL: "4-8 weeks",
    metaR: "$15k-$75k",
  },
  {
    title: "Home Additions",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1800&auto=format&fit=crop",
    metaL: "4-8 months",
    metaR: "$75k-$500k",
  },
  {
    title: "Basement Finishing",
    img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1800&auto=format&fit=crop",
    metaL: "6-12 weeks",
    metaR: "$30k-$100k",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-auro-ink">Our Services</h2>
          <p className="mt-3 text-auro-muted">
            Comprehensive construction solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((c) => (
            <ServiceCard key={c.title} {...c} />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {more.map((c) => (
            <ServiceCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, subtitle, img, popular, metaL, metaR }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="card overflow-hidden rounded-xl2 bg-white shadow-soft"
    >
      <figure className="relative h-56">
        <img src={img} alt={title} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {popular && (
          <div className="absolute right-4 top-4">
            <span className="badge border-0 bg-auro-accent2 text-black font-semibold">
              Most Popular
            </span>
          </div>
        )}
        <div className="absolute bottom-4 left-5">
          <h3 className="text-2xl font-extrabold text-white">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-white/85 max-w-[28ch]">{subtitle}</p>}
        </div>
      </figure>

      <div className="card-body">
        <div className="flex items-center justify-between text-sm text-auro-muted">
          <div className="flex items-center gap-2">
            <span>🕒</span>
            <span>{metaL}</span>
          </div>
          <div className="flex items-center gap-2 text-auro-accent font-semibold">
            <span>$</span>
            <span>{metaR}</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs tracking-wide font-bold text-auro-ink/60">KEY FEATURES</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="badge bg-auro-bg border-black/5">✓ Planning</span>
            <span className="badge bg-auro-bg border-black/5">✓ Premium Materials</span>
            <span className="badge bg-auro-bg border-black/5">✓ Quality Control</span>
          </div>
        </div>

        <div className="card-actions mt-4">
        <PrimaryButton className="w-full">View Details →</PrimaryButton>
        </div>
      </div>
    </motion.article>
  );
}
