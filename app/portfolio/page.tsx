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
import ManifestoSection from '@/components/ManifestoSection';
import OurWork from '@/components/OurWork';
import FeaturedWorkSticky from '@/components/FeaturedWorkSticky';


export default function Portfolio() {
  return (
    <div className="">
      <ServicesIntro/>
     <ManifestoSection/>
  
       <OurWork/>
       <FeaturedWorkSticky/>
      <ServicesFAQ/>

       <ReadyToConnect/>

      
    </div>
  );
}