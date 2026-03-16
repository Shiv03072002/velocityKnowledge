"use client";
// components/training/TrainingClient.jsx  ← Client Component
import { useState, useEffect, useCallback } from "react";
import ProgramsHeader from "@/components/training/ProgramsHeader";
import FilterSidebar from "@/components/training/ProgramsFilters";
import ProgramsList from "@/components/training/ProgramsList";
import Categorytabs from "@/components/training/Categorytabs";
import PublicTrainingSchedule from "@/components/training/PublicTrainingSchedule";
import Cta from "@/components/Home/Cta";
import { X, Loader2, Search } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";

export default function TrainingClient({ initialPrograms }) {
  const [programs, setPrograms] = useState(initialPrograms);
  const [loading, setLoading] = useState(false); // false on mount — SSR data is ready
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchPrograms = useCallback(async (search = "") => {
    setLoading(true);
    try {
      const url = search
        ? `https://velocityknowledge.com/wp-json/wp/v2/course?search=${encodeURIComponent(search)}&per_page=20`
        : "https://velocityknowledge.com/wp-json/wp/v2/course?per_page=20";

      const res = await fetch(url);
      const data = await res.json();
      setPrograms(data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Skip first render so SSR data isn't replaced by a redundant fetch
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    fetchPrograms(debouncedSearchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchPrograms(searchTerm);
  };

  useEffect(() => {
    document.body.style.overflow = openFilter ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openFilter]);

  const handleOpenFilter = () => {
    setIsAnimating(true);
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setIsAnimating(false);
    setTimeout(() => setOpenFilter(false), 300);
  };

  return (
    <section className="bg-white">
      <ProgramsHeader
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <Categorytabs
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid lg:grid-cols-[250px_1fr] gap-12">
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          <div>
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-[#1E6FD9] animate-spin mb-4" />
                <p className="text-gray-600 text-lg">
                  {searchTerm
                    ? `Searching for "${searchTerm}"...`
                    : "Loading programs..."}
                </p>
              </div>
            ) : programs.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No programs found
                </h3>
                <p className="text-gray-600">
                  {searchTerm
                    ? `No results found for "${searchTerm}". Try different keywords.`
                    : "No programs available at the moment."}
                </p>
                {searchTerm && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      fetchPrograms();
                    }}
                    className="mt-4 text-[#1E6FD9] hover:underline"
                  >
                    Clear search
                  </button>
                )}
              </div>
            ) : (
              <>
                {searchTerm && (
                  <p className="text-sm text-gray-600 mb-4">
                    Found {programs.length} result{programs.length !== 1 ? "s" : ""} for &quot;{searchTerm}&quot;
                  </p>
                )}
                <ProgramsList
                  programs={programs}
                  selectedCategory={selectedCategory}
                  setOpenFilter={handleOpenFilter}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {(openFilter || isAnimating) && (
        <div className="fixed inset-0 z-50 flex items-end lg:hidden">
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCloseFilter}
          />

          <div
            className={`relative bg-white w-full rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto
            transform transition-all duration-300
            ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={handleCloseFilter}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <FilterSidebar />

            <button
              onClick={handleCloseFilter}
              className="w-full mt-6 bg-[#1E6FD9] text-white py-3 rounded-lg"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      <PublicTrainingSchedule />
      <Cta />
    </section>
  );
}