import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BigBoy — Better Performance. Better Intimacy.",
  description:
    "Science-backed daily habits for men. Takes 15 minutes a day. Built around your data — not generic advice. 100% private.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-display: ${barlowCondensed.style.fontFamily}, "Impact", sans-serif;
                --font-body: ${dmSans.style.fontFamily}, "Helvetica Neue", sans-serif;
                --font-mono: ${jetbrainsMono.style.fontFamily}, "Courier New", monospace;
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
