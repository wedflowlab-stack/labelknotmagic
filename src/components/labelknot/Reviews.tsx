const IMAGES = [
  "https://res.cloudinary.com/dtembvivw/image/upload/v1778085151/1_uzm2qo.png",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1778085110/4_qs80vu.png",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1778085094/2_mwzylt.png",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1778085104/3_xwiqgm.png",
];

export function Reviews() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: "var(--milk)", paddingTop: "clamp(64px, 8vw, 100px)", paddingBottom: "clamp(64px, 8vw, 100px)" }}
    >
      <div className="mx-auto max-w-[1100px] px-6 md:px-12 text-center">
        <p
          className="font-display uppercase"
          style={{ fontSize: "10px", letterSpacing: "4px", color: "var(--sage)", opacity: 0.6, marginBottom: "20px" }}
        >
          03 — Letters Received
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 300,
            color: "var(--everest)",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Words That <em className="font-display italic">Keep</em> Us Going
        </h2>
        <p
          className="font-display italic mx-auto"
          style={{
            fontSize: "clamp(16px, 1.8vw, 20px)",
            color: "var(--sage)",
            maxWidth: "520px",
            lineHeight: 1.75,
          }}
        >
          These are not reviews. They are the moments our couples wrote back to tell us about — long after the wedding was over, long after the flowers were gone.
        </p>
      </div>

      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 px-6 md:px-0"
        style={{ maxWidth: "900px", gap: "16px", marginTop: "clamp(48px, 6vw, 72px)" }}
      >
        {IMAGES.map((src, i) => (
          <div key={i} className="transition-opacity duration-300 hover:opacity-95">
            <img
              src={src}
              alt={`Letter from couple ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              className="w-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="text-center px-6" style={{ marginTop: "56px" }}>
        <p
          className="font-display italic"
          style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: "var(--everest)", opacity: 0.7 }}
        >
          Every letter above arrived without us asking.
        </p>
      </div>
    </section>
  );
}
