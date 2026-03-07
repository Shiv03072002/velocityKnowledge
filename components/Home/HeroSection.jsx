// "use client";

// import { ArrowRight, Calendar, Zap, Award, BarChart2, QrCode } from "lucide-react";
// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const CARDS = [
//     {
//         title: "AI Technologies",
//         description: "Explore AI tools and modern technologies shaping the future.",
//         icon: Calendar,
//         iconBg: "bg-blue-500",
//         iconHover: "group-hover:bg-blue-500",
//         iconColor: "text-white",
//         half: "bg-blue-300/30",
//         active: true,
//     },
//     {
//         title: "Project Management",
//         description: "Learn how to plan, manage, and deliver projects more clearly and confidently.",
//         icon: Zap,
//         iconBg: "bg-green-100",
//         iconHover: "group-hover:bg-green-500",
//         iconColor: "text-green-500",
//         half: "bg-green-100",
//     },
//     {
//         title: "Leadership",
//         description: "Build leadership skills for managing teams and decisions.",
//         icon: Award,
//         iconBg: "bg-purple-100",
//         iconHover: "group-hover:bg-purple-500",
//         iconColor: "text-purple-500",
//         half: "bg-purple-100",
//     },
//     {
//         title: "Certifications",
//         description: "Prepare for industry-recognized certifications.",
//         icon: Award,
//         iconBg: "bg-orange-100",
//         iconHover: "group-hover:bg-orange-500",
//         iconColor: "text-orange-500",
//         half: "bg-orange-100",
//     },
//     {
//         title: "Business Analysis",
//         description: "Understand business problems and deliver better solutions.",
//         icon: BarChart2,
//         iconBg: "bg-indigo-100",
//         iconHover: "group-hover:bg-indigo-500",
//         iconColor: "text-indigo-500",
//         half: "bg-indigo-100",
//     },
//     {
//         title: "Information Technology",
//         description: "Develop modern IT skills for enterprise teams.",
//         icon: QrCode,
//         iconBg: "bg-blue-100",
//         iconHover: "group-hover:bg-blue-600",
//         iconColor: "text-blue-500",
//         half: "bg-blue-100",
//     },
// ];

// export default function HeroSection() {
//     const swiperRef = useRef(null);

//     return (
//         <>
//             {/* ═══════════════════════════════════════════════════════
//           DESKTOP LAYOUT (lg+) — completely unchanged
//       ═══════════════════════════════════════════════════════ */}
//             <section className="hidden lg:flex relative min-h-screen bg-black overflow-hidden items-center">
//                 <div className="absolute inset-0 z-0">
//                     <img
//                         src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
//                         alt=""
//                         className="w-full h-full object-cover opacity-30"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
//                     <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700 rounded-full opacity-20 blur-3xl" />
//                     <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-900 rounded-full opacity-30 blur-2xl" />
//                     <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-violet-800 rounded-full opacity-15 blur-3xl" />
//                 </div>

