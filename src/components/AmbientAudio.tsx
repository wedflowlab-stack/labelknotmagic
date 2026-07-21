import { useEffect, useRef, useState } from "react";
import audioAsset from "@/assets/under-your-spell.mp3.asset.json";

const MAX_VOLUME = 0.4;
const SEQUENCE = [5000, 10000, 60000]; // show durations in ms
const GAP = 2000; // 2s hidden gap between each appearance

export function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [animKey, setAnimKey] = useState(0);
  const sequenceTimersRef = useRef<{
    showTimer: ReturnType<typeof setTimeout> | null;
    hideTimer: ReturnType<typeof setTimeout> | null;
    sequenceIndex: number;
  }>({ showTimer: null, hideTimer: null, sequenceIndex: 0 });

  // Sync state -> re-trigger reveal animation
  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [playing]);

  // Auto-hide repeating sequence: show 5s → hide 2s → show 10s → hide 2s → show 60s → hide 2s → repeat
  // Starts visible so the user can manually toggle the music on.
  useEffect(() => {
    const timers = sequenceTimersRef.current;

    const clearSequenceTimers = () => {
      if (timers.showTimer) clearTimeout(timers.showTimer);
      if (timers.hideTimer) clearTimeout(timers.hideTimer);
    };

    const runSequence = () => {
      setVisible(true);
      timers.hideTimer = setTimeout(() => {
        setVisible(false);
        timers.sequenceIndex = (timers.sequenceIndex + 1) % SEQUENCE.length;
        timers.showTimer = setTimeout(runSequence, GAP);
      }, SEQUENCE[timers.sequenceIndex]);
    };

    clearSequenceTimers();
    timers.sequenceIndex = 0;
    runSequence();

    return clearSequenceTimers;
  }, []);

  const startSequenceFromBeginning = () => {
    const timers = sequenceTimersRef.current;
    if (timers.showTimer) clearTimeout(timers.showTimer);
    if (timers.hideTimer) clearTimeout(timers.hideTimer);
    timers.sequenceIndex = 0;

    const runSequence = () => {
      setVisible(true);
      timers.hideTimer = setTimeout(() => {
        setVisible(false);
        timers.sequenceIndex = (timers.sequenceIndex + 1) % SEQUENCE.length;
        timers.showTimer = setTimeout(runSequence, GAP);
      }, SEQUENCE[timers.sequenceIndex]);
    };

    runSequence();
  };

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
    startSequenceFromBeginning();
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
          gap: 8px;
          background: rgba(253,251,240,0.0);
          border-radius: 999px;
          padding: 4px 14px 4px 4px;
          border: none;
          cursor: pointer;
        }
        .lk-audio-circle {
          width: 30px;
          height: 30px;
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
          font-size: clamp(9px, 1.1vw, 11px);
          letter-spacing: 1.5px;
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
            padding: 3px 10px 3px 3px;
          }
          .lk-audio-circle { width: 26px; height: 26px; }
          .lk-audio-text { font-size: 9px; }
        }
      `}</style>
      <button
        type="button"
        aria-label={playing ? "Stop the music" : "Play the music"}
        onClick={toggle}
        className="lk-audio-pill"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <span className={`lk-audio-circle ${playing ? "is-playing" : ""}`}>
          {playing ? (
            <svg width="11" height="11" viewBox="0 0 16 16" fill="#FDFBF0">
              <rect x="3" y="2" width="3.5" height="12" rx="0.5" />
              <rect x="9.5" y="2" width="3.5" height="12" rx="0.5" />
            </svg>
          ) : (
            <svg width="11" height="11" viewBox="0 0 16 16" fill="#FDFBF0">
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
