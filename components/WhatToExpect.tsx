import React from 'react';

// Define the structure for each step card
interface StepCardProps {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, bgColor, textColor }) => {
  return (
    <div className={`flex flex-col p-8 rounded-[40px] ${bgColor} ${textColor} aspect-[1.15/1] justify-between shadow-sm`}>
      <div>
        <h3 className="text-3xl font-extrabold tracking-tight mb-4 flex items-center gap-2">
          <span>{number}</span>
          <span>{title}</span>
        </h3>
        <p className="text-sm leading-relaxed font-normal opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function WhatToExpect() {
  const steps = [
    {
      number: '01.',
      title: 'Reach Out',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      bgColor: 'bg-[#EBD956]', // Yellow-tan
      textColor: 'text-[#4A442D]',
    },
    {
      number: '02.',
      title: 'Collaborate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      bgColor: 'bg-[#F3A44B]', // Soft Orange
      textColor: 'text-[#4A3319]',
    },
    {
      number: '03.',
      title: 'Grow Biz',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      bgColor: 'bg-[#8EC5E9]', // Soft Blue
      textColor: 'text-[#243A4A]',
    },
  ];

  return (
    <section className="bg-[#EFEFE0] min-h-screen py-16 px-4 md:px-8 flex flex-col items-center justify-center font-sans">
      <div className="max-w-6xl w-full mx-auto">
        {/* Main Heading */}
        <h2 className="text-6xl md:text-7xl font-bold text-[#4E4A3F] text-center tracking-tight mb-12">
          What to Expect
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              bgColor={step.bgColor}
              textColor={step.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}