//                 <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 flex flex-row items-center gap-10 w-full">
//                     <div className="w-[40%] text-white">
//                         <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5 text-sm text-[#16A34A] mb-8 backdrop-blur-sm bg-[#ECFDF3]">
//                             <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
//                             Learn
//                             <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
//                             Practice
//                             <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
//                             Get better
//                             <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
//                             Achieve more
//                         </div>
//                         <h1 className="text-6xl font-normal [font-family:var(--font-dm-serif)] leading-tight mb-6 tracking-tight">
//                             Building Workforce
//                             <br />Skills For Complex
//                             <br />Organizations
//                         </h1>
//                         <p className="text-white/60 text-base leading-relaxed mb-10 max-w-md">
//                             Instructor-led training programs designed to develop key capabilities for enterprise and government organizations.
//                         </p>
//                         <div className="flex flex-wrap gap-4 mb-16">
//                             <button className="flex items-center gap-2 bg-[#1E6FD9] hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-3 rounded-lg">
//                                 Explore Programs <ArrowRight size={16} />
//                             </button>
//                             <button className="flex items-center gap-2 border border-white/40 hover:border-white/70 transition-colors font-semibold px-6 py-3 rounded-lg backdrop-blur-sm bg-white text-[#1E6FD9]">
//                                 View Public Schedule
//                             </button>
//                         </div>
//                         <div className="flex items-center gap-4">
//                             <div className="flex -space-x-3">
//                                 {["bg-amber-400", "bg-rose-400", "bg-sky-400"].map((c, i) => (
//                                     <div key={i} className={`w-10 h-10 rounded-full border-2 border-black ${c} flex items-center justify-center text-white text-xs font-bold`}>
//                                         {["A", "B", "C"][i]}
//                                     </div>
//                                 ))}
//                             </div>
//                             <div>
//                                 <p className="text-white font-semibold text-sm">Expert-led learning</p>
//                                 <p className="text-white/50 text-xs">Programs shaped by practical experience.</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="w-[60%] grid grid-cols-2 gap-4">
//                         {CARDS.map((card) => (
//                             <CardItem key={card.title} card={card} />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════════════════
//           MOBILE LAYOUT — two separate blocks
//       ═══════════════════════════════════════════════════════ */}
//             <div className="lg:hidden">
//                 {/* BLOCK 1: Image bg — only behind the text/content */}
//                 <div className="relative overflow-hidden">
//                     <div className="absolute inset-0 z-0">
//                         <img
//                             src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
//                             alt=""
//                             className="w-full h-full object-cover opacity-40"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />
//                         <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-700 rounded-full opacity-20 blur-3xl" />
//                     </div>

//                     <div className="relative z-10 px-6 pt-16 pb-14 text-white text-center">
//                         <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5 text-sm text-[#16A34A] mb-8 backdrop-blur-sm bg-[#ECFDF3] mx-auto">
//                             <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block" />
//                             Learn
//                             <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block" />
//                             Practice
//                             <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block" />
//                             Get better
//                             <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block" />
//                             Achieve more
//                         </div>

//                         <h1 className="text-4xl font-normal [font-family:var(--font-dm-serif)] leading-tight mb-6 tracking-tight">
//                             Building Workforce
//                             <br />Skills For Complex
//                             <br />Organizations
//                         </h1>

//                         <p className="text-white/70 text-base leading-relaxed mb-10 max-w-sm mx-auto">
//                             Instructor-led training programs designed to develop key capabilities for enterprise and government organizations.
//                         </p>

//                         <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full">
//                             <button className="flex items-center justify-center gap-2 bg-[#1E6FD9] hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-3 rounded-lg w-full sm:w-auto">
//                                 Explore Programs <ArrowRight size={16} />
//                             </button>
//                             <button className="flex items-center justify-center gap-2 border border-white/40 font-semibold px-6 py-3 rounded-lg bg-white text-[#1E6FD9] w-full sm:w-auto">
//                                 View Public Schedule
//                             </button>
//                         </div>

//                         <div className="flex items-center gap-4 justify-center">
//                             <div className="flex -space-x-3">
//                                 {["bg-amber-400", "bg-rose-400", "bg-sky-400"].map((c, i) => (
//                                     <div key={i} className={`w-10 h-10 rounded-full border-2 border-black ${c} flex items-center justify-center text-white text-xs font-bold`}>
//                                         {["A", "B", "C"][i]}
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="text-left">
//                                 <p className="text-white font-semibold text-sm">Expert-led learning</p>
//                                 <p className="text-white/50 text-xs">Programs shaped by practical experience.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* BLOCK 2: Cards on plain white bg — overflow-hidden clips the peeking slide */}
//                 <div className="bg-white py-10 overflow-hidden">
//                     <div className="pl-6">
//                         <Swiper
//                             onSwiper={(swiper) => (swiperRef.current = swiper)}
//                             slidesPerView={1.15}
//                             spaceBetween={16}
//                             loop={true}
//                             centeredSlides={false}
//                         >
//                             {CARDS.map((card) => (
//                                 <SwiperSlide key={card.title}>
//                                     <CardItem card={card} isMobile />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>


//                 </div>
//             </div>
//         </>
//     );
// }

