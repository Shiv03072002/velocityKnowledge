import { Filter } from "lucide-react";

export default function ProgramsFilters() {
  const filters = [
    "Information Technology",
    "Project Management",
    "Leadership",
    "Certifications",
    "Business Analysis",
    "AI Technologies",
  ];

  return (
    <div>

      <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-gray-600 mb-8">
        <Filter size={16} />
        Filter topics
      </button>

      <div className="space-y-4 text-gray-600 text-sm">

        <p className="font-semibold text-gray-900 text-xs uppercase tracking-wider">
          All Programs
        </p>

        {filters.map((item) => (
          <label key={item} className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-blue-600" />
            {item}
          </label>
        ))}

      </div>

    </div>
  );
}