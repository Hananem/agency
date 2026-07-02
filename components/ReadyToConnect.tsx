import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ReadyToConnect() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Replace "/path-to-your-image.jpg" with your local image reference or image_5f9520.jpg */}
        <Image
          src="/path-to-your-image.jpg"
          alt="Ready to do this background"
          fill
          priority
          className="object-cover object-center md:object-[right_35%_top_50%]"
        />
        {/* Subtle dark overlay for typography contrast */}
        <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/70 md:via-black/30 md:to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-16">
        <div className="max-w-2xl flex flex-col items-start text-left">
          
          {/* Tagline */}
          <span className="text-white/80 tracking-[0.15em] text-xs md:text-sm font-semibold uppercase mb-4 block">
            Let's Connect
          </span>

          {/* Impact Heading */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#FBFBEE] leading-none tracking-tight mb-10">
            Ready to Do This?
          </h2>

          {/* Action Button matching the previous color theme */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#8EC5E9] hover:bg-[#7db6dc] text-[#243A4A] font-bold px-12 py-4 rounded-full transition-colors duration-200 text-sm md:text-base shadow-lg"
          >
            Reach Out
          </Link>
          
        </div>
      </div>
    </section>
  );
}