// function CardItem({ card, isMobile = false }) {
//     const Icon = card.icon;
//     const isFirst = card.active;

//     return (
//         <div
//             className={`group relative rounded-xl p-8 overflow-hidden transition-all duration-500 cursor-pointer border border-gray-200
//                 ${isMobile ? "min-h-[200px] hover:shadow-md" : "min-h-[190px] hover:scale-105 hover:shadow-lg"}
//                 ${isFirst && !isMobile ? "bg-[#1E6FD9] text-white border-transparent" : "bg-white"}`}
//         >
//             <div className={`absolute -top-8 -right-8 w-24 h-24 ${card.half} rounded-full transition-all duration-700 ease-in-out group-hover:scale-150`} />

//             <div className="relative z-10 flex flex-col h-full">
//                 {/* Icon at top */}
//                 <div
//                     className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500
//                         ${isMobile
//                             ? isFirst ? "bg-blue-400" : card.iconBg
//                             : isFirst
//                                 ? "bg-blue-400 group-hover:bg-white"
//                                 : `${card.iconBg} ${card.iconHover}`
//                         }`}
//                 >
//                     <Icon
//                         size={18}
//                         className={`transition-colors duration-500
//                             ${isFirst
//                                 ? isMobile ? "text-white" : "text-white group-hover:text-blue-600"
//                                 : `${card.iconColor} ${isMobile ? "" : "group-hover:text-white"}`
//                             }`}
//                     />
//                 </div>

//                 {/* Spacer to push content to bottom */}
//                 <div className="flex-1"></div>

//                 {/* Content Container - fixed height at bottom */}
//                 <div className="relative h-[70px] mt-auto">
//                     {/* Title - aligned to bottom */}
//                     <div className={`absolute bottom-0 left-0 w-full transition-opacity duration-300
//                         ${isMobile 
//                             ? "opacity-100"
//                             : "opacity-100 group-hover:opacity-0"
//                         }`}>
//                         <p className={`font-bold text-xl ${isFirst && !isMobile ? "text-white" : "text-gray-900"}`}>
//                             {card.title}
//                         </p>
//                     </div>

//                     {/* Hover Content - Only for desktop */}
//                     {!isMobile && (
//                         <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                             <div className="flex flex-col">
//                                 <p className={`${isFirst ? "text-white/90" : "text-gray-600"} text-sm mb-2`}>
//                                     {card.description}
//                                 </p>
//                                 <span className={`${isFirst ? "text-white" : "text-[#1E6FD9]"} text-sm font-semibold flex items-center gap-1`}>
//                                     View Courses <ArrowRight size={14} />
//                                 </span>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Mobile Content - Always visible with fixed text colors */}
//                 {isMobile && (
//                     <div className="mt-4">
//                         <p className={`${
//                             isFirst 
//                                 ? "text-white/90" 
//                                 : "text-gray-800"
//                         } text-sm leading-relaxed`}>
//                             {card.description}
//                         </p>
//                         <span className={`${
//                             isFirst 
//                                 ? "text-white" 
//                                 : "text-[#1E6FD9]"
//                         } text-sm font-semibold flex items-center gap-1 mt-3`}>
//                             View Courses <ArrowRight size={14} />
//                         </span>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

"use client";

import { ArrowRight, Calendar, Zap, Award, BarChart2, QrCode ,PencilRuler,LandPlot,ChartPie} from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CARDS = [
    {
        title: "AI Technologies",
        description: "Learn how to use AI tools and ideas in real work situations.",
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
        icon: PencilRuler,
        iconBg: "bg-green-100",
        iconHover: "group-hover:bg-green-500",
        iconColor: "text-green-500",
        half: "bg-green-100",
    },
    {
        title: "Leadership",
        description: "Build skills to lead people, and handle real challenges at work.",
        icon: LandPlot,
        iconBg: "bg-purple-100",
        iconHover: "group-hover:bg-purple-500",
        iconColor: "text-purple-500",
        half: "bg-purple-100",
    },
    {
        title: "Certifications",
        description: "Learn how to understand problems, and support better decisions.",
        icon: Award,
        iconBg: "bg-orange-100",
        iconHover: "group-hover:bg-orange-500",
        iconColor: "text-orange-500",
        half: "bg-orange-100",
    },
    {
        title: "Business Analysis",
        description: "Get guided support to prepare for industry-recognized certifications.",
        icon: ChartPie,
        iconBg: "bg-indigo-100",
        iconHover: "group-hover:bg-indigo-500",
        iconColor: "text-indigo-500",
        half: "bg-indigo-100",
    },
    {
        title: "Information Technology",
        description: "Practical IT training designed around real tools, systems, and work needs.",
        icon: QrCode,
        iconBg: "bg-blue-100",
        iconHover: "group-hover:bg-blue-600",
        iconColor: "text-blue-500",
        half: "bg-blue-100",
    },
];

