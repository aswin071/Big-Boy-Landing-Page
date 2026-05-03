"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import IPhoneMockup from "./IPhoneMockup";
import { motion } from "framer-motion";
import { useStoreModal } from "./StoreModal";

const TAGS = ["#Founders", "#Students", "#Busy parents", "#Remote teams"];

const CARDS = [
  { type: "icon", label: "Phone off by 10:30", icon: "🌙", color: "#FDE68A", x: -280, y: -80, rotate: -4 },
  { type: "image", src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300", x: -240, y: 80, rotate: 6 },
  { type: "icon", label: "Morning walk", icon: "🚶", color: "#FFEDD5", x: -140, y: -160, rotate: -2 },
  { type: "icon", label: "Clean workspace", icon: "🧹", color: "#FEE2E2", x: -150, y: 160, rotate: 4 },
  { type: "image", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300", x: 140, y: -140, rotate: 3 },
  { type: "icon", label: "Track water", icon: "💧", color: "#DBEAFE", x: 150, y: 150, rotate: -3 },
  { type: "icon", label: "Stretch for 5 minutes", icon: "🧘", color: "#EDE9FE", x: 260, y: -60, rotate: 5 },
  { type: "image", src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=300", x: 250, y: 120, rotate: -4 },
  { type: "icon", label: "Meditate", icon: "✨", color: "#F3E8FF", x: 0, y: 0, rotate: 2 },
  { type: "image", src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300", x: 0, y: 0, rotate: -3 },
];

function RoutineCard({ card }: { card: any }) {
  return (
    <div className="inline-block mx-3">
      {card.type === "icon" ? (
        <div 
          className="bg-white p-6 rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col items-center gap-4 min-w-[160px]"
        >
          <div 
            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>
          <span className="text-[13px] font-bold text-ink text-center">
            {card.label}
          </span>
        </div>
      ) : (
        <div 
          className="w-[160px] h-[200px] rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.1)] border-[4px] border-white"
        >
          <Image src={card.src} alt="Routine" width={160} height={200} className="object-cover h-full w-full" />
        </div>
      )}
    </div>
  );
}

export default function VisualRoutine() {
  const { openStoreModal } = useStoreModal();

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeUp>
            <h2 className="font-display font-black text-ink leading-[1.1] mb-6 max-w-[800px] mx-auto" style={{ fontSize: "clamp(32px, 4vw, 54px)" }}>
              Build steady daily habits with a layout that keeps your mornings, evenings, and focus simple to follow.
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p className="text-[14px] text-muted font-medium mb-5">
              Used by people to improve routines.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {TAGS.map((t) => (
                <span key={t} className="px-4 py-1.5 bg-[#F5F5F7] border border-border rounded-full text-[12px] font-semibold text-muted">
                  {t}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* The Central Visual with Marquee */}
        <div className="relative flex justify-center items-center min-h-[650px] mb-16 overflow-hidden">
          {/* Marquee Row 1 (Top) - Moves Left */}
          <div className="absolute top-[15%] left-0 w-full flex pointer-events-none z-0">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 whitespace-nowrap"
            >
              {[...CARDS, ...CARDS, ...CARDS].map((c, i) => (
                <RoutineCard key={i} card={c} />
              ))}
            </motion.div>
          </div>

          {/* Marquee Row 2 (Bottom) - Moves Right */}
          <div className="absolute bottom-[15%] left-0 w-full flex pointer-events-none z-0">
            <motion.div 
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 whitespace-nowrap"
            >
              {[...CARDS, ...CARDS, ...CARDS].map((c, i) => (
                <RoutineCard key={i} card={c} />
              ))}
            </motion.div>
          </div>

          {/* Edge Fades for Marquee */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-[5]" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-[5]" />

          {/* Central iPhone Image */}
          <div className="relative z-10 w-[300px] h-[600px] lg:w-[340px] lg:h-[680px]">
            <Image 
              src="/images/mobile-routine.avif" 
              alt="Mobile Routine App" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Footer Rating and Text */}
        <div className="text-center max-w-[600px] mx-auto">
          <FadeUp delay={0.4}>
            <p className="text-[16px] text-muted leading-[1.6] mb-10">
              Stay consistent with a system that fits into real life. Simple cards, clear routines, and gentle nudges help you build progress that lasts.
            </p>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={openStoreModal} className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-[14px] flex items-center gap-2.5 shadow-xl hover:bg-black/80 transition-all">
                <AppleIcon />
                Download for iPhone
              </button>
              <button onClick={openStoreModal} className="bg-[#F5F5F7] text-ink px-8 py-3.5 rounded-full font-bold text-[14px] border border-border flex items-center gap-2.5 hover:bg-black/5 transition-all">
                <PlayIcon />
                Get it on Android
              </button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.3.17.64.24.98.2l12.64-12.64L12.82 7.4 3.18 23.76zM20.44 10.72l-2.78-1.6-3.27 3.27 3.27 3.27 2.82-1.62c.8-.46.8-1.86-.04-2.32zM2.01 1.33C1.9 1.6 1.83 1.9 1.83 2.24v19.52c0 .34.07.64.18.9l.09.08 10.94-10.95v-.25L2.1 1.25l-.09.08zM12.82 16.6l3.98 3.98-12.64 7.28c-.37.22-.78.27-1.16.16l9.82-11.42z" />
    </svg>
  );
}
