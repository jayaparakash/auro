 
    const cities = [
        { name: "Tirupati", sub: "Primary Service Area" },
        { name: "Renigunta", sub: "15 km" },
        { name: "Chandragiri", sub: "12 km" },
        { name: "Srikalahasti", sub: "36 km" },
        { name: "Puttur", sub: "40 km" },
        { name: "Chittoor", sub: "65 km" },
      ];
      
 
  
  // ✅ Google map embed (you can change later)
 
  const MAP_EMBED_URL = "https://www.google.com/maps?q=Tirupati,+Andhra+Pradesh,+India&output=embed";
  
  export default function ContactFormAndMap() {
    return (
      <section className="pb-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* LEFT FORM */}
            <div className="lg:col-span-2 rounded-3xl bg-white/70 border border-black/5 shadow-sm p-8">
              <h3 className="font-serif text-3xl text-[#2c2c2c]">Start Your Project</h3>
              <p className="mt-2 text-[#6b6b6b]">
                Fill out the form below and our team will get back to you within 24 hours.
                For urgent matters, please call our emergency hotline.
              </p>
  
              <form className="mt-8 grid md:grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Full Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="input input-bordered rounded-xl bg-white"
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email Address *</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john.smith@example.com"
                    className="input input-bordered rounded-xl bg-white"
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="input input-bordered rounded-xl bg-white"
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Project Type *</span>
                  </label>
                  <select className="select select-bordered rounded-xl bg-white">
                    <option>Select project type</option>
                    <option>Residential Construction</option>
                    <option>Commercial Projects</option>
                    <option>Renovations & Remodeling</option>
                    <option>Project Management</option>
                    <option>Emergency Repair</option>
                  </select>
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Estimated Budget</span>
                  </label>
                  <select className="select select-bordered rounded-xl bg-white">
                    <option>Select budget range</option>
                    <option>$10k - $50k</option>
                    <option>$50k - $150k</option>
                    <option>$150k - $500k</option>
                    <option>$500k+</option>
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-[#6b6b6b]">
                      Optional - helps us provide accurate estimates
                    </span>
                  </label>
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Project Timeline</span>
                  </label>
                  <select className="select select-bordered rounded-xl bg-white">
                    <option>Select timeline</option>
                    <option>Immediately</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>6+ months</option>
                  </select>
                  <label className="label">
                    <span className="label-text-alt text-[#6b6b6b]">
                      Optional - when you'd like to start
                    </span>
                  </label>
                </div>
  
                <div className="md:col-span-2 form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Project Details *</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered rounded-xl bg-white min-h-40"
                    placeholder="Tell us about your project... Include details like location, size, specific requirements, and any challenges you're facing."
                  />
                </div>
  
                <div className="md:col-span-2">
                  <label className="label">
                    <span className="label-text font-semibold">Upload Project Photos</span>
                  </label>
  
                  <div className="rounded-2xl border-2 border-dashed border-black/10 bg-white/60 p-10 text-center">
                    <div className="text-4xl">⬆️</div>
                    <div className="mt-3 font-medium">Click to upload or drag and drop</div>
                    <div className="text-sm text-[#6b6b6b] mt-1">
                      PNG, JPG, PDF up to 10MB each
                    </div>
                  </div>
                </div>
  
                <div className="md:col-span-2">
                  <button
                    type="button"
                    className="btn w-full rounded-xl border-0 bg-[#e47d22] text-white hover:bg-[#cf6f1e]"
                  >
                    Submit Project Inquiry ✈️
                  </button>
                </div>
              </form>
            </div>
  
            {/* RIGHT MAP + CITIES */}
            <div className="rounded-3xl bg-white/70 border border-black/5 shadow-sm p-8">
              <h3 className="font-serif text-3xl text-[#2c2c2c]">Our Service Area</h3>
              <p className="mt-2 text-[#6b6b6b]">
                We proudly serve Building City and surrounding communities within a 50-mile radius.
              </p>
  
              <div className="mt-6 rounded-2xl overflow-hidden border border-black/5">
                <iframe
                  title="Google Map"
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
  
              <h4 className="mt-7 font-serif text-2xl text-[#2c2c2c]">Cities We Serve</h4>
  
              <div className="mt-4 grid grid-cols-2 gap-4">
                {cities.map((c) => (
                  <div key={c.name} className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#f2efe8] grid place-items-center">
                      📍
                    </div>
                    <div>
                      <div className="font-semibold text-[#2c2c2c] text-sm">{c.name}</div>
                      <div className="text-[#6b6b6b] text-xs">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
  
              <div className="mt-6 rounded-2xl border border-black/10 bg-white/60 p-5 flex gap-3">
                <div className="text-xl">ℹ️</div>
                <p className="text-sm text-[#6b6b6b] leading-6">
                  Projects outside our standard service area may be considered on a case-by-case basis.
                  Contact us to discuss your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  