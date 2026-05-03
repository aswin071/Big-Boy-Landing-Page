import FadeUp from "./FadeUp";
import IPhoneMockup from "./IPhoneMockup";

const BENEFITS = [
  { text: "World's best sexual wellness coach in your pocket", icon: "M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z", highlight: true },
  { text: "From anxious to confident in 14 days", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", highlight: true },
  { text: "Each program personalised for you", icon: "M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z", highlight: false },
  { text: "Private Community Access", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75", highlight: false },
  { text: "1 year free access at launch", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", highlight: true },
  { text: "Certified sexual wellness coaches", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", highlight: false },
  { text: "Science backed programs", icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18", highlight: false },
  { text: "Proven techniques to increase your sexual performance", icon: "M22 12h-4l-3 9L9 3l-3 9H2", highlight: false },
];

export default function FeatureBento() {
  return (
    <section id="features" className="py-[100px] bg-white border-t border-border">
      <div className="max-w-container mx-auto px-10">
        <FadeUp className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center order-1 lg:order-1">
            <IPhoneMockup screenStyle={{ minHeight: 520 }}>
              <div className="bg-[#111] px-[18px] py-6 h-full">
                <div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-red mb-4">
                  Performance Score
                </div>
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-[110px] h-[110px]">
                    <svg width="110" height="110" viewBox="0 0 110 110">
                      <circle cx="55" cy="55" r="44" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                      <circle cx="55" cy="55" r="44" fill="none" stroke="#C0392B" strokeWidth="8"
                        strokeLinecap="round" strokeDasharray="276.5" strokeDashoffset="74" transform="rotate(-90 55 55)" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="font-mono text-[32px] font-bold text-white leading-none">74</div>
                      <div className="text-[9px] text-white/35 uppercase tracking-[0.06em] mt-0.5">score</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "Physical", color: "#C0392B", w: 82 },
                    { name: "Mental", color: "#9B59B6", w: 68 },
                    { name: "Hormonal", color: "#E8A028", w: 71 },
                    { name: "Nutrition", color: "#27AE60", w: 90 },
                    { name: "Habits", color: "#2BB5D8", w: 85 },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center gap-2">
                      <div className="text-[11px] text-white/40 w-16">{p.name}</div>
                      <div className="flex-1 h-[5px] bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${p.w}%`, background: p.color }} />
                      </div>
                      <div className="text-[11px] font-semibold text-white/60 w-7 text-right">{p.w}%</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-1.5">
                  <div className="bg-white/5 rounded-[10px] p-2.5">
                    <div className="text-[9px] text-white/30 uppercase tracking-[0.08em]">7-day avg</div>
                    <div className="text-[18px] font-bold text-white mt-0.5">71</div>
                  </div>
                  <div className="bg-[#C0392B]/15 rounded-[10px] p-2.5">
                    <div className="text-[9px] text-white/30 uppercase tracking-[0.08em]">All-time best</div>
                    <div className="text-[18px] font-bold text-red-light mt-0.5">79</div>
                  </div>
                </div>
              </div>
            </IPhoneMockup>
          </div>

          <div className="order-2 lg:order-2">
            <div className="eyebrow mb-3">Why BigBoy</div>
            <h2 className="display-h2" style={{ fontSize: "clamp(36px, 4vw, 54px)" }}>
              Everything you need.
              <br />
              Nothing you don&apos;t.
            </h2>
            <p className="text-[17px] text-muted leading-[1.7] mt-3.5 max-w-[480px]" style={{ textWrap: "pretty" as const }}>
              Built with the world&apos;s leading sexual wellness experts — every feature is designed to get you real results, fast.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {BENEFITS.map((benefit, i) => (
                <div
                  key={i}
                  className={`flex gap-3 items-start p-4 rounded-2xl border transition-all duration-200 hover:shadow-md ${
                    benefit.highlight
                      ? "bg-[#C0392B]/6 border-[#C0392B]/20"
                      : "bg-[#F7F7F8] border-transparent hover:border-black/8"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    benefit.highlight ? "bg-[#C0392B]/12" : "bg-black/6"
                  }`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke={benefit.highlight ? "#C0392B" : "#555"}
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={benefit.icon} />
                    </svg>
                  </div>
                  <span className={`text-[14px] leading-snug pt-0.5 ${
                    benefit.highlight ? "font-semibold text-ink" : "font-medium text-ink/80"
                  }`}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
