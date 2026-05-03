import { GALLERY_POOL } from "@/lib/labelknot-images";

// Tonally arranged 30 cells: 15 unique images repeated, with 5 sand interstitials
// at balanced positions (rows: 2, 4, 6, 8, 9 — not clustered).
type Cell =
  | { kind: "img"; src: string; idx: number }
  | { kind: "text"; line: string };

// Warm → neutral → cool curated order using indices into GALLERY_POOL
const ORDER = [
  2, 0, 4,
  1, 3, 5,
  6, 7, 8,
  9, 10, 11,
  12, 13, 14,
  0, 5, 2,
  4, 8, 6,
  1, 11, 3,
  9, 13, 7,
  10, 14, 12,
];

const INTERSTITIALS: { at: number; line: string }[] = [
  { at: 4, line: "Frames of Pure Emotion" },
  { at: 11, line: "Echoes of Sacred Vows" },
  { at: 17, line: "Timeless in Soft Light" },
  { at: 22, line: "Unspoken Yet Deeply Felt" },
  { at: 27, line: "Cherished Golden Hours Forever" },
];

function buildCells(): Cell[] {
  const cells: Cell[] = ORDER.map((idx) => ({
    kind: "img" as const,
    src: GALLERY_POOL[idx],
    idx,
  }));
  INTERSTITIALS.forEach(({ at, line }) => {
    cells[at] = { kind: "text", line };
  });
  return cells;
}

function getPosition(i: number): string {
  const m = i % 9;
  if (m === 0) return "center 20%";
  if (m === 1) return "center 50%";
  if (m === 2) return "center 30%";
  if (m === 3) return "center 70%";
  if (m === 5) return "center 15%";
  if (m === 6) return "center 40%";
  if (m === 8) return "center 60%";
  return "center center";
}

export function Gallery() {
  const cells = buildCells();
  return (
    <section
      id="gallery"
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--sand)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 mb-14 md:mb-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow mb-6" style={{ color: "var(--everest)" }}>
              02 — The Archive
            </p>
            <h2
              className="editorial-headline text-4xl md:text-6xl max-w-3xl"
              style={{ color: "var(--everest)" }}
            >
              Thirty frames. <em className="font-display italic">One world.</em>
            </h2>
          </div>
          <p
            className="hidden md:block font-display italic max-w-xs text-right"
            style={{ color: "var(--everest)" }}
          >
            Squint. The colours have been arranged the way a painter would.
          </p>
        </div>
      </div>

      {/* Full bleed 3 col grid */}
      <div className="grid grid-cols-3 gap-[2px]">
        {cells.map((c, i) =>
          c.kind === "img" ? (
            <figure key={i} className="relative overflow-hidden group bg-[var(--milk)] aspect-[4/5]">
              <img
                src={c.src}
                alt={`Label Knot frame ${i + 1}`}
                loading={i < 6 ? "eager" : "lazy"}
                style={{ objectPosition: getPosition(i) }}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </figure>
          ) : (
            <div
              key={i}
              className="aspect-[4/5] flex items-center justify-center"
              style={{ backgroundColor: "var(--sand)" }}
            >
              <p
                style={{
                  fontFamily: "'Pinyon Script', cursive",
                  fontSize: "clamp(1.6rem, 5.2vw, 2.5rem)",
                  lineHeight: 1.35,
                  color: "var(--everest)",
                  textAlign: "center",
                  padding: "0 8%",
                  opacity: 0.88,
                }}
              >
                {c.line}
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
