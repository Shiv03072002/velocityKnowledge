export default function ProgramCard({ topic, title, description, duration, format, popular }) {
  const topicColors = {
    LEADERSHIP: "bg-blue-50 text-blue-700",
    "AI TECHNOLOGIES": "bg-purple-50 text-purple-700",
    "PROJECT MANAGEMENT": "bg-green-50 text-green-700",
    CERTIFICATIONS: "bg-orange-50 text-orange-700",
    "BUSINESS ANALYSIS": "bg-teal-50 text-teal-700",
    "INFORMATION TECHNOLOGY": "bg-indigo-50 text-indigo-700",
  };
  const colorClass = topicColors[topic?.toUpperCase()] || "bg-gray-100 text-gray-600";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-7 py-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <span className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${colorClass}`}>
          {topic}
        </span>
        {popular && (
          <span className="text-[11px] font-semibold text-green-600 tracking-wide uppercase">
            Popular
          </span>
        )}
      </div>

      <h3 className="text-gray-900 text-lg font-semibold mb-2 leading-snug" style={{ fontFamily: "'Georgia', serif" }}>
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1">
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {duration}
          </span>
          <span className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1">
            {format}
          </span>
        </div>
        <button className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-gray-400 text-gray-800 text-sm font-medium px-4 py-2 rounded-xl transition-all hover:shadow-sm">
          View Details
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}