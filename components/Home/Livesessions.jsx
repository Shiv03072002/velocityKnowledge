"use client";
import { ArrowUpRight, QrCode ,ArrowRight} from "lucide-react";

const SESSIONS = [
    {
        badge: "3 DAYS INSTRUCTOR-LED",
        badgeColor: "bg-green-100 text-green-600",
        title: "Vibe Coding: Your AI-Powered Future",
        description:
            "Vibe Coding is the new frontier — discover the secrets of the AI-powered creator economy.",
        tags: ["Beginner level", "Team-focused", "Custom delivery"],
    },
    {
        badge: "LIVE WORKSHOP",
        badgeColor: "bg-green-100 text-green-600",
        title: "Practical Project Management",
        description:
            "A hands-on workshop focused on planning, execution, and delivery in complex projects.",
        tags: ["Beginner level", "Practical focus", "Short format"],
    },
    {
        badge: "GUIDED CERTIFICATION PROGRAM",
        badgeColor: "bg-green-100 text-green-600",
        title: "Certification Preparation Program",
        description:
            "Structured guidance to help professionals prepare for industry-recognized certifications.",
        tags: ["Instructor guidance", "Structured learning", "Exam-focused"],
    },
    {
        badge: "3 DAYS INSTRUCTOR-LED",
        badgeColor: "bg-green-100 text-green-600",
        title: "AI Foundations for Teams",
        description:
            "A guided program designed to help teams understand and apply AI concepts in real work scenarios.",
        tags: ["Instructor-led", "Team-focused", "Custom delivery"],
    },
];

export default function LiveSessions() {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-16">

                    {/* LEFT SIDE */}
                    <div>
                        {/* Small Label */}
                        <p className="text-blue-600 text-xs uppercase tracking-widest font-semibold mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-600"></span>
                            WHAT WE OFFER
                        </p>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-normal [font-family:var(--font-dm-serif)] text-gray-900 leading-tight max-w-2xl">
                            Training programs and <br /> live sessions
                        </h2>
                    </div>

                    {/* RIGHT SIDE DECORATION */}
                    <div className="hidden md:flex items-start justify-end relative">
                        <div className="relative w-28 h-28">
                            <div className="w-30 h-30 border-[9px] border-[#EAF2FD]"></div>
                            <div className="w-25 h-25 bg-[#EAF2FD] rounded-full absolute -bottom-10 -left-9"></div>
                        </div>
                    </div>

                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {SESSIONS.map((s) => (
                        <div
                            key={s.title}
                            className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition"
                        >
                            {/* Arrow Button - Changes on card hover, not button hover */}
                            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1E6FD9] border border-gray-200 transition-all duration-300 group-hover:bg-[#1E6FD9] group-hover:border-transparent">
                                <div className="relative w-[18px] h-[18px]">
                                    {/* UpRight Arrow (default) */}
                                    <ArrowUpRight 
                                        size={18} 
                                        className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:scale-75" 
                                    />
                                    {/* Right Arrow (shown on card hover) */}
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="18" 
                                        height="18" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="absolute inset-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 group-hover:text-white"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </div>
                            </button>

                            {/* Badge */}
                            <span
                                className={`text-xs font-medium px-3 py-1 rounded-full ${s.badgeColor}`}
                            >
                                {s.badge}
                            </span>

                            {/* Title */}
                            <div className="flex items-center gap-3 mt-5">
                                {/* Icon Box */}
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <QrCode size={18} />
                                </div>

                                {/* Title + Text */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {s.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                                {s.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-6">
                                {s.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs text-gray-600 bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Center Button */}
                <div className="flex justify-center mt-16">
                    <button className="bg-[#1E6FD9] hover:bg-blue-700 text-white font-medium text-sm px-8 py-3 rounded-lg transition flex items-center gap-2">
                        Explore All Programs
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}