"use client";

import { Search, Brain, Users, BarChart3, Code } from "lucide-react";

export default function ProgramsHero() {
  return (
    <section
      className="relative w-full py-20 text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/cta/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#020a3b]/80"></div>

      {/* Floating Icons - Left Side */}
      <div className="absolute left-24 top-28 text-white/30 float-animation">
        <Brain size={70} />
      </div>

      <div className="absolute left-50 bottom-24 text-white/30 float-animation [animation-delay:1s]">
        <Users size={70} />
      </div>

      {/* Floating Icons - Right Side (symmetrical) */}
      <div className="absolute right-24 top-28 text-white/30 float-animation [animation-delay:1.5s]">
        <Code size={70} />
      </div>

      <div className="absolute right-50 bottom-24 text-white/30 float-animation [animation-delay:2s]">
        <BarChart3 size={70} />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">
          Training programs built for
          <br />
          real work
        </h1>

        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Explore training programs led by experienced instructors to help
          you solve real workplace challenges.
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto">
          <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="pl-4 text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search by skill, topic or certification..."
              className="flex-1 px-3 py-4 text-gray-700 outline-none"
            />
            <button className="bg-[#2F6FCA] text-white px-6 py-3 rounded-lg m-1">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}