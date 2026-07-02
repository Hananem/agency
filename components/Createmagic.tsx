import Image from "next/image";

export default function CreateMagic() {
  return (
    <section className="relative overflow-hidden bg-[#e8d95a] px-6 py-16 lg:px-16">
      <div className="relative mx-auto max-w-7xl">
        {/* Top-right text + button */}
        <div className="mb-10 flex justify-end lg:mb-16">
          <div className="max-w-xs text-center">
            <p className="leading-relaxed text-[#4b4636]">
              Working with Bespoke Brands who Value Results and Collaboration
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-300 px-8 py-2.5 font-semibold text-[#2b2820] transition-colors hover:bg-sky-400"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Decorative arcs */}
        <svg
          className="pointer-events-none absolute right-[8%] top-0 hidden h-40 w-40 lg:block"
          viewBox="0 0 160 160"
          fill="none"
        >
          <path
            d="M0 160 A160 160 0 0 0 160 0"
            stroke="#2b2820"
            strokeWidth="2"
          />
        </svg>
        <svg
          className="pointer-events-none absolute left-[24%] top-[46%] hidden h-32 w-32 lg:block"
          viewBox="0 0 128 128"
          fill="none"
        >
          <path
            d="M0 0 A128 128 0 0 1 128 128"
            stroke="#2b2820"
            strokeWidth="2"
          />
        </svg>

        {/* Big heading */}
        <h2 className="text-[clamp(3.5rem,13vw,10rem)] font-extrabold uppercase leading-[0.85] tracking-tight text-[#4b4636]">
          Let&rsquo;s
          <br />
          Create
          <br />
          Magic
        </h2>

        {/* Bottom-right images */}
        <div className="mt-10 grid grid-cols-2 gap-2 sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[45%] lg:w-[38%]">
          <div className="relative aspect-square overflow-hidden">
            <Image src="/magic-1.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="/magic-2.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}