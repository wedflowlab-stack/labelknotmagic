const EVEREST = "#18442A";
const MILKY = "#FDFBF0";
const SAND = "#E4DBC4";
const BODY = "rgba(253,251,240,0.82)";
const MUTED_4 = "rgba(253,251,240,0.4)";
const MUTED_6 = "rgba(253,251,240,0.6)";
const RULE = "rgba(228,219,196,0.35)";

export function WhyLabelKnot() {
  return (
    <section
      className="relative py-32 md:py-44 px-6 md:px-12"
      style={{ backgroundColor: EVEREST, color: MILKY }}
    >
      {/* Element 1 — Eyebrow */}
      <p
        className="font-sans uppercase text-center mb-16"
        style={{
          fontSize: "9px",
          letterSpacing: "6px",
          color: MUTED_4,
        }}
      >
        WHAT WE CREATE FOR YOU · WHY LABEL KNOT
      </p>

      {/* Element 2 — Opening line */}
      <h2
        className="font-display text-center mb-16 mx-auto max-w-3xl"
        style={{
          fontWeight: 300,
          fontSize: "clamp(42px, 6vw, 72px)",
          lineHeight: 1.0,
          color: MILKY,
        }}
      >
        Your wedding will happen once.
      </h2>

      {/* Element 3 — First body paragraph */}
      <p
        className="font-sans max-w-2xl mx-auto mb-16"
        style={{
          fontWeight: 300,
          fontSize: "clamp(17px, 1.8vw, 20px)",
          lineHeight: 1.85,
          color: BODY,
        }}
      >
        Every person in that room will walk out of that venue and return to their own life. The
        flowers will be gone by morning. The lights will come down. The music will stop. And the
        version of that day that existed —
        <span
          className="font-display italic block text-center my-6"
          style={{ fontSize: "21px", color: MILKY, fontStyle: "italic" }}
        >
          the real version, the breathing, laughing, falling-apart version
        </span>
        — will begin to blur the way all things do when time starts moving again.
      </p>

      {/* Element 4 — Cousins paragraph */}
      <p
        className="font-sans max-w-2xl mx-auto mb-16"
        style={{
          fontWeight: 300,
          fontSize: "clamp(17px, 1.8vw, 20px)",
          lineHeight: 1.85,
          color: BODY,
        }}
      >
        Your cousins crowding around you in that stolen moment between rituals —
        <span
          className="font-display italic block text-center my-8"
          style={{ fontSize: "24px", color: MILKY, fontStyle: "italic" }}
        >
          who only exist together on days like this
        </span>
      </p>
      <div
        className="font-display italic max-w-2xl mx-auto mb-16 text-right"
        style={{
          fontSize: "15px",
          color: MUTED_6,
          lineHeight: 2.0,
          marginTop: "-2rem",
          fontStyle: "italic",
        }}
      >
        <div>Label Knot sees that moment.</div>
        <div>We stay quiet.</div>
        <div>We catch it before it disappears.</div>
      </div>

      {/* Element 5 — Chapter break: Father */}
      <div className="max-w-2xl mx-auto mt-20 mb-10">
        <div
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: RULE,
            marginBottom: "2rem",
          }}
        />
        <h3
          className="font-display text-left"
          style={{
            fontWeight: 400,
            fontSize: "clamp(32px, 3.5vw, 42px)",
            color: MILKY,
          }}
        >
          Then your father.
        </h3>
      </div>

      {/* Element 6 — Father paragraph */}
      <p
        className="font-sans max-w-2xl mx-auto mb-8"
        style={{
          fontWeight: 300,
          fontSize: "clamp(17px, 1.8vw, 20px)",
          lineHeight: 1.85,
          color: BODY,
        }}
      >
        The man who held your hand crossing every road —
        <span
          className="font-display italic block text-center my-8"
          style={{ fontSize: "22px", color: MILKY, fontStyle: "italic" }}
        >
          the proudest and the most quietly devastated he has ever been in his life
        </span>
      </p>
      <div
        className="font-display italic max-w-2xl mx-auto text-center mb-16"
        style={{
          fontSize: "18px",
          color: MILKY,
          lineHeight: 2.0,
          marginTop: "2.5rem",
          fontStyle: "italic",
        }}
      >
        <div>That four seconds on his face —</div>
        <div>before he composes himself,</div>
        <div>before he smiles for the room —</div>
        <div style={{ color: SAND }}>we will be the only ones who catch it.</div>
      </div>

      {/* Element 7 — Chapter break: Mother */}
      <div className="max-w-2xl mx-auto mt-20 mb-10">
        <div
          style={{
            width: "40px",
            height: "1px",
            backgroundColor: RULE,
            marginBottom: "2rem",
          }}
        />
        <h3
          className="font-display text-left"
          style={{
            fontWeight: 400,
            fontSize: "clamp(32px, 3.5vw, 42px)",
            color: MILKY,
          }}
        >
          And your mother.
        </h3>
      </div>

      {/* Element 8 — Mother paragraph */}
      <p
        className="font-sans max-w-2xl mx-auto mb-8"
        style={{
          fontWeight: 300,
          fontSize: "clamp(17px, 1.8vw, 20px)",
          lineHeight: 1.85,
          color: BODY,
        }}
      >
        There are things she has carried for you since the day you were born —
        <span
          className="font-display italic block text-center my-8 max-w-xl mx-auto"
          style={{ fontSize: "22px", color: MILKY, fontStyle: "italic" }}
        >
          worries she never named, prayers she said when no one was listening, sacrifices so quiet
          you never even knew to thank her for them
        </span>
      </p>
      <div
        className="font-display max-w-2xl mx-auto text-center mb-16"
        style={{
          fontSize: "24px",
          fontWeight: 500,
          color: MILKY,
          lineHeight: 1.8,
          marginTop: "2.5rem",
        }}
      >
        <div>Not sadness.</div>
        <div>Not happiness.</div>
        <div style={{ color: SAND }}>
          Something that sits between the two and has no word in any language.
        </div>
      </div>

      {/* Element 9 — Standalone pull line */}
      <div
        className="font-display italic max-w-2xl mx-auto py-20 my-10 text-center"
        style={{
          fontWeight: 300,
          fontSize: "clamp(22px, 2.8vw, 32px)",
          color: MILKY,
          lineHeight: 1.5,
          fontStyle: "italic",
        }}
      >
        <div>That frame is not a photograph.</div>
        <div>It is the truest thing she has ever shown you.</div>
      </div>

      {/* Element 10 — Closing paragraph */}
      <div className="max-w-2xl mx-auto mb-16">
        <p
          className="font-display"
          style={{
            fontWeight: 500,
            fontSize: "20px",
            color: MILKY,
            marginBottom: "1rem",
          }}
        >
          Not coverage. Not a package.
        </p>
        <p
          className="font-sans"
          style={{
            fontWeight: 300,
            fontSize: "18px",
            lineHeight: 1.85,
            color: BODY,
          }}
        >
          What we make is the one thing that will still be honest about that day —
        </p>
        <div
          className="font-display italic text-center"
          style={{
            fontSize: "17px",
            color: MUTED_6,
            lineHeight: 2.2,
            marginTop: "1.5rem",
            fontStyle: "italic",
          }}
        >
          <div>when the venue has hosted a hundred other weddings,</div>
          <div>when the dress is folded away,</div>
          <div>when the people you love are older</div>
          <div>and the moment is gone.</div>
        </div>
      </div>

      {/* Element 11 — Final closing lines + CTA */}
      <div className="max-w-2xl mx-auto mt-20">
        <p
          className="font-sans text-left mb-4"
          style={{
            fontWeight: 400,
            fontSize: "clamp(18px, 2vw, 22px)",
            color: MILKY,
          }}
        >
          The couples who don't choose Label Knot never know what they lost.
        </p>
        <p
          className="font-display italic text-left"
          style={{
            fontSize: "17px",
            color: "rgba(228,219,196,0.7)",
            fontStyle: "italic",
          }}
        >
          That is the part that should stay with you.
        </p>

        <div style={{ height: "60px" }} />

        <div className="flex justify-center">
          <a
            href="#book"
            className="font-sans uppercase transition-colors"
            style={{
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "4px",
              color: MILKY,
              padding: "18px 52px",
              border: "1px solid rgba(253,251,240,0.45)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = MILKY;
              e.currentTarget.style.backgroundColor = "rgba(253,251,240,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(253,251,240,0.45)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            CHECK AVAILABILITY
          </a>
        </div>
      </div>
    </section>
  );
}
