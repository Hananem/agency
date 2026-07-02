"use client";

import Image from "next/image";

type MarqueeColumnProps = {
  images: string[];
  direction: "up" | "down";
  duration?: number; // seconds — bigger = slower
  className?: string;
};

function MarqueeColumn({
  images,
  direction,
  duration = 26,
  className = "",
}: MarqueeColumnProps) {
  // duplicate the list so the loop has no visible seam
  const doubled = [...images, ...images];

  return (
    <div className={`relative h-screen overflow-hidden ${className}`}>
      <div
        className={
          direction === "up" ? "marquee-track-up" : "marquee-track-down"
        }
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* soft fade at top/bottom edges so images don't hard-cut */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f0e26a] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f0e26a] to-transparent" />
    </div>
  );
}

export default function RiotsHero() {
  // replace with your own images in /public
  const columnA = ["/riot-1.jpg", "/riot-2.jpg", "/riot-3.jpg"];
  const columnB = ["/riot-4.jpg", "/riot-5.jpg"];

  return (
    <section className="grid min-h-screen grid-cols-1 gap-6 overflow-hidden bg-[#f0e26a] px-6 py-12 lg:grid-cols-[1.1fr_0.7fr_0.7fr] lg:px-16 lg:py-0">
      {/* Left: text */}
      <div className="flex flex-col justify-center gap-8 py-12 lg:py-0">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-[#4b4636]">
          See How
          <br />
          We Turn
          <br />
          Ideas into
          <br />
          RIOTS—
        </h1>

        <p className="max-w-md leading-relaxed text-[#4b4636]/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>

        <a
          href="#"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-300 px-8 py-4 font-semibold text-[#2b2820] transition-colors hover:bg-sky-400"
        >
          Work With Us <span aria-hidden>→</span>
        </a>
      </div>

      {/* Column A — scrolls downward */}
      <MarqueeColumn
        images={columnA}
        direction="down"
        duration={30}
        className="hidden py-6 lg:block"
      />

      {/* Column B — scrolls upward, starts slightly lower for the staggered look */}
      <MarqueeColumn
        images={columnB}
        direction="up"
        duration={24}
        className="hidden py-6 lg:block lg:mt-16"
      />

      <style jsx global>{`
        @keyframes marquee-up {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
        @keyframes marquee-down {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0);
          }
        }
        .marquee-track-up,
        .marquee-track-down {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .marquee-track-up {
          animation-name: marquee-up;
        }
        .marquee-track-down {
          animation-name: marquee-down;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track-up,
          .marquee-track-down {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}