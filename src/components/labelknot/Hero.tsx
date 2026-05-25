import { useEffect, useState } from "react";
import { HERO_IMAGE } from "@/lib/labelknot-images";
import emblem from "@/assets/labelknot-emblem.png";

const SLIDES = [
  HERO_IMAGE,
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536015/SnapInsta.to_469140943_18065687326704263_5878676085571618783_n_yldd5o.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536012/SnapInsta.to_658813963_18576268351025068_8987836767423854437_n_nyfw6f.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536019/She_wore_the_wind_like_a_whisper_draped_in_sunlight_and_silence_a_fleeting_dream_by_the_water_s_fmyacn.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536024/SnapInsta.to_566520930_18096225913704263_3186290050904152969_n_sifgmv.jpg",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      {/* Slideshow */}
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Label Knot — premium Indian wedding photography"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      {/* Editorial vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/55 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent z-10" />

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
        <div className="px-6 md:px-12 mt-[10vh] md:mt-10 fade-up text-center flex flex-col items-center">
          {/* Emblem — interlocking knot */}
          <img
            src={emblem}
            alt="Label Knot emblem"
            className="w-[40vw] max-w-[320px] md:w-[260px] lg:w-[300px] mb-4 md:mb-6 select-none pointer-events-none"
            draggable={false}
          />

          <h1
            style={{ fontWeight: 300 }}
            className="font-brand font-light uppercase leading-[0.95]
                       tracking-[0.18em] md:tracking-[0.22em]
                       text-[11.5vw] md:text-[8.5vw] lg:text-[6.8vw] whitespace-nowrap px-[3.8vw]"
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
        <div className="px-6 md:px-12 pb-10 md:pb-14 fade-up">
          {/* Editorial row: N°01 left · N°02 right (mirrored) */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <p className="cover-line opacity-80 mb-2">N° 01</p>
              <p className="font-display italic text-xl md:text-3xl leading-tight">
                Subtle Luxury,
                <br />
                <span className="not-italic uppercase tracking-[0.04em]">Quiet Vows</span>
              </p>
            </div>
            <div className="text-right -mt-[calc(2.5rem+3vh)] md:-mt-[calc(2rem+3vh)]">
              <p className="cover-line opacity-80 mb-2">N° 02</p>
              <p className="font-display italic text-xl md:text-3xl leading-tight">
                Rare Frames,
                <br />
                <span className="not-italic uppercase tracking-[0.04em]">Fine Moments</span>
              </p>
            </div>
          </div>

          {/* Centered: Premium Wedding House + locations */}
          <div className="mt-[calc(2rem+2vh)] md:mt-10 text-center space-y-3">
            <p className="cover-line opacity-80">Premium Wedding House</p>
            <p className="font-display text-sm md:text-2xl leading-snug tracking-wide whitespace-nowrap">
              India · Kerala · Bangalore · Dubai
            </p>
            <p className="font-display text-sm md:text-2xl leading-snug tracking-wide">
              Available Worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
