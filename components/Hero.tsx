import Image from "next/image";
import Link from "next/link";
import WavyMarquee from "./WavyMarquee";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[420px]">
      <Image
        src="/hero-bg.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 h-full flex flex-col justify-start items-start px-6 sm:px-10 md:px-16 pt-16 sm:pt-20 md:pt-24">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium leading-snug max-w-lg">
          We Help Modern Brands Stand Out, Get Noticed, &amp; Leave an
          Impression that Sticks
        </h1>
        <Link
          href="#learn-more"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-300 hover:bg-sky-400 transition-colors text-gray-800 font-medium px-6 py-2.5 text-sm sm:text-base"
        >
          Learn more
        </Link>
      </div>

      {/* Wavy scrolling ribbon pinned to the bottom of the hero image */}
      <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/3">
        <WavyMarquee />
      </div>
    </section>
  );
}