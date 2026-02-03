import React from "react";

export default function FilterBar({
  category,
  setCategory,
  budget,
  setBudget,
  timeline,
  setTimeline,
  sortBy,
  setSortBy,
  CATEGORY_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  SORT_OPTIONS,
}) {
  return (
    <section className="rounded-2xl bg-white/60 border border-black/5 shadow-sm p-6">
      <div className="flex items-center gap-2 text-lg font-serif text-[#1a1a1a]">
        <span className="text-xl">⏳</span>
        <span>Filter Projects</span>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <label className="form-control w-full">
          <span className="label-text text-sm text-[#4a4a4a]">Category</span>
          <select
            className="select select-bordered w-full bg-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORY_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>

        <label className="form-control w-full">
          <span className="label-text text-sm text-[#4a4a4a]">Budget Range</span>
          <select
            className="select select-bordered w-full bg-white"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            {BUDGET_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>

        <label className="form-control w-full">
          <span className="label-text text-sm text-[#4a4a4a]">Timeline</span>
          <select
            className="select select-bordered w-full bg-white"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
          >
            {TIMELINE_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>

        <label className="form-control w-full">
          <span className="label-text text-sm text-[#4a4a4a]">Sort By</span>
          <select
            className="select select-bordered w-full bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
