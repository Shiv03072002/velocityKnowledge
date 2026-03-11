import Link from "next/link";

export default function ProgramCard({
  topic,
  title,
  description,
  duration,
  format,
  popular,
}) {
  const topicColors = {
    LEADERSHIP: "bg-blue-50 text-blue-600",
    "AI TECHNOLOGIES": "bg-purple-50 text-purple-600",
    "PROJECT MANAGEMENT": "bg-green-50 text-green-600",
    CERTIFICATIONS: "bg-orange-50 text-orange-600",
    "BUSINESS ANALYSIS": "bg-teal-50 text-teal-600",
    "INFORMATION TECHNOLOGY": "bg-indigo-50 text-indigo-600",
  };

  const colorClass =
    topicColors[topic?.toUpperCase()] || "bg-gray-100 text-gray-600";

  return (
    <div className="bg-white border border-gray-200 rounded-xl px-6 sm:px-8 py-6 sm:py-7 hover:shadow-md transition-shadow duration-200 group">
      {/* Top row: topic badge + popular */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#EAF2FD] text-[#1E6FD9]`}
        >
          {topic}
        </span>
        {popular && (
          <span className="text-[11px] font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-sm tracking-widest uppercase">
            Popular
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-gray-900 text-lg sm:text-xl font-bold mb-3 leading-snug group-hover:text-[#1E6FD9] transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-6 sm:mb-7">
        {description}
      </p>

      {/* Bottom row: pills + button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-200 rounded-full px-3.5 py-1.5 font-bold whitespace-nowrap">
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M8 5v3.5l2 1.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            {duration}
          </span>
          <span className="text-xs text-gray-500 border border-gray-200 rounded-full px-3.5 py-1.5 font-bold whitespace-nowrap">
            {format}
          </span>
        </div>

        <Link href={`/coursedetails`} className="inline-block w-full sm:w-auto">
          <button className="flex items-center justify-center sm:justify-start text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all group/btn w-full sm:w-auto">
            View Details
            <span className="w-8 h-8 rounded-full flex items-center justify-center ml-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
