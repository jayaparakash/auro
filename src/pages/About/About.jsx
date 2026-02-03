import React, { lazy, Suspense } from "react";

const AboutHero = lazy(() => import("./sections/AboutHero.jsx"));
const AboutStats = lazy(() => import("./sections/AboutStats.jsx"));
const AboutJourney = lazy(() => import("./sections/AboutJourney.jsx"));
const AboutTimeline = lazy(() => import("./sections/AboutTimeline.jsx"));
const AboutPhilosophy = lazy(() => import("./sections/AboutPhilosophy.jsx"));
const AboutValues = lazy(() => import("./sections/AboutValues.jsx"));
const AboutTeam = lazy(() => import("./sections/AboutTeam.jsx"));
const AboutSafety = lazy(() => import("./sections/AboutSafety.jsx"));

function SectionLoader() {
  return (
    <div className="py-16 grid place-items-center">
      <span className="loading loading-spinner loading-md" />
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#f6f3ef]">
      <Suspense fallback={<SectionLoader />}>
        <AboutHero />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutStats />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutJourney />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutTimeline />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutPhilosophy />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutValues />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutTeam />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutSafety />
      </Suspense>
    </div>
  );
}
