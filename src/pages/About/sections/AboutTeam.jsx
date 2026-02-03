const tabs = ["All Team", "Leadership", "Project Management", "Engineering", "Safety & Quality"];

const members = [
  {
    name: "James Mitchell",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1200&auto=format&fit=crop",
    about:
      "With 35+ years in construction, James founded ConstructPro on principles of quality craftsmanship and client partnership.",
    expertise: ["Strategic Planning", "Client Relations", "Industry Leadership"],
    certs: ["Licensed General Contractor", "LEED AP", "MBA Construction Management"],
  },
  {
    name: "Sarah Chen",
    role: "Chief Operations Officer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    about:
      "Sarah brings 20 years of operational excellence to ConstructPro. She ensures every project runs smoothly from planning through completion.",
    expertise: ["Operations Management", "Process Optimization", "Team Development"],
    certs: ["PMP Certified", "Six Sigma Black Belt", "OSHA 30-Hour"],
  },
  {
    name: "Marcus Thompson",
    role: "Senior Project Manager",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
    about:
      "Marcus has successfully delivered 150+ commercial and residential projects. His attention to detail and communication skills are unmatched.",
    expertise: ["Commercial Construction", "Budget Management", "Client Relations"],
    certs: ["PMP", "CCM", "LEED Green Associate"],
  },
];

function Pill({ active, children }) {
  return (
    <button
      className={[
        "px-4 py-2 rounded-xl border text-sm",
        active
          ? "bg-[#2f5d73] text-white border-[#2f5d73]"
          : "bg-white/70 border-black/10 text-[#1f2937] hover:bg-white",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  );
}

function Card({ m }) {
  return (
    <div className="bg-white/70 border border-black/5 rounded-3xl overflow-hidden shadow-sm">
      <img className="h-56 w-full object-cover" src={m.img} alt={m.name} />
      <div className="p-6">
        <h4 className="font-serif text-2xl text-[#1f2937]">{m.name}</h4>
        <p className="text-[#2f5d73] text-sm mt-1">{m.role}</p>
        <p className="mt-4 text-[#4b5563] leading-relaxed">{m.about}</p>

        <div className="mt-5">
          <div className="font-semibold text-[#1f2937] flex items-center gap-2">
            <span>▦</span> Expertise
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {m.expertise.map((x) => (
              <span key={x} className="px-3 py-1 rounded-full bg-white border border-black/10 text-sm">
                {x}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <div className="font-semibold text-[#1f2937] flex items-center gap-2">
            <span>🏅</span> Certifications
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {m.certs.map((x) => (
              <span key={x} className="px-3 py-1 rounded-full bg-white border border-black/10 text-sm">
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutTeam() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-serif text-5xl text-[#1f2937]">Meet Our Expert Team</h3>
        <p className="mt-4 text-[#6b7280] max-w-3xl mx-auto">
          The talented professionals behind every successful ConstructPro project.
          Our team combines decades of experience with fresh perspectives.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tabs.map((t, i) => (
            <Pill key={t} active={i === 0}>
              {t}
            </Pill>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6 text-left">
          {members.map((m) => (
            <Card key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
