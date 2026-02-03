import { serviceCards } from "../../../utils/servicesData";
import ServiceCard from "../../../components/ui/ServiceCard.jsx";

export default function ServiceCards() {
  return (
    <section className="bg-auro-bg">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-semibold text-auro-ink">Our Services</h2>
          <p className="mt-4 text-auro-muted max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs. From concept to completion,
            we deliver excellence in every project.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((it, idx) => (
            <ServiceCard key={it.id} item={it} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
