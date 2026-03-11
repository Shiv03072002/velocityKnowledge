import { BookOpen, Users, SlidersHorizontal, Laptop } from "lucide-react";

export default function WhoWeAre() {
  const features = [
    {
      icon: BookOpen,
      title: "Practical Learning",
      desc: "Our training focuses on real workplace situations learners can apply at work.",
      color: "bg-blue-600",
      lightColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      desc: "Courses are led by instructors with strong industry experience.",
      color: "bg-green-600",
      lightColor: "bg-green-50",
    },
    {
      icon: SlidersHorizontal,
      title: "Customized Programs",
      desc: "Training can be tailored to meet the specific needs of each organization.",
      color: "bg-purple-600",
      lightColor: "bg-purple-50",
    },
    {
      icon: Laptop,
      title: "Flexible Delivery",
      desc: "Programs are available in virtual or in-person formats to suit different teams.",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1E6FD9]"></span>
              WHO WE ARE
            </p>

            <h2 className="text-4xl md:text-5xl [font-family:var(--font-dm-serif)] text-gray-900 leading-tight">
              A Trusted Partner for
              <br />
              Professional Learning
            </h2>
          </div>

          {/* Right */}
          <div className="text-gray-600 text-md leading-relaxed space-y-4  mt-0 lg:mt-10">
            <p>
              We are a training organization that helps teams and professionals
              build practical skills for real work. We work with experienced
              instructors who understand business challenges and bring real
              industry knowledge to every program.
            </p>

            <p>
              <span className="text-[#1E6FD9] font-semibold">
                Our goal is simple:
              </span>{" "}
              help organizations and professionals learn new skills, solve
              problems, and perform better at work.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm relative overflow-hidden group"
              >
                {/* Half Circle in Top Right with Hover Effect */}
                <div 
                  className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${item.lightColor} opacity-60 transition-all duration-300 group-hover:scale-110 group-hover:opacity-80`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-lg text-white ${item.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}
                    >
                      <Icon size={22} />
                    </div>

                    <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                  </div>

                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}