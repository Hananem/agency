"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    newsletter: false,
    phone: '',
    services: [] as string[],
    preferredDate: '',
    budget: '',
    referral: '',
    message: '',
  });

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <main className="w-full bg-white min-h-screen font-sans antialiased">
      
      {/* SECTION 1: Banner Header (From image_5fab49.jpg) */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-neutral-900 flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <Image
          src="/hero-contact.jpg" // Replace with your image_5fab49.jpg asset path
          alt="Contact Us Background"
          fill
          priority
          className="object-cover object-center brightness-75 scale-105"
        />
        {/* Bold Title Overlay */}
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[11rem] font-black uppercase text-[#FBFBEE] tracking-tight leading-none drop-shadow-md select-none">
            Contact Us
          </h1>
        </div>
      </section>

      {/* SECTION 2: Form Container (From image_5fab49.jpg bottom transition & image_5fabdd.png) */}
      <section className="relative bg-[#EBD956] -mt-12 md:-mt-16 rounded-t-[40px] md:rounded-t-[60px] pt-12 pb-24 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          
          <form onSubmit={handleSubmit} className="space-y-6 text-[#4A442D] font-medium">
            
            {/* Name Fields */}
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-white border border-black px-4 py-2 text-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                  <span className="text-xs opacity-70 mt-1 block">First Name (required)</span>
                </div>
                <div>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-white border border-black px-4 py-2 text-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                  <span className="text-xs opacity-70 mt-1 block">Last Name (required)</span>
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold mb-1">Email <span className="text-xs opacity-70">(required)</span></label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-black px-4 py-3 text-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="newsletter"
                checked={formData.newsletter}
                onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                className="w-4 h-4 bg-white border border-black rounded-none appearance-none checked:bg-black checked:border-black relative after:content-[''] after:hidden checked:after:block after:absolute after:left-[4px] after:top-[1px] after:w-[5px] after:h-[9px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 cursor-pointer"
              />
              <label htmlFor="newsletter" className="text-xs sm:text-sm cursor-pointer select-none">
                Sign up for news and updates
              </label>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white border border-black px-4 py-3 text-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Services Checkboxes */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">What services are you interested in?</label>
              {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                <div key={option} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={option}
                    checked={formData.services.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="w-4 h-4 bg-white border border-black rounded-none appearance-none checked:bg-black checked:border-black relative after:content-[''] after:hidden checked:after:block after:absolute after:left-[4px] after:top-[1px] after:w-[5px] after:h-[9px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 cursor-pointer"
                  />
                  <label htmlFor={option} className="text-sm cursor-pointer select-none">{option}</label>
                </div>
              ))}
            </div>

            {/* Preferred Date Picker */}
            <div>
              <label className="block text-sm font-semibold mb-1">Preferred Date</label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full max-w-xs bg-white border border-black px-4 py-3 text-black focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
              />
            </div>

            {/* Budget Field */}
            <div>
              <label className="block text-sm font-semibold mb-1">What is your budget?</label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-white border border-black px-4 py-3 text-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Dropdown Referral Selector */}
            <div>
              <label className="block text-sm font-semibold mb-1">How did you hear about us?</label>
              <div className="relative">
                <select
                  value={formData.referral}
                  onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                  className="w-full bg-white border border-black px-4 py-3 text-black appearance-none focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="social-media">Social Media</option>
                  <option value="search-engine">Search Engine</option>
                  <option value="referral">Word of Mouth</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.218 0.209-0.507 0.313-0.789 0.313s-0.571-0.104-0.789-0.313l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold mb-1">Message <span className="text-xs opacity-70">(required)</span></label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-black px-4 py-3 text-black focus:outline-none focus:ring-1 focus:ring-black resize-y"
              />
            </div>

            {/* Form Submission Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-black hover:bg-neutral-900 text-white font-bold px-10 py-3.5 rounded-full transition-transform active:scale-95 text-sm md:text-base tracking-wide"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </section>

    </main>
  );
}