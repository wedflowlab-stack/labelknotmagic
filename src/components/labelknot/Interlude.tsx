export function Interlude() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center"
      style={{ backgroundColor: "var(--milk)", color: "var(--everest)" }}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 py-32">
        <p className="eyebrow mb-10" style={{ color: "var(--sage)" }}>
          06 — Interlude
        </p>
        <p className="font-display leading-[0.98] tracking-[-0.01em] text-[10vw] md:text-[7.2vw]">
          A wedding is not a day
          <br />
          you <em className="italic">live through.</em>
          <br />
          It is a day that lives
          <br />
          <em className="italic">through</em> you —
          <br />
          and then is gone,
          <br />
          before you knew
          <br />
          you were inside it.
        </p>
      </div>
    </section>
  );
}
