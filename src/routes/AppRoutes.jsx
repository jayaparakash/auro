import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Services = lazy(() => import("../pages/Services/Services.jsx"));
const Projects = lazy(() => import("../pages/projects/Projects.jsx"));
const About = lazy(()=>import("../pages/About/About.jsx"))
const Contact = lazy(()=>import("../pages/Contact/Contact.jsx"))
function PageLoader() {
  return (
    <div className="min-h-[50vh] grid place-items-center">
      <span className="loading loading-spinner loading-lg" />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/" replace />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}
