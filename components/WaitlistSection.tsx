"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
            Join the waitlist. Get 1 year unlimited access worth $220.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-2.5 max-w-[480px] mx-auto mt-7"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!email) return;
              setLoading(true);
              setError("");
              try {
                const res = await fetch("/api/waitlist", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email }),
                });
                if (!res.ok) throw new Error("Failed");
                setSubmitted(true);
                setEmail("");
                setTimeout(() => setSubmitted(false), 3000);
              } catch {
                setError("Something went wrong. Please try again.");
              } finally {
                setLoading(false);
              }
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
              disabled={loading || submitted}
              className="font-body text-[15px] font-semibold rounded-[10px] px-7 py-3.5 bg-red text-white shadow-[0_4px_20px_rgba(192,57,43,0.28)] transition hover:bg-red-dark hover:-translate-y-0.5 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitted ? "You're on the list ✓" : loading ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
          {error && <p className="text-red text-[13px] mt-2">{error}</p>}
        </FadeUp>
      </div>
    </section>
  );
}
