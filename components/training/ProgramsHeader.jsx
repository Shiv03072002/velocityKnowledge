// "use client";

// import { Search, Brain, Users, BarChart3, Code } from "lucide-react";

// export default function ProgramsHero() {
//   return (
//     <section
//       className="relative w-full py-16 sm:py-20 text-center text-white overflow-hidden  bg-cover bg-center bg-no-repeat"
//       style={{
//           backgroundImage: "url('/images/cta/bg.jpg')",

//         }}
//     >
//       {/* Overlay */}
     

//       {/* Floating Icons - Left Side */}
//       <div className="absolute left-8 lg:left-24 top-16 lg:top-28 text-white/30 float-animation hidden sm:block">
//         <Brain size={40} className="lg:w-[70px] lg:h-[70px]" />
//       </div>

//       <div className="absolute left-20 lg:left-50 bottom-16 lg:bottom-24 text-white/30 float-animation [animation-delay:1s] hidden sm:block">
//         <Users size={40} className="lg:w-[70px] lg:h-[70px]" />
//       </div>

//       {/* Floating Icons - Right Side (symmetrical) */}
//       <div className="absolute right-8 lg:right-24 top-16 lg:top-28 text-white/30 float-animation [animation-delay:1.5s] hidden sm:block">
//         <Code size={40} className="lg:w-[70px] lg:h-[70px]" />
//       </div>

//       <div className="absolute right-20 lg:right-50 bottom-16 lg:bottom-24 text-white/30 float-animation [animation-delay:2s] hidden sm:block">
//         <BarChart3 size={40} className="lg:w-[70px] lg:h-[70px]" />
//       </div>

//       {/* Content */}
//       <div className="relative md:max-w-4xl mx-auto px-4 sm:px-6">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4 sm:mb-6 leading-tight max-w-70 mx-auto md:max-w-160 ">
//           Training programs built for
          
//           real work
//         </h1>

//         <p className="text-gray-300 mb-8 sm:mb-10 max-w-xl mx-auto text-sm sm:text-base px-4 sm:px-0">
//           Explore training programs led by experienced instructors to help
//           you solve real workplace challenges.
//         </p>

//         {/* Search - Mobile Stacked Version */}
//         <div className="max-w-xl mx-auto px-4 sm:px-0">
//           {/* Mobile version (stacked) */}
//           <div className="flex flex-col gap-3 sm:hidden">
//             <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-lg">
//               <div className="pl-4 text-gray-400">
//                 <Search size={20} />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search by skill, topic or certification..."
//                 className="w-full px-3 py-4 text-gray-700 outline-none text-sm"
//               />
//             </div>
//             <button className="w-full bg-[#2F6FCA] text-white px-6 py-4 rounded-xl text-sm font-medium hover:bg-[#1E5EB0] transition-colors shadow-lg">
//               Search
//             </button>
//           </div>

//           {/* Desktop version (inline) */}
//           <div className="hidden sm:flex items-center bg-white rounded-xl overflow-hidden shadow-lg">
//             <div className="pl-4 text-gray-400">
//               <Search size={20} />
//             </div>
//             <input
//               type="text"
//               placeholder="Search by skill, topic or certification..."
//               className="flex-1 px-3 py-4 text-gray-700 outline-none"
//             />
//             <button className="bg-[#2F6FCA] text-white px-8 py-3 rounded-lg m-1 text-sm font-medium hover:bg-[#1E5EB0] transition-colors whitespace-nowrap">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//           100% {
//             transform: translateY(0px);
//           }
//         }
//         .float-animation {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";
import { Search, Brain, Users, BarChart3, Code } from "lucide-react";

export default function ProgramsHeader({ searchTerm, onSearchChange, onSearchSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch custom event with search term
    const event = new CustomEvent('training-search', { 
      detail: searchTerm 
    });
    window.dispatchEvent(event);
    if (onSearchSubmit) onSearchSubmit(e);
  };

  return (
    <section
      className="relative w-full py-16 sm:py-20 text-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/cta/bg.jpg')",
      }}
    >
      {/* Floating Icons - Left Side */}
      <div className="absolute left-8 lg:left-24 top-16 lg:top-28 text-white/30 float-animation hidden sm:block">
        <Brain size={40} className="lg:w-[70px] lg:h-[70px]" />
      </div>

      <div className="absolute left-20 lg:left-50 bottom-16 lg:bottom-24 text-white/30 float-animation [animation-delay:1s] hidden sm:block">
        <Users size={40} className="lg:w-[70px] lg:h-[70px]" />
      </div>

      {/* Floating Icons - Right Side (symmetrical) */}
      <div className="absolute right-8 lg:right-24 top-16 lg:top-28 text-white/30 float-animation [animation-delay:1.5s] hidden sm:block">
        <Code size={40} className="lg:w-[70px] lg:h-[70px]" />
      </div>

      <div className="absolute right-20 lg:right-50 bottom-16 lg:bottom-24 text-white/30 float-animation [animation-delay:2s] hidden sm:block">
        <BarChart3 size={40} className="lg:w-[70px] lg:h-[70px]" />
      </div>

      {/* Content */}
      <div className="relative md:max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4 sm:mb-6 leading-tight max-w-70 mx-auto md:max-w-160">
          Training programs built for
          real work
        </h1>

        <p className="text-gray-300 mb-8 sm:mb-10 max-w-xl mx-auto text-sm sm:text-base px-4 sm:px-0">
          Explore training programs led by experienced instructors to help
          you solve real workplace challenges.
        </p>

        {/* Search - Mobile Stacked Version */}
        <div className="max-w-xl mx-auto px-4 sm:px-0">
          {/* Mobile version (stacked) */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:hidden">
            <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="pl-4 text-gray-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={onSearchChange}
                placeholder="Search by skill, topic or certification..."
                className="w-full px-3 py-4 text-gray-700 outline-none text-sm"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#2F6FCA] text-white px-6 py-4 rounded-xl text-sm font-medium hover:bg-[#1E5EB0] transition-colors shadow-lg"
            >
              Search
            </button>
          </form>

          {/* Desktop version (inline) */}
          <form onSubmit={handleSubmit} className="hidden sm:flex items-center bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="pl-4 text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={onSearchChange}
              placeholder="Search by skill, topic or certification..."
              className="flex-1 px-3 py-4 text-gray-700 outline-none"
            />
            <button 
              type="submit"
              className="bg-[#2F6FCA] text-white px-8 py-3 rounded-lg m-1 text-sm font-medium hover:bg-[#1E5EB0] transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}