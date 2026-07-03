import Hero from '@/components/Hero';
import Crafthero from '@/components/Crafthero';
import Riotshero  from '@/components/Riotshero';
import Viewourwork  from '@/components/Viewourwork';
import ServicesFAQ from '@/components/ Servicesfaq';
import AboutRebelRiot from '@/components/Aboutrebelriot';
import CreateMagic from '@/components/Createmagic';
import CuratingBrandCTA from '@/components/Curatingbrandcta';
import TeamCards from '@/components/Teamcards';
import MeetFounder from '@/components/Meetfounder';
import WhatWeStandFor from '@/components/Whatwestandfor';
import ServicesIntro from '@/components/Servicesintro';
import WhatToExpect from '@/components/WhatToExpect';
import ServicesSection from '@/components/ServicesSection';
import ReadyToConnect from '@/components/ReadyToConnect';
import OurPhilosophy from '@/components/OurPhilosophy';
import ContactUs from '@/components/ContactUs';
import FAQAccordion from '@/components/FAQAccordion';
import ProcessSteps from '@/components/ProcessSteps';


export default function Services() {
  return (
    <div className="">
      <ServicesIntro/>
     
      <Viewourwork/>
      <ServicesFAQ/>
      <WhatToExpect/>
      <AboutRebelRiot/>
      <CuratingBrandCTA/>
      <TeamCards/>
      <MeetFounder/>
      <WhatWeStandFor/>
      <ServicesIntro/>
       
       <ServicesSection/>
       <OurPhilosophy/>

       <ReadyToConnect/>
      
    </div>
  );
}