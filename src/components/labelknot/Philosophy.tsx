import { GALLERY_POOL } from "@/lib/labelknot-images";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--milk)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="eyebrow mb-16 md:mb-24" style={{ color: "var(--sage)" }}>
          01 — The Philosophy
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
              <figcaption className="cover-line mt-3 opacity-70" style={{ color: "var(--sage)" }}>
                Pl. 01 — The minute before she walks
              </figcaption>
            </figure>
          </div>

          {/* Copy block — right top */}
          <div className="col-span-12 md:col-span-7 md:pt-12 md:pl-8 lg:pl-16">
            <h2
              className="editorial-headline text-4xl md:text-6xl lg:text-7xl"
              style={{ color: "var(--everest)" }}
            >
              You will <em className="font-display italic">forget</em> most of it.
              <br />
              That is the <em className="font-display italic">tragedy</em> we exist to undo.
            </h2>

            <div className="mt-10 max-w-xl space-y-6 editorial-body" style={{ color: "var(--sage)" }}>
              <p>
                The day will pass faster than any day before it. The mehendi will smudge. The garlands
                will wilt. Your mother will cry and you will not see it. Your father will hold himself
                together at the door and nobody will photograph the way his hand trembled.
              </p>
              <p>
                We are not here to <em>document</em> your wedding. We are here so that twenty years
                from now, when your daughter asks <em>what did it feel like</em> — you have a frame
                to point to, and not a feeling that has gone soft at the edges.
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
              <figcaption className="cover-line mt-3 opacity-70" style={{ color: "var(--sage)" }}>
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
              <figcaption className="cover-line mt-3 opacity-70" style={{ color: "var(--sage)" }}>
                Pl. 03 — Light, draped
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Urgency seed — quiet, factual */}
        <div className="mt-24 md:mt-32 max-w-3xl">
          <div className="rule-thin mb-8" />
          <p
            className="font-display italic text-xl md:text-2xl leading-snug"
            style={{ color: "var(--everest)" }}
          >
            Most of our couples find us nine to fourteen months before their date. By the time you've
            decided you want us, the calendar has usually decided for you.
          </p>
        </div>
      </div>
    </section>
  );
}
