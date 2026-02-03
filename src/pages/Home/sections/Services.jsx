import Container from "../../../components/common/Container.jsx";
import SectionHeader from "../../../components/common/SectionHeader.jsx";
import ServicesGrid from "../../../components/ui/ServicesGrid.jsx";

export default function Services() {
  return (
    <section className="bg-base-100">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          kicker="OUR SERVICES"
          title="Comprehensive Construction Solutions"
          subtitle="From concept to completion, we deliver exceptional construction services tailored to your vision and requirements"
        />

        <div className="mt-12">
          <ServicesGrid />
        </div>

        <div className="mt-10 flex justify-center">
          <button className="btn btn-warning rounded-xl normal-case px-8">
            View All Services
          </button>
        </div>
      </Container>
    </section>
  );
}
