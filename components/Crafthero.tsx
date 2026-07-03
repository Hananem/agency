export default function CraftHero() {
  return (
    <section className="bg-[#f2f0dd] px-6 py-24 text-center">
      {/* تم رفع الـ leading قليلاً إلى [1.1] لمنع تداخل الحروف عمودياً، مع الحفاظ على الضخامة */}
      <div className="mx-auto max-w-5xl font-extrabold uppercase leading-[1.1] tracking-tight text-[#4b4636] text-[clamp(2.2rem,6.5vw,5.5rem)]">
        
        {/* السطر الأول */}
        <div className="relative">We Craft Daring</div>

        {/* السطر الثاني — الشارة هنا تم ضبط إزاحتها مع ترك مسافة بادئة (pl) أو تباعد */}
        <div className="relative pt-2">
          <span className="absolute left-[20%] top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-[#4b4636] bg-[#f0a94e] px-4 py-1.5 text-xs normal-case font-semibold text-[#2b2820] shadow-sm sm:text-sm md:text-base tracking-normal">
            Website Design
          </span>
          {/* تم إضافة هامش أيسر خارجي ليعطي مساحة للشارة في الشاشات الصغيرة */}
          <span className="pl-[10%] sm:pl-0">Brands, Eye-Popping</span>
        </div>

        {/* السطر الثالث */}
        <div className="relative pt-2">
          <span className="absolute left-[75%] top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-[#4b4636] bg-[#a9d0ea] px-4 py-1.5 text-xs normal-case font-semibold text-[#2b2820] shadow-sm sm:text-sm md:text-base tracking-normal">
            Brand Strategy
          </span>
          Visuals, &amp; Campaigns
        </div>

        {/* السطر الرابع */}
        <div className="relative pt-2">
          <span className="absolute left-[15%] top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-[#4b4636] bg-[#e0714a] px-4 py-1.5 text-xs normal-case font-semibold text-[#2b2820] shadow-sm sm:text-sm md:text-base tracking-normal">
            Content Creation
          </span>
          <span className="pl-[15%] sm:pl-0">That Make Noise</span>
        </div>
      </div>

      <p className="mt-10 text-2xl font-bold italic text-[#4b4636] sm:text-3xl">
        (because ordinary is boring)
      </p>

      <p className="mx-auto mt-10 max-w-2xl leading-relaxed text-[#6b6658]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
  );
}