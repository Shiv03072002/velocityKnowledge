// pages/training.js or app/training/page.js
"use client";
import { useState } from "react";
import ProgramsHeader from "@/components/training/ProgramsHeader";
import FilterSidebar from "@/components/training/ProgramsFilters";
import ProgramsList from "@/components/training/ProgramsList";
import ContactInfoSection from "@/components/training/ContactInfoSection";
import Categorytabs from "@/components/training/Categorytabs";
import PublicTrainingSchedule from "@/components/training/PublicTrainingSchedule";
import Cta from "@/components/Home/Cta";

export default function Training() {
  const [selectedCategory, setSelectedCategory] = useState(""); // Default active category

  return (
    <section className="bg-white">
      <ProgramsHeader />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <Categorytabs 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <div className="grid lg:grid-cols-[250px_1fr] gap-12">
          <FilterSidebar />
          <ProgramsList selectedCategory={selectedCategory} />
        </div>
      </div>
      <PublicTrainingSchedule/>
      <Cta />
    </section>
  );
}