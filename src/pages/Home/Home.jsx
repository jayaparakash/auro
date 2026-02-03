import React, { lazy, Suspense } from "react";

const Hero = lazy(() => import("./sections/Hero.jsx"));
const Stats = lazy(() => import("./sections/Stats.jsx"));
const Certified = lazy(() => import("./sections/Certified.jsx"));
const Services = lazy(() => import("./sections/Services.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));

// NEW:
const Testimonials = lazy(() => import("./sections/Testimonials.jsx"));
const Cta = lazy(() => import("./sections/Cta.jsx"));

function SectionLoader() {
  return (
    <div className="py-16 grid place-items-center">
      <span className="loading loading-spinner loading-md" />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Stats />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        {/* <Certified /> */}
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        {/* <Services /> */}
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        {/* <Projects /> */}
      </Suspense>

      {/* NEW sections */}
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Cta />
      </Suspense>
    </div>
  );
}
