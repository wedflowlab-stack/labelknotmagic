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
  { at: 4, line: "The way her father looked at her, before he let go." },
  { at: 11, line: "Not a wedding. A weather system." },
  { at: 17, line: "We do not pose joy. We wait for it to fall." },
  { at: 22, line: "What you cannot describe to your daughter — we can show her." },
  { at: 27, line: "A wedding day is the only day a couple lives twice. Once forward, once in frames." },
];

function buildCells(): Cell[] {
  const cells: Cell[] = ORDER.map((idx) => ({
    kind: "img" as const,
    src: GALLERY_POOL[idx],
    idx,
  }));
  // Replace at interstitial positions
  INTERSTITIALS.forEach(({ at, line }) => {
    cells[at] = { kind: "text", line };
  });
  return cells;
}

export function Gallery() {
  const cells = buildCells();
  return (
    <section
      id="gallery"
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--sand)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-end justify-between mb-14 md:mb-20">
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

        {/* 3 col x 10 row grid, 2px gap */}
        <div className="grid grid-cols-3 gap-[2px]">
          {cells.map((c, i) =>
            c.kind === "img" ? (
              <figure key={i} className="relative overflow-hidden group bg-[var(--milk)]">
                <img
                  src={c.src}
                  alt={`Label Knot frame ${i + 1}`}
                  loading={i < 6 ? "eager" : "lazy"}
                  className="w-full aspect-square object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </figure>
            ) : (
              <div
                key={i}
                className="aspect-square flex items-center justify-center px-5 text-center"
                style={{ backgroundColor: "var(--sand)", color: "var(--everest)" }}
              >
                <p className="font-display italic text-lg md:text-2xl leading-snug">
                  {c.line}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
