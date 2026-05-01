const REVIEWS = [
  {
    quote:
      "I haven't watched the film all the way through yet. I get to minute four — the part where my father turns around — and I have to stop. I have watched that minute forty-two times. My husband says I am being ridiculous. He has watched it sixty.",
    name: "Riya & Aryaman",
    location: "The Leela Palace, Udaipur",
  },
  {
    quote:
      "My mother is not a woman who cries at photographs. She held the album for an hour. She did not turn the page. When I asked her what was wrong she said, 'this is exactly how it felt.' Nothing has been said to me, ever, that meant more.",
    name: "Sakshi & Raghav",
    location: "Jaipur",
  },
  {
    quote:
      "We did not want a wedding photographer. We wanted someone who would not flinch when the day went sideways — when the bridesmaid cried, when the rain came, when my grandmother said the wrong thing into a microphone. They didn't flinch. They framed it.",
    name: "Reeyaa & Nair",
    location: "ITC Grand Bharat, Delhi NCR",
  },
  {
    quote:
      "Three years on. Our daughter points at the photograph above the fireplace and asks me to tell her the story again. I tell her a different one each time. The picture lets me.",
    name: "Anaya & Vir",
    location: "Goa",
  },
];

export function Reviews() {
  return (
    <section
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--milk)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="eyebrow mb-6" style={{ color: "var(--sage)" }}>
          03 — Letters Received
        </p>
        <h2
          className="editorial-headline text-4xl md:text-6xl max-w-4xl mb-20"
          style={{ color: "var(--everest)" }}
        >
          What you will <em className="font-display italic">feel</em>,
          <br /> after.
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {REVIEWS.map((r, i) => (
            <article key={i} className="relative">
              <span
                className="font-display absolute -top-10 -left-2 text-[120px] leading-none opacity-15 select-none"
                style={{ color: "var(--everest)" }}
                aria-hidden
              >
                “
              </span>
              <p
                className="font-display italic text-xl md:text-[1.7rem] leading-[1.45] relative"
                style={{ color: "var(--everest)" }}
              >
                {r.quote}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12" style={{ backgroundColor: "var(--sage)" }} />
                <div>
                  <p className="masthead text-xs" style={{ color: "var(--everest)" }}>
                    {r.name}
                  </p>
                  <p className="cover-line mt-1 opacity-70" style={{ color: "var(--sage)" }}>
                    {r.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Price-justifying line */}
        <div className="mt-28 max-w-3xl">
          <div className="rule-thin mb-8" />
          <p
            className="font-display italic text-2xl md:text-3xl leading-snug"
            style={{ color: "var(--everest)" }}
          >
            You will spend more on the flowers — which will be in the bin by Sunday — than on the
            one record of the day that your grandchildren will hold in their hands.
          </p>
          <div className="mt-10">
            <a href="#book" className="btn-ghost" style={{ color: "var(--everest)" }}>
              Begin a Conversation
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
