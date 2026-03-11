'use client'
import { useState } from "react";

const filters = {
  Topic: ["All Topic", "AI Technologies", "Project Management", "Leadership"],
  Categories: ["Corporates", "Enterprise", "Government"],
  Format: ["Instructor-Led Virtual", "In-Person", "Custom"],
};

function FilterGroup({ title, options, selected, onChange }) {
  return (
    <div className="mb-7">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="flex flex-col gap-2.5">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2.5 cursor-pointer group">
            <div
              onClick={() => onChange(opt)}
              className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                selected.includes(opt)
                  ? "bg-blue-600 border-blue-600"
                  : "border-gray-300 bg-white group-hover:border-blue-400"
              }`}
            >
              {selected.includes(opt) && (
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="text-sm text-gray-600">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function FilterSidebar({ onChange }) {
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
      const updated = { ...prev, [group]: next };
      onChange?.(updated);
      return updated;
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
          onChange={(val) => toggle(group, val)}
        />
      ))}
    </aside>
  );
}