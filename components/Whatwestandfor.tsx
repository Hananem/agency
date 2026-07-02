const statements = [
  { text: "People Over Profits", font: "font-[var(--font-display-1,inherit)]" },
  { text: "Collaboration is Key", font: "font-[var(--font-display-2,serif)]" },
  { text: "Your Success is Vital", font: "font-[var(--font-display-3,inherit)]" },
];

export default function WhatWeStandFor() {
  return (
    <section className="bg-[#f2f0dd] px-6 py-16 lg:px-16">
      <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-[#4b4636]/70">
        What We Stand For
      </p>

      <div className="mx-auto max-w-6xl divide-y divide-[#4b4636]/25 border-t border-[#4b4636]/25">
        {statements.map((s) => (
          <div key={s.text} className="py-8 sm:py-10">
            <h3
              className={`${s.font} text-center text-[clamp(2rem,7vw,5.5rem)] font-extrabold uppercase leading-none tracking-tight text-[#4b4636]`}
            >
              {s.text}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}