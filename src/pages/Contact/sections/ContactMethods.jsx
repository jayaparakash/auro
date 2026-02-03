const methods = [
    {
      title: "Project Inquiry Form",
      desc:
        "Submit detailed information about your project. Perfect for planned construction, renovations, or general inquiries. We'll respond within 24 hours.",
      icon: "💬",
      badge: null,
      btnText: "Start Form →",
      variant: "normal",
    },
    {
      title: "Virtual Consultation",
      desc:
        "Schedule a free 30-minute video call with our experts. Discuss your project, get initial advice, and explore possibilities from home.",
      icon: "🎥",
      badge: null,
      btnText: "Book Video Call →",
      variant: "normal",
    },
    {
      title: "Call Us Directly",
      desc:
        "Speak with our team immediately. Best for quick questions, urgent matters, or if you prefer personal conversation over forms.",
      icon: "📞",
      badge: null,
      btnText: "View Phone Numbers →",
      variant: "normal",
    },
    {
      title: "Emergency Services",
      desc:
        "Structural damage, water leaks, or safety hazards? Our 24/7 emergency response team is standing by to help immediately.",
      icon: "⚠️",
      badge: "Top Priority",
      btnText: "Emergency Hotline →",
      variant: "highlight",
    },
  ];
  
  export default function ContactMethods() {
    return (
      <section className="pb-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-serif text-5xl text-[#2c2c2c]">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-center mt-3 text-[#6b6b6b] max-w-2xl mx-auto">
            We offer multiple ways to connect based on your needs and preferences.
            Select the option that works best for you.
          </p>
  
          <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            {methods.map((m) => (
              <div
                key={m.title}
                className={`rounded-3xl p-8 shadow-sm border ${
                  m.variant === "highlight"
                    ? "bg-white border-[#a85b34]"
                    : "bg-white/70 border-black/5"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#f2efe8] grid place-items-center text-2xl">
                    {m.icon}
                  </div>
                  {m.badge && (
                    <span className="badge bg-[#a85b34] border-0 text-white px-3 py-3 rounded-xl">
                      {m.badge}
                    </span>
                  )}
                </div>
  
                <h3 className="mt-6 font-serif text-2xl text-[#2c2c2c]">{m.title}</h3>
                <p className="mt-3 text-[#6b6b6b] text-sm leading-7">{m.desc}</p>
  
                <div className="mt-8">
                  <button
                    className={`btn w-full rounded-xl border-0 ${
                      m.variant === "highlight"
                        ? "bg-[#a85b34] text-white hover:bg-[#944f2d]"
                        : "bg-white text-[#1f2937] border border-black/10 hover:bg-white"
                    }`}
                  >
                    {m.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  