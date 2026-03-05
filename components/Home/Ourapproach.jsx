"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      "We design and configure a targeted program for your teams.",
  },
  {
    num: "03",
    title: "Guide the Learning",
    description:
      "Our skilled practitioners lead learners through engaging experiences.",
  },
  {
    num: "04",
    title: "Apply and Improve",
    description:
      "We measure results and help apply skills to real situations.",
  },
];

export default function OurApproach() {
  const [openIndexes, setOpenIndexes] = useState([0]); // First card open by default

  const toggleCard = (index) => {
    setOpenIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

       <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4 flex items-center justify-center gap-2">
  <span className="w-2 h-2 bg-[#1E6FD9] inline-block"></span>
  OUR APPROACH
</p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-normal [font-family:var(--font-dm-serif)] text-gray-900 mb-16"
        >
          A simple, structured way to
          <br />
          build skills
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => toggleCard(index)}
                className="cursor-pointer"
              >
                <motion.div 
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200"
                  whileHover={{ 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    y: -2
                  }}
                  transition={{ duration: 0.2 }}
                >
                  
                  {/* Top Section */}
                  <div className="p-6">
                    <motion.div 
                      className="w-14 h-14 mx-auto mb-6 rounded-xl border flex items-center justify-center text-xl font-semibold"
                      animate={{
                        
                        borderColor: isOpen ? "#2563EB" : "#E5E7EB",
                        scale: isOpen ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                       
                        transition={{ duration: 0.3 }}
                      >
                        {step.num}
                      </motion.span>
                    </motion.div>

                    <h3 className="font-semibold text-gray-900 text-base mb-2">
                      {step.title}
                    </h3>
                  </div>

                  {/* Bottom Section with Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="open"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="bg-[#1E6FD9] text-white overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="p-6"
                        >
                          <p className="text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="closed"
                        initial={{ height: 48 }}
                        animate={{ height: 48 }}
                        className="bg-blue-100 h-12 overflow-hidden"
                      />
                    )}
                  </AnimatePresence>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

       

      </div>
    </section>
  );
}