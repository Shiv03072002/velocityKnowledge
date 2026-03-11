import { Check } from "lucide-react";
import Image from "next/image";

export default function WhatWeDo() {
  const features = [
    "Training created for real business needs",
    "Programs customized for each organization",
    "Experienced instructors from industry",
    "Flexible learning formats for different teams",
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-10">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1E6FD9]"></span>
              WHAT WE DO
            </p>

            <h2 className="text-4xl md:text-5xl [font-family:var(--font-dm-serif)] text-gray-900 leading-tight mb-4">
              How velocity knowledge
              <br />
              helps build skills
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
              We provides training programs for organizations around the world.
              Our courses are created and taught by experienced professionals
              who understand real business challenges.
            </p>
          </div>

          {/* Right Feature Boxes - Minimal padding */}
          <div className="grid sm:grid-cols-2 gap-3 content-start mt-10 ">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-6 hover:shadow"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-[#1E6FD9] flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>

                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Image */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/images/about/about.jpg"
            alt="Team learning"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
