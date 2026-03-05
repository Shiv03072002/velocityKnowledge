"use client";

import { ArrowRight, Calendar, Zap, Award, BarChart2, QrCode } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
            {/* Hexagonal dark background texture */}
            <div className="absolute inset-0 z-0 ">
                <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                            <polygon
                                points="30,2 58,17 58,35 30,50 2,35 2,17"
                                fill="none"
                                stroke="#4a1d7a"
                                strokeWidth="1"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hex)" />
                </svg>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700 rounded-full opacity-20 blur-3xl" />
                <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-900 rounded-full opacity-30 blur-2xl" />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-violet-800 rounded-full opacity-15 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-4 py-20 flex flex-col lg:flex-row items-center gap-10 w-full">
                {/* Left: Text - 40% */}
                <div className="lg:w-[40%] text-white">
                    {/* Tag strip */}
                    <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5 text-sm text-[#16A34A] mb-8 backdrop-blur-sm bg-[#ECFDF3]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block" />
                        Learn
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block" />
                        Practice
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block" />
                        Get better
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block" />
                        Achieve more
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-normal [font-family:var(--font-dm-serif)] leading-tight mb-6 tracking-tight ">
                        Building Workforce
                        <br />
                        Skills For Complex
                        <br />
                        Organizations
                    </h1>

                    <p className="text-white/60 text-base leading-relaxed mb-10 max-w-sm">
                        Instructor-led training programs designed to develop key capabilities for enterprise and government organizations.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-16">
                        <button className="flex items-center gap-2 bg-[#1E6FD9] hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-3 rounded-lg">
                            Explore Programs <ArrowRight size={16} />
                        </button>
                        <button className="flex items-center gap-2 border border-white/40 hover:border-white/70 transition-colors font-semibold px-6 py-3 rounded-lg backdrop-blur-sm bg-white text-[#1E6FD9]">
                            View Public Schedule
                        </button>
                    </div>

                    {/* Expert badge */}
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {["bg-amber-400", "bg-rose-400", "bg-sky-400"].map((c, i) => (
                                <div
                                    key={i}
                                    className={`w-10 h-10 rounded-full border-2 border-black ${c} flex items-center justify-center text-white text-xs font-bold`}
                                >
                                    {["A", "B", "C"][i]}
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">Expert-led learning</p>
                            <p className="text-white/50 text-xs">Programs shaped by practical experience.</p>
                        </div>
                    </div>
                </div>

                {/* Right: Cards Grid - 60% */}
                <div className="lg:w-[60%] grid grid-cols-2 gap-4">
                    {[
                        {
                            title: "AI Technologies",
                            description: "Explore AI tools and modern technologies shaping the future.",
                            icon: Calendar,
                            iconBg: "bg-blue-500",
                            iconHover: "group-hover:bg-blue-500",
                            iconColor: "text-white",
                            half: "bg-blue-300/30",
                            active: true,
                        },
                        {
                            title: "Project Management",
                            description: "Learn how to plan, manage, and deliver projects more clearly and confidently.",
                            icon: Zap,
                            iconBg: "bg-green-100",
                            iconHover: "group-hover:bg-green-500",
                            iconColor: "text-green-500",
                            half: "bg-green-100",
                        },
                        {
                            title: "Leadership",
                            description: "Build leadership skills for managing teams and decisions.",
                            icon: Award,
                            iconBg: "bg-purple-100",
                            iconHover: "group-hover:bg-purple-500",
                            iconColor: "text-purple-500",
                            half: "bg-purple-100",
                        },
                        {
                            title: "Certifications",
                            description: "Prepare for industry-recognized certifications.",
                            icon: Award,
                            iconBg: "bg-orange-100",
                            iconHover: "group-hover:bg-orange-500",
                            iconColor: "text-orange-500",
                            half: "bg-orange-100",
                        },
                        {
                            title: "Business Analysis",
                            description: "Understand business problems and deliver better solutions.",
                            icon: BarChart2,
                            iconBg: "bg-indigo-100",
                            iconHover: "group-hover:bg-indigo-500",
                            iconColor: "text-indigo-500",
                            half: "bg-indigo-100",
                        },
                        {
                            title: "Information Technology",
                            description: "Develop modern IT skills for enterprise teams.",
                            icon: QrCode,
                            iconBg: "bg-blue-100",
                            iconHover: "group-hover:bg-blue-600",
                            iconColor: "text-blue-500",
                            half: "bg-blue-100",
                        },
                    ].map((card) => {
                        const Icon = card.icon;
                        const isFirst = card.active;

                        return (
                            <div
                                key={card.title}
                                className={`group relative rounded-xl p-8 min-h-[190px] overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer
${isFirst ? "bg-[#1E6FD9] text-white" : "bg-white"}`}
                            >
                                {/* Light Half Circle - Scales on hover */}
                                <div
                                    className={`absolute -top-8 -right-8 w-24 h-24 ${card.half} rounded-full transition-all duration-700 ease-in-out group-hover:scale-150`}
                                />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon */}
                                    <div
                                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500
${isFirst
                                                ? "bg-blue-400 group-hover:bg-white"
                                                : `${card.iconBg} ${card.iconHover}`
                                            }`}
                                    >
                                        <Icon
                                            size={18}
                                            className={`transition-colors duration-500
${isFirst
                                                    ? "text-white group-hover:text-blue-600"
                                                    : `${card.iconColor} group-hover:text-white`
                                                }`}
                                        />
                                    </div>

                                    {/* Bottom Content */}
                                    <div className="mt-auto relative">
                                        {/* Heading */}
                                        <p
                                            className={`font-bold text-xl transition-opacity duration-500
${isFirst
                                                    ? "text-white group-hover:opacity-0"
                                                    : "text-gray-900 group-hover:opacity-0"
                                                }`}
                                        >
                                            {card.title}
                                        </p>

                                        {/* Hover Content */}
                                        <div
                                            className="absolute left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        >
                                            <p className={`${isFirst ? "text-white/90" : "text-gray-600"} text-sm mb-2`}>
                                                {card.description}
                                            </p>

                                            <span className={`${isFirst ? "text-white" : "text-blue-600"} text-sm font-semibold flex items-center gap-1`}>
                                                View Courses <ArrowRight size={14} />
                                            </span>
                                        </div>
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