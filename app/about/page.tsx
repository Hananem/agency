
import CuratingBrandCTA from '@/components/Curatingbrandcta';
import TeamCards from '@/components/Teamcards';
import MeetFounder from '@/components/Meetfounder';
import WhatWeStandFor from '@/components/Whatwestandfor';

import ReadyToConnect from '@/components/ReadyToConnect';

import ProcessSteps from '@/components/ProcessSteps';


export default function About() {
  return (
    <div className="">
  
      <CuratingBrandCTA/>
      <TeamCards/>
      <MeetFounder/>
      <WhatWeStandFor/>
    
       <ProcessSteps/>
              <ReadyToConnect/>
       
    </div>
  );
}