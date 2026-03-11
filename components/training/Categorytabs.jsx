// 'use client'

// import { Calendar, Wrench, Users, Award, Clock, Cpu } from "lucide-react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// export default function CategoryFilters() {
//   const categories = [
//     {
//       name: "AI Technologies",
//       icon: <Calendar size={18} />,
//       activeColor: "bg-blue-600",
//       iconBg: "bg-blue-100 text-blue-600",
//       active: false,
//     },
//     {
//       name: "Project Management",
//       icon: <Wrench size={18} />,
//       activeColor: "bg-green-600",
//       iconBg: "bg-green-100 text-green-600",
//       active: true,
//     },
//     {
//       name: "Leadership",
//       icon: <Users size={18} />,
//       activeColor: "bg-purple-600",
//       iconBg: "bg-purple-100 text-purple-600",
//       active: false,
//     },
//     {
//       name: "Certifications",
//       icon: <Award size={18} />,
//       activeColor: "bg-orange-600",
//       iconBg: "bg-orange-100 text-orange-600",
//       active: false,
//     },
//     {
//       name: "Business Analysis",
//       icon: <Clock size={18} />,
//       activeColor: "bg-indigo-600",
//       iconBg: "bg-indigo-100 text-indigo-600",
//       active: false,
//     },
//     {
//       name: "Information Technology",
//       icon: <Cpu size={18} />,
//       activeColor: "bg-blue-600",
//       iconBg: "bg-blue-100 text-blue-600",
//       active: false,
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       {/* Desktop View - Grid */}
//       <div className="hidden md:flex flex-wrap justify-center gap-3 md:gap-4 py-4">
//         {categories.map((cat, index) => (
//           <button
//             key={index}
//             className={`group flex items-center gap-3 px-5 py-3.5 rounded-xl border border-gray-300 transition-all duration-200 ${
//               cat.active
//                 ? `${cat.activeColor} text-white border-transparent shadow-lg scale-105`
//                 : "bg-white text-gray-700 border-gray-100 hover:border-gray-200 hover:shadow-md hover:-translate-y-0.5"
//             }`}
//           >
//             <span
//               className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
//                 cat.active
//                   ? "bg-white/20 text-white"
//                   : `${cat.iconBg} group-hover:scale-110 group-hover:shadow-sm`
//               }`}
//             >
//               {cat.icon}
//             </span>
//             <span className="text-sm font-semibold tracking-wide">{cat.name}</span>
//           </button>
//         ))}
//       </div>

//       {/* Mobile Slider with Swiper */}
//       <div className="md:hidden relative py-4">
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={8}
//           slidesPerView="auto"
//           navigation={{
//             prevEl: '.custom-swiper-prev',
//             nextEl: '.custom-swiper-next',
//           }}
//           className="!px-8"
//         >
//           {categories.map((cat, index) => (
//             <SwiperSlide key={index} className="!w-auto">
//               <button
//                 className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 ${
//                   cat.active
//                     ? `${cat.activeColor} text-white border-transparent shadow-lg`
//                     : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
//                 }`}
//               >
//                 <span
//                   className={`w-7 h-7 rounded-md flex items-center justify-center ${
//                     cat.active
//                       ? "bg-white/20 text-white"
//                       : cat.iconBg
//                   }`}
//                 >
//                   {cat.icon}
//                 </span>
//                 <span className="text-xs font-semibold whitespace-nowrap">{cat.name}</span>
//               </button>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Arrows */}
//         <button className="custom-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 shadow-md border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
//           <svg className="w-4 h-4 text-gray-600" viewBox="0 0 16 16" fill="none">
//             <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>
        
//         <button className="custom-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 shadow-md border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
//           <svg className="w-4 h-4 text-gray-600" viewBox="0 0 16 16" fill="none">
//             <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>

//         {/* Pagination Dots */}
//         <div className="flex justify-center gap-1 mt-3">
//           {categories.map((_, index) => (
//             <div
//               key={index}
//               className={`w-1 h-1 rounded-full transition-all ${
//                 index === 0 ? 'w-3 bg-gray-600' : 'bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// components/training/Categorytabs.jsx
"use client";

import { Calendar, Wrench, Users, Award, Clock, Cpu } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function CategoryFilters({ selectedCategory, onCategoryChange }) {
  const categories = [
    {
      name: "AI Technologies",
      icon: <Calendar size={18} />,
      activeColor: "bg-blue-600",
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      name: "Project Management",
      icon: <Wrench size={18} />,
      activeColor: "bg-green-600",
      iconBg: "bg-green-100 text-green-600",
    },
    {
      name: "Leadership",
      icon: <Users size={18} />,
      activeColor: "bg-purple-600",
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      name: "Certifications",
      icon: <Award size={18} />,
      activeColor: "bg-orange-600",
      iconBg: "bg-orange-100 text-orange-600",
    },
    {
      name: "Business Analysis",
      icon: <Clock size={18} />,
      activeColor: "bg-indigo-600",
      iconBg: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "Information Technology",
      icon: <Cpu size={18} />,
      activeColor: "bg-blue-600",
      iconBg: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      {/* Desktop View - Grid */}
      <div className="hidden md:flex flex-wrap justify-center gap-3 md:gap-4 py-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => onCategoryChange(cat.name)}
            className={`group flex items-center gap-3 px-8 py-3.5 rounded-xl cursor-pointer border border-gray-200 transition-all duration-200 ${
              selectedCategory === cat.name
                ? `${cat.activeColor} text-white border-transparent shadow-lg scale-105`
                : "bg-white text-gray-700 border-gray-100 hover:border-gray-200 hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            <span
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                selectedCategory === cat.name
                  ? "bg-white/20 text-white"
                  : `${cat.iconBg} group-hover:scale-110 `
              }`}
            >
              {cat.icon}
            </span>
            <span className="text-sm font-semibold tracking-wide">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Mobile Slider with Swiper */}
      <div className="md:hidden relative py-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView="auto"
          navigation={{
            prevEl: '.custom-swiper-prev',
            nextEl: '.custom-swiper-next',
          }}
          className="!px-8"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <button
                onClick={() => onCategoryChange(cat.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 ${
                  selectedCategory === cat.name
                    ? `${cat.activeColor} text-white border-transparent shadow-lg`
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-md flex items-center justify-center ${
                    selectedCategory === cat.name
                      ? "bg-white/20 text-white"
                      : cat.iconBg
                  }`}
                >
                  {cat.icon}
                </span>
                <span className="text-xs font-semibold whitespace-nowrap">{cat.name}</span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button className="custom-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 shadow-md border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          <svg className="w-4 h-4 text-gray-600" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="custom-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1.5 shadow-md border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          <svg className="w-4 h-4 text-gray-600" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1 mt-3">
          {categories.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 rounded-full transition-all ${
                index === 0 ? 'w-3 bg-gray-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}