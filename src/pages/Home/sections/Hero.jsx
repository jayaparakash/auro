import Container from "../../../components/common/Container.jsx";
import HeroCarousel from "../../../components/ui/HeroCarousel.jsx";

// Replace these with your real images later (same UI will remain)
const slides = [
  {
    id: "s1",
    badge: "Restoration",
    location: "Boston, MA",
    title: "Historic Mansion\nRestoration",
    subtitle:
      "Preserving heritage with modern excellence. Complete restoration of a 1920s estate mansion, blending original craftsmanship with contemporary comfort and safety standards.",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=2200&q=80",
  },
  {
    id: "s2",
    badge: "Commercial",
    location: "Miami, FL",
    title: "Large-Scale\nCommercial Builds",
    subtitle:
      "High-performance construction management for complex projects—delivered on time, on budget, with uncompromising safety.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=80",
  },
  {
    id: "s3",
    badge: "Residential",
    location: "Aspen, CO",
    title: "Luxury Residential\nConstruction",
    subtitle:
      "Custom homes built with precision craftsmanship, smart planning, and premium finishes—engineered to last.",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2200&q=80",
  },
];

export default function Hero() {
  return (
    <section className="bg-base-100">
      <Container className="py-6 sm:py-8">
        <HeroCarousel slides={slides} />
      </Container>
    </section>
  );
}
