import FadeUp from "./FadeUp";

const TESTIMONIALS = [
  {
    quote: "My score went from 44 to 79 in 6 weeks. The AI coach made me feel less alone about this.",
    initial: "A",
    name: "Arjun S.",
    role: "34 · Marketing Manager",
  },
  {
    quote: "I'd tried everything. The Kegel timer and sleep tracker together changed everything. My partner noticed.",
    initial: "R",
    name: "Rahul M.",
    role: "29 · Software Engineer",
  },
  {
    quote: "The 7-Day Anxiety Reset was the thing I didn't know I needed. Changed my entire approach.",
    initial: "V",
    name: "Vikram P.",
    role: "38 · Founder",
  },
];

export default function Testimonials() {
  return (
    <section className="pt-[100px] pb-12 bg-white border-t border-border">
      <div className="max-w-container mx-auto px-10">
        <FadeUp className="text-center max-w-[500px] mx-auto">
          <div className="eyebrow mb-3">Results</div>
          <h2 className="display-h2" style={{ fontSize: "clamp(36px, 4vw, 54px)" }}>
            Real men.
            <br />
            Real numbers.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="grid md:grid-cols-3 gap-[18px] mt-[52px]">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-border rounded-[18px] p-[26px] shadow-card"
              >
                <div className="text-gold text-[13px] tracking-[2px] mb-3.5">★★★★★</div>
                <p className="text-sm text-ink leading-[1.7] italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-2.5 mt-[18px]">
                  <div className="w-[38px] h-[38px] rounded-full bg-red flex items-center justify-center text-[15px] font-bold text-white flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-ink">{t.name}</div>
                    <div className="text-[11px] text-muted-soft">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
