const CARDS = [
  {
    name: "ALEN BABU & CHIPPY DEVASY",
    year: "2024",
    image:
      "https://res.cloudinary.com/dtembvivw/image/upload/v1778085155/SaveClip.App_512375775_1798032230755720_5837611108978617611_n_yorqhe.jpg",
    review:
      "We didn't realise how much we needed those photographs until we sat with them three weeks later. Every frame felt like we were back there in that beach — just the two of us, in that light, in that silence between everything happening around us. Label Knot didn't photograph our wedding. They photographed us. That difference is something I will never be able to fully explain.",
  },
  {
    name: "ANU & VISHRIN",
    year: "2025",
    image:
      "https://res.cloudinary.com/dtembvivw/image/upload/v1778166084/SaveClip.App_656403465_18019254551505842_3290936988859839699_n_skpv6t.jpg",
    review:
      "There were a hundred people around us that day. But when I look at our photographs now, it feels like there was no one else in the world. Just him looking at me like that. Label Knot caught something I didn't even know was happening in real time. That is not photography. That is something I don't have a word for yet.",
  },
  {
    name: "ANN & JOHNNY",
    year: "2022",
    image:
      "https://res.cloudinary.com/dtembvivw/image/upload/v1778166084/SaveClip.App_497818474_17988335572092634_8088562691265612361_n_lxetvs.jpg",
    review:
      "The wedding planning felt enormous at the time. Every decision, every venue, every number. If you came back a year later, I would tell you what most of it cost. I can tell you exactly what Label Knot cost — because it is the only thing I would pay again without a second thought. Everything else from that day is a receipt. This is the only thing that is still real, and I still keep coming back to it.",
  },
  {
    name: "ANU & LOVELY COUSINS",
    year: "2025",
    image:
      "https://res.cloudinary.com/dtembvivw/image/upload/v1778166083/SaveClip.App_657389537_18019254569505842_4093088820213063677_n_xpkwbl.jpg",
    review:
      "My cousins haven't all been in the same place since we were children. Different cities, different lives, different versions of ourselves. That day they wore all theirs — and Label Knot caught a moment between us that none of us staged, none of us planned, none of us ever noticed happening. When I saw that frame I completely fell apart. Because I knew, without anyone saying it, that we will never all be in the same room like that again.",
  },
];

export function Reviews() {
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: "var(--milk)", paddingTop: "clamp(64px, 8vw, 96px)", paddingBottom: "clamp(64px, 8vw, 96px)" }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: "640px", textAlign: "center" }}>
        <p
          className="font-display uppercase"
          style={{ fontSize: "10px", letterSpacing: "4px", color: "var(--sage)", opacity: 0.6, marginBottom: "20px" }}
        >
          03 — Letters Received
        </p>
        <h2
          className="font-display"
          style={{
            fontWeight: 300,
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "var(--everest)",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Words That Keep Us Going
        </h2>
        <p
          className="font-display"
          style={{
            fontSize: "clamp(16px, 1.8vw, 20px)",
            color: "var(--sage)",
            lineHeight: 1.75,
            maxWidth: "44ch",
            margin: "0 auto",
          }}
        >
          These are not reviews. They are the moments our couples wrote back to tell us about — long after the wedding was over, long after the flowers were gone.
        </p>
      </div>

      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 px-6 md:px-12"
        style={{ maxWidth: "1200px", gap: "24px", marginTop: "clamp(48px, 6vw, 72px)" }}
      >
        {CARDS.map((c, i) => (
          <article
            key={i}
            style={{
              backgroundColor: "var(--sand)",
              overflow: "hidden",
              padding: "clamp(24px, 3vw, 40px) clamp(20px, 2.5vw, 32px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Top corner quotes row */}
            <div
              className="grid grid-cols-2"
              style={{ gap: "16px", marginBottom: "16px" }}
            >
              <p
                className="font-display uppercase"
                style={{
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "var(--everest)",
                  opacity: 0.45,
                  lineHeight: 1.6,
                  textAlign: "left",
                }}
              >
                After witnessing so many weddings, one truth remains — love always reveals itself in the smallest, most honest moments.
              </p>
              <p
                className="font-display uppercase"
                style={{
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "var(--everest)",
                  opacity: 0.45,
                  lineHeight: 1.6,
                  textAlign: "right",
                }}
              >
                Every couple teaches us something new about love. No two stories are the same, and that's what makes every wedding unforgettable.
              </p>
            </div>

            {/* Couple image */}
            <div className="mx-auto" style={{ marginTop: "16px", marginBottom: "16px" }}>
              <img
                src={c.image}
                alt={c.name}
                loading={i === 0 ? "eager" : "lazy"}
                className="w-48 h-48 md:w-56 md:h-56 object-cover"
                style={{ display: "block" }}
              />
            </div>

            {/* Name */}
            <p
              className="font-display uppercase"
              style={{
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "3px",
                color: "var(--everest)",
                textAlign: "center",
                marginBottom: "4px",
              }}
            >
              {c.name}
            </p>
            {/* Year */}
            <p
              className="font-display"
              style={{
                fontSize: "13px",
                color: "var(--sage)",
                opacity: 0.6,
                textAlign: "center",
              }}
            >
              {c.year}
            </p>

            {/* Divider */}
            <div
              className="mx-auto"
              style={{
                width: "48px",
                borderTop: "1px solid var(--everest)",
                opacity: 0.15,
                margin: "20px auto",
              }}
            />

            {/* Review */}
            <p
              className="font-display italic"
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
                color: "var(--everest)",
                lineHeight: 1.85,
                fontWeight: 400,
                textAlign: "center",
                padding: "0 clamp(8px, 1vw, 24px)",
                marginBottom: "24px",
              }}
            >
              {c.review}
            </p>

            {/* Bottom corner quotes */}
            <div
              className="grid grid-cols-2 mt-auto"
              style={{ gap: "16px", paddingTop: "16px" }}
            >
              <p
                className="font-display uppercase"
                style={{
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "var(--everest)",
                  opacity: 0.45,
                  lineHeight: 1.6,
                  textAlign: "left",
                }}
              >
                Between laughter, tears, and quiet glances, we're reminded that the most powerful moments are rarely planned.
              </p>
              <p
                className="font-display uppercase"
                style={{
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "var(--everest)",
                  opacity: 0.45,
                  lineHeight: 1.6,
                  textAlign: "right",
                }}
              >
                Embrace where you are, cherish the lessons learned along the way, and look forward to the adventures that lie ahead.
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center px-6" style={{ marginTop: "64px" }}>
        <p
          className="font-display italic"
          style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: "var(--everest)", opacity: 0.7 }}
        >
          Every word above arrived without us asking.
        </p>
      </div>
    </section>
  );
}
