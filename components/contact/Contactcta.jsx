import { Check } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-12 px-4 sm:py-20 sm:px-6 text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/cta/bg.jpg')",
        }}
      />

      {/* Content - relative to appear above background */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <span className="inline-block bg-white text-[#1E6FD9] text-[10px] sm:text-xs  tracking-tighter uppercase px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 font-semibold">
          Let's Discuss
        </span>

        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 [font-family:var(--font-dm-serif)] tracking-wider px-2">
          Start a conversation
        </h2>

        <p className="text-[#94A3B8] text-xs sm:text-sm max-w-xs sm:max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
          Get in touch with our team for any questions about our training
          programs, upcoming sessions, or customized learning solutions.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-6 px-4">
          {[
            "Expert-led programs",
            "Training for teams and organizations",
            "Custom learning solutions",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-white text-gray-800 text-xs sm:text-sm px-4 sm:px-5 py-4 sm:py-4 rounded-lg w-full sm:w-auto justify-center sm:justify-start transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="bg-[#EAF2FD] rounded-sm p-0.5 flex-shrink-0">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#1E6FD9]" />
              </div>
              <span className="whitespace-nowrap font-bold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
