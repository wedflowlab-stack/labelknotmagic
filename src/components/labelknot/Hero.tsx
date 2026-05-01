import { HERO_IMAGE } from "@/lib/labelknot-images";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      {/* Image */}
      <img
        src={HERO_IMAGE}
        alt="Label Knot — premium Indian wedding photography"
        className="absolute inset-0 h-full w-full object-cover slow-zoom"
      />
      {/* Soft editorial vignette so type holds */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

      {/* Cover anatomy */}
      <div
        className="relative z-10 h-full w-full flex flex-col"
        style={{ color: "var(--milk)" }}
      >
        {/* Top issue line */}
        <div className="px-6 md:px-12 pt-24 md:pt-28 flex items-start justify-between fade-up">
          <span className="cover-line opacity-90">
            Volume XII &nbsp;·&nbsp; The Wedding Issue &nbsp;·&nbsp; MMXXVI
          </span>
          <span className="cover-line hidden md:block opacity-90">
            India · Worldwide
          </span>
        </div>

        {/* Masthead — exactly where Vogue sits */}
        <div className="px-6 md:px-12 mt-6 md:mt-10 fade-up">
          <h1
            className="font-display font-medium uppercase tracking-[0.06em] leading-[0.85]
                       text-[18vw] md:text-[14vw] lg:text-[11.5vw]"
          >
            Label&nbsp;Knot
          </h1>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Cover lines stack — bottom left */}
        <div className="px-6 md:px-12 pb-10 md:pb-14 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7 fade-up">
            <p className="cover-line opacity-80 mb-4">The Cover Story</p>
            <p className="font-display italic text-2xl md:text-4xl leading-[1.15] max-w-2xl">
              A wedding is not an event you attend.
              <br />
              It is the one day your <em className="not-italic underline decoration-[var(--milk)]/40 underline-offset-[6px]">entire life</em> rehearses for —
              <br className="hidden md:block" /> and never repeats.
            </p>
          </div>

          <div className="md:col-span-5 md:text-right space-y-3 fade-up">
            <p className="cover-line opacity-80">Inside this issue</p>
            <p className="font-display text-lg md:text-xl leading-snug">
              Palaces, mehendi nights, the look between two people <br className="hidden md:block" />
              who finally stop pretending it's a wedding — <br className="hidden md:block" />
              and start living it.
            </p>
            <div className="pt-4">
              <a href="#philosophy" className="cover-line inline-flex items-center gap-3 group">
                <span>Begin reading</span>
                <span className="inline-block h-px w-10 bg-current transition-all group-hover:w-16" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
