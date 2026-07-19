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
        Why Four Fold Pictures
      </h2>

      {/* Subheading */}
      <p
        className="font-display text-center max-w-xl mx-auto mb-20"
        style={{
          fontWeight: 300,
          fontSize: "clamp(20px, 2.5vw, 28px)",
          lineHeight: 1.5,
          color: MUTED_75,
        }}
      >
        There are wedding photographs.
        <br />
        And then there are Fourfold photographs.
        <br />
        The difference is visible the moment you see one.
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
        We began in fashion.
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
        The discipline of controlled light, intentional composition, and the kind of frame that stops you mid-scroll and makes you ask: where is that from? That language never left us. We brought it into weddings. Every portrait we make of you carries that same editorial precision — the kind of image that belongs in Vogue, in Elle, in Condé Nast — except it is not a model in the frame.
      </p>

      {/* Highlight line */}
      <p
        className="font-display italic text-center max-w-2xl mx-auto mb-12 md:mb-16"
        style={{
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(28px, 3.4vw, 44px)",
          lineHeight: 1.35,
          color: SAND,
          letterSpacing: "-0.005em",
        }}
      >
        It is you. On your wedding day. Looking exactly like you always hoped you would.
      </p>

      <div
        className="font-display text-center max-w-2xl mx-auto mb-12 md:mb-16"
        style={{
          fontSize: "clamp(20px, 2.2vw, 26px)",
          color: MUTED_75,
          lineHeight: 1.9,
        }}
      >
        <div>That is the first thing we give you.</div>
        <div>Then comes everything else.</div>
      </div>

      {/* Chapter break: Pre-wedding */}
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
          The pre-wedding shoot.
        </h3>
      </div>

      {/* Pre-wedding paragraph */}
      <p
        className="font-display text-center max-w-2xl mx-auto mb-10"
        style={{
          fontWeight: 300,
          fontSize: "clamp(20px, 2.2vw, 26px)",
          lineHeight: 1.9,
          color: BODY,
        }}
      >
        A location that belongs to your story. Light that we chase and bend and wait for. And the two of you — not performing for a camera, but simply existing together while we work around you with the same precision a fashion director brings to a magazine cover.
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
        <div>People will see those images and feel something they can't name.</div>
        <div style={{ color: SAND }}>That is the point.</div>
      </div>

      {/* Chapter break: The greatest frames */}
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
          The greatest Fourfold frames.
        </h3>
      </div>

      {/* Greatest frames paragraph */}
      <p
        className="font-display text-center max-w-2xl mx-auto mb-10"
        style={{
          fontWeight: 300,
          fontSize: "clamp(20px, 2.2vw, 26px)",
          lineHeight: 1.9,
          color: BODY,
        }}
      >
        They are never just beautiful. They are true. The romance underneath the artistry. The glance that no art director could have scripted. The split second where fashion and feeling collide into something that belongs to nobody else on earth.
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
        That image will outlast everything from your wedding day.
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
        <div>The venue will host another wedding next weekend.</div>
        <div>The flowers will be gone.</div>
        <div style={{ color: SAND }}>
          The version of you that existed in that light, on that day, feeling exactly what you felt —
        </div>
        <div style={{ color: SAND }}>gone. Unless we were there.</div>
      </div>

      {/* Standalone pull line — what we keep forever */}
      <div
        className="font-display text-center max-w-2xl mx-auto py-20 my-10"
        style={{
          fontWeight: 300,
          fontSize: "clamp(28px, 3.2vw, 42px)",
          color: MILKY,
          lineHeight: 1.5,
        }}
      >
        <div>What we make is the one thing you keep forever —</div>
        <div style={{ marginTop: "1rem", color: SAND }}>
          when everything else fades, when the people you love are older, when that moment only exists in what we created.
        </div>
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
          The couples who choose Fourfold never wonder what they lost.
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
          We are not for everyone. We don't shoot for everyone.
        </p>
        <div
          className="font-display italic text-center"
          style={{
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(20px, 2.2vw, 26px)",
            color: SAND,
            lineHeight: 1.6,
            marginTop: "1.5rem",
          }}
        >
          The ones who find us — always say they found us just in time.
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-2xl mx-auto mt-20 text-center">
        <div className="flex justify-center" style={{ marginTop: "20px" }}>
          <a
            href="/contact"
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
