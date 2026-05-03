import { GALLERY_POOL } from "@/lib/labelknot-images";

const EXTRA_POOL = [
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536011/SnapInsta.to_469287513_18065688406704263_8090720898632866003_n_kxqejw.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536010/SnapInsta.to_651004156_18097043860235068_2790687977078960437_n_glglwk.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536009/SnapInsta.to_655760929_18101574105235068_5895388860891538706_n_qwxdca.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536010/SnapInsta.to_469278126_18065687737704263_4891117197391283596_n_yauoex.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536009/Aarushi_Chirag_..._Couple_-_aarushimall_chiragbansal19_Muah_-_dollyouup_bys_Bride_Saree_-_ek_4_uwbrf0.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536010/SnapInsta.to_469183908_18065687623704263_3856023466478099866_n_jfbzwh.jpg",
];

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
            i === 9 ? (
              <div key={i} className="relative overflow-hidden aspect-[4/5]">
                <figure className="hidden lg:block w-full h-full">
                  <img
                    src={c.src}
                    alt={`Label Knot frame ${i + 1}`}
                    loading="lazy"
                    style={{ objectPosition: "center 30%" }}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div
                  className="flex lg:hidden w-full h-full items-center justify-center px-[8%]"
                  style={{ backgroundColor: "var(--sand)" }}
                >
                  <p
                    style={{
                      fontFamily: "'Pinyon Script', cursive",
                      fontSize: "clamp(1.6rem, 5.2vw, 2.5rem)",
                      lineHeight: 1.35,
                      color: "var(--everest)",
                      textAlign: "center",
                      opacity: 0.88,
                    }}
                  >
                    Love That Lives On
                  </p>
                </div>
              </div>
            ) : (
              <figure key={i} className="relative overflow-hidden group bg-[var(--milk)] aspect-[4/5]">
                <img
                  src={c.src}
                  alt={`Label Knot frame ${i + 1}`}
                  loading={i < 6 ? "eager" : "lazy"}
                  style={{ objectPosition: getPosition(i) }}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </figure>
            )
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
