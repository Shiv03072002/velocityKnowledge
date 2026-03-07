"use client";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Understand the Need",
    description:
      "We start by understanding the goals, experience level, and challenges of the learners.",
  },
  {
    num: "02",
    title: "Plan the Right Program",
    description:
      "We design a program that fits the learning needs, work context, and objectives.",
  },
  {
    num: "03",
    title: "Guide the Learning",
    description:
      "Experienced practitioners lead the sessions and provide clear guidance throughout.",
  },
  {
    num: "04",
    title: "Apply and Improve",
    description:
      "Learners use what they learn in real situations, with a focus on improvement and results.",
  },
];

export default function OurApproach() {
  return (
    <section className="bg-[#F8FAFC] py-20 relative">

      <div
        className="absolute inset-0 pointer-events-none z-0  hidden md:block"
        style={{
          backgroundImage: `
      linear-gradient(to right, #F1F5F9 1px, transparent 1px),
      linear-gradient(to bottom, #F1F5F9 1px, transparent 1px)
    `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 50%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">

        <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-[#1E6FD9] inline-block"></span>
          OUR APPROACH
        </p>

        <h2 className="text-3xl md:text-5xl font-normal [font-family:var(--font-dm-serif)] text-gray-900 mb-16 max-w-md mx-auto">
          A simple, structured way to

          build skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => {
            return (
              <div key={step.num}>
                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 text-center  h-full flex flex-col">

                  {/* Top Section */}
                  <div className="p-6">
                    <div className="w-14 h-14 mx-auto  mb-6 rounded-xl border border-gray-200 flex items-center justify-center text-xl font-semibold">
                      <span className="text-[#1E6FD9]">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-900 text-base mb-2 text-center ">
                      {step.title}
                    </h3>
                  </div>

                  {/* Blue Bottom Section - Always visible */}
                  <div className="bg-[#1E6FD9] text-white p-6 text-center  mt-auto">
                    <p className="text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}