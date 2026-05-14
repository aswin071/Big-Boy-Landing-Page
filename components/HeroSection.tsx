"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [revealProgress, setRevealProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const start = 20;
      const end = 300;
      const progress = (window.scrollY - start) / (end - start);
      const clamped = Math.max(0, Math.min(1, progress));
      setRevealProgress(clamped);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[750px] pb-20">
      {/* Layer 0a: Solid dark warm base — fills the area outside the photo */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #7c2c0c 0%, #5b1a08 32%, #2f0d0a 66%, #140507 100%)",
          maskImage: "linear-gradient(to top, transparent 0%, black 15%)",
          WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%)",
        }}
      />
      {/* Layer 0b: Background photo — natural size, occupies right ~70%, smaller proportion */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/hero-img.avif"
          alt="Hero background"
          fill
          priority
          quality={92}
          sizes="100vw"
          draggable={false}
          style={{
            objectFit: "cover",
            objectPosition: "20% 60%",
            filter: "brightness(0.78) contrast(1.04) saturate(0.7) blur(1.4px)",
            transform: "scale(1.15)",
            transformOrigin: "center center",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.34) 18%, rgba(0,0,0,0.84) 40%, #000 63%), linear-gradient(to top, transparent 0%, black 20%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.34) 18%, rgba(0,0,0,0.84) 40%, #000 63%), linear-gradient(to top, transparent 0%, black 20%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>

      {/* Layer 1: Strong warm orange wash on the left */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(174,66,19,0.72) 0%, rgba(140,45,12,0.5) 28%, rgba(80,22,10,0.22) 50%, rgba(0,0,0,0.05) 72%, rgba(0,0,0,0.28) 100%)",
        }}
      />
      {/* Layer 1b: Warm radial glow centered on the upper-left */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 58% 76% at 22% 50%, rgba(201,84,26,0.48) 0%, rgba(139,37,0,0) 64%)",
        }}
      />
      {/* Layer 1c: Light top + bottom shading only */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.08) 24%, rgba(0,0,0,0.12) 72%, rgba(0,0,0,0.52) 100%)",
        }}
      />

      {/* Layer 4: Hero text */}
      <div
        className="relative z-[4] text-center px-6 max-w-[1100px] mx-auto"
        style={{ paddingTop: "12vh" }}
      >
        <h1
          className="font-display text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.5)] mt-16 md:mt-24"
          style={{
            fontSize: "clamp(44px, 5.8vw, 84px)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
          }}
        >
          Better Performance.
          <br />
          Better Intimacy.
        </h1>

        <p
          className="text-white/80 max-w-[600px] mx-auto mt-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
          style={{ fontSize: "clamp(16px, 1.2vw, 18px)", lineHeight: 1.6 }}
        >
          Big boy app provides Structured programs from world-renowned sexual wellness coaches to improve your sexual performance.
          <br />
          Science-backed routines. Start seeing changes in 9 days.
        </p>

        <div className="flex justify-center mt-8">
          <JoinWaitlistButton />
        </div>
      </div>

      {/* Layer 3: Three floating glassmorphism cards */}
      <div
        className="relative z-[3] flex items-start justify-center gap-3 sm:gap-5 lg:gap-7 mt-12"
        style={{
          marginBottom: "-42px",
          transform: `translateY(${120 - revealProgress * 120}px) scale(${0.94 + revealProgress * 0.06})`,
          opacity: 0.3 + revealProgress * 0.7,
          transition: "transform 120ms linear, opacity 120ms linear",
        }}
      >
        {/* LEFT card */}
        <div
          className="hidden sm:flex flex-col items-center justify-center gap-3 w-[230px] h-[150px] lg:w-[255px] lg:h-[165px] p-5 lg:p-6 mt-16"
          style={{
            background: "rgba(22,18,16,0.38)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "36px",
            transform: `translateY(${revealProgress * 45}px)`,
            transition: "transform 140ms linear",
            boxShadow:
              "0 0 0 6px rgba(255,255,255,0.06), 0 0 32px rgba(255,255,255,0.07), 0 40px 80px rgba(0,0,0,0.55), 0 12px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_8px_24px_rgba(249,115,22,0.5)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </div>
          <div className="text-white text-[13px] font-semibold text-center leading-tight">
            7-day streak
            <br />
            unlocked
          </div>
        </div>

        {/* CENTER card — iPhone-style device */}
        <div
          className="relative w-[320px] lg:w-[360px] mt-16"
          style={{
            background: "linear-gradient(140deg, rgba(28,28,30,0.72) 0%, rgba(10,10,12,0.72) 100%)",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: "44px",
            padding: "10px",
            minHeight: "480px",
            boxShadow:
              "0 80px 160px rgba(0,0,0,0.75), 0 30px 60px rgba(0,0,0,0.55), inset 0 0 0 2px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Dynamic island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-10" />
          {/* Inner screen */}
          <div
            className="relative p-4 pt-6"
            style={{
              background: "rgba(20,16,14,0.36)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "36px",
            }}
          >
            {/* status bar */}
            <div className="flex justify-between items-center mb-4 px-1 mt-2">
              <span className="text-white text-[11px] font-semibold">Mon, 07:32</span>
              <div className="flex gap-1.5 items-center text-white/90">
                <SignalIcon />
                <WifiIcon />
                <BatteryIcon />
              </div>
            </div>

            {/* heading */}
            <div className="flex justify-between items-start mb-4 px-1">
              <div>
                <div className="text-white text-[19px] font-bold leading-tight">Today Task</div>
                <div className="text-white/55 text-[11px] mt-0.5">3 of 8 habits done</div>
              </div>
              <div className="bg-black/45 border border-white/10 rounded-full px-2.5 py-1 text-white text-[10px] font-semibold inline-flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-[2px]" />
                18 day streak
              </div>
            </div>

            {/* tasks */}
            <div className="flex flex-col gap-2">
              <TaskRow title="Morning walk" subtitle="At least 15 minutes" days="12 / 14 days" pct="85%" pctColor="bg-orange-400 text-black" done={false} />
              <TaskRow title="Drink 3 glasses of water" subtitle="Before 11:00 am" days="9 / 9 days" pct="100%" pctColor="bg-green-500 text-black" done />
              <TaskRow title="Read 10 pages" subtitle="Evening focus block" days="6 / 9 days" pct="67%" pctColor="bg-cyan-400 text-black" done={false} />
            </div>

            {/* footer */}
            <div className="mt-3 bg-black/30 border border-white/5 rounded-xl p-3 flex justify-between items-center">
              <div>
                <div className="text-white/55 text-[10px]">This week</div>
                <div className="text-white text-[13px] font-bold">21 check-ins</div>
              </div>
              <div className="flex items-end gap-0.5 h-6">
                <div className="w-1 h-2 bg-white/20 rounded-sm" />
                <div className="w-1 h-3 bg-white/20 rounded-sm" />
                <div className="w-1 h-4 bg-green-500 rounded-sm" />
                <div className="w-1 h-5 bg-green-500 rounded-sm" />
                <div className="w-1 h-6 bg-green-500 rounded-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT card */}
        <div
          className="hidden sm:flex flex-col items-center justify-center gap-3 w-[230px] h-[150px] lg:w-[255px] lg:h-[165px] p-5 lg:p-6 mt-36"
          style={{
            background: "rgba(22,18,16,0.38)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "36px",
            transform: `translateY(${-revealProgress * 45}px)`,
            transition: "transform 140ms linear",
            boxShadow:
              "0 0 0 6px rgba(255,255,255,0.06), 0 0 32px rgba(255,255,255,0.07), 0 40px 80px rgba(0,0,0,0.55), 0 12px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          <div className="text-white text-[13px] font-semibold text-center leading-tight">
            Today&rsquo;s goal:
            <br />
            Complete 3 habits
          </div>
          <div className="flex justify-center gap-2.5">
            <CircleIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
              </svg>
            </CircleIcon>
            <CircleIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                <path d="M19.36 2.72L20.78 4.14L15.06 9.85C16.13 11.39 16.28 13.24 15.38 14.44L9.06 8.12C10.26 7.22 12.11 7.37 13.65 8.44L19.36 2.72M5.93 17.57C3.92 15.56 2.69 13.16 2.35 10.92L7.23 8.83L14.67 16.27L12.58 21.15C10.34 20.81 7.94 19.58 5.93 17.57Z" />
              </svg>
            </CircleIcon>
            <CircleIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12" y2="18" />
              </svg>
            </CircleIcon>
          </div>
          <div className="flex justify-center gap-3 w-full pt-1">
            <span className="text-white text-[11px] font-semibold">65%</span>
            <span className="text-white text-[11px] font-semibold">87%</span>
            <span className="text-white text-[11px] font-semibold">94%</span>
          </div>
        </div>
      </div>

      {/* Layer 5: Bokeh background blobs that bleed into the white curve — matches the image */}
      {/* Left warm orange bokeh orb */}
      <div
        className="absolute z-[5] pointer-events-none"
        style={{
          bottom: "-60px",
          left: "-10%",
          width: "55%",
          height: "420px",
          background: "radial-gradient(ellipse at 40% 60%, rgba(200, 90, 20, 0.75) 0%, rgba(180, 70, 10, 0.45) 35%, transparent 70%)",
          filter: "blur(72px)",
        }}
      />
      {/* Right warm orange/brown bokeh orb */}
      <div
        className="absolute z-[5] pointer-events-none"
        style={{
          bottom: "-60px",
          right: "-10%",
          width: "55%",
          height: "420px",
          background: "radial-gradient(ellipse at 60% 60%, rgba(160, 55, 10, 0.75) 0%, rgba(140, 45, 5, 0.45) 35%, transparent 70%)",
          filter: "blur(72px)",
        }}
      />
      {/* Center dark gap between orbs — creates the depth in the image */}
      <div
        className="absolute z-[5] pointer-events-none"
        style={{
          bottom: "-40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "40%",
          height: "300px",
          background: "radial-gradient(ellipse at 50% 80%, rgba(10, 4, 2, 0.55) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />

      {/* Smoke wisps — float above the bokeh, below the SVG curve */}
      <div className="absolute z-[5] pointer-events-none" style={{ bottom: "0", left: 0, right: 0, height: "340px" }}>
        {/* Wide central smoke drift */}
        <div style={{
          position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
          width: "110%", height: "260px",
          background: "radial-gradient(ellipse at 50% 90%, rgba(255,245,235,0.55) 0%, rgba(230,180,140,0.28) 40%, transparent 72%)",
          filter: "blur(48px)",
        }} />
        {/* Left wisp */}
        <div style={{
          position: "absolute", bottom: "60px", left: "4%",
          width: "50%", height: "200px",
          background: "radial-gradient(ellipse at 30% 100%, rgba(255,240,220,0.58) 0%, rgba(200,120,60,0.25) 45%, transparent 72%)",
          filter: "blur(44px)",
          transform: "rotate(-6deg)",
        }} />
        {/* Right wisp */}
        <div style={{
          position: "absolute", bottom: "60px", right: "4%",
          width: "50%", height: "200px",
          background: "radial-gradient(ellipse at 70% 100%, rgba(255,240,220,0.58) 0%, rgba(200,120,60,0.25) 45%, transparent 72%)",
          filter: "blur(44px)",
          transform: "rotate(6deg)",
        }} />
        {/* Top depth wisp */}
        <div style={{
          position: "absolute", bottom: "160px", left: "25%",
          width: "50%", height: "120px",
          background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.32) 0%, transparent 65%)",
          filter: "blur(36px)",
        }} />
        {/* Dense base layer */}
        <div style={{
          position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)",
          width: "120%", height: "140px",
          background: "radial-gradient(ellipse at 50% 100%, rgba(255,250,245,0.65) 0%, rgba(240,200,160,0.35) 45%, transparent 70%)",
          filter: "blur(32px)",
        }} />
      </div>

      {/* Layer 5b: Clean SVG Curve at the bottom — sits above the bokeh blobs */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-[6] pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto translate-y-[1px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 320L1440 320L1440 64C1440 64 1162 256 720 256C278 256 0 64 0 64L0 320Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Layer 6: Soft white glow ABOVE the curve — blends the transition */}
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[480%] h-[400px] z-[10] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0) 70%)",
          filter: "blur(90px)",
        }}
      />
    </section>
  );
}

