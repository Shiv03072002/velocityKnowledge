"use client";

const TABS = ["All", "Trending", "Upcoming", "Popular", "New"];

const COURSES = [
  {
    tag: "Trending",
    title: "AI Foundations",
    description:
      "A guided program to understand and use AI in real work situations.",
    tagColor: "bg-blue-100 text-blue-600",
  },
  {
    tag: "Trending",
    title: "Practical Project Management",
    description:
      "Learn how to plan, manage, and deliver projects with confidence.",
    tagColor: "bg-blue-100 text-blue-600",
  },
  {
    tag: "Popular",
    title: "Leadership Essentials",
    description:
      "Build core leadership skills for managing people and decisions.",
    tagColor: "bg-green-100 text-green-600",
  },
  {
    tag: "Upcoming",
    title: "Business Analysis Basics",
    description:
      "Understand problems, analyze data, and support better decisions.",
    tagColor: "bg-orange-100 text-orange-600",
  },
  {
    tag: "Popular",
    title: "Certification Preparation",
    description:
      "Guided support to prepare for industry-recognized certifications.",
    tagColor: "bg-green-100 text-green-600",
  },
  {
    tag: "New",
    title: "IT Skills for Teams",
    description:
      "Custom IT training designed around tools and work needs.",
    tagColor: "bg-purple-100 text-purple-600",
  },
];

export default function ProgramsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Small Label */}
        <p className="text-blue-600 text-xs uppercase tracking-widest font-semibold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-600"></span>
          WHAT WE BUILD
        </p>

        {/* Heading + Tabs Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          
          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-normal [font-family:var(--font-dm-serif)] text-gray-900 max-w-2xl leading-tight">
              Programs designed for real situations
            </h2>
            <p className="text-gray-500 text-base mt-4 max-w-xl">
              These are examples of programs we run. They are guided,
              practical, and shaped around how people actually work.
            </p>
          </div>

          {/* Tabs */}
          <div className="bg-gray-100 p-3 rounded-sm flex gap-1">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                className={`px-6 py-1 text-sm font-medium rounded-sm transition-all duration-200 ${
                  i === 0
                    ? "bg-white  text-gray-900"
                    : "text-gray-600 hover:bg-white/70 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 gap-2 opacity-20 p-6 transition-transform duration-500 group-hover:scale-105">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="bg-gray-300 rounded"></div>
                  ))}
                </div>
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Tag */}
                <span
                  className={`text-xs font-medium px-2 py-1 rounded inline-block transition-all duration-200 group-hover:scale-105 ${course.tagColor}`}
                >
                  {course.tag}
                </span>

                <p className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                  {course.title}
                </p>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed group-hover:text-gray-600 transition-colors duration-200">
                  {course.description}
                </p>

                {/* Outline Button */}
                <button className="mt-6 w-full border border-blue-500 text-blue-600 hover:text-white text-sm font-medium py-2 rounded-md hover:bg-blue-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}