import Container from "../../../components/common/Container.jsx";
import SectionHeader from "../../../components/common/SectionHeader.jsx";
import ProjectsShowcase from "../../../components/ui/ProjectsShowcase.jsx";

export default function Projects() {
  return (
    <section className="bg-base-100">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          kicker="OUR PORTFOLIO"
          title="Featured Projects"
          subtitle="Explore our diverse portfolio of completed projects showcasing our expertise across residential, commercial, and restoration work"
        />

        <ProjectsShowcase />
      </Container>
    </section>
  );
}
