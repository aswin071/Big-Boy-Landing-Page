"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { motion } from "framer-motion";
import { useStoreModal } from "./StoreModal";

export default function FinalCTA() {
  const { openStoreModal } = useStoreModal();

  return (
    <section className="relative py-32 overflow-hidden bg-white">
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
                Build better habits with less effort
              </h2>
              <p className="text-[18px] text-muted leading-relaxed mb-12 max-w-[440px]">
                Track what matters, stay organized, and improve at your own pace.
              </p>
              
              <div className="flex flex-col gap-4">
                <button onClick={openStoreModal} className="flex items-center justify-center gap-3 bg-black text-white px-10 py-4 rounded-full font-bold text-[15px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-black/80 transition-all w-full sm:w-fit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download for iPhone
                </button>
                <button onClick={openStoreModal} className="flex items-center justify-center gap-3 bg-[#E5E5E5] text-ink px-10 py-4 rounded-full font-bold text-[15px] hover:bg-[#D5D5D5] transition-all w-full sm:w-fit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414C17.0602 15.3414 16.691 15.7107 16.691 16.1735C16.691 16.6362 17.0602 17.0055 17.523 17.0055C17.9857 17.0055 18.355 16.6362 18.355 16.1735C18.355 15.7107 17.9857 15.3414 17.523 15.3414ZM6.47702 15.3414C6.01427 15.3414 5.645 15.7107 5.645 16.1735C5.645 16.6362 6.01427 17.0055 6.47702 17.0055C6.93976 17.0055 7.30904 16.6362 7.30904 16.1735C7.30904 15.7107 6.93976 15.3414 6.47702 15.3414ZM17.8559 11.1913L19.2201 8.82813C19.331 8.63613 19.2654 8.39088 19.0734 8.27988C18.8814 8.16888 18.6361 8.23463 18.5251 8.42663L17.1354 10.8335C15.5891 10.1268 13.8569 9.7285 12 9.7285C10.1431 9.7285 8.41088 10.1268 6.86463 10.8335L5.47488 8.42663C5.36388 8.23463 5.11863 8.16888 4.92663 8.27988C4.73463 8.39088 4.669 8.63613 4.77988 8.82813L6.14413 11.1913C3.34413 12.7118 1.45 15.6178 1.45 18.9664H22.55C22.55 15.6178 20.6559 12.7118 17.8559 11.1913Z" />
                  </svg>
                  Get it on Android
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
