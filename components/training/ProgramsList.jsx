// components/training/ProgramsList.jsx
"use client";
import { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard";
import { ChevronDown,SlidersHorizontal } from "lucide-react";

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
  {
    id: 5,
    topic: "Information Technology",
    title: "IT Fundamentals for Business Professionals",
    description:
      "Essential IT concepts for non-technical professionals. Understand systems, networks, and security basics.",
    duration: "2 Days",
    format: "Instructor-Led Virtual",
    popular: false,
  },
  {
    id: 6,
    topic: "Certifications",
    title: "PMP Certification Prep Course",
    description:
      "Comprehensive preparation for the Project Management Professional (PMP) certification exam.",
    duration: "4 Days",
    format: "Instructor-Led",
    popular: true,
  },
  {
    id: 7,
    topic: "Leadership",
    title: "Strategic Leadership for Executives",
    description:
      "Advanced leadership strategies for senior leaders to drive organizational change and innovation.",
    duration: "3 Days",
    format: "Instructor-Led",
    popular: false,
  },
  {
    id: 8,
    topic: "AI Technologies",
    title: "Machine Learning for Business Leaders",
    description:
      "Understand machine learning concepts and how to leverage them for business growth.",
    duration: "2 Days",
    format: "Instructor-Led Virtual",
    popular: false,
  },
  {
    id: 9,
    topic: "Project Management",
    title: "Project Risk Management",
    description:
      "Learn to identify, assess, and mitigate risks in complex projects.",
    duration: "2 Days",
    format: "In-Person",
    popular: false,
  },
];

const ITEMS_PER_PAGE = 4;

export default function ProgramList({ selectedCategory ,setOpenFilter}) {
  const [sort, setSort] = useState("All");
  const [open, setOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  const options = ["All", "Trending", "Popular", "New"];
  const [filteredPrograms, setFilteredPrograms] = useState(programs);

  // Filter programs when selectedCategory changes
  useEffect(() => {
    if (selectedCategory && selectedCategory !== "All Topic") {
      setFilteredPrograms(
        programs.filter(p => p.topic === selectedCategory)
      );
    } else {
      setFilteredPrograms(programs);
    }
    // Reset display count when category changes
    setDisplayCount(ITEMS_PER_PAGE);
  }, [selectedCategory]);

  // Get current programs to display
  const displayedPrograms = filteredPrograms.slice(0, displayCount);
  const hasMore = displayCount < filteredPrograms.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + ITEMS_PER_PAGE, filteredPrograms.length));
  };

  return (
    <div className="flex-1 min-w-0">
      {/* Header */}
      <div className="mb-5">

  {/* Top Row */}
  <div className="flex items-center justify-between">

    {/* Left side */}
    <div className="flex items-center gap-3">

      {/* Filter button (mobile only) */}
      <button
        onClick={() => setOpenFilter(true)}
        className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center lg:hidden"
      >
        <SlidersHorizontal size={16} />
      </button>

      {/* Desktop showing text */}
      <p className="hidden sm:block text-sm text-gray-600">
        Showing <span className="font-semibold text-gray-900">{displayedPrograms.length}</span> of{" "}
        <span className="font-semibold text-gray-900">{filteredPrograms.length} programs</span>
      </p>

    </div>

    {/* Sort */}
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">Sort by:</span>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-700 px-4 py-2 min-w-[110px] justify-between"
        >
          {sort}
          <ChevronDown size={16} className="text-gray-400" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-full bg-gray-50 border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
            {options.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSort(item);
                  setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>

  </div>

  {/* Mobile Showing text */}
  <p className="sm:hidden text-sm text-gray-600 mt-3">
    Showing <span className="font-semibold text-gray-900">{displayedPrograms.length}</span> of{" "}
    <span className="font-semibold text-gray-900">{filteredPrograms.length} programs</span>
  </p>

</div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {displayedPrograms.length > 0 ? (
          displayedPrograms.map((p) => (
            <ProgramCard key={p.id} {...p} />
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            No programs found for this category
          </div>
        )}
      </div>

      {/* Load More Button */}
      {displayedPrograms.length > 0 && hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-white border border-gray-300 rounded-md text-gray-700 font-semibold text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:shadow"
          >
            Load More Programs
          </button>
        </div>
      )}

      {/* Optional: Show message when all programs are loaded */}
      {displayedPrograms.length > 0 && !hasMore && displayedPrograms.length === filteredPrograms.length && filteredPrograms.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-500">
            You've viewed all {filteredPrograms.length} programs
          </p>
        </div>
      )}
    </div>
  );
}