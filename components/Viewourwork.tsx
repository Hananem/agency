import Image from "next/image";

export default function ViewOurWork() {
  const tags = [
    { label: "Modern Brands", color: "#e0714a" },
    { label: "Measurable Results", color: "#a9d0ea" },
    { label: "Increased Revenue", color: "#f0a94e" },
  ];

  return (
    <section className="bg-[#f2f0dd] px-6 py-20 lg:px-16">
      {/* Header row */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
        <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold uppercase leading-none tracking-tight text-[#4b4636]">
          View Our Work
        </h2>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="whitespace-nowrap rounded-full border-2 border-[#4b4636] px-5 py-2 text-sm font-medium text-[#2b2820] sm:text-base"
              style={{ backgroundColor: tag.color }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* Content grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image card */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:aspect-auto">
          <Image
            src="/work-feature.jpg"
            alt="Featured project"
            fill
            className="object-cover"
          />
        </div>

        {/* Info card */}
        <div className="flex flex-col justify-between rounded-3xl bg-[#efd94e] p-8 sm:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#4b4636]/70 sm:text-base">
              Branding &amp; Photography
            </p>

            <h3 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase leading-none tracking-tight text-[#4b4636]">
              Funky Fusion
            </h3>

            <p className="mt-6 max-w-md leading-relaxed text-[#4b4636]/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <a
            href="#"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-sky-300 px-8 py-3.5 font-semibold text-[#2b2820] transition-colors hover:bg-sky-400"
          >
            View Gallery <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}