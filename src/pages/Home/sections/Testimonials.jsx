import Container from "../../../components/common/Container.jsx";
import SectionHeader from "../../../components/common/SectionHeader.jsx";
import Testimonials from "../../../components/ui/Testimonials.jsx";

export default function TestimonialsSection() {
  return (
    <section className="bg-base-100">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          kicker="Client Success Stories"
          title="What Our Clients Say"
          subtitle="Real experiences from real clients who trusted us with their construction dreams"
        />

        <div className="mt-12">
          <Testimonials />
        </div>
      </Container>
    </section>
  );
}
