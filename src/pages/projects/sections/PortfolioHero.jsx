import React from "react";

export default function PortfolioHero() {
  const stats = [
    { value: "250+", label: "Completed Projects" },
    { value: "180+", label: "Happy Clients" },
    { value: "45", label: "Industry Awards" },
    { value: "98%", label: "Success Rate" },
  ];

  return (
    <section className="text-center">
      <h1 className="font-serif text-4xl md:text-6xl font-semibold text-[#1a1a1a]">
        Our Project Portfolio
      </h1>

      <p className="mx-auto mt-4 max-w-3xl text-base md:text-lg text-[#5a5a5a] leading-relaxed">
        Explore our collection of completed projects that showcase our commitment to quality,
        innovation, and client satisfaction. Each project tells a unique story of transformation and excellence.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-[#f6f2ea] p-10 shadow-sm border border-black/5"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black/5">
              <span className="text-xl">🏗️</span>
            </div>
            <div className="font-serif text-4xl font-semibold text-[#1a1a1a]">{s.value}</div>
            <div className="mt-2 text-sm text-[#6b6b6b]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
