export default function EmergencyBanner() {
    return (
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-gradient-to-r from-[#a85b34] via-[#c78b71] to-white">
            <div className="p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/20 grid place-items-center">
                  <span className="text-white text-xl">⚠️</span>
                </div>
                <div className="text-white">
                  <div className="font-serif text-2xl">24/7 Emergency Services Available</div>
                  <p className="mt-1 text-white/90 text-sm leading-6 max-w-2xl">
                    Structural damage, water leaks, electrical issues, or safety hazards? Our emergency
                    response team is standing by around the clock to help.
                  </p>
                </div>
              </div>
  
              <a
                href="tel:+15559998888"
                className="btn rounded-xl bg-white border-0 text-[#a85b34] hover:bg-white"
              >
                📞 Call Emergency: (555) 999-8888
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  