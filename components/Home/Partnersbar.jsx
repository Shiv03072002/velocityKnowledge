"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function PartnersBar() {
  const partners = [
    { 
      name: "one", 
      logo: "/images/logos/Clip path group.png",
      width: 180,
      height: 60,
    },
    { 
      name: "two", 
      logo: "/images/logos/Mask group-2.png",
      width: 180,
      height: 60,
    },
    { 
      name: "three", 
      logo: "/images/logos/lm-logo 1.png",
      width: 180,
      height: 60,
    },
    { 
      name: "four", 
      logo: "/images/logos/Masks.png",
      width: 180,
      height: 60,
    },

    { 
      name: "five", 
      logo: "/images/logos/nasa-logo-web-rgb 2.png",
      width: 180,
      height: 60,
    },
    { 
      name: "six", 
      logo: "/images/logos/army_logo_horiz 2.png",
      width: 180,
      height: 60,
    },
    
  ];
  // This ensures there's always content filling the viewport
  const infinitePartners = Array(30).fill(partners).flat();

  return (
    <section className="bg-white border-y border-gray-100 py-16 w-full overflow-hidden relative">
      {/* Left overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
      
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
                marginRight: index === infinitePartners.length - 1 ? 0 : '60px' // Gap between logos
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