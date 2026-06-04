import { useEffect, useState } from "react";
import fourfoldLogo from "@/assets/fourfold-logo-black.png.asset.json";

const VOGUE_LOGO =
  "https://res.cloudinary.com/dtembvivw/image/upload/v1776968855/VOGUE_2_-Photoroom_e8bsv3.png";
const WEDDING_SUTRA_LOGO =
  "https://res.cloudinary.com/dtembvivw/image/upload/v1776868845/Gemini_Generated_Image_21o7g121e7g-Photoroom_j2g4th.png";
const HARPERS_LOGO =
  "https://res.cloudinary.com/dtembvivw/image/upload/v1776818643/BAZZAR-Photoroom_winhel.png";
const ELLE_LOGO =
  "https://res.cloudinary.com/dtembvivw/image/upload/v1758561032/ELLE_LG_tdgu1l.webp";
const THE_WED_LOGO =
  "https://res.cloudinary.com/dtembvivw/image/upload/v1758561034/THE_WED__G_fw5z1c.webp";
const WEZOREE_LOGO =
  "https://res.cloudinary.com/dtembvivw/image/upload/v1776868854/Wezore-Photoroom_qptpim.png";
const TIMES_LOGO =
  "https://res.cloudinary.com/dtembvivw/image/upload/v1776868625/times_of_india-Photoroom_vtd8eu.png";

const FOUNDER_SLIDES = [
  "https://res.cloudinary.com/dtembvivw/image/upload/v1779731626/SaveClip.App_670986817_18579183334008962_886943027846087425_n_ypxhre.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/q_auto/f_auto/v1780301353/ChatGPT_Image_May_25_2026_11_33_59_PM_ze01as.png",
];

const FOUNDER_SLIDE_STYLES = ["cover", "contain"] as const;

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
          <div
            className="relative mx-auto w-full max-w-[540px] aspect-[5/6] md:max-w-[620px] md:aspect-[6/7] overflow-hidden p-[5px]"
            style={{
              backgroundColor: "#E4DBC4",
              boxShadow: "0 18px 40px rgba(70, 52, 19, 0.14)",
            }}
          >
            <div className="relative w-full h-full overflow-hidden bg-[#120f0a]">
              {FOUNDER_SLIDES.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="Fourfold Pictures — founder & studio"
                  className="absolute inset-0 h-full w-full"
                  style={{
                    opacity: i === current ? 1 : 0,
                    transition: "opacity 1.2s ease-in-out",
                    objectFit: FOUNDER_SLIDE_STYLES[i],
                    objectPosition: "center center",
                  }}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-7 md:order-2 md:pt-12 md:pl-6 lg:pl-16 text-center">
          <div className="flex justify-center mb-8">
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
          <div className="mt-10 mx-auto max-w-xl space-y-5 editorial-body">
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
      </div>

      {/* As Seen In — Editorial Grid v8 */}
      <div
        className="relative w-full overflow-hidden mt-20 md:mt-28"
        style={{ backgroundColor: "#18442A" }}
      >
        <div className="px-6 md:px-12 py-20 md:py-28">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <p
              className="font-display uppercase mb-4"
              style={{
                fontSize: "9px",
                letterSpacing: "5px",
                color: "rgba(253,251,240,0.35)",
              }}
            >
              Recognition · Publications
            </p>
            <h3
              className="font-display mb-8"
              style={{
                fontWeight: 800,
                fontSize: "clamp(38px, 4vw, 58px)",
                color: "#FDFBF0",
                lineHeight: 1.1,
              }}
            >
              As Seen In
            </h3>
            <div
              className="mx-auto"
              style={{
                width: "32px",
                height: "1px",
                backgroundColor: "#E4DBC4",
                opacity: 0.35,
              }}
            />
          </div>

          {/* Grid */}
          <div
            style={{
              borderTop: "1px solid rgba(229,219,196,0.12)",
              borderBottom: "1px solid rgba(229,219,196,0.12)",
            }}
          >
            {/* ROW 1 — Vogue featured */}
            <PressFeatured logo={VOGUE_LOGO} alt="Vogue India" num="N° 01" featured />

            {/* ROW 2 — Wedding Sutra + Harpers Bazaar */}
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ borderBottom: "1px solid rgba(229,219,196,0.12)" }}
            >
              <PressCell logo={WEDDING_SUTRA_LOGO} alt="Wedding Sutra" num="N° 02" logoHeight={28} divider />
              <PressCell logo={HARPERS_LOGO} alt="Harpers Bazaar" num="N° 03" logoHeight={28} />
            </div>

            {/* ROW 3 — Elle + The Wed + Wezoree */}
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ borderBottom: "1px solid rgba(229,219,196,0.12)" }}
            >
              <PressCell logo={ELLE_LOGO} alt="Elle India" num="N° 04" logoHeight={26} divider />
              <PressCell logo={THE_WED_LOGO} alt="The Wed" num="N° 05" logoHeight={26} divider />
              <PressCell logo={WEZOREE_LOGO} alt="Wezoree" num="N° 06" logoHeight={26} />
            </div>

            {/* ROW 4 — Times of India full width */}
            <PressFeatured logo={TIMES_LOGO} alt="Times of India" num="N° 07" logoHeight={30} compact />
          </div>

          {/* Closing line */}
          <p
            className="text-center mt-10 md:mt-14 pb-2 font-display italic"
            style={{
              fontSize: "15px",
              color: "rgba(253,251,240,0.35)",
              letterSpacing: "0.5px",
            }}
          >
            Seven publications. One studio.
          </p>
        </div>
      </div>
    </section>
  );
}

