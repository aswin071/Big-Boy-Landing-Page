import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "Helvetica Neue", "sans-serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
      colors: {
        red: {
          DEFAULT: "#C0392B",
          dark: "#96281B",
          light: "#E8554A",
        },
        gold: {
          DEFAULT: "#C8A84B",
          light: "#E4C97E",
          dark: "#9A7D2F",
        },
        cream: {
          DEFAULT: "#F1EFEB",
          warm: "#F4F2EC",
          subtle: "#F0EFE9",
        },
        carbon: "#111111",
        ink: "#1A1A1A",
        muted: {
          DEFAULT: "#666666",
          soft: "#999999",
        },
        border: {
          DEFAULT: "#E2E0D9",
          subtle: "#F0EEE8",
          strong: "#CCCBC4",
        },
        sleep: "#5B7FE8",
        energy: "#F0A928",
        stress: "#9B59B6",
        libido: "#E84C8A",
        water: "#2BB5D8",
        nutrition: "#27AE60",
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.07)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.12)",
        "phone": "0 32px 80px rgba(0,0,0,0.35)",
        "phone-hand": "0 48px 100px rgba(0,0,0,0.18)",
        "red-glow": "0 4px 24px rgba(192,57,43,0.30)",
      },
      borderRadius: {
        pill: "9999px",
      },
      maxWidth: {
        container: "1160px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
