"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact', isUnderlined: true }, // Highlighted contact link from the image
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="w-full bg-[#EBD956] text-[#4A442D] px-6 sm:px-12 py-6 relative z-50 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="text-3xl sm:text-4xl font-black tracking-tighter">
          Rebel Riot
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-base lg:text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:opacity-70 transition-opacity ${
                link.isUnderlined ? 'underline underline-offset-4 decoration-2 font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#4A442D] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#4A442D] transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#4A442D] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Slide-down Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#EBD956] border-t border-[#4A442D]/10 px-6 py-6 transition-all duration-300 ease-in-out md:hidden flex flex-col gap-4 shadow-xl ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-lg font-bold py-1 ${
              link.isUnderlined ? 'underline underline-offset-4 decoration-2' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}