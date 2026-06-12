import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import audioAsset from "@/assets/under-your-spell.mp3.asset.json";

const MAX_VOLUME = 0.4;

export function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Init mute from sessionStorage
  useEffect(() => {
    const stored = sessionStorage.getItem("ambient-muted");
    if (stored === "1") setMuted(true);
    const t = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(t);
  }, []);

  // Sync mute state to element + storage
  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
    sessionStorage.setItem("ambient-muted", muted ? "1" : "0");
  }, [muted]);

  // Start on first interaction
  useEffect(() => {
    const startAudio = () => {
      const el = audioRef.current;
      if (el && el.paused) {
        el.volume = 0;
        el.play()
          .then(() => {
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

  return (
    <>
      <audio
        ref={audioRef}
        src={audioAsset.url}
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <button
        type="button"
        aria-label={muted ? "Unmute background music" : "Mute background music"}
        onClick={() => setMuted((m) => !m)}
        className="fixed top-4 right-4 z-50 h-10 w-10 rounded-full flex items-center justify-center backdrop-blur-md transition-opacity duration-700"
        style={{
          background: "rgba(0,0,0,0.25)",
          color: "#FDFBF0",
          opacity: visible ? 1 : 0,
        }}
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </>
  );
}
