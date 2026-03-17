"use client";
import { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const ITEMS_PER_PAGE = 4;

export default function ProgramList({
  selectedCategory,
  setOpenFilter,
  programs = [],
}) {
  const [sort, setSort] = useState("All");
  const [open, setOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  const options = ["All", "Trending", "Popular", "New"];
  const [filteredPrograms, setFilteredPrograms] = useState([]);

  useEffect(() => {
    if (!programs || programs.length === 0) return;

    if (selectedCategory && selectedCategory !== "All Topic") {
      setFilteredPrograms(
        programs.filter((p) =>
          p.title?.rendered
            ?.toLowerCase()
            .includes(selectedCategory.toLowerCase())
        )
      );
    } else {
      setFilteredPrograms(programs);
    }

    setDisplayCount(ITEMS_PER_PAGE);
  }, [selectedCategory, programs]);

  // Get current programs to display
  const displayedPrograms = (filteredPrograms || []).slice(0, displayCount);
  const hasMore = displayCount < filteredPrograms.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, filteredPrograms.length)
    );
  };

  function extractCourseInfo(html) {
    if (!html) return {};

    const text = html.replace(/<[^>]+>/g, " "); // remove HTML

    const lengthMatch = text.match(/Length:\s*([^\n]+)/i);
    const deliveryMatch = text.match(/Delivery:\s*([^\n]+)/i);
    const categoryMatch = text.match(/Skill Category:\s*([^\n]+)/i);

    return {
      duration: lengthMatch ? lengthMatch[1].trim() : "1 Day",
      format: deliveryMatch ? deliveryMatch[1].trim() : "Instructor-Led",
      category: categoryMatch ? categoryMatch[1].trim() : "Training",
    };
  }

  function extractDescription(html) {
    if (!html) return "";
    
    // Remove HTML tags
    const text = html.replace(/<[^>]+>/g, " ");
    
    // Remove the course details section (labels and values)
    const cleanText = text
      // Remove patterns like "Label: Value" that appear at the beginning
      .replace(/Topic:\s*[^\n]+\n?/gi, "")
      .replace(/Target Audience:\s*[^\n]+\n?/gi, "")
      .replace(/Skill Category:\s*[^\n]+\n?/gi, "")
      .replace(/Delivery:\s*[^\n]+\n?/gi, "")
      .replace(/Prerequisites:\s*[^\n]+\n?/gi, "")
      .replace(/Pre-course Work:\s*[^\n]+\n?/gi, "")
      .replace(/Length:\s*[^\n]+\n?/gi, "")
      .replace(/Module \d+:\s*[^\n]+\n?/gi, "") // Remove module lines
      // Remove "About this course" heading and similar
      .replace(/About this course:?\s*/gi, "")
      .replace(/About this program:?\s*/gi, "")
      .replace(/Course Description:?\s*/gi, "")
      .replace(/Program Description:?\s*/gi, "")
      .replace(/Overview:?\s*/gi, "")
      // Remove &nbsp; entities
      .replace(/&nbsp;/g, ' ')
      // Clean up extra spaces and trim
      .replace(/\s+/g, " ")
      .trim();
    
    // Get first 160 characters for description
    return cleanText.slice(0, 160) + (cleanText.length > 160 ? "..." : "");
  }

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
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {displayedPrograms.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900">
                {filteredPrograms.length}
              </span>{" "}
              programs
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
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {displayedPrograms.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">
            {filteredPrograms.length}
          </span>{" "}
          programs
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {displayedPrograms.length > 0 ? (
          displayedPrograms.map((p) => {
            const info = extractCourseInfo(p.content?.rendered);
            const description = extractDescription(p.content?.rendered);

            return (
              <ProgramCard
                key={p.id}
                slug={p.slug}
                topic={info.category}
                title={p.title?.rendered}
                description={description}
                duration={info.duration}
                format={info.format}
                popular={false}
              />
            );
          })
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
      {displayedPrograms.length > 0 &&
        !hasMore &&
        displayedPrograms.length === filteredPrograms.length &&
        filteredPrograms.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center mt-8">
            <p className="text-sm text-gray-500">
              You've viewed all {filteredPrograms.length} programs
            </p>
          </div>
        )}
    </div>
  );
}