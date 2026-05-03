"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

type StoreModalContextType = { openStoreModal: () => void };
const StoreModalContext = createContext<StoreModalContextType>({ openStoreModal: () => {} });

export function useStoreModal() {
  return useContext(StoreModalContext);
}

export function StoreModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <StoreModalContext.Provider value={{ openStoreModal: () => setOpen(true) }}>
      {children}
      <AnimatePresence>
        {open && <StoreComingSoonModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </StoreModalContext.Provider>
  );
}

function StoreComingSoonModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.88, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.88, y: 24, opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 280 }}
        className="relative bg-white rounded-[36px] px-10 py-12 max-w-[360px] w-full shadow-[0_48px_96px_rgba(0,0,0,0.28)] text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/6 flex items-center justify-center hover:bg-black/10 transition-colors"
          aria-label="Close"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M1 1l9 9M10 1L1 10" />
          </svg>
        </button>

        {/* BigBoy logo */}
        <div className="flex items-center justify-center mb-7">
          <div className="overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/big-boy-logo-dark.jpg"
              alt="BigBoy"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-display font-black text-ink text-[28px] leading-[1.1] mb-3">
          Launching Soon
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] text-muted leading-[1.6] mb-8 max-w-[260px] mx-auto">
          We're putting the finishing touches on the app. It'll be in your hands very soon.
        </p>

        {/* Store icons row */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-[#F5F5F7] rounded-2xl px-5 py-3">
            <FaApple size={18} className="text-ink" />
            <span className="text-[13px] font-bold text-ink">App Store</span>
          </div>
          <div className="flex items-center gap-2 bg-[#F5F5F7] rounded-2xl px-5 py-3">
            <FaGooglePlay size={15} className="text-ink" />
            <span className="text-[13px] font-bold text-ink">Play Store</span>
          </div>
        </div>

        {/* Pulsing status badge */}
        <div className="inline-flex items-center justify-center gap-2 text-[12px] font-bold text-[#27AE60] bg-[#E9F7EF] border border-[#27AE60]/20 rounded-full px-5 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27AE60] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27AE60]" />
          </span>
          In active development
        </div>
      </motion.div>
    </motion.div>
  );
}
