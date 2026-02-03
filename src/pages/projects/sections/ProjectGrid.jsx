import React from "react";

const badgeClass = (category) => {
  if (category === "Residential") return "bg-[#f1c232] text-black";
  if (category === "Commercial") return "bg-[#f1c232] text-black";
  if (category === "Industrial") return "bg-[#f1c232] text-black";
  if (category === "Renovation") return "bg-[#f1c232] text-black";
  return "bg-[#f1c232] text-black";
};

export default function ProjectGrid({ projects }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p) => (
        <div
          key={p.id}
          className="rounded-3xl bg-white border border-black/5 shadow-sm overflow-hidden"
        >
          <div className="relative">
            <img
              src={p.image}
              alt={p.title}
              className="h-60 w-full object-cover"
              loading="lazy"
            />

            <div className="absolute top-4 left-4 flex gap-2">
              {p.featured && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E07A1A] text-white">
                  ⭐ Featured
                </span>
              )}
            </div>

            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeClass(p.category)}`}>
                {p.category}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between text-sm text-[#6b6b6b]">
              <div className="flex items-center gap-2">
                <div className="avatar-group -space-x-3">
                  <div className="avatar">
                    <div className="w-7 rounded-full ring ring-white">
                      <img src="https://i.pravatar.cc/100?img=12" alt="m1" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-7 rounded-full ring ring-white">
                      <img src="https://i.pravatar.cc/100?img=32" alt="m2" />
                    </div>
                  </div>
                </div>
                <span>{p.members} Team Members</span>
              </div>

              <button className="btn btn-ghost btn-sm">
                View <span className="ml-1">→</span>
              </button>
            </div>

            <h3 className="mt-5 font-serif text-2xl font-semibold text-[#1a1a1a]">
              {p.title}
            </h3>

            <p className="mt-2 text-sm text-[#5a5a5a] leading-relaxed">
              {p.desc}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#6b6b6b]">
              <span className="inline-flex items-center gap-1">
                📍 <span>{p.location}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                🗓️ <span>{p.timeline}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                💲 <span>{p.budget}</span>
              </span>
            </div>
          </div>
        </div>
      ))}

      {projects.length === 0 && (
        <div className="col-span-full text-center py-16 text-[#6b6b6b]">
          No projects match these filters.
        </div>
      )}
    </section>
  );
}
