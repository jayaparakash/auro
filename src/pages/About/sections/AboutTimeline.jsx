const items = [
    { year: "1995", title: "Foundation Built", desc: "Started with a vision to bring quality craftsmanship to residential construction", icon: "🏢" },
    { year: "2003", title: "Commercial Expansion", desc: "Expanded services to include large-scale commercial projects and renovations", icon: "🏬" },
    { year: "2012", title: "Green Building Pioneer", desc: "Became certified in sustainable construction practices and LEED standards", icon: "🌿" },
  ];
  
  function Card({ icon, title, desc, year }) {
    return (
      <div className="bg-white/70 border border-black/5 rounded-2xl p-6 shadow-sm flex items-center gap-5">
        <div className="w-12 h-12 rounded-full bg-[#2f5d73] text-white grid place-items-center text-xl">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="font-serif text-2xl text-[#1f2937]">{title}</h4>
          <p className="mt-1 text-[#6b7280]">{desc}</p>
        </div>
        <div className="font-serif text-xl text-[#2f5d73]">{year}</div>
      </div>
    );
  }
  
  export default function AboutTimeline() {
    return (
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-6">
          {items.map((it) => (
            <Card key={it.year} {...it} />
          ))}
        </div>
      </section>
    );
  }
  