import Cta from "@/components/Home/Cta";

import Partnersbar from "@/components/Home/Partnersbar";
import AboutCta from '@/components/about/AboutCta'
import OurApproach from '@/components/about/OurApproach'
import WhoWeAre from '@/components/about/WhoWeAre'
import WhatWeDo from '@/components/about/WhatWeDo'
export default function About() {
  return (
    <section className="">
      <AboutCta/>  
      <WhoWeAre/>  
      <WhatWeDo/>
      <OurApproach />
      <Partnersbar />
      <Cta />
    </section>
  );
}
