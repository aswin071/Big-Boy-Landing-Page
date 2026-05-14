"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { motion } from "framer-motion";
import { useStoreModal } from "./StoreModal";

export default function FinalCTA() {
  const { openStoreModal } = useStoreModal();

  return (
    <section id="waitlist" className="relative py-32 overflow-hidden bg-white">
      {/* Background Sky & Clouds */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1200" 
          alt="Sky background" 
          fill 
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="text-left">
            <FadeUp>
              <h2 className="font-display font-black text-ink leading-[1.05] tracking-tight mb-8" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
                Join the waitlist
              </h2>
              <p className="text-[18px] text-muted leading-relaxed mb-12 max-w-[440px]">
                Get 1 year unlimited access worth $220
              </p>
              
              <div className="flex flex-col gap-4">
                <button onClick={openStoreModal} className="flex items-center justify-center gap-3 bg-black text-white px-10 py-4 rounded-full font-bold text-[15px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-black/80 transition-all w-full sm:w-fit">
                  Join Waitlist
                </button>
              </div>
            </FadeUp>
          </div>

          {/* Center Phone */}
          <div className="relative flex justify-center">
            <FadeUp delay={0.2}>
              {/* <motion.div 
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                // className="relative w-[300px] h-[600px] bg-black rounded-[48px] border-[10px] border-black shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden"
              > */}
                <Image 
                  src="/images/app-screen5.avif" 
                  alt="App Interface" 
                  width={300}
                  height={600} 
                  className="object-cover"
                />
              {/* </motion.div> */}
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
