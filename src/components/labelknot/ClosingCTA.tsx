import { HERO_IMAGE } from "@/lib/labelknot-images";
import { useState } from "react";

export function ClosingCTA() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section
      id="book"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--everest)", color: "var(--milk)" }}
    >
      {/* Faint memory of the hero */}
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12] mix-blend-luminosity"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--everest) 0%, color-mix(in oklab, var(--everest) 88%, black) 100%)",
          opacity: 0.85,
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 py-28 md:py-44 grid md:grid-cols-12 gap-14">
        <div className="md:col-span-7">
          <p className="eyebrow mb-8 opacity-80">08 — The Booking</p>
          <h2 className="editorial-headline text-5xl md:text-7xl lg:text-[5.5rem]">
            The day is already
            <br />
            <em className="font-display italic">on its way.</em>
            <br />
            The only question
            <br />
            is <em className="font-display italic">who holds it.</em>
          </h2>

          <p className="mt-10 font-display italic text-xl md:text-2xl max-w-xl opacity-90">
            We accept a measured number of weddings each season — not because of scarcity, but
            because of standard. The couples we say <em>yes</em> to in November are usually the ones
            who wrote to us in March.
          </p>

          <p className="cover-line mt-10 opacity-70">
            Saturdays in the Indian wedding season are the first to close.
          </p>
        </div>

        {/* Booking form — minimal, editorial, no friction */}
        <div className="md:col-span-5 md:pt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6 border border-[var(--milk)]/25 p-8 md:p-10 backdrop-blur-sm"
            style={{ backgroundColor: "color-mix(in oklab, var(--everest) 70%, transparent)" }}
          >
            <p className="masthead text-sm">Request a Consultation</p>
            <div className="rule-thin" style={{ backgroundColor: "var(--milk)", opacity: 0.3 }} />

            {!submitted ? (
              <>
                <Field label="Names" placeholder="The two of you" />
                <Field label="Wedding Date" placeholder="Month, Year — or undecided" />
                <Field label="Venue / City" placeholder="Where it begins" />
                <Field label="Email" type="email" placeholder="Where we should write back" />

                <button type="submit" className="btn-sand w-full justify-center mt-2">
                  Let's Book Your Day
                  <span aria-hidden>→</span>
                </button>
                <p className="cover-line opacity-60 text-center">
                  A reply within 24 hours, signed by the studio.
                </p>
              </>
            ) : (
              <div className="py-8 text-center space-y-4 fade-up">
                <p className="font-display italic text-2xl">Thank you.</p>
                <p className="editorial-body opacity-90">
                  Your note has reached us. We read every one personally and will write back within
                  twenty-four hours.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="cover-line opacity-70">{label}</span>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-0 border-b border-[var(--milk)]/40
                   focus:border-[var(--sand)] focus:outline-none
                   py-2 font-display text-lg placeholder:opacity-40 placeholder:italic
                   text-[var(--milk)]"
      />
    </label>
  );
}
