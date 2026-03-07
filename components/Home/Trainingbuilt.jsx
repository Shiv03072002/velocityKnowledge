import Image from "next/image";
import { Sparkles, Users, Layers, Target, UserStar, BookMarked, ChartNetwork } from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    circleColor: "bg-blue-50",
    hoverBg: "hover:bg-blue-600",
    title: "Tailored Solutions",
    description:
      "We don’t use one fixed plan. Each program is customized to match your tools, work style, and team culture.",
  },
  {
    icon: UserStar,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    circleColor: "bg-green-50",
    hoverBg: "hover:bg-green-600",
    title: "Practitioner-Led",
    description:
      "Sessions are led by experienced engineers and leaders who work in the field, not full-time trainers.",
  },
  {
    icon: BookMarked,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    circleColor: "bg-purple-50",
    hoverBg: "hover:bg-purple-600",
    title: "Mixed Methods",
    description:
      "We use different ways to learn, including live workshops, simple assessments, and one-to-one coaching when needed.",
  },
  {
    icon: ChartNetwork,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    circleColor: "bg-orange-50",
    hoverBg: "hover:bg-orange-600",
    title: "Outcomes Focused",
    description:
      "We look at real improvement in work and results, not just time spent in sessions.",
  },
];

export default function TrainingBuilt() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-24 relative">

      <div
        className="absolute inset-0 pointer-events-none z-0 hidden md:block"
        style={{
          backgroundImage: `
      linear-gradient(to right, #F1F5F9 1px, transparent 1px),
      linear-gradient(to bottom, #F1F5F9 1px, transparent 1px)
    `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, transparent 0%, transparent 40%, black 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 65%, black 85%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Small Label - Centered on mobile */}
        <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4 flex items-center gap-2 justify-center lg:justify-start">
          <span className="w-2 h-2 bg-[#1E6FD9]"></span>
          HOW WE ARE DIFFERENT
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - Hidden on mobile, visible on lg */}
          <div className="hidden lg:block">
            <h2 className="text-4xl md:text-5xl font-normal [font-family:var(--font-dm-serif)] text-gray-900 mb-6 leading-tight">
              Training built for real problems
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm">
              Most training content is generic. We focus on practical
              scenarios drawn from real work challenges and deliver
              outcomes your team can immediately apply.
            </p>

            {/* Unsplash Image */}
            <div className="rounded-2xl overflow-hidden ">
              <img
                src="/images/training/img.jpg"
                alt="Training session with professionals in a workshop"
                className="object-cover w-full h-[540px]"
              />
            </div>
          </div>

          {/* RIGHT SIDE FEATURES */}
          <div className="flex flex-col gap-6 lg:col-span-1">

            {/* Mobile Heading - Visible only on mobile, centered */}
            <div className="lg:hidden text-center">
              <h2 className="text-4xl md:text-5xl font-normal [font-family:var(--font-dm-serif)] text-gray-900 mb-6 leading-tight">
                Training built for real problems
              </h2>

              <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-xs mx-auto">
                Most training content is generic. We focus on practical
                scenarios drawn from real work challenges and deliver
                outcomes your team can immediately apply.
              </p>
            </div>

            {/* All Feature Cards - Left aligned on mobile */}
            {FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;

              // Map index to specific background classes
              const bgClasses = [
                'bg-blue-600',
                'bg-green-600',
                'bg-purple-600',
                'bg-orange-600'
              ];

              // Map index to specific text color classes for hover
              const textColorClasses = [
                'group-hover:text-blue-600',
                'group-hover:text-green-600',
                'group-hover:text-purple-600',
                'group-hover:text-orange-600'
              ];

              return (
                <div
                  key={feature.title}
                  className={`group relative overflow-hidden border border-gray-200 rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${feature.hoverBg} hover:text-white text-left`}
                >
                  {/* Half Circle - Light color, scales on hover */}
                  <div
                    className={`absolute -top-12 -right-12 w-36 h-36 rounded-full transition-all duration-700 ease-in-out group-hover:scale-150 ${feature.circleColor} group-hover:opacity-20`}
                  ></div>

                  {/* Icon - Left aligned */}
                  <div
                    className={`relative z-10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 
          ${bgClasses[index]}
          group-hover:bg-white group-hover:scale-110`}
                  >
                    <IconComponent
                      size={22}
                      className={`text-white transition-colors duration-300 ${textColorClasses[index]}`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-gray-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                    {feature.description}
                  </p>
                </div>
              );
            })}

            {/* Mobile Image - Visible only on mobile, after all cards */}
            <div className="lg:hidden mt-6">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/training/img.jpg"
                  alt="Training session with professionals in a workshop"
                  className="object-cover w-full h-[300px] md:h-[400px]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}