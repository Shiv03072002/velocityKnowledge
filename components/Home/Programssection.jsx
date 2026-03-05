"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

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
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeTab, setActiveTab] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setVisibleCount(3);
    } else {
      setVisibleCount(6);
    }
  }, [isMobile]);

  const filteredCourses = activeTab === "All" 
    ? COURSES 
    : COURSES.filter(course => course.tag === activeTab);

  const visibleCourses = filteredCourses.slice(0, visibleCount);
  const hasMore = isMobile && visibleCount < filteredCourses.length;

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredCourses.length));
  };

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Small Label */}
        <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4 flex items-center gap-2 justify-center lg:justify-start">
  <span className="w-2 h-2 bg-[#1E6FD9]"></span>
  WHAT WE BUILD
</p>

{/* Heading + Tabs Row - Original LG layout */}
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
  
  {/* Heading */}
  <div className="text-center lg:text-left">
    <h2 className="text-4xl md:text-5xl font-normal [font-family:var(--font-dm-serif)] text-gray-900 max-w-2xl leading-tight mx-auto lg:mx-0">
      Programs designed for real situations
    </h2>
    <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto lg:mx-0">
      These are examples of programs we run. They are guided,
      practical, and shaped around how people actually work.
    </p>
  </div>

          {/* Tabs - Different for mobile vs desktop */}
          
         {!isMobile ? (
  // Desktop tabs - Original, right-aligned
  <div className="bg-gray-100 p-3 rounded-sm flex gap-1">
    {TABS.map((tab) => (
      <button
        key={tab}
        onClick={() => {
          setActiveTab(tab);
        }}
        className={`px-6 py-1 text-sm font-medium rounded-sm transition-all duration-200 ${
          activeTab === tab
            ? "bg-white text-gray-900"
            : "text-gray-600 hover:bg-white/70 hover:text-gray-900"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
) : (
  // Mobile tabs - Scrollable
  <div className="w-full overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide lg:hidden">
    <div className="bg-gray-100 p-3 rounded-sm flex gap-1 min-w-max">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            setVisibleCount(3);
          }}
          className={`px-6 py-1 text-sm font-medium rounded-sm transition-all duration-200 whitespace-nowrap ${
            activeTab === tab
              ? "bg-white text-gray-900"
              : "text-gray-600 hover:bg-white/70 hover:text-gray-900"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
)}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCourses.map((course) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
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

                <button className="mt-6 w-full border border-[#1E6FD9] text-[#1E6FD9] hover:text-white text-sm font-medium py-2 rounded-md hover:bg-[#1E6FD9] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button - Only on mobile */}
        {hasMore && (
          <div className="flex justify-center mt-12 lg:hidden">
            <button
              onClick={showMore}
              className="flex items-center gap-2 border border-[#1E6FD9] text-[#1E6FD9] hover:text-white px-8 py-3 rounded-lg hover:bg-[#1E6FD9] transition-all duration-200 font-medium"
            >
              Show More Programs
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Add this to your global CSS file
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }
// .scrollbar-hide {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }