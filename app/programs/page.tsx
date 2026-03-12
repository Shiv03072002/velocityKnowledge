"use client";
import { useState, useEffect } from "react";
import ProgramsHeader from "@/components/training/ProgramsHeader";
import FilterSidebar from "@/components/training/ProgramsFilters";
import ProgramsList from "@/components/training/ProgramsList";
import Categorytabs from "@/components/training/Categorytabs";
import PublicTrainingSchedule from "@/components/training/PublicTrainingSchedule";
import Cta from "@/components/Home/Cta";
import { X } from "lucide-react";

export default function Training() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (openFilter) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openFilter]);

  const handleOpenFilter = () => {
    setIsAnimating(true);
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setOpenFilter(false);
    }, 300); // Match this with transition duration
  };

  return (
    <section className="bg-white">
      <ProgramsHeader />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <Categorytabs
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* GRID */}
        <div className="grid lg:grid-cols-[250px_1fr] gap-12">

          {/* Desktop Filter */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Programs */}
          <div>
            <ProgramsList
              selectedCategory={selectedCategory}
              setOpenFilter={handleOpenFilter}
            />
          </div>

        </div>
        {/* END GRID */}

      </div>

      {/* Mobile Filter Drawer */}
      {(openFilter || isAnimating) && (
        <div className="fixed inset-0 z-50 flex items-end lg:hidden">
          {/* Background overlay with fade animation */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCloseFilter}
          />

          {/* Sliding panel with slide-up animation */}
          <div
            className={`relative bg-white w-full rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto
            transform transition-all duration-300 ease-out
            ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold">Filters</h2>

              <button
                onClick={handleCloseFilter}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <FilterSidebar />

            <button
              onClick={handleCloseFilter}
              className="w-full mt-6 bg-[#1E6FD9] hover:bg-[#1a5bb0] text-white py-3 rounded-lg font-medium transition-colors"
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