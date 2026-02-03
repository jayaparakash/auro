import React, { useMemo, useState } from "react";
import PortfolioHero from "./sections/PortfolioHero";
import FilterBar from "./sections/FilterBar";
import ProjectGrid from "./sections/ProjectGrid";
import ProjectsCta from "./sections/ProjectsCta";

// Demo data (you can replace later from API)
const PROJECTS = [
  {
    id: 1,
    title: "Medical Office Complex",
    category: "Commercial",
    location: "Austin, Texas",
    timeline: "18 months",
    budget: "$8.5M - $9.5M",
    members: 2,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    desc:
      "Three-story medical office building with specialized infrastructure for healthcare providers, including...",
  },
  {
    id: 2,
    title: "Suburban Family Home",
    category: "Residential",
    location: "Greenwich, Connecticut",
    timeline: "14 months",
    budget: "$2.8M - $3.2M",
    members: 2,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
    desc:
      "Custom 4-bedroom family home with open floor plan, energy-efficient features, and smart home...",
  },
  {
    id: 3,
    title: "Modern Industrial Warehouse",
    category: "Industrial",
    location: "Dallas, Texas",
    timeline: "24 months",
    budget: "$12M - $15M",
    members: 2,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    desc:
      "State-of-the-art 200,000 sq ft distribution facility with automated systems, climate control, and...",
  },
  {
    id: 4,
    title: "Historic Building Restoration",
    category: "Renovation",
    location: "Boston, Massachusetts",
    timeline: "18 months",
    budget: "$12M - $15M",
    members: 2,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1600&q=80",
    desc:
      "Careful restoration of 1920s heritage building, preserving original character while modernizing...",
  },
  {
    id: 5,
    title: "Downtown Corporate Tower",
    category: "Commercial",
    location: "Chicago, Illinois",
    timeline: "24 months",
    budget: "$85M - $95M",
    members: 2,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    desc:
      "25-story commercial office building with sustainable design, featuring LEED Platinum...",
  },
  {
    id: 6,
    title: "Luxury Waterfront Villa",
    category: "Residential",
    location: "Malibu, California",
    timeline: "14 months",
    budget: "$2.8M - $3.2M",
    members: 2,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    desc:
      "A stunning 5-bedroom waterfront property featuring contemporary design, infinity pool, and panorami...",
  },
];

const CATEGORY_OPTIONS = ["All Categories", "Residential", "Commercial", "Industrial", "Renovation"];
const BUDGET_OPTIONS = ["All Budgets", "$0 - $250k", "$250k - $1M", "$1M - $5M", "$5M+"];
const TIMELINE_OPTIONS = ["All Timelines", "0-6 months", "6-12 months", "12-18 months", "18+ months"];
const SORT_OPTIONS = ["Most Recent", "Featured First", "Title A-Z"];

function budgetBucket(budgetText = "") {
  // very simple mapping based on strings in demo data
  if (budgetText.includes("k")) return "$0 - $250k";
  if (budgetText.includes("$2.8M") || budgetText.includes("$3.2M")) return "$1M - $5M";
  if (budgetText.includes("$8.5M") || budgetText.includes("$12M")) return "$5M+";
  if (budgetText.includes("$85M")) return "$5M+";
  return "$1M - $5M";
}

function timelineBucket(timelineText = "") {
  const n = parseInt(timelineText, 10);
  if (!Number.isFinite(n)) return "18+ months";
  if (n <= 6) return "0-6 months";
  if (n <= 12) return "6-12 months";
  if (n <= 18) return "12-18 months";
  return "18+ months";
}

export default function Projects() {
  const [category, setCategory] = useState("All Categories");
  const [budget, setBudget] = useState("All Budgets");
  const [timeline, setTimeline] = useState("All Timelines");
  const [sortBy, setSortBy] = useState("Most Recent");

  const filtered = useMemo(() => {
    let list = [...PROJECTS];

    if (category !== "All Categories") {
      list = list.filter((p) => p.category === category);
    }

    if (budget !== "All Budgets") {
      list = list.filter((p) => budgetBucket(p.budget) === budget);
    }

    if (timeline !== "All Timelines") {
      list = list.filter((p) => timelineBucket(p.timeline) === timeline);
    }

    if (sortBy === "Featured First") {
      list.sort((a, b) => Number(b.featured) - Number(a.featured));
    } else if (sortBy === "Title A-Z") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Most Recent: keep current order (you can replace with createdAt later)
      list = list;
    }

    return list;
  }, [category, budget, timeline, sortBy]);

  return (
    <div className="bg-[#fbf7f1]">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <PortfolioHero />

        <div className="mt-10">
          <FilterBar
            category={category}
            setCategory={setCategory}
            budget={budget}
            setBudget={setBudget}
            timeline={timeline}
            setTimeline={setTimeline}
            sortBy={sortBy}
            setSortBy={setSortBy}
            CATEGORY_OPTIONS={CATEGORY_OPTIONS}
            BUDGET_OPTIONS={BUDGET_OPTIONS}
            TIMELINE_OPTIONS={TIMELINE_OPTIONS}
            SORT_OPTIONS={SORT_OPTIONS}
          />
        </div>

        <div className="mt-8">
          <ProjectGrid projects={filtered} />
        </div>

        <div className="mt-14">
          <ProjectsCta />
        </div>
      </div>
    </div>
  );
}
