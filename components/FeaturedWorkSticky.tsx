import React from 'react';
import Image from 'next/image';

export default function FeaturedWorkScrollytelling() {
  // مصفوفة الصور مصممة لتبدأ الظهور بعد الشاشة الأولى تماماً (تنطلق من 100vh فما فوق)
  const scrollingImages = [
    {
      src: '/riot-1.jpg', // صورة الفتيات (عدسة عين السمكة)
      alt: 'Fisheye group shot on green couch',
      position: 'top-[110vh] left-[5vw] sm:left-[8vw]',
      width: 'w-[75vw] sm:w-[32vw] max-w-[400px]',
      aspect: 'aspect-[4/5]',
    },
    {
      src: '/riot-2.jpg', // صورة الفتاة مع العلكة
      alt: 'Woman sitting on a chair with bubblegum',
      position: 'top-[160vh] right-[5vw] sm:right-[10vw]',
      width: 'w-[80vw] sm:w-[38vw] max-w-[460px]',
      aspect: 'aspect-[4/3]',
    },
    {
      src: '/riot-3.jpg', // صورة البطاطس المقلية
      alt: 'Close up food styling of fries bowl',
      position: 'top-[210vh] left-[15vw] sm:left-[25vw]',
      width: 'w-[70vw] sm:w-[35vw] max-w-[420px]',
      aspect: 'aspect-square',
    },
  ];

  return (
    /* زدنا الارتفاع الكلي لـ 350vh لإعطاء مساحة مريحة جداً للتمرير والعبور */
    <section className="relative w-full bg-[#EBD956] text-[#4A442D] h-[350vh] overflow-visible">
      
      {/* القسم الثابت (Sticky): يجمد النص في مكانه طوال فترة التمرير */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden pointer-events-none z-0">
        
        {/* التسمية العلوية الصغيرة */}
        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 opacity-90">
          WE DON’T FOLLOW TRENDS, WE SET THEM
        </span>

        {/* العنوان العملاق المكتوب بخط عريض ومضغوط */}
        <h2 className="text-[13vw] font-black uppercase tracking-tighter leading-[0.8] text-center max-w-7xl select-none">
          Featured<br />Work
        </h2>
      </div>

      {/* حاوية الصور الطائرة: تبدأ بالكامل من أسفل الشاشة الأولى وتصعد للأعلى أثناء السكرول */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        {scrollingImages.map((img, index) => (
          <div
            key={index}
            className={`absolute ${img.position} ${img.width} ${img.aspect} bg-stone-900 shadow-[0_25px_60px_rgba(0,0,0,0.35)] pointer-events-auto overflow-hidden border-4 border-[#EBD956]`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-w-768px) 80vw, 40vw"
            />
          </div>
        ))}
      </div>

    </section>
  );
}