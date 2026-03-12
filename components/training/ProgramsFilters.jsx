'use client'
import { useState } from "react";

const filters = {
  Topic: ["All Topic", "AI Technologies", "Project Management", "Leadership"],
  Categories: ["Corporates", "Enterprise", "Government"],
  Format: ["Instructor-Led Virtual", "In-Person", "Custom"],
};

function FilterGroup({ title, options, selected, onToggle }) {
  return (
    <div className="mb-7 mt-0 md:mt-4">
      <h3 className="text-md font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="flex flex-col gap-2.5">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2.5 cursor-pointer group">
            <div
              onClick={() => onToggle(opt)}
              className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                selected.includes(opt)
                  ? "bg-[#1E6FD9] border-[#1E6FD9]"
                  : "border-gray-300 bg-white group-hover:border-[#1E6FD9]"
              }`}
            >
              {selected.includes(opt) && (
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="text-md text-gray-600">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function FilterSidebar() {  // Removed onChange prop
  const [selected, setSelected] = useState({
    Topic: [],
    Categories: [],
    Format: [],
  });

  const toggle = (group, value) => {
    setSelected((prev) => {
      const current = prev[group];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [group]: next };  // Removed onChange call
    });
  };

  return (
    <aside className="w-52 flex-shrink-0">
      {Object.entries(filters).map(([group, options]) => (
        <FilterGroup
          key={group}
          title={group}
          options={options}
          selected={selected[group]}
          onToggle={(val) => toggle(group, val)}  // Changed from onChange to onToggle
        />
      ))}
    </aside>
  );
}