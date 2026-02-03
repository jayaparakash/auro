import React, { lazy, Suspense } from "react";

const ServicesHero = lazy(() => import("./Sections/ServicesHero"));
const ServicesGrid = lazy(() => import("./Sections/ServicesGrid"));
const Process = lazy(() => import("./Sections/Process"));
const Materials = lazy(() => import("./Sections/Materials"));
const CostEstimator = lazy(() => import("./Sections/CostEstimator"));
const ServiceComparison = lazy(() => import("./Sections/ServiceComparison"));
const ServicesCta = lazy(() => import("./Sections/ServicesCta"));

function SectionLoader() {
  return (
    <div className="py-14 grid place-items-center">
      <span className="loading loading-dots loading-lg" />
    </div>
  );
}

export default function Services() {
  return (
    <main className="bg-auro-bg">
      <Suspense fallback={<SectionLoader />}>
        <ServicesHero />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ServicesGrid />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Process />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Materials />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CostEstimator />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ServiceComparison />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ServicesCta />
      </Suspense>
    </main>
  );
}
