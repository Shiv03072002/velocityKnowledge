import Partnersbar from "@/components/Home/Partnersbar";
import Missionvision from "@/components/Home/Missionvision";
import Programssection from "@/components/Home/Programssection";
import Ourapproach from "@/components/Home/Ourapproach";
import Livesessions from "@/components/Home/Livesessions";
import Trainingbuilt from "@/components/Home/Trainingbuilt";
import WhoWeHelp from '@/components/Home/WhoWeHelp'
import InsightsSection from '@/components/Home/InsightsSection'
import HeroSection from '@/components/Home/HeroSection'
import Cta from "@/components/Home/Cta";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection/>
      <Partnersbar />
      <WhoWeHelp/>
      <Missionvision />
      <Programssection />

      {/* Background Grid Section */}
      <section className="relative bg-[#F8FAFC]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(#e5e7eb 1px, transparent 1px),
              linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px"
          }}
        />

        <div className="relative">
          <Trainingbuilt />
          <Ourapproach />
        </div>
      </section>

      <InsightsSection/>
      <Cta />
    </div>
  );
}