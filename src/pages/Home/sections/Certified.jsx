import Container from "../../../components/common/Container.jsx";
import SectionHeader from "../../../components/common/SectionHeader.jsx";
import Certifications from "../../../components/ui/Certifications.jsx";

export default function Certified() {
  return (
    <section className="bg-base-100">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          kicker=""
          title="Certified Excellence"
          subtitle="Our certifications and accreditations demonstrate our commitment to quality, safety, and industry best practices"
        />

        <div className="mt-10">
          <Certifications />
        </div>
      </Container>
    </section>
  );
}