function PressFeatured({
  logo,
  alt,
  num,
  featured,
  logoHeight,
  compact,
}: {
  logo: string;
  alt: string;
  num: string;
  featured?: boolean;
  logoHeight?: number;
  compact?: boolean;
}) {
  return (
    <div
      className="relative group flex items-center justify-center transition-colors duration-[400ms]"
      style={{
        padding: compact ? "32px 24px" : "36px 24px",
        backgroundColor: "#18442A",
        borderBottom: compact ? "none" : "1px solid rgba(229,219,196,0.12)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(253,251,240,0.04)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#18442A")}
    >
      <span
        className="absolute font-display uppercase"
        style={{
          top: "14px",
          left: "20px",
          fontSize: "9px",
          letterSpacing: "3px",
          color: "rgba(229,219,196,0.22)",
        }}
      >
        {num}
      </span>
      {featured && (
        <span
          className="absolute font-display uppercase"
          style={{
            top: "14px",
            right: "20px",
            fontSize: "9px",
            letterSpacing: "3px",
            color: "rgba(229,219,196,0.35)",
          }}
        >
          Featured
        </span>
      )}
      <img
        src={logo}
        alt={alt}
        className="object-contain transition-opacity duration-[400ms] group-hover:opacity-100"
        style={{
          height: `${logoHeight ?? 36}px`,
          width: "auto",
          filter: "brightness(0) invert(1)",
          opacity: 0.55,
        }}
      />
    </div>
  );
}

function PressCell({
  logo,
  alt,
  num,
  logoHeight = 28,
  divider,
}: {
  logo: string;
  alt: string;
  num: string;
  logoHeight?: number;
  divider?: boolean;
}) {
  return (
    <div
      className="relative group flex flex-col items-center justify-center transition-colors duration-[400ms]"
      style={{
        padding: "32px 20px",
        gap: "12px",
        backgroundColor: "#18442A",
        borderRight: divider ? "1px solid rgba(229,219,196,0.12)" : "none",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(253,251,240,0.04)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#18442A")}
    >
      <span
        className="absolute font-display uppercase"
        style={{
          top: "12px",
          left: "16px",
          fontSize: "9px",
          letterSpacing: "3px",
          color: "rgba(229,219,196,0.22)",
        }}
      >
        {num}
      </span>
      <img
        src={logo}
        alt={alt}
        className="object-contain transition-opacity duration-[400ms] group-hover:opacity-100"
        style={{
          height: `${logoHeight}px`,
          width: "auto",
          filter: "brightness(0) invert(1)",
          opacity: 0.55,
        }}
      />
    </div>
  );
}
