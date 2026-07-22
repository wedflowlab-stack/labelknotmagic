import { GALLERY_POOL } from "@/lib/labelknot-images";
import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--milk)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 md:mb-24 text-center">
          <p
            className="eyebrow font-display"
            style={{ color: "var(--everest)", fontSize: "16px" }}
          >
            our philosophy
          </p>
          <p
            className="font-display italic mt-3"
            style={{ color: "var(--everest)", fontSize: "clamp(16px, 1.8vw, 22px)" }}
          >
            don't skip what's coming if you want the best from Four Fold
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Large offset image — left */}
          <div className="col-span-12 md:col-span-5 md:row-span-2">
            <figure>
              <VideoPlayer />
              <figcaption
                className="cover-line font-display mt-3"
                style={{ color: "var(--everest)" }}
              >
                Pl. 01 — The minute before she walks
              </figcaption>
            </figure>
          </div>

          {/* Copy block — right top */}
          <div className="col-span-12 md:col-span-7 md:pt-12 md:px-4">
            <h2
              className="editorial-headline text-4xl md:text-6xl lg:text-7xl tracking-widest uppercase"
              style={{ color: "var(--everest)", lineHeight: 1.06, textAlign: "center" }}
            >
              After the last dance,
              <br />
              <em className="font-display italic normal-case tracking-normal">what remains?</em>
            </h2>

            <div className="mt-10 max-w-xl mx-auto">
              {/* Opening — large italic */}
              <p
                className="font-display italic"
                style={{
                  fontSize: "clamp(23px, 2.4vw, 31px)",
                  color: "var(--everest)",
                  lineHeight: 1.35,
                  textAlign: "center",
                }}
              >
                The venue will host another wedding next weekend. The flowers will be gone by
                morning. The dress, folded away. The cake, a photograph on someone's phone.
              </p>

              {/* Body 1 */}
              <p
                className="font-display mt-8"
                style={{
                  fontSize: "20px",
                  color: "var(--everest)",
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                But there will be a moment — sometime in the years ahead — when you sit with the
                person you married and you reach for that day. Not the highlight reel.
              </p>

              {/* Emphasis line — stands alone */}
              <p
                className="font-display italic"
                style={{
                  fontSize: "clamp(25px, 2.6vw, 33px)",
                  color: "var(--everest)",
                  lineHeight: 1.15,
                  margin: "28px 0",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                The real version.
              </p>

              {/* Body 2 */}
              <p
                className="font-display"
                style={{
                  fontSize: "20px",
                  color: "var(--everest)",
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                The way he looked at you before you walked in. Your mother's face when she first
                saw you ready. The cousin who flew across the world, finally in the same room. The
                kids on the dance floor who didn't care about anything except that moment. Your
                grandmother, quietly watching everything, holding it all in.
              </p>
            </div>
          </div>

          {/* Square — right middle */}
          <div className="col-span-6 md:col-span-4 md:col-start-6 md:mt-0 self-start">
            <figure>
              <img
                src={GALLERY_POOL[5]}
                alt="A held breath, captured"
                className="w-full aspect-square object-cover"
              />
              <figcaption
                className="cover-line font-display mt-3"
                style={{ color: "var(--everest)" }}
              >
                Pl. 02 — A held breath
              </figcaption>
            </figure>
          </div>

          {/* Portrait — right end */}
          <div className="col-span-6 md:col-span-3 md:mt-0 self-start">
            <figure>
              <img
                src={GALLERY_POOL[6]}
                alt="Light, draped"
                className="w-full aspect-[3/4] object-cover"
              />
              <figcaption
                className="cover-line font-display mt-3"
                style={{ color: "var(--everest)" }}
              >
                Pl. 03 — Light, draped
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Urgency seed block */}
        <div className="mt-10 md:mt-14 mx-auto max-w-xl">
          {/* Top rule — sand */}
          <div
            className="rule-thin mb-10 mx-auto"
            style={{ borderColor: "var(--sand)", width: "40px" }}
          />

          {/* Three-line punch */}
          <div style={{ margin: "0 0 32px 0" }}>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(25px, 2.6vw, 35px)",
                color: "var(--everest)",
                lineHeight: 1.15,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              These moments don't repeat.
            </p>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(25px, 2.6vw, 35px)",
                color: "var(--everest)",
                lineHeight: 1.15,
                margin: "8px 0",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              They don't wait.
            </p>
            <p
              className="font-display"
              style={{
                fontSize: "clamp(25px, 2.6vw, 35px)",
                color: "var(--everest)",
                lineHeight: 1.15,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              And most of them happen when nobody is looking.
            </p>
          </div>

          {/* Bottom rule — sand */}
          <div
            className="rule-thin mb-8 mt-12 mx-auto"
            style={{ borderColor: "var(--sand)", width: "40px" }}
          />

          {/* Body */}
          <p
            className="font-display"
            style={{
              fontSize: "20px",
              color: "var(--everest)",
              lineHeight: 1.7,
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            We are not just here to document your wedding. We are here so that twenty years from
            now, when your daughter asks what it felt like —
          </p>

          {/* Closing italic */}
          <p
            className="font-display italic"
            style={{
              fontSize: "clamp(20px, 2vw, 27px)",
              color: "var(--everest)",
              lineHeight: 1.4,
              marginBottom: "40px",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            So that when you reach for that feeling — every feeling is still there, unchanged,
            waiting for you.
          </p>

          {/* Final sign-off */}
          <p
            className="font-display uppercase"
            style={{
              fontSize: "16px",
              color: "var(--everest)",
              letterSpacing: "0.18em",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            What remains after everything else fades — is what we create.
          </p>
        </div>
      </div>
    </section>
  );
}

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showVolume, setShowVolume] = useState(false);
  const lastUpdateRef = useRef(0);
  const inactivityTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const bumpActivity = () => {
    setShowBar(true);
    if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
    if (isPlaying) {
      inactivityTimeoutRef.current = setTimeout(() => {
        setShowBar(false);
      }, 2500);
    }
  };

  useEffect(() => {
    return () => {
      if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    bumpActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    const now = Date.now();
    if (now - lastUpdateRef.current < 250) return;
    lastUpdateRef.current = now;
    if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration || 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (videoRef.current) {
      videoRef.current.volume = v;
      if (v === 0 && !muted) {
        videoRef.current.muted = true;
        setMuted(true);
      } else if (v > 0 && muted) {
        videoRef.current.muted = false;
        setMuted(false);
      }
    }
  };

  const formatTime = (t: number) => {
    if (!isFinite(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className="video-player relative w-full overflow-hidden"
      style={{ aspectRatio: "16 / 9" }}
      onMouseMove={bumpActivity}
      onMouseEnter={bumpActivity}
      onMouseLeave={() => {
        if (isPlaying) setShowBar(false);
      }}
      onTouchStart={bumpActivity}
    >
      <style>{`
        .video-player input[type="range"].vp-range {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          width: 100%;
          height: 3px;
          margin: 0;
          padding: 0;
          cursor: pointer;
        }
        .video-player input[type="range"].vp-range::-webkit-slider-runnable-track {
          height: 3px;
          border-radius: 2px;
          background: transparent;
        }
        .video-player input[type="range"].vp-range::-moz-range-track {
          height: 3px;
          border-radius: 2px;
          background: transparent;
        }
        .video-player input[type="range"].vp-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ffffff;
          border: none;
          margin-top: -3.5px;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .video-player input[type="range"].vp-range::-moz-range-thumb {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ffffff;
          border: none;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .video-player .vp-progress-wrap:hover input[type="range"].vp-range::-webkit-slider-thumb,
        .video-player .vp-volume-wrap:hover input[type="range"].vp-range::-webkit-slider-thumb {
          opacity: 1;
        }
        .video-player .vp-progress-wrap:hover input[type="range"].vp-range::-moz-range-thumb,
        .video-player .vp-volume-wrap:hover input[type="range"].vp-range::-moz-range-thumb {
          opacity: 1;
        }
      `}</style>
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/cbi5mcab/video/upload/v1784690929/FOURFOLD_cbmpnp.mp4"
        loop
        playsInline
        controls={false}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className="w-full h-full object-cover"
      />

      {/* Glass control bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          opacity: showBar ? 1 : 0,
          pointerEvents: showBar ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          style={{
            width: "28px",
            height: "28px",
            background: "transparent",
            border: "none",
            padding: 0,
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          {isPlaying ? (
            <Pause size={14} color="#ffffff" fill="#ffffff" />
          ) : (
            <Play size={14} color="#ffffff" fill="#ffffff" />
          )}
        </button>

        {/* Progress */}
        <div
          className="vp-progress-wrap"
          style={{
            flex: 1,
            position: "relative",
            height: "3px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,0.25)",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${progressPct}%`,
              background: "rgba(255,255,255,0.9)",
              borderRadius: "2px",
            }}
          />
          <input
            type="range"
            className="vp-range"
            min={0}
            max={duration || 0}
            step={0.01}
            value={currentTime}
            onChange={handleSeek}
            style={{ position: "absolute", inset: 0, height: "3px" }}
          />
        </div>

        {/* Time */}
        <div
          className="font-display"
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "1px",
            flexShrink: 0,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* Volume */}
        <div
          className="vp-volume-wrap"
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              width: "18px",
              height: "18px",
            }}
          >
            {muted ? (
              <VolumeX size={14} color="#ffffff" />
            ) : (
              <Volume2 size={14} color="#ffffff" />
            )}
          </button>
          <div
            style={{
              width: "60px",
              height: "3px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              opacity: showVolume ? 1 : 0,
              transition: "opacity 0.3s ease",
              pointerEvents: showVolume ? "auto" : "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(255,255,255,0.25)",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${(muted ? 0 : volume) * 100}%`,
                background: "rgba(255,255,255,0.9)",
                borderRadius: "2px",
              }}
            />
            <input
              type="range"
              className="vp-range"
              min={0}
              max={1}
              step={0.01}
              value={muted ? 0 : volume}
              onChange={handleVolume}
              style={{ position: "absolute", inset: 0, height: "3px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
