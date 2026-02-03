import FadeIn from "../animations/FadeIn.jsx";

export default function StatStrip() {
  const items = [
    { value: "30+ Years", label: "Industry Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "4.9/5", label: "Client Satisfaction" },
    { value: "100%", label: "Licensed & Insured" },
  ];

  return (
    <FadeIn className="bg-slate-700 text-white rounded-2xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
        {items.map((it) => (
          <div key={it.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-semibold">{it.value}</div>
            <div className="mt-2 text-white/80 text-sm">{it.label}</div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
