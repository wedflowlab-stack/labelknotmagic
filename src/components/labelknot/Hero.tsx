import { HERO_IMAGE } from "@/lib/labelknot-images";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      {/* Image */}
      <img
        src={HERO_IMAGE}
        alt="Label Knot — premium Indian wedding photography"
        className="absolute inset-0 h-full w-full object-cover slow-zoom"
      />
      {/* Editorial vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

      {/* Cover anatomy */}
      <div
        className="relative z-10 h-full w-full flex flex-col"
        style={{ color: "var(--milk)" }}
      >
        {/* Top issue line */}
        <div className="px-6 md:px-12 pt-24 md:pt-28 flex items-start justify-between fade-up">
          <span className="cover-line opacity-90">
            Volume XII &nbsp;·&nbsp; MMXXVI
          </span>
          <span className="cover-line hidden md:block opacity-90">
            Est. 2020 &nbsp;·&nbsp; Six Years of Trust
          </span>
        </div>

        {/* Masthead */}
        <div className="px-6 md:px-12 mt-[19vh] md:mt-10 fade-up text-center flex flex-col items-center">
          {/* Emblem — interlocking knot */}
          <svg
            viewBox="0 0 240 60"
            className="w-[44vw] max-w-[260px] md:w-[220px] mb-4 md:mb-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* left flowing tail */}
            <path d="M2 30 C 40 30, 70 12, 95 30" />
            {/* right flowing tail */}
            <path d="M238 30 C 200 30, 170 48, 145 30" />
            {/* left knot loop */}
            <path d="M95 30 C 95 14, 120 14, 120 30 C 120 46, 145 46, 145 30 C 145 14, 120 14, 120 30 C 120 46, 95 46, 95 30 Z" />
            {/* end dots */}
            <circle cx="2" cy="30" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="238" cy="30" r="1.4" fill="currentColor" stroke="none" />
          </svg>

          <h1
            className="font-brand font-normal uppercase leading-[0.95]
                       tracking-[0.18em] md:tracking-[0.22em]
                       text-[12.5vw] md:text-[8.5vw] lg:text-[6.8vw] whitespace-nowrap px-[2.5vw]"
          >
            Label&nbsp;Knot
          </h1>
          <p className="mt-5 md:mt-6 font-display italic text-base md:text-xl tracking-wide opacity-90">
            Where stories become timeless art
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Cover lines — short, editorial, magazine-rhythm */}
        <div className="px-6 md:px-12 pb-10 md:pb-14 grid md:grid-cols-12 gap-8 items-end">
          {/* Left: short editorial phrases (Vogue cover rhythm) */}
          <div className="md:col-span-6 fade-up space-y-5">
            <div>
              <p className="cover-line opacity-80 mb-2">N° 01</p>
              <p className="font-display italic text-2xl md:text-3xl leading-tight">
                Subtle Luxury,
                <br />
                <span className="not-italic uppercase tracking-[0.04em]">Quiet Vows</span>
              </p>
            </div>
            <div>
              <p className="cover-line opacity-80 mb-2">N° 02</p>
              <p className="font-display italic text-2xl md:text-3xl leading-tight">
                Rare Frames,
                <br />
                <span className="not-italic uppercase tracking-[0.04em]">Fine Moments</span>
              </p>
            </div>
          </div>

          {/* Right: locations + trust marker */}
          <div className="md:col-span-6 md:text-right space-y-4 fade-up">
            <p className="cover-line opacity-80">Premium Wedding House</p>
            <p className="font-display text-xl md:text-2xl leading-snug tracking-wide">
              India · Kerala · Bangalore
              <br />
              Delhi · Dubai · Worldwide
            </p>
            <div className="pt-2 md:flex md:justify-end">
              <a href="#philosophy" className="cover-line inline-flex items-center gap-3 group">
                <span className="inline-block h-px w-10 bg-current transition-all group-hover:w-16" />
                <span>Enter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
