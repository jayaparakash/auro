function ValueBox({ value, label }) {
    return (
      <div className="bg-white/10 border border-white/15 rounded-2xl p-8 text-center">
        <div className="font-serif text-5xl text-white">{value}</div>
        <div className="mt-2 text-white/80 text-sm">{label}</div>
      </div>
    );
  }
  
  export default function AboutValues() {
    return (
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-[#2f5d73] to-[#93b4c4] p-10 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="font-serif text-5xl text-white">Living Our Values Every Day</h3>
                  <p className="mt-5 text-white/90 leading-relaxed">
                    Our values aren’t abstract concepts—they’re actionable commitments that shape
                    how we work, communicate, and deliver results.
                  </p>
                  <p className="mt-4 text-white/90 leading-relaxed">
                    You’re partnering with a team that respects your investment and takes pride in
                    exceeding expectations.
                  </p>
                </div>
  
                <div className="grid sm:grid-cols-2 gap-5">
                  <ValueBox value="100%" label="Client Retention Rate" />
                  <ValueBox value="Zero" label="Safety Incidents (2025)" />
                  <ValueBox value="95%" label="On-Time Delivery" />
                  <ValueBox value="4.9/5" label="Average Rating" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  