
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
    <div className="bg-white ">
      <HeroSection/>
      <Partnersbar />
      <WhoWeHelp/>
      <Missionvision />
      <Programssection />
      <Trainingbuilt />
      <Ourapproach />
      <Livesessions />
      <InsightsSection/>
      <Cta />
    </div>
  );
}
