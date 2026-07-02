export default function CraftHero() {
  return (
    <section className="bg-[#f2f0dd] px-6 py-24 text-center">
      <div className="mx-auto max-w-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#4b4636] text-[clamp(2.2rem,6.5vw,5.5rem)]">
        {/* line 1 */}
        <div className="relative">We Craft Daring</div>

        {/* line 2 — badge straddles the boundary between line 1 and line 2 */}
        <div className="relative">
          <span className="absolute left-[30%] top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-[#4b4636] bg-[#f0a94e] px-5 py-1.5 text-sm normal-case font-semibold text-[#2b2820] shadow-sm sm:text-base">
            Website Design
          </span>
          Brands, Eye-Popping
        </div>

        {/* line 3 — badge straddles the boundary between line 2 and line 3 */}
        <div className="relative">
          <span className="absolute left-[67%] top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-[#4b4636] bg-[#a9d0ea] px-5 py-1.5 text-sm normal-case font-semibold text-[#2b2820] shadow-sm sm:text-base">
            Brand Strategy
          </span>
          Visuals, &amp; Campaigns
        </div>

        {/* line 4 — badge straddles the boundary between line 3 and line 4 */}
        <div className="relative">
          <span className="absolute left-[18%] top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-[#4b4636] bg-[#e0714a] px-5 py-1.5 text-sm normal-case font-semibold text-[#2b2820] shadow-sm sm:text-base">
            Content Creation
          </span>
          That Make Noise
        </div>
      </div>

      <p className="mt-10 text-2xl font-bold italic text-[#4b4636] sm:text-3xl">
        (because ordinary is boring)
      </p>

      <p className="mx-auto mt-10 max-w-2xl leading-relaxed text-[#6b6658]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>
  );
}