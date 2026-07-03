
import ServicesIntro from '@/components/Servicesintro';
import WhatToExpect from '@/components/WhatToExpect';
import ServicesSection from '@/components/ServicesSection';
import ReadyToConnect from '@/components/ReadyToConnect';
import OurPhilosophy from '@/components/OurPhilosophy';


export default function Services() {
  return (
    <div className="">
      <ServicesIntro/>
     
      
       <ServicesSection/>
       <WhatToExpect/>
       <OurPhilosophy/>

       <ReadyToConnect/>
      
    </div>
  );
}