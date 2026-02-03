import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const selects = {
  projectType: ["Custom Home", "Renovation", "Commercial Build-Out"],
  quality: ["Standard", "Premium", "Luxury"],
  timeline: ["ASAP", "1-3 months", "3-6 months", "6+ months"],
  location: ["City", "Suburban", "Rural"],
};

export default function CostEstimator() {
  const [form, setForm] = useState({
    projectType: "",
    sqft: "",
    quality: "",
    timeline: "",
    location: "",
  });

  const ready = useMemo(() => {
    return Object.values(form).every((v) => String(v).trim().length > 0);
  }, [form]);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <div className="badge bg-white/70 border border-black/5 gap-2 text-auro-accent font-semibold">
            🧮 Cost Estimator
          </div>
          <h2 className="mt-4 text-5xl font-extrabold text-auro-ink">Get Your Project Estimate</h2>
          <p className="mt-3 text-auro-muted max-w-3xl mx-auto">
            Receive a transparent cost estimate in minutes. Our calculator considers key factors for accurate pricing.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* FORM */}
          <div className="rounded-xl2 bg-white shadow-soft p-6">
            <Field label="Project Type *">
              <select
                className="select select-bordered w-full border-black/10 bg-auro-bg"
                value={form.projectType}
                onChange={(e) => setForm((p) => ({ ...p, projectType: e.target.value }))}
              >
                <option value="" disabled>Select project type</option>
                {selects.projectType.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>

            <Field label="Square Footage *" hint="Total area to be constructed or renovated">
              <input
                className="input input-bordered w-full border-black/10 bg-auro-bg"
                placeholder="Enter square footage"
                value={form.sqft}
                onChange={(e) => setForm((p) => ({ ...p, sqft: e.target.value }))}
              />
            </Field>

            <Field label="Quality Level *">
              <select
                className="select select-bordered w-full border-black/10 bg-auro-bg"
                value={form.quality}
                onChange={(e) => setForm((p) => ({ ...p, quality: e.target.value }))}
              >
                <option value="" disabled>Select quality level</option>
                {selects.quality.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>

            <Field label="Timeline Preference *">
              <select
                className="select select-bordered w-full border-black/10 bg-auro-bg"
                value={form.timeline}
                onChange={(e) => setForm((p) => ({ ...p, timeline: e.target.value }))}
              >
                <option value="" disabled>Select timeline</option>
                {selects.timeline.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>

            <Field label="Location Type *">
              <select
                className="select select-bordered w-full border-black/10 bg-auro-bg"
                value={form.location}
                onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
              >
                <option value="" disabled>Select location</option>
                {selects.location.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                className="btn border-0 bg-auro-accent text-white hover:bg-auro-accent/90 disabled:opacity-60"
                disabled={!ready}
              >
                🧾 Calculate Estimate
              </button>
              <button
                className="btn bg-white border-black/10 hover:bg-white/80"
                onClick={() =>
                  setForm({ projectType: "", sqft: "", quality: "", timeline: "", location: "" })
                }
                type="button"
              >
                🔄 Reset
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="rounded-xl2 bg-white shadow-soft p-10 grid place-items-center text-center">
            <div className="grid place-items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-auro-bg grid place-items-center text-2xl">
                🧮
              </div>
              <div className="text-2xl font-extrabold text-auro-ink">Ready to Estimate</div>
              <p className="text-auro-muted max-w-sm">
                Fill out the form to receive your personalized cost estimate. Our calculator provides transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, hint, children }) {
  return (
    <div className="mb-5">
      <div className="text-sm font-semibold text-auro-ink">{label}</div>
      <div className="mt-2">{children}</div>
      {hint && <div className="mt-2 text-xs text-auro-muted">{hint}</div>}
    </div>
  );
}
