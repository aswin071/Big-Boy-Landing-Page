"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
    <section className="relative overflow-hidden min-h-[900px] pb-20">
      {/* Layer 0a: Solid dark warm base — fills the area outside the photo */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #7c2c0c 0%, #5b1a08 32%, #2f0d0a 66%, #140507 100%)",
        }}
      />
      {/* Layer 0b: Background photo — natural size, occupies right ~70%, smaller proportion */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/hero_section.png"
          alt="Hero background"
          fill
          priority
          quality={92}
          sizes="100vw"
          draggable={false}
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            filter: "brightness(0.78) contrast(1.04) saturate(0.7) blur(1.4px)",
            transform: "scale(1.5)",
            transformOrigin: "center center",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.34) 18%, rgba(0,0,0,0.84) 40%, #000 63%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.34) 18%, rgba(0,0,0,0.84) 40%, #000 63%)",
          }}
        />
      </div>

      {/* Layer 1: Strong warm orange wash on the left — left half tinted, right half clear so the face stays vivid */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(174,66,19,0.72) 0%, rgba(140,45,12,0.5) 28%, rgba(80,22,10,0.22) 50%, rgba(0,0,0,0.05) 72%, rgba(0,0,0,0.28) 100%)",
        }}
      />
      {/* Layer 1b: Warm radial glow centered on the upper-left — pushes the orange brighter near the headline */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 58% 76% at 22% 50%, rgba(201,84,26,0.48) 0%, rgba(139,37,0,0) 64%)",
        }}
      />
      {/* Layer 1c: Light top + bottom shading only — keeps the face fully visible */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.08) 24%, rgba(0,0,0,0.12) 72%, rgba(0,0,0,0.52) 100%)",
        }}
      />

      {/* Layer 2: Large white base with curved top edge */}
      {/* <div
        className="absolute z-[2] pointer-events-none"
        style={{
          bottom: "-250px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "245%",
          height: "420px",
          background:
            "radial-gradient(ellipse at 50% 18%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.96) 28%, rgba(255,255,255,0.9) 48%, rgba(255,255,255,1) 70%)",
          borderRadius: "50%",
          filter: "blur(2.5px)",
        }}
      /> */}
      <div
        className="absolute z-[2] pointer-events-none"
        style={{
          bottom: "-110px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "170%",
          height: "180px",
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.38) 45%, rgba(255,255,255,0) 78%)",
          borderRadius: "50%",
          filter: "blur(16px)",
        }}
      />


      {/* Layer 4: Hero text */}
      <div
        className="relative z-[4] text-center px-6 max-w-[1100px] mx-auto"
        style={{ paddingTop: "16vh" }}
      >
        <div className="inline-flex items-center gap-2 bg-black/55 backdrop-blur-md border border-white/10 rounded-full pl-1.5 pr-5 py-1.5 mb-7 mt-16 md:mt-24">
          <span className="bg-black text-white text-[12px] font-bold rounded-full px-3 py-1">
            New
          </span>
          <span className="text-[13px] text-white/85 font-medium">
            A calmer way to build habits
          </span>
        </div>

        <h1
          className="font-display text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          style={{
            fontSize: "clamp(40px, 5.5vw, 76px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
          }}
        >
          Build habits that
          <br />
          actually stick
        </h1>

        <p
          className="text-white/75 max-w-[440px] mx-auto mt-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
          style={{ fontSize: "clamp(14px, 1.1vw, 16px)", lineHeight: 1.55 }}
        >
          You see the right habits at the right time so your day never feels crowded.
        </p>

        <div className="flex gap-3 justify-center flex-wrap mt-8">
          <button className="bg-white text-black rounded-full px-8 py-4 font-semibold text-[15px] inline-flex items-center gap-2 shadow-[0_8px_28px_rgba(0,0,0,0.32)] transition hover:-translate-y-0.5">
            Start tracking for free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white rounded-full px-8 py-4 font-semibold text-[15px] border border-white/20 inline-flex items-center gap-2.5 transition hover:-translate-y-0.5 hover:bg-white/[0.18]">
            <span className="w-6 h-6 rounded-full border-2 border-white/85 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch demo
          </button>
        </div>
      </div>

      {/* Layer 3: Three floating glassmorphism cards — in flow, 48px below CTAs, overflow bottom */}
      <div
        className="relative z-[3] flex items-start justify-center gap-3 sm:gap-5 lg:gap-7 mt-12"
        style={{
          marginBottom: "-42px",
          transform: `translateY(${120 - revealProgress * 120}px) scale(${0.94 + revealProgress * 0.06})`,
          opacity: 0.3 + revealProgress * 0.7,
          transition: "transform 120ms linear, opacity 120ms linear",
        }}
      >
        {/* LEFT card — small, rotated -6deg */}
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

        {/* CENTER card — actual iPhone-style device with thick bezel */}
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
          {/* Dynamic island / notch */}
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

        {/* RIGHT card — small, rotated +6deg */}
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

      {/* Layer 3b: Single giant circle, only a small arc overlays the app screens */}
      <div
        className="absolute z-[5] pointer-events-none"
        style={{
          bottom: `${-530 + revealProgress * 16}px`,
          left: "43%",
          transform: `translateX(-50%) scale(${1 + revealProgress * 0.015})`,
          width: "320%",
          height: "780px",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.38) 28%, rgba(255,255,255,0.22) 46%, rgba(255,255,255,0.1) 62%, rgba(255,255,255,0.03) 76%, rgba(255,255,255,0) 88%)",
          borderRadius: "50%",
          filter: "blur(48px)",
          opacity: 0.75 + revealProgress * 0.18,
          transition: "transform 140ms linear, opacity 140ms linear, bottom 140ms linear",
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
