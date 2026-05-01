const AWARDS = [
  { name: "Photographer of the Year", org: "Wedding Sutra Favourites", year: "MMXXV" },
  { name: "Editor's Selection", org: "Vogue India · Weddings", year: "MMXXIV" },
  { name: "Cinematic Storytelling Award", org: "The Wedding Filmmakers Guild", year: "MMXXIV" },
  { name: "House of the Year", org: "The Wed · Asia Edition", year: "MMXXIII" },
  { name: "Editorial Distinction", org: "Elle India · Brides", year: "MMXXIII" },
];

export function Awards() {
  return (
    <section
      className="relative py-28 md:py-36"
      style={{ backgroundColor: "var(--milk)", color: "var(--everest)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="eyebrow mb-10" style={{ color: "var(--sage)" }}>
          05 — Recognition
        </p>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-10 border-y border-[var(--everest)]/25 py-12">
          {AWARDS.map((a, i) => (
            <div
              key={i}
              className={`pl-0 md:pl-6 ${
                i % 3 !== 0 ? "md:border-l border-[var(--everest)]/20" : ""
              }`}
            >
              <p className="cover-line mb-3 opacity-60">{a.year}</p>
              <h3 className="font-display text-2xl md:text-3xl leading-tight">{a.name}</h3>
              <p className="cover-line mt-3 opacity-80">{a.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
