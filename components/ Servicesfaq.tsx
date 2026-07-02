"use client";

import { useState } from "react";

type ServiceItem = {
  title: string;
  content: string;
};

const services: ServiceItem[] = [
  {
    title: "Brand Strategy",
    content:
      "We dig into who you are, who you're talking to, and what makes you different — then turn that into a positioning, voice, and visual direction your brand can grow into for years.",
  },
  {
    title: "Website Design",
    content:
      "Fast, responsive, conversion-focused sites built to look sharp on every screen. No templates, no bloat — just clean design and code that actually performs.",
  },
  {
    title: "Content Creation",
    content:
      "Photography, video, and copy that stop the scroll. We plan, shoot, and edit content built for how people actually use social, ads, and web today.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      className="px-6 py-20 lg:px-16"
      style={{
        backgroundColor: "#a9d0ea",
        backgroundImage:
          "linear-gradient(#2b2820 1px, transparent 1px), linear-gradient(90deg, #2b2820 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] bg-[#f2f0dd] p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#4b4636]/70 sm:text-base">
            Our Services
          </p>

          <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-[#4b4636]">
            We Do Things
            <br />
            Differently
          </h2>

          <a
            href="#"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#f0a94e] px-8 py-3.5 font-semibold text-[#2b2820] transition-colors hover:bg-[#e89a34]"
          >
            View Services <span aria-hidden>→</span>
          </a>
        </div>

        {/* Right — accordion */}
        <div className="flex flex-col justify-center">
          <div className="border-t border-[#4b4636]/30">
            {services.map((service, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={service.title} className="border-b border-[#4b4636]/30">
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="text-2xl font-extrabold text-[#4b4636] sm:text-3xl">
                      {service.title}
                    </span>
                    <span
                      className={`shrink-0 text-3xl font-light text-[#4b4636] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  <div
                    className="grid overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="min-h-0">
                      <p className="pb-6 pr-8 leading-relaxed text-[#4b4636]/80">
                        {service.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}