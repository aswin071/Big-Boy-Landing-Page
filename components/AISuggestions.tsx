"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Morning walk",
    desc: "Suggests the best time to remind you.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    color: "bg-blue-600",
    glow: "shadow-[0_0_20px_rgba(37,99,235,0.4)]"
  },
  {
    title: "Habit Priorities",
    desc: "Reorders habits on busy days.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    color: "bg-red-600",
    glow: "shadow-[0_0_20px_rgba(220,38,38,0.4)]"
  },
  {
    title: "Routine Insights",
    desc: "Highlights what's working and what's slipping.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    color: "bg-purple-600",
    glow: "shadow-[0_0_20px_rgba(147,51,234,0.4)]"
  },
  {
    title: "Recovery Suggestion",
    desc: "Helps you recover when you miss a day.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
    color: "bg-green-600",
    glow: "shadow-[0_0_20px_rgba(22,163,74,0.4)]"
  }
];

export default function AISuggestions() {
  return (
    <section id="ai-suggestions" className="py-24 bg-[#F5F5F7]/50">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <div>
            <FadeUp>
              <div className="inline-block px-4 py-1.5 bg-white border border-border rounded-full text-[12px] font-bold text-ink/60 mb-6 shadow-sm">
                Smarter habits, less thinking
              </div>
              <h2 className="font-display font-black text-ink leading-[1.05] tracking-tight mb-8" style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}>
                AI suggestions that adjust to your day
              </h2>
              <p className="text-[18px] text-muted leading-relaxed mb-10 max-w-[500px]">
                BigBoy learns your patterns and offers small, useful suggestions that help you stay consistent without guessing what to do next.
              </p>
              <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-[15px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-black/80 transition-all">
                See how suggestions work
              </button>
            </FadeUp>
          </div>

          {/* Right Visual */}
          <FadeUp delay={0.2}>
            <div className="relative aspect-[1.3/1] rounded-[48px] overflow-hidden shadow-2xl group">
              {/* Background Cloud Image */}
              <Image 
                src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1200" 
                alt="Cloud background" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/10" />

              <div className="absolute inset-0 flex justify-center items-center">
                {/* Mock Phone - Tilted and Layered */}
                <motion.div 
                  initial={{ rotate: 25, x: 80, y: 40 }}
                  whileInView={{ rotate: 20, x: 100, y: 20 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="relative w-[300px] h-[600px] bg-black rounded-[48px] border-[10px] border-[#1A1A1A] shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden z-10"
                >
                  <Image src="/images/mobile-routine.avif" alt="App UI" fill className="object-cover" />
                </motion.div>

                {/* Floating Cards Stack - Staggered on the Left */}
                <div className="absolute left-[8%] top-[15%] flex flex-col gap-4 z-20">
                  {/* Card 1: Dark */}
                  <motion.div 
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="bg-[#141414] p-6 rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5 w-[260px]"
                  >
                    <div className="text-[14px] text-white font-bold mb-4 tracking-tight">Move drink water to 11:00 pm</div>
                    <button className="bg-[#1E5128] text-[#4E944F] px-5 py-2 rounded-xl text-[12px] font-black tracking-wide">
                      Apply
                    </button>
                  </motion.div>

                  {/* Card 2: Light */}
                  <motion.div 
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="bg-white/95 backdrop-blur-md p-6 rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-black/5 w-[260px]"
                  >
                    <div className="text-[14px] text-ink font-bold mb-4 tracking-tight">Pair with &quot;phone off&quot; habit</div>
                    <button className="bg-[#E5E5E5] text-ink/60 px-5 py-2 rounded-xl text-[12px] font-black tracking-wide">
                      Try this week
                    </button>
                  </motion.div>

                  {/* Card 3: Light */}
                  <motion.div 
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="bg-white/95 backdrop-blur-md p-6 rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-black/5 w-[260px]"
                  >
                    <div className="text-[14px] text-ink font-bold mb-4 tracking-tight">Shorten reading to 6 pages</div>
                    <button className="bg-[#E5E5E5] text-ink/60 px-5 py-2 rounded-xl text-[12px] font-black tracking-wide">
                      Try this week
                    </button>
                  </motion.div>
                </div>

                {/* Robot AI Icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1.1, type: "spring" }}
                  className="absolute bottom-12 left-[25%] w-14 h-14 bg-gradient-to-br from-[#9333EA] to-[#7E22CE] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(147,51,234,0.4)] z-30"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M9 11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9m5 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Features Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <FadeUp key={i} delay={0.4 + i * 0.1}>
              <div className="bg-white p-8 rounded-[32px] border border-border shadow-sm hover:shadow-md transition-shadow h-full">
                <div className={`w-12 h-12 rounded-full ${f.color} flex items-center justify-center mb-8 ${f.glow}`}>
                  {f.icon}
                </div>
                <h4 className="text-[20px] font-black text-ink mb-3">{f.title}</h4>
                <p className="text-[14px] text-muted leading-relaxed">{f.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
