"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function PartnersBar() {
  const partners = [
    {
      name: "one",
      logo: "/images/logos/Clip path group.png",
      width: 130,
      height: 40,
    },
    {
      name: "three",
      logo: "/images/logos/lm-logo 1.png",
      width: 180,
      height: 40,
    },
    {
      name: "four",
      logo: "/images/logos/Masks.png",
      width: 140,
      height: 40,
    },

    {
      name: "five",
      logo: "/images/logos/nasa-logo-web-rgb 2.png",
      width: 94,
      height: 40,
    },
    {
      name: "six",
      logo: "/images/logos/army_logo_horiz 2.png",
      width: 130,
      height: 40,
    },
  ];
  // This ensures there's always content filling the viewport
  const infinitePartners = Array(30).fill(partners).flat();

  return (
    <section className="bg-white  py-16 w-full overflow-hidden relative">
      <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6 flex items-center justify-center gap-2 ">
        <span className="w-2 h-2 bg-[#1E6FD9]"></span>
        Trusted by Organizations Worldwide
      </p>

      {/* Left overlay - reduced on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-10 md:w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>

      {/* Right overlay - reduced on mobile */}
      <div className="absolute right-0 top-0 bottom-0 w-10 md:w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>

      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        loop={0}
        autoFill={false}
        className="w-full"
      >
        <div className="flex items-center">
          {infinitePartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center cursor-pointer"
              style={{
                marginRight: index === infinitePartners.length - 1 ? 0 : "60px", // Gap between logos
              }}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="object-contain  transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
