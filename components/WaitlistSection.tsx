"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <section id="waitlist" className="py-[100px] bg-cream text-center">
      <div className="max-w-container mx-auto px-10">
        <FadeUp className="max-w-[540px] mx-auto">
          <div className="eyebrow mb-3">Early Access</div>
          <h2 className="display-h2" style={{ fontSize: "clamp(36px, 4vw, 54px)" }}>
            Be first
            <br />
            when we launch.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] mt-3.5 mx-auto max-w-[500px]">
            Join the waitlist. Get early access + 1 year free Premium worth $220.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-2.5 max-w-[480px] mx-auto mt-7"
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubmitted(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="flex-1 px-[18px] py-3.5 bg-white rounded-[10px] text-[15px] text-ink outline-none transition-colors duration-200"
              style={{
                border: `1.5px solid ${focused ? "#C0392B" : "#E2E0D9"}`,
              }}
            />
            <button
              type="submit"
              className="font-body text-[15px] font-semibold rounded-[10px] px-7 py-3.5 bg-red text-white shadow-[0_4px_20px_rgba(192,57,43,0.28)] transition hover:bg-red-dark hover:-translate-y-0.5 whitespace-nowrap"
            >
              {submitted ? "You're on the list ✓" : "Join Waitlist"}
            </button>
          </form>
          <div className="text-[13px] text-muted-soft mt-3">
            🔒 <strong className="text-nutrition">No spam. No sharing. 100% private.</strong>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
