function SafetyCard({ title, desc, icon }) {
    return (
      <div className="bg-white/70 border border-black/5 rounded-2xl p-6 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 grid place-items-center text-xl">
          {icon}
        </div>
        <div>
          <div className="font-serif text-xl text-[#1f2937]">{title}</div>
          <div className="text-[#6b7280] text-sm mt-1">{desc}</div>
        </div>
      </div>
    );
  }
  
  export default function AboutSafety() {
    return (
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="font-serif text-5xl text-[#1f2937]">Safety First, Always</h3>
            <p className="mt-4 text-[#6b7280] max-w-3xl mx-auto">
              Our commitment to safety goes beyond compliance—it's a core value that protects our team,
              our clients, and everyone who steps onto our job sites.
            </p>
          </div>
  
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white/70 border border-black/5 rounded-2xl p-8 text-center shadow-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <div className="font-serif text-4xl text-[#1f2937]">0</div>
              <div className="font-semibold mt-2">Lost Time Incidents (2025)</div>
              <div className="text-sm text-[#6b7280] mt-2">Perfect safety record maintained through rigorous protocols</div>
            </div>
  
            <div className="bg-white/70 border border-black/5 rounded-2xl p-8 text-center shadow-sm">
              <div className="text-3xl mb-3">🏅</div>
              <div className="font-serif text-4xl text-[#1f2937]">15+</div>
              <div className="font-semibold mt-2">Safety Certifications</div>
              <div className="text-sm text-[#6b7280] mt-2">Industry-leading safety credentials and training programs</div>
            </div>
  
            <div className="bg-white/70 border border-black/5 rounded-2xl p-8 text-center shadow-sm">
              <div className="text-3xl mb-3">👥</div>
              <div className="font-serif text-4xl text-[#1f2937]">100%</div>
              <div className="font-semibold mt-2">Team Training Compliance</div>
              <div className="text-sm text-[#6b7280] mt-2">Every member receives comprehensive safety education</div>
            </div>
  
            <div className="bg-white/70 border border-black/5 rounded-2xl p-8 text-center shadow-sm">
              <div className="text-3xl mb-3">✅</div>
              <div className="font-serif text-4xl text-[#1f2937]">Daily</div>
              <div className="font-semibold mt-2">Safety Inspections</div>
              <div className="text-sm text-[#6b7280] mt-2">Proactive monitoring ensures continuous compliance</div>
            </div>
          </div>
  
          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h4 className="font-serif text-4xl text-[#1f2937]">Our Safety Protocols</h4>
  
              <div className="mt-6 space-y-4">
                <SafetyCard
                  icon="📋"
                  title="Pre-Project Safety Planning"
                  desc="Comprehensive risk assessment and mitigation strategies developed before work begins"
                />
                <SafetyCard
                  icon="💬"
                  title="Daily Safety Briefings"
                  desc="Morning toolbox talks address site-specific hazards and reinforce best practices"
                />
                <SafetyCard
                  icon="⛑️"
                  title="Personal Protective Equipment"
                  desc="Top-quality PPE provided and mandatory for all personnel on every job site"
                />
                <SafetyCard
                  icon="👁️"
                  title="Continuous Monitoring"
                  desc="Dedicated safety officers and ongoing inspections throughout the build"
                />
              </div>
            </div>
  
            <div className="rounded-3xl overflow-hidden shadow-xl border border-black/5">
              <div className="relative">
                <img
                  className="w-full h-[520px] object-cover"
                  src="https://images.unsplash.com/photo-1581091870632-7b7b1d5b4d6c?q=80&w=1600&auto=format&fit=crop"
                  alt="safety"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="font-serif text-2xl">Safety is Non-Negotiable</div>
                  <div className="text-white/85 mt-1 text-sm">Every person goes home safe, every day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  