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
  { at: 11, line: "Sacred Vows" },
  { at: 17, line: "Timeless in Soft Light" },
  { at: 22, line: "Stolen Glances" },
  { at: 27, line: "Golden Hours" },
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
  const EXTRA_ORDER = [
    "https://res.cloudinary.com/dtembvivw/image/upload/v1778166004/SaveClip.App_656403465_18019254551824133_1727390248362862999_n_kamcvk.jpg", GALLERY_POOL[3],  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536017/SnapInsta.to_471588587_18067547047704263_893259353441750017_n_zy2zim.jpg",
    GALLERY_POOL[7], EXTRA_POOL[2],  GALLERY_POOL[11],
    "https://res.cloudinary.com/dtembvivw/image/upload/v1777536017/MEAGAN_SHELDON_As_seen_in_vogueindia_Photographed_-_fourfoldpictures_Bride_stylist_by_amazi_1_tud8ye.jpg", "https://res.cloudinary.com/dtembvivw/image/upload/v1777536025/Can_t_get_over_this_beautiful_intimate_wedding_of_Anjana_-_Anish_-_Bahrain_%EF%B8%8F_vogue_voguewe_bwq9qt.jpg",  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536015/SnapInsta.to_469140943_18065687320704263_1820009380109301005_n_oeicru.jpg",
    "https://res.cloudinary.com/dtembvivw/image/upload/v1777536023/SnapInsta.to_573576427_18097592563704263_398145204125775613_n_npdqjv.jpg", "https://res.cloudinary.com/dtembvivw/image/upload/v1777536010/SnapInsta.to_469278126_18065684848704263_7029483129411727534_n_loaayk.jpg",  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536023/SnapInsta.to_571874902_18097592692704263_7967907277228602865_n_ouy709.jpg",
    GALLERY_POOL[2], EXTRA_POOL[0],  GALLERY_POOL[8],
  ];
  EXTRA_ORDER.forEach((src) => {
    cells.push({ kind: "img" as const, src, idx: -1 });
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
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 mb-14 md:mb-20 text-center">
        <h2
          className="editorial-headline text-4xl md:text-6xl mx-auto max-w-4xl uppercase tracking-tight"
          style={{ color: "var(--everest)" }}
        >
          The Frames That Felt Like Breathing
        </h2>
        <p
          className="font-display italic mt-6 mx-auto max-w-2xl text-lg md:text-2xl"
          style={{ color: "var(--everest)" }}
        >
          Everything the eye almost missed — we were already watching before it happened.
        </p>
      </div>


      {/* Full bleed 3 col grid */}
      <div className="grid grid-cols-3 gap-[2px]">
        {cells.map((c, i) =>
          c.kind === "img" ? (
            i === 9 ? (
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
                  Love That Lives On
                </p>
              </div>
            ) : i === 34 ? (
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
                  Cherished forever.
                </p>
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
