import React from 'react';
import Image from 'next/image';

export default function OurWork() {
  // بيانات الصور (استبدل مسارات الصور بملفاتك الحقيقية)
  const polaroids = [
    {
      src: '/riot-3.jpg', // الصورة اليسرى (البنت بالفستان الأحمر)
      alt: 'Model in cage with red tights',
      rotation: '-rotate-12 translate-x-4 md:translate-x-8 translate-y-4',
      zIndex: 'z-10',
    },
    {
      src: '/services-1.jpg', // الصورة المركزية (البنت التي تلمس وجهها)
      alt: 'Portrait of woman with nose ring',
      rotation: 'rotate-0',
      zIndex: 'z-20',
    },
    {
      src: '/services-2.jpg', // الصورة اليمنى (البطاطس المقلية)
      alt: 'Fries bowl close up',
      rotation: 'rotate-12 -translate-x-4 md:-translate-x-8 translate-y-6',
      zIndex: 'z-10',
    },
  ];

  return (
    <section className="w-full bg-[#111111] text-[#EFEFE0] py-24 px-4 overflow-hidden relative min-h-[700px] flex flex-col justify-between">
      
      {/* الخلفية النصية الضخمة جداً (تظهر خلف الصور جزئياً) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <h2 className="text-[14vw] font-black tracking-tighter leading-none text-[#EFEFE0] uppercase opacity-95">
          Our Work
        </h2>
      </div>

      {/* حاوية كروت البولاروايد المتداخلة */}
      <div className="relative max-w-5xl mx-auto w-full flex items-center justify-center pt-28 pb-16 z-10">
        <div className="flex items-center justify-center gap-0 md:gap-4 relative w-full">
          {polaroids.map((img, index) => (
            <div
              key={index}
              className={`relative bg-[#EFEFE0] p-3 pb-12 sm:p-4 sm:pb-16 md:p-5 md:pb-20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 ${img.rotation} ${img.zIndex} w-[32%] min-w-[120px] max-w-[320px] aspect-[4/5] flex flex-col`}
            >
              {/* منطقة الصورة داخل كرت البولاروايد */}
              <div className="relative w-full flex-grow bg-zinc-800 overflow-hidden border border-black/5">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 30vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* الجزء السفلي: الروابط والنصوص التوضيحية */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[#EFEFE0]/10 z-10 font-sans px-4">
        
        {/* رابط التوجيه لمعرض الصور */}
        <button className="text-sm md:text-base font-bold uppercase tracking-wider hover:opacity-70 transition-opacity">
          Click to View Each Gallery —&gt;
        </button>

        {/* النص الفلسفي المضاف في النسخ المتقدمة */}
        <p className="hidden lg:block text-xs md:text-sm font-black uppercase tracking-tight text-center max-w-md">
          "Design isn't a recipe. It's about raw, unfiltered connection."
        </p>

        {/* حقوق الوكالة */}
        <div className="text-right text-xs md:text-sm font-medium opacity-80">
          <p>Powered by</p>
          <p className="font-bold">Rebel Riot Agency</p>
        </div>
      </div>

      {/* المنحنيات الدائرية الرفيعة بالخلفية المأخوذة من التصميم */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[300px] h-[100px] pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full text-[#EFEFE0]" viewBox="0 0 300 100" fill="none">
          <path d="M 10,90 Q 150,10 290,90" stroke="currentColor" strokeWidth="1" />
          <path d="M 30,95 Q 150,30 270,95" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

    </section>
  );
}