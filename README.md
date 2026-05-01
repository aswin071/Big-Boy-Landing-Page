# BigBoy Design System

## Overview

**BigBoy** is a men's sexual wellness app for men aged 25–45 who want to improve sexual health and performance through science-backed daily habits — sleep, exercise, stress management, and mindset. It is **not** a medical app. The tone is warm, direct, and destigmatised — think the approachability of Hims.com, the visual language of Headspace, and the structure of Habitline.

## Products

### 1. Landing Page / Marketing Site
A single-page waitlist landing page designed to convert. Clean, editorial, premium. Inspired by [Habitline](https://habitline-wbs.framer.website/). Sections include: Hero, Marquee, How It Works, Feature Bento Grid, Programs, Testimonials, Stats Counter, AI Coach Highlight, Waitlist CTA, FAQ, Final CTA, Footer.

Key subdomains referenced:
- `app.wellnessapp.com` — main app
- `coach.wellnessapp.com` — AI coach
- `early.wellnessapp.com` — waitlist/early access
- `admin.wellnessapp.com` — admin
- `blog.wellnessapp.com` — blog

### 2. Mobile App (iOS/Android)
Three main tabs:
- **Daily Tab** — Performance Score ring (0–100), streak counter 🔥, 5 daily tasks, 6 health tracker cards (sleep, energy, stress, libido, water, alcohol) each with 7-day trend chart
- **Programs Tab** — 4 structured programs: 30-Day Performance Reset, 7-Day Sleep Fix, 7-Day Anxiety Reset, 7-Day Confidence Builder
- **Health Coach Tab** — Private AI chatbot (Claude API) that reads user data before every reply

## Source Assets Provided
- `uploads/big_boy_logo-1.jpg` — Gold 3D wordmark on light grey background (1584×672)
- `uploads/big_boy_logo-2.jpg` — Gold 3D wordmark on dark background (1584×672)
- `uploads/big_boy_logo-3.jpg` / `big_boy_logo-4.jpg` — Lifestyle photography: young man, red lighting, motion light streaks (2560×1357)
- `uploads/big_boy_logo-5.jpg` / `big_boy_logo-6.jpg` — Carbon fibre + deep red branded banner with white BIGBOY wordmark
- `uploads/landing page content.docx` — Landing page copy document
- `uploads/BIGBOY guidelines (4).pdf` — Brand guidelines PDF *(note: PDF not accessible in this environment; flag for user to re-attach as image or text)*

No Figma link or codebase was provided.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Like a knowledgeable older brother who happens to be a doctor** — warm, direct, confident, never clinical
- **Destigmatised** — treats men's sexual health like a fitness topic, not a medical problem
- **Second person** ("you", "your") throughout — never "I" from the brand
- **Active voice** — "Start seeing changes in 9 days." not "Changes may be seen..."
- **No clinical terms** — never "ED", "erectile", or medical jargon anywhere on the landing page

### Casing
- **Headlines:** Title Case or Sentence case for large editorial headers
- **Section eyebrows:** ALL CAPS small tracking labels (e.g. "FEATURES", "HOW IT WORKS")
- **CTAs:** Sentence case with urgency ("Join Waitlist", "Get Early Access")
- **Body copy:** Sentence case, punchy, short paragraphs

### Copy Examples (from source docs)
- *"Better Performance. Better Intimacy."*
- *"Big Boy app provides structured programs from world-renowned sexual wellness coaches"*
- *"Science-backed routines. Start seeing changes in 9 days."*
- *"From anxious to confident in 14 days."*
- *"The private daily habit system for men who want to perform better."*
- *"Science-backed. Takes 15 minutes a day. Built around your data — not generic advice."*
- *"A health coach who actually knows you."*

### Privacy Language
Privacy is the **#1 emotional promise**. "100% private" appears at least 3× per page. Examples:
- "No spam. No sharing. 100% private."
- "Your health is private. Your progress is real."
- Small privacy reassurance in every section that mentions health data.

### Emoji Usage
🔥 used for streak counter in the app UI. Minimal emoji usage elsewhere — not used decoratively in copy or marketing. A small 4-pointed star ✦ appears in logo imagery as a subtle brand mark.

---

## VISUAL FOUNDATIONS

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#C0392B` | Deep crimson red — primary brand, CTAs, accents |
| `--color-primary-dark` | `#96281B` | Darker red — hover states, pressed |
| `--color-primary-light` | `#E8554A` | Lighter red — gradients, highlights |
| `--color-gold` | `#C8A84B` | Brushed gold — logo color, premium accents |
| `--color-gold-light` | `#E4C97E` | Light gold — highlights, shine effects |
| `--color-bg` | `#F9F8F4` | Off-white/cream — primary background |
| `--color-bg-dark` | `#111111` | Near-black — dark sections, footer, carbon feel |
| `--color-carbon` | `#1A1A1A` | Carbon black — text, dark UI |
| `--color-text` | `#1A1A1A` | Primary text |
| `--color-text-secondary` | `#666666` | Secondary text, captions |
| `--color-border` | `#E8E6DF` | Subtle card borders |
| `--color-surface` | `#FFFFFF` | Card surfaces |
| `--color-surface-warm` | `#F4F2EC` | Warm tinted surface |

### Typography
- **Display / Hero:** Extra-bold sans-serif, 56–80px, weight 800. Suggested: **Barlow Condensed** or **DM Sans ExtraBold** *(Google Fonts)*
- **Section Headings:** 36–48px, weight 700
- **Body:** 16–17px, line-height 1.7, weight 400–500
- **Section Eyebrows:** 11–12px, uppercase, letter-spacing 0.12em, weight 600, color `--color-primary`
- **Monospace/data:** JetBrains Mono or system-mono for score numbers and stats
- **Note:** No custom font files provided. Using Google Fonts substitution — **DM Sans** (body/UI) + **Barlow Condensed** (display). Flag to user for official font files.

### Backgrounds
- **Primary:** Off-white `#F9F8F4` — clean editorial base
- **Dark sections:** Carbon black `#111111` or `#1A1A1A` — used for AI Coach section, Final CTA, Footer
- **Texture reference:** Carbon fibre weave pattern visible in logo-5/6 banner — used sparingly for dark sections
- **No gradients** as primary backgrounds — gradients only used as subtle overlays on imagery
- **Lifestyle photography:** Warm-red toned, dramatic lighting, motion blur light streaks. Use for hero or full-bleed accent sections.

### Cards
- Background: `#FFFFFF`
- Border: `1px solid #EEEEEE`
- Border radius: `16px`
- Padding: `28–36px`
- Box shadow: `0 2px 12px rgba(0,0,0,0.04)`
- Hover: `translateY(-3px)`, shadow increases to `0 8px 32px rgba(0,0,0,0.10)`
- Transition: `0.25s ease`

### Spacing System
- Section gap: `120–160px`
- Container max-width: `1200px`, padding: `0 32px`
- Card gap in grids: `16–24px`
- Component internal padding: `28–36px`
- Small internal spacing: `8px`, `12px`, `16px`, `24px`

### Shadows / Elevation
- **Level 0:** no shadow
- **Level 1:** `0 1px 4px rgba(0,0,0,0.06)`
- **Level 2:** `0 2px 12px rgba(0,0,0,0.08)` — default card
- **Level 3:** `0 8px 32px rgba(0,0,0,0.12)` — hover / floating card
- **Level 4:** `0 24px 64px rgba(0,0,0,0.18)` — modals, phone mockup

### Border Radius
- `4px` — small badges, tags
- `8px` — buttons (pill: `9999px`), input fields
- `12px` — small cards
- `16px` — standard cards
- `24px` — large feature cards, phone bezels
- `9999px` — pill buttons, chips, tags

### Animations
- **Scroll fade-up:** `opacity 0→1`, `translateY 20px→0`, duration `0.5s`, easing `cubic-bezier(0.22,1,0.36,1)`
- **Counter animation:** `0 → target` over `1.8s` on scroll-enter, easing ease-out
- **Marquee:** CSS `animation: marquee linear infinite` at `~30s` per loop
- **Hover transitions:** `0.2–0.25s ease`
- **No heavy/bouncy animations** — subtle, confident, premium feel

### Hover States
- Cards: lift (`translateY -3px`) + shadow increase
- Buttons: darker background (`--color-primary-dark`) or slight scale `1.02`
- Links: color shift to `--color-primary`
- Nav items: opacity 0.7 → 1.0

### Iconography
- No dedicated icon font/library was provided
- **CDN substitute:** Lucide Icons (stroke, thin weight) — consistent with premium wellness app aesthetic
- Small 4-pointed star `✦` appears as a subtle brand mark watermark in all logo images — can be used as a brand accent
- Emoji: only 🔥 for streak counter in app UI
- See **ICONOGRAPHY** section below

### Layout Rules
- Sticky navbar with `backdrop-filter: blur(12px)` on scroll
- Max content width: `1200px` centered
- Bento grid: CSS Grid with asymmetric layouts for feature cards
- Horizontal scroll rows: `overflow-x: auto`, `scroll-snap-type: x mandatory`
- Mobile: all multi-col grids collapse to single column at `768px`

### Imagery
- **Color vibe:** Warm red tones, high contrast, dramatic. Motion blur / light streaks. Cinematic.
- **Subjects:** Young men of colour (South Asian, Black) — diverse, aspirational
- **Style:** Editorial, not stock. No smiling-at-camera clichés.
- **Usage:** Hero section, social proof, lifestyle context

---

## ICONOGRAPHY

BigBoy does not ship a custom icon set. The recommended icon library is **Lucide Icons** (CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`), matching the clean, thin-stroke, geometric style appropriate for a premium wellness app.

Key icons in use:
- `moon` / `sun` — sleep / energy trackers
- `activity` — performance/workout
- `heart` — libido tracker
- `droplets` — hydration/water
- `wine` — alcohol tracker
- `brain` — mental health / stress
- `flame` — streak counter
- `star` — ratings
- `lock` — privacy
- `message-circle` — AI coach chat
- `trending-up` — progress/score
- `check-circle` — task completion

Brand mark: 4-pointed star `✦` (Unicode U+2726) used as a watermark/accent in logo imagery.

---

## Files

| Path | Description |
|---|---|
| `README.md` | This file — brand overview, content + visual foundations |
| `SKILL.md` | Agent skill manifest |
| `colors_and_type.css` | CSS custom properties for colors, typography, spacing |
| `assets/logo-light.jpg` | Gold 3D wordmark on light background |
| `assets/logo-dark.jpg` | Gold 3D wordmark on dark background |
| `assets/lifestyle-red-1.jpg` | Lifestyle photo — red-lit man, motion streaks |
| `assets/lifestyle-red-2.jpg` | Lifestyle photo — same scene, slight variant |
| `assets/logo-carbon-1.jpg` | Carbon fibre banner logo — dark/red treatment |
| `assets/logo-carbon-2.jpg` | Carbon fibre banner logo — dark/red treatment variant |
| `preview/` | Design system preview cards (registered in Design System tab) |
| `ui_kits/landing/` | Landing page UI kit |
| `ui_kits/app/` | Mobile app UI kit |

---

## UI Kits

- **Landing Page** → `ui_kits/landing/index.html` — Full marketing landing page recreation (hero, marquee, how it works, bento features, programs, testimonials, stats counter, AI coach section, waitlist form, FAQ accordion, final CTA, footer)
- **Mobile App** → `ui_kits/app/index.html` — Interactive app prototype showing all 3 tabs in iOS frames: Daily (score ring, tasks, trackers), Programs (active program + all programs), AI Coach (data-connected chat)

---

## Full File Index

```
README.md                        — This file
SKILL.md                         — Agent skill manifest (Claude Code compatible)
colors_and_type.css              — All CSS custom properties (colors, type, spacing, shadows, radii)

assets/
  logo-light.jpg                 — Gold 3D BIGBOY wordmark on light/cream background
  logo-dark.jpg                  — Gold 3D BIGBOY wordmark on dark/black background
  logo-carbon-1.jpg              — Carbon fibre + red dark banner (white wordmark)
  logo-carbon-2.jpg              — Carbon fibre + red dark banner variant
  lifestyle-red-1.jpg            — Lifestyle photography: man, red light, motion streaks
  lifestyle-red-2.jpg            — Lifestyle photography: same scene, slight crop variant

preview/
  colors-brand.html              — Primary crimson scale + brushed gold palette
  colors-neutral.html            — Backgrounds, surfaces, text, borders
  colors-semantic.html           — Tracker card colors + score pillar palette
  type-scale.html                — Full typographic scale: hero → caption
  type-fonts.html                — Barlow Condensed · DM Sans · JetBrains Mono specimens
  spacing-tokens.html            — 4px base spacing scale
  spacing-radii-shadows.html     — Border radius scale + 5-level elevation system
  components-buttons.html        — Primary, secondary, ghost, dark, gold, store buttons
  components-nav-section.html    — Sticky nav + eyebrow/headline/subtext pattern
  components-app-cards.html      — Performance Score ring with pillars + 6 tracker cards
  components-badges-chips.html   — Program badges, duration tags, AI Coach chips
  components-ai-chat.html        — Dark chat bubble interface for Health Coach tab
  components-forms-faq.html      — Waitlist form + FAQ accordion states
  components-stats-testimonials.html — Stat counter cards + testimonial card
  brand-logos.html               — Logo on light / dark / carbon backgrounds
  brand-photography.html         — Lifestyle imagery showcase

ui_kits/
  landing/index.html             — Full landing page UI kit (13 sections)
  app/index.html                 — Mobile app UI kit (3 phones × 3 tabs)
  app/ios-frame.jsx              — iOS device frame component
  app/DailyTab.jsx               — Daily tab: score ring, tasks, trackers
  app/ProgramsTab.jsx            — Programs tab: active program + program list
  app/CoachTab.jsx               — AI Coach tab: data-connected dark chat interface
```
