import Image from "next/image";

export default function MeetFounder() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      {/* Full-bleed sharp image */}
      <Image
        src="/founder-maddie.jpg"
        alt="Maddie, Founder"
        fill
        priority
        className="object-cover"
      />

      {/* Blurred + tinted overlay on the left half only, for text contrast */}
      <div
        className="absolute inset-y-0 left-0 w-full sm:w-[58%]"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background:
            "linear-gradient(to right, rgba(30,26,20,0.55), rgba(30,26,20,0.35))",
          maskImage:
            "linear-gradient(to right, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 70%, transparent 100%)",
        }}
      />

      {/* Text content */}
      <div className="relative z-10 flex h-full max-w-xl flex-col justify-center px-6 sm:px-12 lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#f2f0dd]">
          Meet the Founder
        </p>

        <h2 className="mt-4 text-[clamp(3rem,9vw,6.5rem)] font-extrabold uppercase leading-none tracking-tight text-[#f2f0dd]">
          Maddie
        </h2>

        <p className="mt-8 max-w-md leading-relaxed text-[#f2f0dd]/90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}