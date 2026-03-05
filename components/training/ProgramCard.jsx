import { Clock, ArrowRight, QrCode } from "lucide-react";

export default function ProgramCard({ program }) {
  return (
    <div className="flex items-center gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

      {/* Icon */}
      <div className="w-16 h-16 rounded-lg bg-[#EAF2FD] flex items-center justify-center shrink-0">
        <QrCode size={28} className="text-[#1E6FD9]" />
      </div>

      {/* Content */}
      <div className="flex-1">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            {program.category}
          </span>

          <span className="text-xs border border-gray-200 text-gray-500 px-3 py-1 rounded-full">
            INSTRUCTOR-LED
          </span>

        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mt-3">
          {program.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 max-w-2xl">
          {program.description}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-4">

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock size={14} />
            {program.duration}
          </div>

          <button className="flex items-center gap-2 bg-[#1E6FD9] text-white px-5 py-2.5 rounded-lg  transition">
            View Details
            <ArrowRight size={16} />
          </button>

        </div>

      </div>

    </div>
  );
}