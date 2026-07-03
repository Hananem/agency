
import ServicesFAQ from '@/components/ Servicesfaq';

import ServicesIntro from '@/components/Servicesintro';

import ReadyToConnect from '@/components/ReadyToConnect';

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