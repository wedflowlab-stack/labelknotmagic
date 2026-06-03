import { GALLERY_POOL } from "@/lib/labelknot-images";

const FEED = [
  GALLERY_POOL[2],
  GALLERY_POOL[6],
  GALLERY_POOL[5],
  GALLERY_POOL[10],
  GALLERY_POOL[0],
  GALLERY_POOL[13],
];

export function InstagramFooter() {
  return (
    <footer
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "var(--milk)", color: "var(--everest)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="eyebrow mb-10 opacity-80">09 — The Living Archive</p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-[2px]">
          {FEED.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/labelknot"
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden group"
            >
              <img
                src={src}
                alt={`Recent work ${i + 1}`}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://instagram.com/labelknot"
            target="_blank"
            rel="noreferrer"
            className="font-display tracking-[0.32em] text-3xl md:text-5xl uppercase hover:opacity-70 transition-opacity"
          >
            @labelknot
          </a>
          <p className="cover-line mt-6 opacity-70">
            The door stays open. Walk in when you're ready.
          </p>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--everest)]/20 flex flex-col md:flex-row items-center justify-between gap-3 cover-line opacity-60">
          <span>© four-fold pictures · MMXXVI</span>
          <span>Photographed across India &nbsp;·&nbsp; Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
