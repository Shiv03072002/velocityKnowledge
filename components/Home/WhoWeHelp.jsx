"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ORG_TYPES = [
  {
    title: "Corporates",
    description: "Training for company teams",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Learn AI and tech for daily work",
      "Improve team productivity",
      "Practical and easy to follow",
    ],
  },
  {
    title: "Enterprise",
    description: "Training for large organizations",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Enterprise-level scalability",
      "Strategic digital transformation",
      "Leadership & innovation programs",
    ],
  },
  {
    title: "Government",
    description: "Training for public sector teams",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Policy & compliance training",
      "Public sector modernization",
      "Technology adoption programs",
    ],
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-blue-600 text-xs uppercase tracking-widest font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 "></span>
              WHO WE HELP
            </p>
            <h2 className="text-4xl md:text-5xl font-normal [font-family:var(--font-dm-serif)] text-gray-900 leading-tight  ">
              Training for Different Types of Organizations
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-md lg:text-right">
            We create custom training programs for companies,
            large organizations, and government teams.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {ORG_TYPES.map((org) => (
            <Card key={org.title} org={org} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ org }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer h-[380px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Layer */}
      <motion.img
        src={org.image}
        alt={org.title}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.7 }}
      />

      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        animate={{
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Default Text */}
      <motion.div 
        className="absolute bottom-6 left-6 right-6 text-white"
        animate={{
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-2xl font-semibold mb-1">{org.title}</p>
        <p className="text-sm text-white/80">{org.description}</p>
      </motion.div>

      {/* Blue Hover Layer - Grows from top left */}
      <motion.div 
        className="absolute inset-0 bg-blue-600 text-white p-8 flex flex-col justify-between"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ originX: 0, originY: 0 }}
      >
        <div>
          <p className="text-2xl font-semibold mb-6">{org.title}</p>
          <ul className="space-y-3 text-sm">
            {org.bullets.map((point, index) => (
              <motion.li
                key={point}
                className="flex items-start gap-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: isHovered ? 0 : -20,
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Button slides from bottom */}
        <motion.button
          className="bg-white text-blue-600 font-medium py-3 rounded-lg mt-8 hover:bg-gray-100 transition-colors w-full"
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 100,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Explore Program
        </motion.button>
      </motion.div>
    </div>
  );
}