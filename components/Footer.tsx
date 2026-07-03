"use client"
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  // Navigation Links matching image_6075bb.jpg
  const navLinks = ['Home', 'About', 'Services', 'Portfolio',  'Contact'];

  // Showcase Images (Replicating the 6 square grid strip)


  return (
    <footer className="w-full bg-[#EBD956] text-[#4A442D] pt-16 pb-6 px-6 sm:px-12 md:px-16 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Row 1: Top Navigation (Bold, underlined uppercase headings) */}
        <nav className="grid grid-cols-3 sm:grid-cols-6 gap-y-4 gap-x-2 text-center sm:text-left border-b border-[#4A442D]/20 pb-10">
          {navLinks.map((link) => (
            <Link 
              key={link} 
              href={`/${link.toLowerCase()}`}
              className="text-lg md:text-xl font-extrabold uppercase tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="underline decoration-2 underline-offset-4">{link}</span>
            </Link>
          ))}
        </nav>

        {/* Row 2: Image Grid Strip */}
       

        {/* Row 3: Info & Socials */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 py-6 border-t border-[#4A442D]/10">
          {/* Agency Location Copy */}
          <div className="text-sm md:text-base font-semibold leading-tight max-w-xs">
            <p>Rebel Riot is a Creative Agency</p>
            <p>Based in Los Angeles, CA</p>
          </div>

          {/* Handles & Icons */}
          <div className="flex items-center gap-4 text-sm md:text-base font-extrabold tracking-wider">
            <span className="uppercase font-black text-base md:text-lg">@REBELRIOTAGENCY</span>
            <div className="flex items-center gap-3">
              {/* Instagram Icon */}
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              {/* YouTube Icon */}
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="YouTube">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* TikTok Icon */}
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="TikTok">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31.02 2.61.1 3.9.24V4.17c-.8-.06-1.61-.09-2.42-.07v6.62c0 1.95-.53 3.42-1.6 4.39-1.03.95-2.45 1.44-4.26 1.44-1.68 0-3.07-.47-4.14-1.42C2.93 14.2 2.4 12.8 2.4 10.93c0-1.92.55-3.38 1.65-4.37C5.12 5.59 6.58 5.1 8.43 5.1c.36 0 .73.02 1.09.06V1.1c-.6-.05-1.21-.08-1.82-.08C5.07 1.02 2.65 2.05.97 4.1 0 5.27 0 7.42 0 10.55c0 3.25.9 5.5 2.7 6.77 1.5.95 3.53 1.43 6.1 1.43 2.95 0 5.17-.74 6.64-2.2 1-.95 1.51-2.4 1.51-4.37V6.05c1.4.95 3.01 1.53 4.84 1.68V3.85c-1.3-.12-2.43-.65-3.41-1.57-.9-.83-1.5-1.85-1.81-3.04l-4.05-.22z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Row 4: Massive Brand Headline Asset Display */}
        <div className="relative pt-10 select-none">
          <h2 className="text-[11vw] font-black tracking-tighter leading-none text-[#4A442D] uppercase whitespace-nowrap overflow-hidden">
            Rebel Riot Agency
          </h2>
          
          {/* Absolute aligned micro-credit */}
          <div className="absolute bottom-1 right-0 text-right">
            <Link 
              href="/credits" 
              className="text-xs font-semibold underline underline-offset-2 opacity-90 hover:opacity-100 transition-opacity"
            >
              Site Credit
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}