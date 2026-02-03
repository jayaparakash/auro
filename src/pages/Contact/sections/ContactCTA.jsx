export default function ContactCTA() {
    return (
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl bg-white/70 border border-black/5 shadow-sm p-10 text-center">
            <h3 className="font-serif text-5xl text-[#2c2c2c]">Ready to Start Your Project?</h3>
            <p className="mt-3 text-[#6b6b6b] max-w-2xl mx-auto leading-7">
              Whether you're planning a dream home, commercial development, or need emergency repairs,
              our expert team is ready to bring your vision to life. Let's discuss your project today.
            </p>
  
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button className="btn rounded-xl border-0 bg-[#e47d22] text-white hover:bg-[#cf6f1e] px-8">
                Get Started Now →
              </button>
              <a
                href="tel:+15551234567"
                className="btn rounded-xl bg-white text-[#1f2937] border border-black/10 hover:bg-white px-8"
              >
                📞 Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  