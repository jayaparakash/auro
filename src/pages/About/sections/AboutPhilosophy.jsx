function MiniStat({ icon, value, label }) {
    return (
      <div className="bg-white/70 border border-black/5 rounded-2xl p-8 text-center shadow-sm">
        <div className="text-3xl mb-3">{icon}</div>
        <div className="font-serif text-4xl text-[#1f2937]">{value}</div>
        <div className="mt-2 text-sm text-[#6b7280]">{label}</div>
      </div>
    );
  }
  
  export default function AboutPhilosophy() {
    return (
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-serif text-4xl text-[#1f2937]">Our Philosophy Today</h3>
            <p className="mt-5 text-[#4b5563] leading-relaxed">
              We believe that construction is more than assembling materials—it's about creating
              spaces where life happens.
            </p>
            <p className="mt-4 text-[#4b5563] leading-relaxed">
              Our approach combines traditional craftsmanship with modern innovation to deliver
              projects that stand the test of time.
            </p>
          </div>
  
          <div className="grid sm:grid-cols-2 gap-5">
            <MiniStat icon="👥" value="120+" label="Team Members" />
            <MiniStat icon="🏅" value="45+" label="Industry Awards" />
            <MiniStat icon="📍" value="15" label="States Served" />
            <MiniStat icon="📈" value="$2.5B+" label="Projects Value" />
          </div>
        </div>
      </section>
    );
  }
  