# Northline Strength Club

A fast, mobile-first landing page for a fictional strength gym, built to turn visitors into free first-class bookings. Portfolio concept, hand-coded in plain HTML, CSS and JavaScript.

**Live:** https://northline-gym.vercel.app

## Features

- Cut-out athlete hero with a split "NORTH / LINE." wordmark, an intro animation and a subtle scroll drift
- Sticky nav with an accessible mobile menu and a sticky "Book a free class" bar on mobile
- Weekly schedule: WAI-ARIA tabs (arrow keys, Home/End), defaults to today, scrolls horizontally on mobile, low-spot warnings
- Pricing on a dark section with a monthly/yearly toggle (`aria-pressed`, live-region announcements)
- FAQ built on native `<details>`/`<summary>`, one open at a time
- Accessible booking form: visible labels, inline errors tied with `aria-describedby`, `aria-invalid`, focus on the first error, loading and success states (front-end only, no network request)
- Static SVG map block in the footer (no third-party embed)
- Respects `prefers-reduced-motion`; scroll reveals never hide content without JavaScript
- Responsive from 375px to 1440px, optimised WebP images, Open Graph and Twitter card metadata

## Stack

Plain HTML, CSS and JavaScript. No framework, no build step, no npm dependencies. Fonts: Barlow Condensed and Inter from Google Fonts.

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Lighthouse (mobile)

Performance 93 · Accessibility 100 · Best Practices 100 · SEO 100 (Lighthouse 13.6, mobile, live Vercel URL)

## Credits

- Hero athlete photo: "A woman holding two orange kettlebells over her head" by April Laugh on Unsplash, https://unsplash.com/photos/F9UIMBsoGi8 (Unsplash License). Background removed locally with rembg, edges cleaned, cropped to mid-thigh and exported to WebP.
- Class photos (Unsplash License, cropped and converted to WebP):
  - Strength Foundations: "Woman lifting weights with trainer watching" by Vitaly Gariev, https://unsplash.com/photos/woman-lifting-weights-with-trainer-watching-rD0poLlu57M
  - Power Hour: "Person lifting barbell in gym" by Victor Freitas, https://unsplash.com/photos/person-lifting-barbell-in-gym-qZ-U9z4TQ6A
  - Conditioning: "Two people performing box jumps on wooden crates in a gym" by Meghan Holmes, https://unsplash.com/photos/people-performing-box-jumps-workout-wy_L8W0zcpI
  - Mobility & Recovery: "People doing yoga inside gym" by Photo Genius, https://unsplash.com/photos/people-doing-yoga-inside-gym-kufLAiPoIlI
- Coach portraits (Unsplash License, cropped; stand-ins for fictional coaches):
  - Marcus Reid: "Man with arms crossed in a gym" by Vitaly Gariev, https://unsplash.com/photos/man-with-arms-crossed-in-a-gym-V-gUIqzSXig
  - Lena Ortiz: "Woman in black and white crew neck t-shirt smiling" by Logan Weaver, https://unsplash.com/photos/woman-in-black-and-white-crew-neck-t-shirt-smiling-sPiMBrdGG9c
  - Diego Navarro: "Man in black tank top" by Lorenzo Fattò Offidani, https://unsplash.com/photos/man-in-black-tank-top-P6T1R9rSL0Q
- Fonts: Barlow Condensed and Inter via Google Fonts (SIL Open Font License).

Northline Strength Club is a fictional brand. Portfolio concept designed and built by Esteban Castro.
