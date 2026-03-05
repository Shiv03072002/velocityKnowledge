"use client";
import { ArrowRight, ArrowLeft } from "lucide-react";

const BLOGS = [
  {
    title: "How AI Can Help Work Smarter",
    description:
      "Learn how AI tools can save time, reduce manual work, and help teams focus on what matters most.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Using AI Safely in Your Business",
    description:
      "Learn how AI tools can save time, reduce manual work, and help teams focus on what matters most.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* LEFT CONTENT - 2/5 (40%) */}
          <div className="lg:col-span-2">
            <p className="text-[#1E6FD9] text-xs uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1E6FD9]"></span>
              INSIGHTS & RESOURCES
            </p>

            <h2 className="text-4xl md:text-5xl font-normal [font-family:var(--font-dm-serif)] text-gray-900 leading-tight mb-6">
              Helpful insights for learning and growth
            </h2>

            <p className="text-gray-500 text-base mb-10 max-w-md">
              We share easy-to-read articles, tips, and updates to help you
              learn about AI and technology in a simple and practical way.
            </p>

            {/* Button */}
            <button className="bg-[#1E6FD9] text-white font-medium px-6 py-3 rounded-lg transition flex items-center gap-2 group">
              View All Insights
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Navigation Arrows - at bottom left */}
            <div className="flex gap-4 mt-30">
              <button className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600  hover:text-white transition-all duration-300 hover:scale-105">
                <ArrowLeft size={18} />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#1E6FD9] flex items-center justify-center text-white  transition-all duration-300 hover:scale-105">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT BLOG CARDS - 3/5 (60%) */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 gap-8">
              {BLOGS.map((blog) => (
                <div 
                  key={blog.title} 
                  className="group cursor-pointer flex flex-col h-full"
                >
                  {/* Image - less rounded */}
                  <div className="overflow-hidden rounded-lg mb-6">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1E6FD9] transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-grow">
                    {blog.description}
                  </p>

                  {/* Read More with arrow at bottom left */}
                  <button className="text-[#1E6FD9] font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 group-hover:translate-x-1 mt-auto">
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}