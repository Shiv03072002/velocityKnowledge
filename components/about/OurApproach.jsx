export default function OurApproach() {
  const steps = [
    {
      num: "01",
      title: "Understand the Need",
      desc: "We start by understanding the goals, experience level, and challenges of the learners.",
    },
    {
      num: "02",
      title: "Plan the Right Program",
      desc: "We design a program that fits the learning needs, work context, and objectives.",
    },
    {
      num: "03",
      title: "Guide the Learning",
      desc: "Experienced practitioners lead the sessions and provide clear guidance throughout.",
    },
    {
      num: "04",
      title: "Apply and Improve",
      desc: "Learners use what they learn in real situations, with a focus on improvement and results.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1E6FD9]"></span>
            Our approach
            </p>

            <h2 className="text-4xl font-normal text-gray-900 leading-snug [font-family:var(--font-dm-serif)]">
              A Structured Approach
              <br />
              to Building Skills
            </h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mt-0 lg:mt-10">
            Our training follows a clear process designed to help learners
            build practical skills. From understanding learning needs to
            applying new knowledge at work, each step focuses on real results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm"
            >
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-gray-200 rounded-lg text-[#1E6FD9] font-semibold mb-4">
                  {step.num}
                </div>

                <h3 className="text-sm font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>

              <div className="bg-[#1E6FD9] text-white text-sm px-5 py-4 text-center">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}