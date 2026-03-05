import { Search } from "lucide-react";

export default function ProgramsHeader() {
  return (
    <div className="relative text-center max-w-7xl mx-auto mb-16">
      
      {/* Left Square */}
      <div className="absolute top-26 left-0 w-32 h-32 border-8 border-blue-100"></div>

      {/* Right Square */}
      <div className="absolute -top-6 right-0 w-32 h-32 border-8 border-blue-100"></div>

      <h2 className="text-4xl lg:text-5xl font-normal [font-family:var(--font-dm-serif)] text-gray-900 leading-tight mb-4 max-w-150 mx-auto">
        Training programs built for real work
      </h2>

      <p className="text-gray-500 mb-10">
        Explore guided, instructor-led programs designed around real work needs.
      </p>

      <div className="max-w-xl mx-auto">
  <div className="flex items-center bg-white border border-gray-200 rounded-2xl overflow-hidden p-2">
    
    <input
      type="text"
      placeholder="Search by skill or topic"
      className="flex-1 px-4 py-3 outline-none text-gray-700"
    />

    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
      Search
    </button>

  </div>
</div>
    </div>
  );
}