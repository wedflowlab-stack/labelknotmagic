import { useEffect, useRef, useState } from "react";
import audioAsset from "@/assets/under-your-spell.mp3.asset.json";

const MAX_VOLUME = 0.4;

export function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Sync state -> re-trigger reveal animation
  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [playing]);

  // Autoplay on first interaction
  useEffect(() => {
    const startAudio = () => {
      const el = audioRef.current;
      if (el && el.paused) {
        el.volume = 0;
        el.play()
          .then(() => {
            setPlaying(true);
            let vol = 0;
            const fade = setInterval(() => {
              vol += 0.05;
              if (audioRef.current) audioRef.current.volume = Math.min(vol, MAX_VOLUME);
              if (vol >= MAX_VOLUME) clearInterval(fade);
            }, 40);
          })
          .catch(() => {});
      }
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("touchstart", startAudio);
      window.removeEventListener("scroll", startAudio);
      window.removeEventListener("keydown", startAudio);
    };

    window.addEventListener("click", startAudio, { once: true });
    window.addEventListener("touchstart", startAudio, { once: true });
    window.addEventListener("scroll", startAudio, { once: true });
    window.addEventListener("keydown", startAudio, { once: true });

    return cleanup;
  }, []);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el.volume = MAX_VOLUME;
      el.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  const label = playing ? ["Stop", "the", "Music"] : ["Play", "the", "Music"];

  return (
    <>
      <audio
        ref={audioRef}
        src={audioAsset.url}
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <style>{`
        @keyframes lk-pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(253,251,240,0.5); }
          70% { box-shadow: 0 0 0 14px rgba(253,251,240,0); }
          100% { box-shadow: 0 0 0 0 rgba(253,251,240,0); }
        }
        @keyframes lk-word-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .lk-audio-pill {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(253,251,240,0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 999px;
          padding: 6px 20px 6px 6px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          border: none;
          cursor: pointer;
          transition: opacity 0.7s ease;
        }
        .lk-audio-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #18442A;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .lk-audio-circle.is-playing {
          animation: lk-pulse-glow 2.5s ease-out infinite;
        }
        .lk-audio-text {
          font-family: "Cormorant Garamond", ui-serif, Georgia, serif;
          font-weight: 400;
          font-size: clamp(13px, 1.5vw, 16px);
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #18442A;
          display: inline-flex;
          gap: 0.35em;
          white-space: nowrap;
        }
        .lk-audio-text span {
          display: inline-block;
          opacity: 0;
          transform: translateY(8px);
          animation: lk-word-in 0.5s ease-out forwards;
        }
        @media (max-width: 768px) {
          .lk-audio-pill {
            bottom: 16px;
            left: 16px;
            gap: 8px;
            padding: 5px 14px 5px 5px;
          }
          .lk-audio-circle { width: 38px; height: 38px; }
          .lk-audio-text { font-size: 13px; }
        }
      `}</style>
      <button
        type="button"
        aria-label={playing ? "Stop the music" : "Play the music"}
        onClick={toggle}
        className="lk-audio-pill"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <span className={`lk-audio-circle ${playing ? "is-playing" : ""}`}>
          {playing ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#FDFBF0">
              <rect x="3" y="2" width="3.5" height="12" rx="0.5" />
              <rect x="9.5" y="2" width="3.5" height="12" rx="0.5" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#FDFBF0">
              <path d="M3.5 2.2v11.6c0 .5.55.8.98.54l9.3-5.8a.64.64 0 0 0 0-1.08L4.48 1.66A.64.64 0 0 0 3.5 2.2z" />
            </svg>
          )}
        </span>
        <span className="lk-audio-text" key={animKey}>
          {label.map((w, i) => (
            <span key={i} style={{ animationDelay: `${i * 120}ms` }}>{w}</span>
          ))}
        </span>
      </button>
    </>
  );
}
