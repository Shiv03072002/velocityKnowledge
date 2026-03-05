import ProgramCard from "@/components/training/ProgramCard";

const programs = [
  {
    category: "Information Technology",
    title: "Vibe Coding: Your AI-Powered Future",
    description:
      "This program helps learners understand how AI tools can be used in real development work.",
    duration: "3 days",
  },
  {
    category: "Leadership",
    title: "Managing a Virtual/Distributed Workforce",
    description:
      "Learn techniques for leading remote teams effectively.",
    duration: "2 days",
  },
  {
    category: "Information Technology",
    title: "Modern Web Development with React",
    description:
      "Learn how to build scalable web applications using React, modern JavaScript, and best practices.",
    duration: "4 days",
  },
  {
    category: "Business Analysis",
    title: "Business Analysis Fundamentals",
    description:
      "Understand the key responsibilities of a business analyst and learn industry-standard analysis techniques.",
    duration: "3 days",
  },
  {
    category: "Project Management",
    title: "Agile Project Management",
    description:
      "Master agile frameworks like Scrum and Kanban to deliver projects efficiently.",
    duration: "2 days",
  },
  {
    category: "Leadership",
    title: "Effective Leadership for Managers",
    description:
      "Develop leadership skills to manage teams, improve decision-making, and drive organizational success.",
    duration: "3 days",
  },
  {
    category: "Information Technology",
    title: "Cybersecurity Essentials",
    description:
      "Learn the fundamentals of cybersecurity, risk management, and protecting digital systems.",
    duration: "2 days",
  },
  {
    category: "Certifications",
    title: "Preparing for PMP Certification",
    description:
      "A comprehensive preparation course for professionals planning to take the PMP certification exam.",
    duration: "5 days",
  },
  {
    category: "Business Analysis",
    title: "Advanced Requirements Gathering",
    description:
      "Improve your ability to collect, document, and validate business requirements effectively.",
    duration: "2 days",
  },
  {
    category: "Project Management",
    title: "Risk Management for Projects",
    description:
      "Learn how to identify, assess, and mitigate project risks using proven strategies.",
    duration: "2 days",
  },
];
export default function ProgramsList() {
  return (
    <div>

      {/* Sort */}
      <div className="flex justify-end text-sm text-gray-500 pb-4 mb-6 border-b border-gray-200">
        Sort by:
        <span className="ml-2 font-medium text-gray-900">Newest</span>
      </div>

      {/* Programs */}
      <div className="space-y-6">
        {programs.map((program, i) => (
          <ProgramCard key={i} program={program} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-12 text-sm text-gray-600">
        <button className="hover:text-black">{`<`}</button>

        <button className="w-9 h-9 flex items-center justify-center rounded-md bg-[#0F172A] text-white">
          1
        </button>

        <button className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-100">
          2
        </button>

        <button className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-100">
          3
        </button>

        <span className="px-1">...</span>

        <button className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-100">
          10
        </button>

        <button className="hover:text-black">{`>`}</button>
      </div>

    </div>
  );
}