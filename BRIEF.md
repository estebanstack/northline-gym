# Portfolio Page #1 — Gym Landing Page Brief

*Part of the Upwork Plan (Phase 1). Fictional brand, built for the portfolio.*

**What this page must prove to an Upwork client:** "I can build a fast, polished landing page that turns visitors into customers for a small business."

---

## 1. The brand (fictional)

- **Name:** Northline Strength Club
- **Tagline:** Strength training for real life.
- **Type:** Independent strength & conditioning gym. Small classes, real coaches, no contracts.
- **Location (fictional):** 214 Mercer Street, Riverside District
- **Hours:** Mon–Fri 5:00am–10:00pm · Sat–Sun 7:00am–6:00pm

> Footer must include: *"Northline Strength Club is a fictional brand. Portfolio concept designed and built by Esteban Castro."* This keeps the made-up testimonials and prices honest.

---

## 2. Look & feel

Avoid the generic "black + neon green gym" look. Go for clean, confident, editorial.

- **Colors**
  - Background: warm off-white `#F4F1EC`
  - Text / dark sections: charcoal `#16181A`
  - Accent (buttons, highlights only): signal orange `#FF5A1F`
  - Muted text: `#6B6F73`
  - Borders: `#DDD8D0`
- **Fonts (Google Fonts, free)**
  - Headings: **Barlow Condensed** (600–800, uppercase for big headlines)
  - Body: **Inter** (400/500/600)
- **Style:** big bold headlines, lots of white space, sharp corners (2–4px radius), one dark section for contrast (Pricing or Schedule). **Hero direction (decided 2026-11-19): bold "cut-out athlete" hero, with an athlete photo cut out and rising between two lines of huge split display type.** One striking hero intro animation; subtle scroll-reveal everywhere else.
- **Images:** free stock photos (Unsplash/Pexels: "strength training", "barbell", "gym coach"). Convert to WebP, compress, lazy-load everything below the hero.

---

## 3. Page sections and copy

### Nav (sticky)
Logo "NORTHLINE" · Classes · Schedule · Coaches · Pricing · FAQ · **[Book a free class]**
Mobile: hamburger menu + a sticky bottom bar with "Book a free class".

### Hero
- **Headline:** GET STRONG. STAY CONSISTENT.
- **Subhead:** Coached strength classes for busy people. Small groups, real progress, and no long-term contracts.
- **Primary button:** Book your free first class
- **Secondary link:** See membership plans →
- **Proof row:** ★ 4.9 from 300+ members · Open 5am–10pm · Cancel anytime

### Why Northline (3 columns)
1. **Coached every session.** A certified coach runs every class, so you always know what to do and how to do it safely.
2. **Small groups.** Max 12 people per class. You get attention, not a crowd.
3. **A plan that adapts.** Your program progresses with you, whether you're starting from zero or chasing a new PR.

### Classes (4 cards)
| Class | Description | Duration |
|---|---|---|
| Strength Foundations | Learn the big lifts with perfect form. Ideal for beginners. | 60 min |
| Power Hour | Heavy compound lifts and accessory work to build real strength. | 60 min |
| Conditioning | Short, intense circuits to build stamina and burn calories. | 45 min |
| Mobility & Recovery | Stretching and mobility work to move better and recover faster. | 45 min |

### Weekly schedule (interactive)
- Day tabs (Mon → Sun). Clicking a day shows that day's classes: time · class · coach · spots left.
- Must work with the keyboard and on mobile (horizontal scroll for tabs).
- Sample: Mon — 6:00am Power Hour (Marcus) · 12:15pm Conditioning (Lena) · 6:30pm Strength Foundations (Diego) · 7:45pm Mobility & Recovery (Lena)

### Coaches (3 cards)
- **Marcus Reid** — Head Coach. 10 years coaching strength athletes. Loves teaching the deadlift.
- **Lena Ortiz** — Conditioning & Mobility. Former college runner. Makes hard workouts fun.
- **Diego Navarro** — Beginner Programs. Specializes in helping first-timers feel confident in the gym.

