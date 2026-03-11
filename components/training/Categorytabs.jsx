import { Calendar, Wrench, Users, Award, Clock, Cpu } from "lucide-react";

export default function CategoryFilters() {
  const categories = [
    {
      name: "AI Technologies",
      icon: <Calendar size={18} />,
      activeColor: "bg-blue-600",
      iconBg: "bg-blue-100 text-blue-600",
      active: false,
    },
    {
      name: "Project Management",
      icon: <Wrench size={18} />,
      activeColor: "bg-green-600",
      iconBg: "bg-green-100 text-green-600",
      active: true,
    },
    {
      name: "Leadership",
      icon: <Users size={18} />,
      activeColor: "bg-purple-600",
      iconBg: "bg-purple-100 text-purple-600",
      active: false,
    },
    {
      name: "Certifications",
      icon: <Award size={18} />,
      activeColor: "bg-orange-600",
      iconBg: "bg-orange-100 text-orange-600",
      active: false,
    },
    {
      name: "Business Analysis",
      icon: <Clock size={18} />,
      activeColor: "bg-indigo-600",
      iconBg: "bg-indigo-100 text-indigo-600",
      active: false,
    },
    {
      name: "Information Technology",
      icon: <Cpu size={18} />,
      activeColor: "bg-blue-600",
      iconBg: "bg-blue-100 text-blue-600",
      active: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 py-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`group flex items-center gap-3 px-5 py-3.5 rounded-xl border border-gray-300 transition-all duration-200 ${
              cat.active
                ? `${cat.activeColor} text-white border-transparent shadow-lg scale-105`
                : "bg-white text-gray-700 border-gray-100 hover:border-gray-200 hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            <span
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                cat.active
                  ? "bg-white/20 text-white"
                  : `${cat.iconBg} group-hover:scale-110 group-hover:shadow-sm`
              }`}
            >
              {cat.icon}
            </span>
            <span className="text-sm font-semibold tracking-wide">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}