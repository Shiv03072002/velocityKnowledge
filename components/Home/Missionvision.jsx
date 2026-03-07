export default function MissionVision() {
  // Card data array
  const cards = [
    {
      title: "OUR MISSION",
      color: "blue",
      description: "Our mission is to help organizations build real skills through guided, instructor-led training.",
      bgColor: "bg-blue-100",
      dividerColor: "bg-[#1E6FD9]"
    },
    {
      title: "OUR VISION",
      color: "green",
      description: "Our vision is to help organizations grow through skilled people who can adapt and handle real challenges.",
      bgColor: "bg-green-100",
      dividerColor: "bg-[#16A34A]"
    }
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="grid md:grid-cols-2 items-start gap-10 mb-12">
          {/* LEFT SIDE */}
          <div className="text-center md:text-left">
            {/* Top Label */}
            <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 bg-[#1E6FD9]"></span>
              WHO WE ARE
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-normal [font-family:var(--font-dm-serif)] text-gray-900 mb-6 leading-tight">
              Building capability through guided learning
            </h2>

            <p className="text-gray-500 text-base max-w-md mx-auto md:mx-0">
              We design instructor-led training programs for organizations and professionals.
            </p>
          </div>

          {/* RIGHT SIDE (Decorative Squares) */}
          <div className="relative hidden md:flex justify-end items-start h-full">
            <div className="relative w-48 h-48">
              <div className="absolute top-0 right-0 w-32 h-32 border-8 border-blue-100"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-8 border-blue-100"></div>
            </div>
          </div>
        </div>

        {/* Cards - Mapped from array */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-xl p-9 border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Right Half Circle Decoration - increases on hover */}
              <div className={`absolute -right-16 top-1/2 -translate-y-1/2 w-44 h-44 ${card.bgColor} rounded-full opacity-60 group-hover:scale-140 group-hover:opacity-80 transition-all duration-500 ease-in-out`}></div>

              <p className="text-gray-900 font-semibold text-sm tracking-wide mb-2 relative z-10">
                {card.title}
              </p>

              {/* Divider - increases in width on hover */}
              <div className={`w-10 h-1 ${card.dividerColor} mb-6 group-hover:w-27 transition-all duration-300 ease-in-out`}></div>

              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px] md:max-w-sm relative z-10">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: Decorative background elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-blue-50 rounded-full opacity-20 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-green-50 rounded-full opacity-20 blur-3xl -z-10"></div>
      </div>
    </section>
  );
}