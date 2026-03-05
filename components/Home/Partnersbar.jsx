"use client";
import Marquee from "react-fast-marquee";

export default function PartnersBar() {
  const partners = [
    { name: "Hygiemeans", style: "italic font-serif" },
    { name: "LOCKHEED MARTIN", style: "font-bold tracking-wide uppercase" },
    { name: "MERRILL", style: "font-bold tracking-widest uppercase" },
    { name: "NA", style: "font-bold text-blue-800" },
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-20 w-full overflow-hidden relative">
      {/* Left overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
      
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        loop={0}
        autoFill={true}
        className="w-full"
      >
        <div className="flex items-center gap-12 md:gap-20 mx-6">
          {partners.map((partner, index) => (
            <span
              key={`${partner.name}-${index}`}
              className={`text-gray-500 hover:text-gray-800 transition-colors cursor-pointer inline-block text-lg md:text-xl whitespace-nowrap ${partner.style}`}
            >
              {partner.name}
            </span>
          ))}
        </div>
      </Marquee>
    </section>
  );
}