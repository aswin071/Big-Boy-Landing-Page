import FadeUp from "./FadeUp";
import IPhoneMockup from "./IPhoneMockup";
import AppDailyScreen from "./AppDailyScreen";

const STEPS = [
  {
    n: "01",
    title: "Answer 5 morning questions",
    body: "60 seconds. Updates your Performance Score and personalises your day based on how you actually feel.",
  },
  {
    n: "02",
    title: "Complete your 5 daily tasks",
    body: "Kegel session, workout, hydration, breathing. Each task moves a pillar on your score.",
  },
  {
    n: "03",
    title: "Ask your AI Health Coach anything",
    body: "Gets a private, data-driven answer based on your actual numbers — never generic advice.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-[100px] bg-cream">
      <div className="max-w-container mx-auto px-10">
        <FadeUp className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="eyebrow mb-3">How It Works</div>
            <h2
              className="display-h2"
              style={{ fontSize: "clamp(36px, 4vw, 54px)" }}
            >
              Three steps.
              <br />
              Real results.
            </h2>
            <p className="text-[17px] text-muted leading-[1.7] mt-3.5 max-w-[500px]" style={{ textWrap: "pretty" as const }}>
              Every morning, you open the app. Answer 5 questions. Complete 5 tasks. Ask your AI coach anything. It takes 15 minutes and builds on itself every day.
            </p>
            <div className="flex flex-col gap-5 mt-9">
              {STEPS.map((s) => (
                <div key={s.n} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-full bg-red flex items-center justify-center font-display text-base font-black text-white flex-shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <div className="text-base font-bold text-ink mb-1">{s.title}</div>
                    <div className="text-sm text-muted leading-[1.6]">{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <IPhoneMockup>
              <AppDailyScreen />
            </IPhoneMockup>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
