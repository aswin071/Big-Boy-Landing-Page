import FadeUp from "./FadeUp";
import IPhoneMockup from "./IPhoneMockup";
import AppDailyScreen from "./AppDailyScreen";

export default function FinalCTA() {
  return (
    <section className="py-[100px] bg-cream">
      <div className="max-w-container mx-auto px-10">
        <FadeUp className="grid lg:grid-cols-[1fr_auto_1fr] items-center" style={{ gap: 60 }}>
          <div className="flex flex-col items-start text-left max-lg:items-center max-lg:text-center">
            <div className="eyebrow mb-3">Download Now</div>
            <h2
              className="font-display font-black text-ink mb-4"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.0, letterSpacing: "-0.025em" }}
            >
              Your health
              <br />
              is private.
              <br />
              Your progress
              <br />
              is real.
            </h2>
            <p className="text-base text-muted leading-[1.7] mb-7 max-w-[380px]">
              Start in 60 seconds. Science-backed. Personalised to you. 100% private.
            </p>
            <div className="flex flex-col gap-2.5">
              <StoreBtn line1="Download on the" line2="App Store">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </StoreBtn>
              <StoreBtn line1="Get it on" line2="Google Play">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M3.18 23.76c.3.17.64.24.98.2l12.64-12.64L12.82 7.4 3.18 23.76zM20.44 10.72l-2.78-1.6-3.27 3.27 3.27 3.27 2.82-1.62c.8-.46.8-1.86-.04-2.32zM2.01 1.33C1.9 1.6 1.83 1.9 1.83 2.24v19.52c0 .34.07.64.18.9l.09.08 10.94-10.95v-.25L2.1 1.25l-.09.08zM12.82 16.6l3.98 3.98-12.64 7.28c-.37.22-.78.27-1.16.16l9.82-11.42z" />
                </svg>
              </StoreBtn>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <IPhoneMockup
                width={200}
                style={{
                  transform: "rotate(-8deg) translateY(-10px)",
                  boxShadow:
                    "0 48px 100px rgba(0,0,0,0.18),0 0 0 1px rgba(255,255,255,0.12),0 0 0 2px #1A1A1A",
                }}
              >
                <AppDailyScreen compact />
              </IPhoneMockup>
              <div
                className="mx-auto mt-2"
                style={{
                  width: 200,
                  height: 24,
                  background: "radial-gradient(ellipse,rgba(0,0,0,0.12),transparent 70%)",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="bg-white border border-border rounded-2xl p-5 flex flex-col items-center gap-2.5 shadow-card">
              <QRCode />
              <div className="text-[12px] font-semibold text-muted text-center">Scan to download</div>
              <div className="text-[11px] text-muted-soft text-center">iOS &amp; Android</div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-nutrition bg-[rgba(39,174,96,0.1)] border border-[rgba(39,174,96,0.2)] rounded-full px-3 py-1">
              🔒 100% private
            </div>
            <div className="text-[12px] text-muted-soft text-center max-w-[160px] leading-[1.5]">
              No credit card. Free to start.
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function StoreBtn({
  children,
  line1,
  line2,
}: {
  children: React.ReactNode;
  line1: string;
  line2: string;
}) {
  return (
    <button className="bg-ink text-white rounded-xl px-5 py-3 inline-flex items-center gap-2.5 font-body border-none cursor-pointer transition hover:-translate-y-0.5 hover:shadow-card-hover">
      {children}
      <div className="text-left">
        <span className="text-[10px] text-white/55 block">{line1}</span>
        <span className="text-[15px] font-bold block leading-none">{line2}</span>
      </div>
    </button>
  );
}

function QRCode() {
  const dots = [
    [40, 4], [48, 4], [56, 4], [40, 12], [56, 12], [44, 20], [52, 20], [40, 28], [48, 28],
    [4, 40], [12, 40], [20, 40], [28, 40], [40, 40], [52, 40], [60, 40], [68, 40], [80, 40], [92, 40],
    [4, 52], [16, 52], [28, 52], [44, 52], [56, 52], [64, 52], [76, 52], [88, 52],
    [8, 60], [20, 60], [40, 60], [52, 60], [60, 60], [72, 60], [84, 60],
    [40, 68], [48, 68], [60, 68], [72, 68], [84, 68], [92, 68],
    [44, 76], [56, 76], [68, 76], [80, 76],
    [40, 84], [52, 84], [60, 84], [76, 84], [88, 84],
    [44, 92], [56, 92], [72, 92], [84, 92], [92, 92],
  ];
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="white" />
      {[
        [4, 4],
        [68, 4],
        [4, 68],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="28" height="28" rx="3" fill="#1A1A1A" />
          <rect x={x + 4} y={y + 4} width="20" height="20" rx="1" fill="white" />
          <rect x={x + 8} y={y + 8} width="12" height="12" rx="1" fill="#1A1A1A" />
        </g>
      ))}
      {dots.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="4" height="4" rx="1" fill="#1A1A1A" />
      ))}
    </svg>
  );
}
