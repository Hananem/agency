import React from 'react';
import Image from 'next/image';

export default function ManifestoSection() {
  return (
    <section className="w-full bg-[#EFEFE0] text-[#4A442D] py-20 px-6 sm:px-12 md:px-16 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* العمود الأيسر: يحتوي على العنوان الكبير والفقرة النصية */}
        <div className="md:col-span-7 flex flex-col justify-between h-full">
          
          {/* العنوان الضخم والمضغوط المطابق تماماً للصورة */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] uppercase mb-12 max-w-2xl">
            This is Where Safe Design Goes to Die. Our Work is Bold, Loud, Unapologetic – & It Gets Results
          </h2>
          
          {/* النص الوصفي الصغير الجانبي */}
          <p className="text-sm leading-relaxed font-medium max-w-lg opacity-90 md:mt-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
            est laborum.
          </p>
        </div>

        {/* العمود الأيمن: يحتوي على الصورة المنزاحة للأسفل */}
        <div className="md:col-span-5 w-full pt-0 md:pt-24 flex justify-end">
          <div className="relative w-full max-w-md aspect-square overflow-hidden shadow-sm">
            <Image
              src="/path-to-fries-image.jpg" // استبدل بمسار صورتك الحقيقي (الملف المرجعي للفكرة)
              alt="Food styling design and connection details"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-w-768px) 100vw, 40vw"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}