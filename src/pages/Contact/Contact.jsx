import React, { lazy, Suspense } from "react";

const ContactHero = lazy(() => import("./sections/ContactHero.jsx"));
const EmergencyBanner = lazy(() => import("./sections/EmergencyBanner.jsx"));
const ContactMethods = lazy(() => import("./sections/ContactMethods.jsx"));
const ContactFormAndMap = lazy(() => import("./sections/ContactFormAndMap.jsx"));
const ContactFAQ = lazy(() => import("./sections/ContactFAQ.jsx"));
const ContactCTA = lazy(() => import("./sections/ContactCTA.jsx"));

function Loader() {
  return (
    <div className="py-14 grid place-items-center">
      <span className="loading loading-spinner loading-lg" />
    </div>
  );
}

export default function Contact() {
  return (
    <main className="bg-[#f6f4ef]">
      <Suspense fallback={<Loader />}>
        <ContactHero />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <EmergencyBanner />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <ContactMethods />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <ContactFormAndMap />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <ContactFAQ />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <ContactCTA />
      </Suspense>
    </main>
  );
}
