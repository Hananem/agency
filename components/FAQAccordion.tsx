"use client"

import React, { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#4E4A3F]/40 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-8 text-left group focus:outline-none"
        aria-expanded={isOpen}
      >
        {/* Question text with tightly tracked bold editorial style */}
        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4E4A3F] tracking-tight transition-opacity group-hover:opacity-80">
          {question}
        </span>
        
        {/* Minimalist interactive plus/minus toggle matching the design */}
        <span className="text-xl sm:text-2xl font-light text-[#4E4A3F] ml-4 transform transition-transform duration-200 ease-out select-none">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* Smooth collapsible container for answers */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#4E4A3F] text-base md:text-lg leading-relaxed max-w-3xl font-medium opacity-90">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQAccordion() {
  const faqData = [
    { question: "Question Goes Here?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
    { question: "Question Goes Here?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
    { question: "Question Goes Here?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
    { question: "Question Goes Here?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
    { question: "Question Goes Here?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
  ];

  return (
    <section className="bg-[#EFEFE0] min-h-screen w-full py-20 px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col items-center justify-center font-sans">
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Top dividing line that anchors the accordion block in image_6018a3.png */}
        <div className="border-t border-[#4E4A3F]/40 w-full">
          {faqData.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}