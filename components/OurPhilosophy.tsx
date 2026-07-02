import React from 'react';
import Link from 'next/link';

export default function OurPhilosophy() {
  return (
    <section className="w-full bg-white p-4 md:p-8">
      {/* Container matching the large rounded inner frame in image_5f8d41.jpg */}
      <div className="bg-[#EBD956] rounded-[40px] md:rounded-[60px] min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 max-w-7xl mx-auto">
        
        {/* Small uppercase subtitle */}
        <span className="text-[#4A442D] tracking-[0.15em] text-xs md:text-sm font-semibold uppercase mb-6 block">
          Our Philosophy
        </span>

        {/* High-impact headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold text-[#4A442D] leading-[1.05] tracking-tight max-w-4xl mb-8">
          You’re Not Here For “Safe.” <br className="hidden md:inline" />
          You’re Here to <span className="uppercase">Stand Out</span>, <br />
          Shake Things Up, & Make People Remember You
        </h2>

        {/* Centered paragraph block */}
        <p className="text-[#4A442D] text-sm md:text-base leading-relaxed max-w-2xl font-medium opacity-90 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        {/* Custom rounded action button */}
        <Link 
          href="/work-with-us" 
          className="inline-flex items-center justify-center bg-[#8EC5E9] hover:bg-[#7db6dc] text-[#243A4A] font-bold px-10 py-4 rounded-full border border-[#243A4A]/10 transition-colors duration-200 text-sm md:text-base"
        >
          Work With Us →
        </Link>

      </div>
    </section>
  );
}