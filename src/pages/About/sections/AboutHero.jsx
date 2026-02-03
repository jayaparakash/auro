export default function AboutHero() {
    return (
      <section className="px-4 pt-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div className="relative">
              {/* dotted pattern */}
              <div
                className="absolute inset-0 -z-10 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
  
              <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] text-[#1f2937]">
                Building Legacies,
                <br />
                <span className="text-[#2f5d73]">One Project</span> at a
                <br />
                Time.
              </h1>
  
              <p className="mt-6 text-[#4b5563] max-w-xl leading-relaxed">
                Since 1995, ConstructPro has been transforming visions into lasting
                structures. We don't just build—we create spaces where memories are
                made, businesses thrive, and communities grow stronger.
              </p>
            </div>
  
            {/* Right image */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-black/5">
              <div className="relative">
                <img
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
                  alt="construction"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <p className="font-serif text-2xl">Where Craftsmanship Meets Innovation</p>
                  <p className="text-white/80 mt-1 text-sm">
                    Building the future with time-tested expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  