"use client";
import { useState } from "react";
import ProgramCard from "./ProgramCard";

const programs = [
  {
    id: 1,
    topic: "Leadership",
    title: "Build Trust and High Performance with Flexible Team Leadership",
    description:
      "Learn how to guide teams, improve communication, and make better decisions as a leader. This course helps managers build strong teams.",
    duration: "1 Day",
    format: "Instructor-Led",
    popular: true,
  },
  {
    id: 2,
    topic: "AI Technologies",
    title: "AI Foundations for Business",
    description:
      "Learn how AI tools can help businesses improve work and make better decisions. This course shows how teams can use AI safely in daily work.",
    duration: "3 days",
    format: "Instructor-Led",
    popular: true,
  },
  {
    id: 3,
    topic: "Project Management",
    title: "Agile Project Management Essentials",
    description:
      "Master agile methodologies to deliver projects faster and more efficiently. Learn sprint planning, backlog management, and team collaboration.",
    duration: "2 Days",
    format: "Instructor-Led Virtual",
    popular: false,
  },
  {
    id: 4,
    topic: "Business Analysis",
    title: "Business Analysis Fundamentals",
    description:
      "Develop skills to analyze business needs and translate them into actionable solutions. Covers requirements gathering and stakeholder management.",
    duration: "2 Days",
    format: "In-Person",
    popular: false,
  },
];

export default function ProgramList() {
  const [sort, setSort] = useState("All");

  return (
    <div className="flex-1 min-w-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold text-gray-900">20 programs</span>
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl text-sm text-gray-700 px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400/30 cursor-pointer"
            >
              <option>All</option>
              <option>Popular</option>
              <option>Newest</option>
              <option>Duration</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▼</span>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {programs.map((p) => (
          <ProgramCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}