import { FOUNDER_IMAGE } from "@/lib/labelknot-images";

const PRESS = [
  "Wedding Sutra",
  "Vogue India",
  "The Wed",
  "Wedding Bazaar",
  "Wedding Wire",
  "Elle India",
];

export function Founder() {
  return (
    <section
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--sand)", color: "var(--everest)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6 lg:col-span-5 md:order-1">
          <img
            src={FOUNDER_IMAGE}
            alt="The founder of Label Knot"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>

        <div className="md:col-span-6 lg:col-span-7 md:order-2 md:pt-12 md:pl-6 lg:pl-16">
          <p className="eyebrow mb-6">07 — Meet Label Knot</p>
          <h2 className="editorial-headline text-4xl md:text-6xl">
            We did not start this <br />
            to be <em className="font-display italic">popular.</em>
          </h2>
          <div className="mt-10 max-w-xl space-y-5 editorial-body">
            <p>
              Label Knot is a small house. We do not chase trends, we do not photograph the way
              everyone else does, and we do not apologise for either.
            </p>
            <p>
              We work with couples who already know what they want — a wedding remembered the way
              great films are remembered. Quietly. Permanently. With the colours intact.
            </p>
            <p className="font-display italic" style={{ color: "var(--everest)" }}>
              — The Studio
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
