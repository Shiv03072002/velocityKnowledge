const sessions = [
  {
    course: "AI for Project Management",
    date: "Mar 11 – Mar 13",
    sessions: "3 Sessions • 4.5 Hours Each",
    price: "$1,350",
  },
  {
    course: "AI for Software Testing",
    date: "Mar 23 – Mar 24",
    sessions: "2 Sessions • 4.5 Hours Each",
    price: "$795",
  },
  {
    course: "AI for Business Analysis",
    date: "Apr 20 – Apr 22",
    sessions: "3 Sessions • 4.5 Hours Each",
    price: "$1,250",
  },
];

function CalendarIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 6h13" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function PublicTrainingSchedule() {
  return (
    <section className="bg-white px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 sm:mb-5"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Public training schedule
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg mb-8 sm:mb-12">
          Join upcoming instructor-led sessions open to individuals and small
          teams. Reserve your seat and learn from industry practitioners.
        </p>

        {/* Mobile View (Cards) */}
        <div className="block md:hidden space-y-4">
          {sessions.map((row, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl bg-white p-5 space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-gray-900 font-semibold text-base sm:text-lg">
                  {row.course}
                </h3>
                <span className="text-gray-900 font-semibold text-base sm:text-lg">
                  {row.price}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                  <CalendarIcon />
                  <span>{row.date}</span>
                </div>
                
                <div className="text-gray-600 text-sm sm:text-base">
                  {row.sessions}
                </div>
              </div>
              
              <button className="w-full bg-[#0F172A] hover:bg-black text-white text-sm sm:text-base font-medium px-5 py-3 rounded-lg transition">
                Register Now
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block border border-gray-200 rounded-xl overflow-hidden bg-white">

          {/* Header */}
          <div className="grid grid-cols-[2fr_1.2fr_1.8fr_0.8fr_0.8fr] bg-gray-50 px-6 lg:px-8 py-4 border-b border-gray-200">
            {["COURSE", "DATE", "SESSIONS", "PRICE", "ACTION"].map((col) => (
              <span
                key={col}
                className="text-xs lg:text-sm font-semibold tracking-widest text-gray-500 uppercase"
              >
                {col}
              </span>
            ))}
          </div>

          {/* Rows */}
          {sessions.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[2fr_1.2fr_1.8fr_0.8fr_0.8fr] items-center px-6 lg:px-8 py-5 lg:py-7 ${
                i < sessions.length - 1 ? "border-b border-gray-100" : ""
              } hover:bg-gray-50 transition`}
            >
              <span className="text-gray-900 font-bold text-sm lg:text-base">
                {row.course}
              </span>

              <span className="flex items-center gap-2 text-gray-700 text-sm lg:text-base">
                <CalendarIcon />
                {row.date}
              </span>

              <span className="text-gray-700 text-sm lg:text-base">
                {row.sessions}
              </span>

              <span className="text-gray-900 font-semibold text-sm lg:text-base">
                {row.price}
              </span>

              <div>
                <button className="bg-[#0F172A] hover:bg-black text-white text-sm lg:text-base font-medium px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg transition">
                  Register
                </button>
              </div>
            </div>
          ))}

        </div>

       

      </div>
    </section>
  );
}