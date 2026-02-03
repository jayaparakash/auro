export default function AboutJourney() {
    return (
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-5xl text-[#1f2937]">Our Journey of Excellence</h2>
          <p className="mt-4 text-[#6b7280] max-w-3xl mx-auto">
            From humble beginnings to industry leadership, our story is one of unwavering
            commitment to quality, innovation, and the people we serve.
          </p>
  
          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center text-left">
            <div>
              <h3 className="font-serif text-3xl text-[#1f2937]">Where It All Began</h3>
              <p className="mt-4 text-[#4b5563] leading-relaxed">
                In 1995, founder James Mitchell had a simple yet powerful vision: to create a
                construction company that valued quality over quantity, relationships over
                transactions, and lasting impact over quick profits.
              </p>
              <p className="mt-4 text-[#4b5563] leading-relaxed">
                That first project taught us invaluable lessons about listening to clients,
                solving problems creatively, and never compromising on craftsmanship.
              </p>
              <p className="mt-4 text-[#4b5563] leading-relaxed">
                We didn’t chase growth—we earned it, one satisfied client at a time.
              </p>
            </div>
  
            <div className="rounded-3xl overflow-hidden shadow-xl border border-black/5">
              <img
                className="w-full h-[420px] object-cover"
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
                alt="team planning"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  