function Stat({ value, label }) {
    return (
      <div className="text-center">
        <div className="font-serif text-4xl text-[#1f2937]">{value}</div>
        <div className="mt-2 text-sm text-[#6b7280]">{label}</div>
      </div>
    );
  }
  
  export default function AboutStats() {
    return (
      <section className="px-4 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white/70 border border-black/5 rounded-3xl p-8 shadow-sm">
            <Stat value="29+" label="Years Experience" />
            <Stat value="850+" label="Projects Completed" />
            <Stat value="98%" label="Client Satisfaction" />
          </div>
        </div>
      </section>
    );
  }
  