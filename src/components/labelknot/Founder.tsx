import { useEffect, useState } from "react";
import fourfoldLogo from "@/assets/fourfold-logo.png.asset.json";

const PRESS = [
  "Wedding Sutra",
  "Vogue India",
  "The Wed",
  "Wedding Bazaar",
  "Wedding Wire",
  "Elle India",
];

const FOUNDER_SLIDES = [
  "https://res.cloudinary.com/dtembvivw/image/upload/v1779731626/SaveClip.App_670986817_18579183334008962_886943027846087425_n_ypxhre.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/q_auto/f_auto/v1780301353/ChatGPT_Image_May_25_2026_11_33_59_PM_ze01as.png",
];

export function Founder() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    FOUNDER_SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % FOUNDER_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--sand)", color: "var(--everest)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6 lg:col-span-5 md:order-1">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-black">
            {FOUNDER_SLIDES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Fourfold Pictures — founder & studio"
                className="absolute inset-0 h-full w-full object-contain"
                style={{
                  opacity: i === current ? 1 : 0,
                  transition: "opacity 1.2s ease-in-out",
                }}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-7 md:order-2 md:pt-12 md:pl-6 lg:pl-16">
          <p className="eyebrow mb-6 text-center md:text-left">07 — Meet</p>
          <div className="flex justify-center md:justify-start mb-8">
            <img
              src={fourfoldLogo.url}
              alt="Fourfold Pictures"
              className="w-[70vw] max-w-[360px] md:max-w-[420px] select-none pointer-events-none"
              draggable={false}
            />
          </div>
          <h2 className="editorial-headline text-3xl md:text-5xl">
            A wedding is not a <br />
            <em className="font-display italic">single event.</em>
          </h2>
          <div className="mt-10 max-w-xl space-y-5 editorial-body">
            <p>
              It is ten events, forty relationships, and two hundred unrepeatable moments —
              assembled once, for one family, across a few extraordinary hours. And then it is
              over.
            </p>
            <p>
              Fourfold Pictures was founded by <strong>Gaurav Shukla</strong> — visual
              storyteller and globally appointed <em>Canon Explorer of Light</em> Ambassador for
              India — on one uncompromising belief: that great wedding photography is not a
              service rendered on the day. It is the only thing about that day you will ever be
              able to relive.
            </p>
            <p className="font-display italic text-xl md:text-2xl" style={{ color: "var(--everest)" }}>
              Not remember. Relive.
            </p>
            <p>
              We understand every ritual, every room, every relationship in it. We know which
              moments will matter most in thirty years — even when no one in the room is
              thinking that far ahead.
            </p>
            <p className="font-display italic">
              Every event happens only once. We make sure it lasts forever.
            </p>
          </div>
        </div>

        {/* As seen in */}
        <div className="md:col-span-12 mt-16 md:mt-24 border-t border-[var(--everest)]/25 pt-10">
          <p className="cover-line mb-6 opacity-80">As Seen In</p>
          <div className="flex flex-wrap items-baseline gap-x-10 gap-y-4">
            {PRESS.map((p, i) => (
              <span
                key={i}
                className="font-display uppercase tracking-[0.18em] text-xl md:text-2xl"
              >
                {p}
                {i < PRESS.length - 1 && (
                  <span className="ml-10 opacity-40" aria-hidden>
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
