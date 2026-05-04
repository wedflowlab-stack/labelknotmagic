import { GALLERY_POOL } from "@/lib/labelknot-images";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--milk)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p
          className="eyebrow font-display mb-16 md:mb-24"
          style={{ color: "var(--everest)", textAlign: "center", fontSize: "16px" }}
        >
          01 — Label Knot
        </p>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Large offset image — left */}
          <div className="col-span-12 md:col-span-5 md:row-span-2">
            <figure>
              <img
                src={GALLERY_POOL[2]}
                alt="The bride, the moment before"
                className="w-full aspect-[4/5] object-cover"
              />
              <figcaption
                className="cover-line font-display mt-3"
                style={{ color: "var(--everest)" }}
              >
                Pl. 01 — The minute before she walks
              </figcaption>
            </figure>
          </div>

          {/* Copy block — right top */}
          <div className="col-span-12 md:col-span-7 md:pt-12 md:px-4">
            <h2
              className="editorial-headline text-4xl md:text-6xl lg:text-7xl tracking-widest uppercase"
              style={{ color: "var(--everest)", lineHeight: 1.06, textAlign: "center" }}
            >
              After the last dance,
              <br />
              <em className="font-display italic normal-case tracking-normal">what remains?</em>
            </h2>

            <div className="mt-10 max-w-xl mx-auto">
              {/* Opening — large italic */}
              <p
                className="font-display italic"
                style={{
                  fontSize: "clamp(23px, 2.4vw, 31px)",
                  color: "var(--everest)",
                  lineHeight: 1.35,
                  textAlign: "center",
                }}
              >
                The venue will host another wedding next weekend. The flowers will be gone by
                morning. The dress, folded away. The cake, a photograph on someone's phone.
              </p>

              {/* Body 1 */}
              <p
                className="font-display mt-8"
                style={{
                  fontSize: "20px",
                  color: "var(--everest)",
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                But there will be a moment — sometime in the years ahead — when you sit with the
                person you married and you reach for that day. Not the highlight reel.
              </p>

              {/* Emphasis line — stands alone */}
              <p
                className="font-display italic"
                style={{
                  fontSize: "clamp(25px, 2.6vw, 33px)",
                  color: "var(--everest)",
                  lineHeight: 1.15,
                  margin: "28px 0",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                The real version.
              </p>

              {/* Body 2 */}
              <p
                className="font-display"
                style={{
                  fontSize: "20px",
                  color: "var(--everest)",
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                The way he looked at you before you walked in. Your mother's face when she first
                saw you ready. The cousin who flew across the world, finally in the same room. The
                kids on the dance floor who didn't care about anything except that moment. Your
                grandmother, quietly watching everything, holding it all in.
              </p>
            </div>
          </div>

          {/* Square — right middle */}
          <div className="col-span-6 md:col-span-4 md:col-start-6 md:mt-4">
            <figure>
              <img
                src={GALLERY_POOL[5]}
                alt="A held breath, captured"
                className="w-full aspect-square object-cover"
              />
              <figcaption
                className="cover-line font-display mt-3"
                style={{ color: "var(--everest)" }}
              >
                Pl. 02 — A held breath
              </figcaption>
            </figure>
          </div>

          {/* Portrait — right end */}
          <div className="col-span-6 md:col-span-3 md:mt-4">
            <figure>
              <img
                src={GALLERY_POOL[6]}
                alt="Light, draped"
                className="w-full aspect-[3/4] object-cover"
              />
              <figcaption
                className="cover-line font-display mt-3"
                style={{ color: "var(--everest)" }}
              >
                Pl. 03 — Light, draped
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Urgency seed block */}
        <div className="mt-24 md:mt-32 mx-auto max-w-xl">
          {/* Top rule — sand */}
          <div
            className="rule-thin mb-10 mx-auto"
            style={{ borderColor: "var(--sand)", width: "40px" }}
          />

          {/* Three-line punch */}
          <div style={{ margin: "0 0 32px 0" }}>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(25px, 2.6vw, 35px)",
                color: "var(--everest)",
                lineHeight: 1.15,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              These moments don't repeat.
            </p>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(25px, 2.6vw, 35px)",
                color: "var(--everest)",
                lineHeight: 1.15,
                margin: "8px 0",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              They don't wait.
            </p>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(25px, 2.6vw, 35px)",
                color: "var(--everest)",
                lineHeight: 1.15,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              And most of them happen when nobody is looking.
            </p>
          </div>

          {/* Bottom rule — sand */}
          <div
            className="rule-thin mb-8 mt-12 mx-auto"
            style={{ borderColor: "var(--sand)", width: "40px" }}
          />

          {/* Body */}
          <p
            className="font-display"
            style={{
              fontSize: "20px",
              color: "var(--everest)",
              lineHeight: 1.7,
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            We are not just here to document your wedding. We are here so that twenty years from
            now, when your daughter asks what it felt like —
          </p>

          {/* Closing italic */}
          <p
            className="font-display italic"
            style={{
              fontSize: "clamp(20px, 2vw, 27px)",
              color: "var(--everest)",
              lineHeight: 1.4,
              marginBottom: "40px",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            So that when you reach for that feeling — every feeling is still there, unchanged,
            waiting for you.
          </p>

          {/* Final sign-off */}
          <p
            className="font-display uppercase"
            style={{
              fontSize: "16px",
              color: "var(--everest)",
              letterSpacing: "0.18em",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            What remains after everything else fades — is what we create.
          </p>
        </div>
      </div>
    </section>
  );
}