/* ── Sub-components ── */

function TaskRow({
  title,
  subtitle,
  days,
  pct,
  pctColor,
  done,
}: {
  title: string;
  subtitle: string;
  days: string;
  pct: string;
  pctColor: string;
  done: boolean;
}) {
  return (
    <div className="bg-black/30 rounded-xl p-2.5 flex items-start gap-2.5">
      <div
        className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center ${done ? "bg-green-500" : "border-2 border-white/30"
          }`}
      >
        {done && (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-white text-[12px] font-semibold leading-tight">{title}</div>
        <div className="text-white/50 text-[10px] mt-0.5">{subtitle}</div>
      </div>
      <div className="flex flex-col items-end gap-1 flex-shrink-0">
        <div className="text-white/55 text-[10px]">{days}</div>
        <div className={`text-[10px] font-bold rounded-full px-2 py-0.5 ${pctColor}`}>
          {pct}
        </div>
      </div>
    </div>
  );
}

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md">
      {children}
    </div>
  );
}

function JoinWaitlistButton() {
  const [hovered, setHovered] = useState(false);

  function scrollToWaitlist() {
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <motion.button
      onClick={scrollToWaitlist}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 0 32px rgba(255,255,255,0.45), 0 12px 40px rgba(0,0,0,0.28)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white text-black rounded-full px-10 py-4 font-semibold text-[15px] inline-flex items-center gap-2 overflow-hidden cursor-pointer"
    >
      <span className="relative overflow-hidden h-[1.3em] flex items-center">
        <motion.span
          className="inline-block"
          animate={{ y: hovered ? "-110%" : "0%" }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          Join Waitlist
        </motion.span>
        <motion.span
          className="absolute inset-0 inline-flex items-center justify-center"
          animate={{ y: hovered ? "0%" : "110%" }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          Join Waitlist
        </motion.span>
      </span>
      <motion.svg
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ duration: 0.22 }}
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </motion.svg>
    </motion.button>
  );
}

function SignalIcon() {
  return (
    <svg width="12" height="10" viewBox="0 0 16 12" fill="white">
      <rect x="0" y="8" width="2" height="4" rx="0.5" />
      <rect x="4" y="6" width="2" height="6" rx="0.5" />
      <rect x="8" y="3" width="2" height="9" rx="0.5" />
      <rect x="12" y="0" width="2" height="12" rx="0.5" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="12" height="10" viewBox="0 0 14 10" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round">
      <path d="M1 4 Q7 -1 13 4" />
      <path d="M3 6 Q7 2 11 6" />
      <path d="M5 8 Q7 6 9 8" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <div className="relative w-5 h-2.5 rounded-[2px] border border-white/80 ml-0.5">
      <div className="absolute inset-0.5 bg-white rounded-[1px]" />
      <div className="absolute -right-[2px] top-[2px] w-[1.5px] h-[3px] bg-white/80 rounded-r-sm" />
    </div>
  );
}