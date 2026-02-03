import React from "react";

export default function ProjectsCta() {
  return (
    <section className="rounded-3xl bg-white/70 border border-black/5 shadow-sm p-10 text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1a1a1a]">
        Ready to Start Your Project?
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-[#5a5a5a]">
        Let's discuss how we can bring your construction vision to life with the same excellence
        and attention to detail you see in our portfolio.
      </p>

      <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          className="btn text-white border-0 px-7"
          style={{ backgroundColor: "#E07A1A" }}
        >
          📅 Schedule Consultation
        </button>

        <button className="btn btn-outline px-7">
          📞 Call Us Today
        </button>
      </div>
    </section>
  );
}