### Pricing (3 plans + monthly/yearly toggle)
Toggle: **Monthly / Yearly (save 15%)** — prices update on click.

| Plan | Monthly | Yearly (per month) | Includes |
|---|---|---|---|
| Starter | $59 | $50 | 8 classes/month · Open gym access · App tracking |
| **Unlimited** *(Most popular)* | $99 | $84 | Unlimited classes · Open gym · Monthly progress check-in |
| Coached 1:1 | $189 | $160 | Everything in Unlimited · 4 private sessions/month · Custom program |

Each card: **[Start with a free class]**. Note under the cards: *No contracts. Cancel anytime.*

### Testimonials (3)
- "I'd never touched a barbell. Six months later I deadlifted my bodyweight." — **Sarah K.**, member since 2025
- "Small classes make all the difference. The coaches actually know my name and my numbers." — **James P.**, member since 2024
- "The 6am class is the best part of my day. I've never been this consistent." — **Ana M.**, member since 2025

### FAQ (accordion)
- **I'm a complete beginner. Is that okay?** Absolutely. Most members started with Strength Foundations. Coaches scale every workout to your level.
- **Is the first class really free?** Yes. Book any class, come try it, no payment info needed.
- **Do I need to sign a contract?** No. All plans are month-to-month and you can cancel anytime.
- **What should I bring?** Comfortable clothes, training shoes and a water bottle. We have everything else.
- **Can I freeze my membership?** Yes, up to 2 months per year at no cost.

### Book your free class (form)
- **Fields:** Full name · Email · Phone · Preferred class (dropdown) · Preferred day (date picker)
- **Validation:** required fields, email format, a clear inline error message per field.
- **Submit:** loading state → success message: *"You're booked! We'll email your confirmation within 24 hours."*
- Frontend only (no backend needed for the portfolio). Optional later: a free form service.

### Footer
Address + hours · simple map image or embed · Instagram / TikTok / YouTube icons · fictional-brand disclaimer · © 2026 Northline Strength Club.

---

## 4. Technical requirements

- **Stack:** plain HTML + CSS + JavaScript (no framework). This shows clean fundamentals. Page #2 (the startup page) will use React/Next.js.
- **Own repo** (this folder), NOT inside the NFCHub repo. Deploy on Vercel (free Hobby plan).
- **Mobile-first**, tested at 375px, 768px, 1280px and 1440px.
- **Accessibility:** proper labels on form fields, good color contrast, visible keyboard focus, alt text on images, semantic HTML (header/main/section/footer).
- **Performance:** Lighthouse mobile score **90+** in Performance, Accessibility, Best Practices and SEO.
- **SEO basics:** title, meta description, Open Graph image (so the link looks good when shared).
- **Motion:** one bold hero intro animation (transform/opacity only, no layout thrash); subtle fade/slide on scroll elsewhere; everything off under `prefers-reduced-motion`. Must still hit Lighthouse mobile 90+.

---

## 5. Definition of done

- [ ] Live on a Vercel URL
- [ ] Every section above built, with real copy (no lorem ipsum)
- [ ] Schedule tabs, pricing toggle, FAQ accordion and form validation all work
- [ ] Looks right on phone, tablet and desktop
- [ ] Lighthouse mobile 90+ on all four scores (save a screenshot of it)
- [ ] Fictional-brand disclaimer in the footer
- [ ] Portfolio assets: 1 desktop screenshot, 1 mobile screenshot, Lighthouse screenshot
- [ ] Portfolio write-up (2 lines): *"Conversion-focused landing page for a strength gym: class schedule, pricing toggle, and a validated free-class booking form. Hand-coded in HTML/CSS/JS, 90+ Lighthouse on mobile."*

---

## 6. Suggested build order (one weekend)

1. **Sat morning:** design direction (mockup/prototype), set up repo, fonts, colors, nav + hero.
2. **Sat afternoon:** Why, Classes, Coaches, Testimonials.
3. **Sun morning:** Schedule tabs, Pricing toggle, FAQ accordion.
4. **Sun afternoon:** Booking form + validation, footer, responsive polish, Lighthouse fixes, deploy, screenshots.
