import Image from "next/image";

export default function AboutRebelRiot() {
  return (
    <section className="bg-[#f2f0dd] py-16">
      {/* Header row */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-6 px-6 lg:px-16">
        <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-none tracking-tight text-[#4b4636]">
          About Rebel Riot
        </h2>

        <a
          href="#"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-300 px-8 py-4 font-semibold text-[#2b2820] transition-colors hover:bg-sky-400"
        >
          Learn More <span aria-hidden>→</span>
        </a>
      </div>

      {/* Card row — edge to edge, no side padding */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Image 1 */}
        <div className="relative aspect-square overflow-hidden rounded-3xl sm:rounded-none sm:rounded-l-3xl lg:aspect-auto lg:h-[520px]">
          <Image
            src="/about-1.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Our Mission */}
        <div className="flex flex-col justify-center gap-4 bg-[#e8d95a] px-8 py-10 lg:h-[520px]">
          <h3 className="text-3xl font-extrabold uppercase text-[#4b4636] sm:text-4xl">
            Our Mission
          </h3>
          <p className="leading-relaxed text-[#4b4636]/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* How We Help */}
        <div className="flex flex-col justify-center gap-4 bg-[#e8a355] px-8 py-10 lg:h-[520px]">
          <h3 className="text-3xl font-extrabold uppercase text-[#4b4636] sm:text-4xl">
            How We Help
          </h3>
          <p className="leading-relaxed text-[#4b4636]/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Image 2 */}
        <div className="relative aspect-square overflow-hidden rounded-3xl sm:rounded-none sm:rounded-r-3xl lg:aspect-auto lg:h-[520px]">
          <Image
            src="/about-2.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}