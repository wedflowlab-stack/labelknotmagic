const BG_IMAGE =
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536016/SnapInsta.to_471409298_18067546990704263_8488551263776633218_n_qpnt0e.jpg";

export function Interlude() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: "80vh" }}
    >
      <img
        src={BG_IMAGE}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(180,140,60,0.22) 0%, rgba(200,160,80,0.15) 40%, rgba(120,90,30,0.35) 100%)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.10) 55%, transparent 80%)",
          zIndex: 2,
        }}
      />


      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 py-24 max-w-4xl mx-auto">
        <p
          className="font-display uppercase mb-10"
          style={{
            fontSize: "10px",
            letterSpacing: "6px",
            color: "rgba(253,251,240,0.45)",
          }}
        >
          06 · Interlude
        </p>

        <div
          className="mb-12 mx-auto"
          style={{ width: "40px", height: "1px", backgroundColor: "#E4DBC4", opacity: 0.4 }}
        />

        <p
          className="font-display text-center uppercase"
          style={{
            fontWeight: 300,
            fontSize: "clamp(28px, 4vw, 56px)",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            color: "#FDFBF0",
          }}
        >
          <span className="block">A WEDDING IS NOT A DAY YOU LIVE THROUGH.</span>
          <span className="block mt-10 md:mt-12">IT IS A DAY THAT LIVES THROUGH YOU —</span>
          <span
            className="block mt-10 md:mt-12 italic"
            style={{ color: "rgba(253,251,240,0.85)" }}
          >
            AND THEN IS GONE, BEFORE YOU KNEW YOU WERE INSIDE IT.
          </span>
        </p>

        <div
          className="mt-12 mb-10 mx-auto"
          style={{ width: "40px", height: "1px", backgroundColor: "#E4DBC4", opacity: 0.4 }}
        />

        <p
          className="font-display uppercase mt-2"
          style={{
            fontSize: "10px",
            letterSpacing: "5px",
            color: "rgba(253,251,240,0.35)",
          }}
        >
          Fourfold Pictures · Premium Wedding Photography &amp; Films
        </p>
      </div>
    </section>
  );
}
