import React from 'react';
import Image from 'next/image';

interface ServiceItem {
  title: string;
  price: string;
  bgColor: string;
  textColor: string;
  badgeBg: string;
  badgeTextColor: string;
  borderColor: string;
  imageSrc: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    title: 'WEBSITE DESIGN',
    price: 'STARTING AT $7500',
    bgColor: 'bg-[#EBD956]', // Yellow
    textColor: 'text-[#4E4A3F]',
    badgeBg: 'bg-[#F3A44B]', // Orange badge
    badgeTextColor: 'text-[#4E4A3F]',
    borderColor: 'border-[#4E4A3F]/30',
    imageSrc: '/image_2987bd.jpg', // Replace with your image asset path
    features: ["What's Included Goes Here", "What's Included Goes Here", "What's Included Goes Here"],
  },
  {
    title: 'CONTENT CREATION',
    price: 'STARTING AT $2500',
    bgColor: 'bg-[#8EC5E9]', // Blue
    textColor: 'text-[#4E4A3F]',
    badgeBg: 'bg-[#EBD956]', // Yellow badge
    badgeTextColor: 'text-[#4E4A3F]',
    borderColor: 'border-[#4E4A3F]/30',
    imageSrc: '/image_2987bd.jpg', // Replace with your image asset path
    features: ["What's Included Goes Here", "What's Included Goes Here", "What's Included Goes Here"],
  },
  {
    title: 'BRAND STRATEGY',
    price: 'STARTING AT $4500',
    bgColor: 'bg-[#F3A44B]', // Orange
    textColor: 'text-[#4E4A3F]',
    badgeBg: 'bg-[#8EC5E9]', // Blue badge
    badgeTextColor: 'text-[#4E4A3F]',
    borderColor: 'border-[#4E4A3F]/30',
    imageSrc: '/image_2987bd.jpg', // Replace with your image asset path
    features: ["What's Included Goes Here", "What's Included Goes Here", "What's Included Goes Here"],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#121212] py-24 px-4 overflow-hidden min-h-screen flex flex-col justify-center items-center">
      
      {/* Huge Background Text Overlay */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <h1 className="text-[14vw] font-black tracking-tighter text-[#EFEFE0] opacity-90 leading-none uppercase">
          SERVICES
        </h1>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-6 mt-16">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`w-full rounded-[40px] ${service.bgColor} ${service.textColor} p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl`}
          >
            {/* Left Content Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase leading-none">
                {service.title}
              </h2>
              
              {/* Features List / Accordion Lines */}
              <div className="flex flex-col w-full max-w-md">
                {service.features.map((feature, fIndex) => (
                  <div
                    key={fIndex}
                    className={`flex justify-between items-center py-3 border-b ${service.borderColor} font-bold text-base md:text-lg`}
                  >
                    <span>{feature}</span>
                    <span className="text-xl font-light">+</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image/Badge Column */}
            <div className="w-full md:w-1/2 relative aspect-[16/10] rounded-[30px] overflow-hidden bg-stone-900 group">
              {/* Image component setup - Update src to your matching project assets */}
              <div className="w-full h-full relative">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover mix-blend-normal object-center"
                  priority={index === 0}
                />
              </div>

              {/* Absolute Price Badge */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <span className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-extrabold tracking-wide shadow-sm border border-black/10 ${service.badgeBg} ${service.badgeTextColor}`}>
                  {service.price}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}