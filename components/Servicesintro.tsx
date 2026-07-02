import Image from "next/image";

export default function ServicesIntro() {
  return (
    <section className="bg-[#f2f0dd] px-6 py-16 lg:px-16">
      {/* Image row */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3 lg:ml-[15%] lg:max-w-none lg:pr-16">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src="/services-1.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src="/services-2.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src="/services-3.jpg" alt="" fill className="object-cover" />
        </div>
      </div>

      {/* Text */}
      <div className="mx-auto mt-16 max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4b4636]/70">
          The Services
        </p>

        <h2 className="mt-6 text-[clamp(2rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-[#4b4636]">
          Anyone Can Sell You a Logo…We Craft Brands that Spark{" "}
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 -z-10 rounded-full bg-[#e8d95a]" />
            RIOTS
          </span>{" "}
          — The Kind That Turn Heads, Shake Industries, &amp; Make Your
          Competition Sweat
        </h2>
      </div>
    </section>
  );
}