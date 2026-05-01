import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[var(--sand)]/90 backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{ color: scrolled ? "var(--everest)" : "var(--milk)" }}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="masthead text-[13px]">Label&nbsp;Knot</a>
        <div className="hidden md:flex items-center gap-10 cover-line">
          <a href="#gallery" className="hover:opacity-60 transition-opacity">Work</a>
          <a href="#philosophy" className="hover:opacity-60 transition-opacity">Philosophy</a>
          <a href="#book" className="hover:opacity-60 transition-opacity">Book</a>
        </div>
        <a href="#book" className="md:hidden cover-line">Book</a>
      </div>
    </nav>
  );
}
