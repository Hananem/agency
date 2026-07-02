import React from 'react';

export default function ProcessSteps() {
  return (
    <section className="w-full bg-[#EBD956] text-[#4A442D] py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col space-y-12 md:space-y-0">
        
        {/* STEP 1 (Left Aligned Content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
          <div className="max-w-md pb-12 md:pb-24">
            <span className="text-xs font-bold tracking-widest uppercase block mb-1">
              Step One
            </span>
            <h3 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
              Reach Out
            </h3>
            <p className="text-sm leading-relaxed font-medium opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat.
            </p>
          </div>
          
          {/* Top Right Connecting Arc */}
          <div className="hidden md:block relative w-full h-full min-h-[250px]">
            <svg className="absolute inset-0 w-full h-full text-[#4A442D]" viewBox="0 0 200 200" fill="none">
              {/* Upper right quadrant arc curving downwards */}
              <path d="M 50,20 A 80,80 0 0,1 130,100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* STEP 2 (Right Aligned Content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
          {/* Bottom Left Connecting Arc */}
          <div className="hidden md:block relative w-full h-full min-h-[250px] order-last md:order-first">
            <svg className="absolute inset-0 w-full h-full text-[#4A442D]" viewBox="0 0 200 200" fill="none">
              {/* Lower left quadrant arc curving upwards */}
              <path d="M 40,150 A 80,80 0 0,1 120,70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="max-w-md md:pl-12 pb-12 md:pb-24 text-left md:text-left">
            <span className="text-xs font-bold tracking-widest uppercase block mb-1">
              Step Two
            </span>
            <h3 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
              Set Goals
            </h3>
            <p className="text-sm leading-relaxed font-medium opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat.
            </p>
          </div>
        </div>

        {/* STEP 3 (Left Aligned Content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
          <div className="max-w-md pb-12">
            <span className="text-xs font-bold tracking-widest uppercase block mb-1">
              Step Three
            </span>
            <h3 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
              Create Magic
            </h3>
            <p className="text-sm leading-relaxed font-medium opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat.
            </p>
          </div>
          
          {/* Empty spacer side for step 3 layout symmetry */}
          <div className="hidden md:block" />
        </div>

      </div>
    </section>
  );
}