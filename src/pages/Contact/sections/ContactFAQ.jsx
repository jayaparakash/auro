const faqs = [
    {
      q: "How quickly can you start my project?",
      a: "Timelines depend on project scope and our current schedule. After your inquiry, we’ll provide an initial estimate and next available start window within 24 hours.",
    },
    {
      q: "Do you provide free estimates?",
      a: "Yes. We provide free initial consultations and estimates for most projects. Detailed architectural planning may require a separate engagement.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes. We are fully licensed and insured. Documentation can be shared upon request during your consultation.",
    },
    {
      q: "What areas do you serve?",
      a: "We serve Building City and surrounding communities within a 50-mile radius. Projects outside the area may be accepted case-by-case.",
    },
    {
      q: "How do you handle project changes and additional costs?",
      a: "We use clear change-order documentation. Any scope change is reviewed, priced, and approved before work continues.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept bank transfer, credit/debit cards, and approved financing options depending on project size and location.",
    },
  ];
  
  export default function ContactFAQ() {
    return (
      <section className="pb-14">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl bg-white/70 border border-black/5 shadow-sm p-8 md:p-10">
            <h3 className="font-serif text-4xl text-[#2c2c2c]">Frequently Asked Questions</h3>
            <p className="mt-2 text-[#6b6b6b]">Quick answers to common questions about our services and processes.</p>
  
            <div className="mt-8 space-y-4">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="collapse collapse-arrow rounded-2xl border border-black/10 bg-white"
                >
                  <input type="radio" name="faq" />
                  <div className="collapse-title font-semibold text-[#2c2c2c]">{f.q}</div>
                  <div className="collapse-content text-[#6b6b6b] leading-7">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
  
            <div className="mt-8 rounded-2xl border border-black/10 bg-white/60 p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f2efe8] grid place-items-center text-xl">
                ❓
              </div>
              <div>
                <div className="font-serif text-xl text-[#2c2c2c]">Still Have Questions?</div>
                <p className="text-[#6b6b6b] mt-1">
                  Can't find the answer you're looking for? Our team is here to help. Reach out via phone,
                  email, or schedule a consultation.
                </p>
                <button className="btn btn-link px-0 text-[#2d5d73]">
                  Contact Us →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  