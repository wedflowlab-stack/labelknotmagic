const EVEREST = "#18442A";
const MILKY = "#FDFBF0";
const SAND = "#E4DBC4";
const BODY = "rgba(253,251,240,0.82)";
const MUTED_4 = "rgba(253,251,240,0.4)";
const MUTED_75 = "rgba(253,251,240,0.75)";
const RULE = "rgba(228,219,196,0.35)";

export function WhyLabelKnot() {
  return (
    <section
      className="relative py-32 md:py-44 px-6 md:px-12"
      style={{ backgroundColor: EVEREST, color: MILKY }}
    >
      {/* Eyebrow */}
      <p
        className="font-display text-center mb-6"
        style={{
          fontSize: "11px",
          letterSpacing: "5px",
          color: MUTED_4,
          textTransform: "uppercase",
        }}
      >
        What We Create For You
      </p>

      {/* Main heading */}
      <h2
        className="font-display text-center mb-8 mx-auto"
        style={{
          fontWeight: 400,
          fontSize: "clamp(44px, 6vw, 80px)",
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
          color: MILKY,
        }}
      >
        Why Label Knot
      </h2>

      {/* Subheading */}
      <p
        className="font-display text-center max-w-xl mx-auto mb-20"
        style={{
          fontWeight: 300,
          fontSize: "clamp(20px, 2.5vw, 28px)",
          lineHeight: 1.5,
          color: "rgba(253,251,240,0.75)",
        }}
      >
        Every wedding produces photographs. Very few produce something you will reach for twenty
        years from now.
      </p>

      {/* Opening line */}
      <h3
        className="font-display text-center mb-16 md:mb-20 mx-auto max-w-3xl"
        style={{
          fontWeight: 300,
          fontSize: "clamp(48px, 6.5vw, 88px)",
          lineHeight: 1.0,
          color: MILKY,
        }}
      >
        Your wedding will happen once.
      </h3>

      {/* First body paragraph */}
      <p
        className="font-display text-center max-w-2xl mx-auto mb-12 md:mb-16"
        style={{
          fontWeight: 300,
          fontSize: "clamp(20px, 2.2vw, 26px)",
          lineHeight: 1.9,
          color: BODY,
        }}
      >
        Every person in that room will walk out of that venue and return to their own life. The
        flowers will be gone by morning. The lights will come down. The music will stop. And the
        version of that day that existed — the real version, the breathing, laughing, falling-apart
        version — will begin to blur the way all things do when time starts moving again.
      </p>

      {/* Cousins paragraph */}
      <p
        className="font-display text-center max-w-2xl mx-auto mb-10"
        style={{
          fontWeight: 300,
          fontSize: "clamp(20px, 2.2vw, 26px)",
          lineHeight: 1.9,
          color: BODY,
        }}
      >
        Your cousins crowding around you in that stolen moment between rituals —
      </p>
      <p
        className="font-display italic text-center max-w-2xl mx-auto mb-12 md:mb-16"
        style={{
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(24px, 2.8vw, 34px)",
          lineHeight: 1.4,
          color: MILKY,
        }}
      >
        who only exist together on days like this
      </p>
      <div
        className="font-display text-center max-w-2xl mx-auto mb-12 md:mb-16"
        style={{
          fontSize: "clamp(20px, 2.2vw, 26px)",
          color: MUTED_75,
          lineHeight: 1.9,
        }}
      >
        <div>Label Knot sees that moment.</div>
        <div>We stay quiet.</div>
        <div>We catch it before it disappears.</div>
      </div>

      {/* Chapter break: Father */}
      <div className="max-w-2xl mx-auto mt-24 md:mt-32 mb-10">
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

      {/* Father paragraph */}
      <p
        className="font-display text-center max-w-2xl mx-auto mb-10"
        style={{
          fontWeight: 300,
          fontSize: "clamp(20px, 2.2vw, 26px)",
          lineHeight: 1.9,
          color: BODY,
        }}
      >
        The man who held your hand crossing every road — the proudest and the most quietly
        devastated he has ever been in his life
      </p>
      <div
        className="font-display text-center max-w-2xl mx-auto mb-12 md:mb-16"
        style={{
          fontSize: "clamp(28px, 3.2vw, 42px)",
          fontWeight: 400,
          color: MILKY,
          lineHeight: 1.45,
        }}
      >
        <div>That four seconds on his face —</div>
        <div>before he composes himself,</div>
        <div>before he smiles for the room —</div>
        <div style={{ color: SAND }}>we will be the only ones who catch it.</div>
      </div>

      {/* Chapter break: Mother */}
      <div className="max-w-2xl mx-auto mt-24 md:mt-32 mb-10">
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

      {/* Mother paragraph */}
      <p
        className="font-display text-center max-w-2xl mx-auto mb-10"
        style={{
          fontWeight: 300,
          fontSize: "clamp(20px, 2.2vw, 26px)",
          lineHeight: 1.9,
          color: BODY,
        }}
      >
        There are things she has carried for you since the day you were born —
      </p>
      <p
        className="font-display italic text-center max-w-2xl mx-auto mb-12 md:mb-16"
        style={{
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(22px, 2.6vw, 30px)",
          lineHeight: 1.5,
          color: MILKY,
        }}
      >
        worries she never named, prayers she said when no one was listening, sacrifices so quiet you
        never even knew to thank her for them
      </p>
      <div
        className="font-display text-center max-w-2xl mx-auto mb-12 md:mb-16"
        style={{
          fontSize: "clamp(28px, 3.2vw, 42px)",
          fontWeight: 400,
          color: MILKY,
          lineHeight: 1.45,
        }}
      >
        <div>Not sadness.</div>
        <div>Not happiness.</div>
        <div style={{ color: SAND }}>
          Something that sits between the two and has no word in any language.
        </div>
      </div>

      {/* Standalone pull line */}
      <div
        className="font-display text-center max-w-2xl mx-auto py-20 my-10"
        style={{
          fontWeight: 300,
          fontSize: "clamp(28px, 3.2vw, 42px)",
          color: MILKY,
          lineHeight: 1.5,
        }}
      >
        <div>That frame is not a photograph.</div>
        <div>It is the truest thing she has ever shown you.</div>
      </div>

      {/* Closing paragraph */}
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <p
          className="font-display"
          style={{
            fontWeight: 500,
            fontSize: "clamp(22px, 2.4vw, 28px)",
            color: MILKY,
            marginBottom: "1.25rem",
          }}
        >
          Not coverage. Not a package.
        </p>
        <p
          className="font-display"
          style={{
            fontWeight: 300,
            fontSize: "clamp(20px, 2.2vw, 26px)",
            lineHeight: 1.9,
            color: BODY,
          }}
        >
          What we make is the one thing that will still be honest about that day —
        </p>
        <div
          className="font-display text-center"
          style={{
            fontSize: "clamp(20px, 2.2vw, 26px)",
            color: MUTED_75,
            lineHeight: 1.9,
            marginTop: "1.5rem",
          }}
        >
          <div>when the venue has hosted a hundred other weddings,</div>
          <div>when the dress is folded away,</div>
          <div>when the people you love are older</div>
          <div>and the moment is gone.</div>
        </div>
      </div>

      {/* Final closing lines + CTA */}
      <div className="max-w-2xl mx-auto mt-20 text-center">
        <p
          className="font-display"
          style={{
            fontWeight: 400,
            fontSize: "clamp(20px, 2.2vw, 26px)",
            color: MILKY,
            marginBottom: "1rem",
            lineHeight: 1.6,
          }}
        >
          The couples who don't choose Label Knot never know what they lost.
        </p>
        <p
          className="font-display italic"
          style={{
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(20px, 2.2vw, 26px)",
            color: SAND,
            lineHeight: 1.6,
          }}
        >
          That is the part that should stay with you.
        </p>

        <div style={{ height: "60px" }} />

        <div className="flex justify-center" style={{ marginTop: "20px" }}>
          <a
            href="#book"
            className="font-display uppercase transition-colors"
            style={{
              fontWeight: 400,
              fontSize: "13px",
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