export default function HeroSection() {
    const swiperRef = useRef(null);

    return (
        <>
            {/* ═══════════════════════════════════════════════════════
          DESKTOP LAYOUT (lg+) — completely unchanged
      ═══════════════════════════════════════════════════════ */}
            <section className="hidden lg:flex relative min-h-screen bg-black overflow-hidden items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
                        alt=""
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700 rounded-full opacity-20 blur-3xl" />
                    <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-900 rounded-full opacity-30 blur-2xl" />
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-violet-800 rounded-full opacity-15 blur-3xl" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 flex flex-row items-center gap-10 w-full">
                    <div className="w-[40%] text-white">
                        <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5 text-[12px] text-[#16A34A] mb-8 backdrop-blur-sm bg-[#ECFDF3]">
                            <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
                            Learn
                            <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
                            Practice
                            <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
                            Get better
                            <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
                            Achieve more
                        </div>
                        <h1 className="text-6xl font-normal [font-family:var(--font-dm-serif)] leading-tight mb-6 tracking-tight">
                            Building Workforce
                            <br />Skills For Complex
                            <br />Organizations
                        </h1>
                        <p className="text-white text-base leading-relaxed mb-10 max-w-md">
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
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {["hero1", "hero2", "hero3"].map((img, i) => (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-black ${["bg-amber-400", "bg-rose-400", "bg-sky-400"][i]} overflow-hidden`}>
                                        <img
                                            src={`/images/hero/${img}.jpg`}
                                            alt={`Avatar ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Expert-led learning</p>
                                <p className=" text-xs">Programs shaped by practical experience.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[60%] grid grid-cols-2 gap-4">
                        {CARDS.map((card) => (
                            <CardItem key={card.title} card={card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
          MOBILE LAYOUT — two separate blocks
      ═══════════════════════════════════════════════════════ */}
            <div className="lg:hidden">
                {/* BLOCK 1: Image bg — only behind the text/content */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                            alt=""
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />
                        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-700 rounded-full opacity-20 blur-3xl" />
                    </div>

                    <div className="relative z-10 px-2 pt-16 pb-14 text-white text-center font-semibold">
                        <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-2 text-[12px] text-[#16A34A] mb-8 backdrop-blur-sm bg-[#ECFDF3] mx-auto">
                            <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
                            Learn
                            <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
                            Practice
                            <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
                            Get better
                            <span className="w-1 h-1 rounded-full bg-[#16A34A] inline-block" />
                            Achieve more
                        </div>

                        <h1 className="text-4xl font-normal [font-family:var(--font-dm-serif)] leading-tight mb-6 tracking-tight">
                            Building Workforce
                            <br />Skills For Complex
                            <br />Organizations
                        </h1>

                        <p className="text-white/70 text-base leading-relaxed mb-10 max-w-sm mx-auto">
                            Instructor-led training programs designed to develop key capabilities for enterprise and government organizations.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full">
                            <button className="flex items-center justify-center gap-2 bg-[#1E6FD9] hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-3 rounded-lg w-full sm:w-auto">
                                Explore Programs <ArrowRight size={16} />
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-white/40 font-semibold px-6 py-3 rounded-lg bg-white text-[#1E6FD9] w-full sm:w-auto">
                                View Public Schedule
                            </button>
                        </div>

                        <div className="flex items-center gap-4 justify-center">
                            <div className="flex -space-x-3">
                                {["hero1", "hero2", "hero3"].map((img, i) => (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-black ${["bg-amber-400", "bg-rose-400", "bg-sky-400"][i]} overflow-hidden`}>
                                        <img
                                            src={`/images/hero/${img}.jpg`}
                                            alt={`Avatar ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <p className="text-white font-semibold text-sm">Expert-led learning</p>
                                <p className="text-white/50 text-[11px]">Programs shaped by practical experience.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BLOCK 2: Cards on plain white bg — overflow-hidden clips the peeking slide */}
                <div className="bg-white py-10 overflow-hidden">
    <div className="pl-6">
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1.15}
            spaceBetween={16}
            loop={true}
            centeredSlides={false}
        >
            {CARDS.map((card, index) => (
                <SwiperSlide key={card.title}>
                    {({ isActive }) => (
                        <CardItem 
                            card={card} 
                            isMobile 
                            isActive={isActive}
                        />
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
</div>
            </div>
        </>
    );
}

function CardItem({ card, isMobile = false, isActive = false }) {
    const Icon = card.icon;
    const isFirst = card.active;

    return (
        <div
            className={`group relative rounded-xl p-4 md:p-8 overflow-hidden transition-all duration-500 cursor-pointer border border-gray-200
                ${isMobile ? "min-h-[200px] hover:shadow-md" : "min-h-[190px] hover:scale-105 hover:shadow-lg"}
                ${isFirst && !isMobile ? "bg-[#1E6FD9] text-white border-transparent" : "bg-white"}
                ${isMobile && (isActive ? "scale-100" : "scale-92 ")}
            `}
        >
            <div className={`absolute -top-8 -right-8 w-24 h-24 ${card.half} rounded-full transition-all duration-700 ease-in-out group-hover:scale-150`} />

            <div className="relative z-10 flex flex-col h-full">
                {/* Icon at top */}
                <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500
                        ${isMobile
                            ? isFirst ? "bg-blue-400" : card.iconBg
                            : isFirst
                                ? "bg-blue-400 group-hover:bg-white"
                                : `${card.iconBg} ${card.iconHover}`
                        }`}
                >
                    <Icon
                        size={18}
                        className={`transition-colors duration-500
                            ${isFirst
                                ? isMobile ? "text-white" : "text-white group-hover:text-blue-600"
                                : `${card.iconColor} ${isMobile ? "" : "group-hover:text-white"}`
                            }`}
                    />
                </div>

                {/* Spacer to push content to bottom */}
                <div className="flex-1"></div>

                {/* Content Container - fixed height at bottom */}
                <div className="relative h-[70px] mt-auto">
                    {/* Title - aligned to bottom */}
                    <div className={`absolute bottom-0 left-0 w-full transition-opacity duration-300
                        ${isMobile
                            ? "opacity-100"
                            : "opacity-100 group-hover:opacity-0"
                        }`}>
                        <p className={`font-bold text-xl ${isFirst && !isMobile ? "text-white" : "text-gray-900"}`}>
                            {card.title}
                        </p>
                    </div>

                    {/* Hover Content - Only for desktop */}
                    {!isMobile && (
                        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex flex-col">
                                <p className={`${isFirst ? "text-white/90" : "text-gray-600"} text-sm mb-2`}>
                                    {card.description}
                                </p>
                                <span className={`${isFirst ? "text-white" : "text-[#1E6FD9]"} text-sm font-semibold flex items-center gap-1`}>
                                    View Courses <ArrowRight size={14} />
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Content - Always visible with fixed text colors */}
                {isMobile && (
                    <div className="mt-4">
                        <p className={`${isFirst
                                ? "text-black"
                                : "text-gray-900"
                            } text-sm leading-relaxed`}>
                            {card.description}
                        </p>
                        <span className={`${isFirst
                                ? "text-blue-500"
                                : "text-[#1E6FD9]"
                            } text-sm font-semibold flex items-center gap-1 mt-3`}>
                            View Courses <ArrowRight size={14} />
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}