const PILLARS = [
  {
    no: "I.",
    title: "The Film",
    body: "A cinematic feature, not a highlight reel. Twelve to eighteen minutes of your wedding edited with the rhythm of a film, not a sequence of moments. Scored. Coloured by hand. Released to you the way a director releases a cut — once it is right.",
  },
  {
    no: "II.",
    title: "The Stills",
    body: "Photographed on medium format and full-frame, finished in our atelier the way a painter finishes a portrait. No retouch shortcuts. No filter pack. Each frame leaves our hands when it has earned its place in the archive.",
  },
  {
    no: "III.",
    title: "The Volume",
    body: "A linen-bound, hand-bound album printed on archival fine art paper — the kind a museum would accept. Designed as a book, sequenced like one. Built to outlive the people who first hold it.",
  },
  {
    no: "IV.",
    title: "The Vault",
    body: "Your full archive — every frame, every angle, every quiet moment we noticed when no one else did — preserved in a private digital vault, indexed and catalogued for the rest of your life.",
  },
];

export function Offerings() {
  return (
    <section
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--sand)", color: "var(--everest)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="eyebrow mb-6">04 — What We Make</p>
        <h2 className="editorial-headline text-4xl md:text-6xl max-w-4xl">
          We do not sell <em className="font-display italic">packages</em>.
          <br /> We make <em className="font-display italic">heirlooms.</em>
        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-16">
          {PILLARS.map((p) => (
            <div key={p.no} className="border-t border-[var(--everest)]/25 pt-8">
              <div className="flex items-baseline gap-6 mb-5">
                <span className="font-display text-2xl">{p.no}</span>
                <h3 className="masthead text-base">{p.title}</h3>
              </div>
              <p className="editorial-body max-w-md">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-3xl">
          <div className="rule-thin mb-8" />
          <p className="font-display italic text-2xl md:text-3xl leading-snug">
            We are not the easiest decision a couple will make for their wedding.
            We have made peace with that. Our work could not exist if we were.
          </p>
        </div>
      </div>
    </section>
  );
}
