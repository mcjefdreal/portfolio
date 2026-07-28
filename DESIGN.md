---
name: Michael Real — Portfolio
description: Personal portfolio for Michael Real, full-stack developer. Quiet craft, dark navy surfaces, muted maritime accent, single geometric sans-serif voice.
colors:
  developer-blue-black: '#061f2f'
  muted-maritime: '#6d98ba'
  soft-chalk: '#f0edee'
  hushed-blue-gray: '#9aadbf'
typography:
  display:
    fontFamily: 'Plein, system-ui, sans-serif'
    fontSize: 'clamp(3rem, 8vw, 4.5rem)'
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: '-0.02em'
  headline:
    fontFamily: 'Plein, system-ui, sans-serif'
    fontSize: 'clamp(2.25rem, 5vw, 3rem)'
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: '-0.01em'
  title:
    fontFamily: 'Plein, system-ui, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 'normal'
  body:
    fontFamily: 'Plein, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 'normal'
  label:
    fontFamily: 'Plein, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 'normal'
rounded:
  sm: 'calc(0.625rem - 4px)'
  md: 'calc(0.625rem - 2px)'
  lg: '0.625rem'
  xl: 'calc(0.625rem + 4px)'
spacing:
  sm: '0.5rem'
  md: '1rem'
  lg: '1.5rem'
  xl: '2rem'
  section: '4rem'
components:
  button-primary:
    backgroundColor: '{colors.developer-blue-black}'
    textColor: '{colors.soft-chalk}'
    typography: '{typography.label}'
    rounded: '{rounded.lg}'
    padding: '0 2rem'
    height: '2.75rem'
  button-primary-hover:
    backgroundColor: '{colors.muted-maritime}'
  button-ghost:
    backgroundColor: 'transparent'
    textColor: '{colors.soft-chalk}'
    typography: '{typography.label}'
    rounded: '{rounded.lg}'
    padding: '0 2rem'
    height: '2.75rem'
  card:
    backgroundColor: 'rgba(255,255,255,0.02)'
    rounded: '{rounded.lg}'
    padding: '1.5rem'
  tech-tag:
    backgroundColor: 'rgba(255,255,255,0.03)'
    textColor: '{colors.soft-chalk}'
    rounded: 'calc({rounded.sm} - 2px)'
    padding: '0.125rem 0.5rem'
---

# Design System: Michael Real — Portfolio

## 1. Overview

**Creative North Star: "The Quiet Craft"**

This is a portfolio that earns attention through restraint, not volume. The visual system treats the screen like a craftsman's bench — dark wood, warm light on metal, nothing that doesn't belong. Every element is placed with the confidence that the work itself carries the weight; design's job is to frame it, not perform for it.

The personality is warm without being soft, competent without posturing. The single geometric sans-serif (Plein) speaks in one voice across all surfaces. Weight and size do the work of hierarchy; nothing decorative intervenes. The palette runs dark-to-light on a single cool axis — deep navy surfaces, a muted blue accent drawn from coastal fog, off-white ink that reads warm against the dark. No gradients, no glow, no glass.

**What this system rejects:** flashy portfolio templates that animate everything; hacker aesthetics that trade legibility for edginess; corporate stiffness that turns a person into a brand page. The banned patterns from the shared design rules apply here in full force: no side-stripe borders, no gradient text, no glassmorphism as default, no tiny uppercase tracked eyebrows above every section, no numbered section markers as scaffolding.

**Key Characteristics:**

- Single geometric sans-serif voice with committed weight contrast
- Dark surface as the field; off-white ink as the primary text
- One accent color, used sparingly (≤10% of any surface) for links, active states, CTAs
- Tonal layering for depth — no shadows, just color contrast and backdrop-blur overlays
- Rounded-and-refined component shapes (0.625rem base radius)
- Restrained motion: staggered fade-up entrance on hero only, respects reduced-motion

## 2. Colors

The palette is a cool, muted spectrum — dark-to-light on a blue-gray axis. Four named colors carry the entire system; a pair of unused reserve colors (muted pink, dusty brown) exist in tokens but have no assigned role.

### Primary

- **Muted Maritime** (#6d98ba): The lone accent. Used on primary CTAs (solid fill), active nav indicators (bottom border), hover states on links and icons. Its chroma is intentionally low — it signals without shouting. Applied to ≤10% of any given surface.

### Neutral

- **Developer Blue-Black** (#061f2f): Page background, hero surface, the color of focus. Dark enough to recede, blue enough to feel warm beside the accent. Serves as the canvas for everything.
- **Soft Chalk** (#f0edee): Primary text color. An off-white with a barely-perceptible warmth that softens the contrast against dark navy. At 70% opacity for body text, at full opacity for headlines.
- **Hushed Blue-Gray** (#9aadbf): Muted secondary text. Used for skill tags, card descriptions (60% opacity), secondary navigation labels. Never used at full opacity for body copy — it's a supporting voice, not the lead.

### Named Rules

**The One Accent Rule.** Muted Maritime is used on ≤10% of any single surface. Its rarity is the point. If a page has more than one solid-fill Muted Maritime element visible at once, the accent is losing its signal value; convert the extra to a ghost-style treatment (border or transparency) or remove it.

**The Night-Warm Rule.** Dark navy (#061f2f) is the only permitted page background. Tinted near-black (`bg-c-black`) is how the brand feels human in dark mode — slightly blue, not pure #000. A pure-black background reads cold and defaults to style over substance; don't use it.

## 3. Typography

**Display Font:** Plein (Regular 400, Bold 700, Regular Italic 400) with `system-ui, sans-serif` fallback
**Body Font:** Plein (same family, Regular weight)
**Label/Mono Font:** System monospace stack (for code tags only — `font-mono`)

**Character:** A single geometric sans-serif speaks with one voice. No display/body pairing — the contrast comes from weight (400 → 700) and size (3rem → 0.875rem), not from switching families. This is deliberate: a portfolio shouldn't feel like a magazine. The font is clean and modern without being cold; the off-white ink on dark navy gives it warmth.

### Hierarchy

- **Display** (700 bold, clamp(3rem, 8vw, 4.5rem), line-height 1.1): Hero name only. "Michael Real" on the home page. Letter-spacing tightened slightly (-0.02em) for impact. `text-wrap: balance` applied.
- **Headline** (700 bold, clamp(2.25rem, 5vw, 3rem), line-height 1.15): Page titles — "About", "Projects". Section headings on longer pages. Letter-spacing -0.01em.
- **Title** (700 bold, 1.125rem, line-height 1.3): Card headings, project names. The smallest bold weight used in the system.
- **Body** (400 regular, 1rem, line-height 1.6): Prose on the About page. Set at 70% opacity for a softer reading experience on dark backgrounds. Max line length capped at 65ch.
- **Label** (500 medium, 0.875rem, line-height 1.25): Navigation links, CTA buttons, tagline text. The workhorse size for interactive and labeling elements.

### Named Rules

**The One Voice Rule.** Plein is the only typeface used across the entire site (excluding monospace code tags). No italic display, no serif pairing, no secondary type family. The restraint is the voice.

**The Light-on-Dark Rule.** All text on the dark navy surface uses a minimum opacity of 60% (#f0edee at 0.6) — never lower. Light text on dark backgrounds reads as lighter weight; compensate with slightly looser line-height (1.6 for body, +0.05 over the default).

## 4. Elevation

This system conveys depth through **tonal layering**, not shadows. No `box-shadow` is used anywhere in the current surface. Instead, depth is expressed through:

- **Background opacity shifts:** The navbar sits at `bg-c-black/80` with `backdrop-blur-sm`, creating a frosted-glass overlay that visually separates it from page content without a shadow.
- **Border accents:** Dividers and separators use `border-c-light-blue/15` (15% opacity of the accent color), a subtle stroke that reads as structure without calling attention to itself.
- **Hover lift:** Project cards lift on hover (`-translate-y-0.5`) with a simultaneous border-color shift toward the accent. The motion creates perceived depth without shadow.
- **Surface contrast:** Card backgrounds use `bg-white/[0.02]` — a 2% white overlay that distinguishes containers from the page background purely through tonal difference.

### Named Rules

**The No-Shadow Rule.** Surfaces are flat at rest and flat on hover. No `box-shadow` is permitted in the system. Depth is tonal or it isn't there.

**The Blur-Only Overlay Rule.** When an element must float above content (navbar), use `backdrop-blur-sm` with a semi-transparent background. This is the only permitted overlay technique; no borders, no shadows, no drop-glow.

## 5. Components

### Buttons

**Primary CTA.** Solid fill with Muted Maritime (#6d98ba) on dark ink text (#061f2f). Height: 2.75rem (h-11). Padding: 0 2rem (px-8). Radius: 0.625rem (rounded-lg). Font: Plein Medium 0.875rem. Hover: accent lightens to 90% opacity. Used for the hero "View Projects" button — the only solid-fill element on any page, per the One Accent Rule.

**Ghost CTA.** Transparent background with white 15% border and white 80% text. Same dimensions as primary. Hover: border lightens to 30%, text reaches full opacity. Used for the hero "About Me" button. Never paired with a primary CTA of a different color — the ghost is the secondary to Muted Maritime's primary.

**Focus.** Both variants show a visible focus-visible ring using `outline-ring/50` (inherited from the shadcn theme's ring color). Ring offset is not applied — the ring sits directly on the button edge.

### Navigation

**Navbar.** Sticky top bar. Height: 4rem (h-16). Background: `bg-c-black/80` with `backdrop-blur-sm`. Bottom border: 2px solid Muted Maritime at 15% opacity. Links: Plein Medium 0.875rem, white 70% opacity, centered. Active state: bottom border becomes solid Muted Maritime, text reaches full white. Hover: text reaches full white. No dropdowns, no submenus — three links is all.

**Mobile.** The navbar remains a single row at all viewport sizes. No hamburger menu, no expand/collapse. Three links fit comfortably at 320px.

### Cards / Containers

**Project Card.** Background: white 2% overlay (`bg-white/[0.02]`). Border: white 10% stroke. Radius: 0.625rem. Internal padding: 1.5rem (p-6). Featured variant: top border becomes 2px solid Muted Maritime, otherwise identical. Hover: translate upward 0.5 unit (`-translate-y-0.5`), border color shifts to Muted Maritime at 40% opacity. Image slot: aspect-video, full-width, separated from body by a white 10% bottom border. Tech tags sit below description, mono, rounded-sm border at white 10%.

**No nested cards.** Cards are containers, not canvases. A card inside a card is always wrong in this system.

### Chips / Tags

**Tech Tag.** Inline monospace chip. Background: white 3% overlay. Border: white 10%. Text: Soft Chalk at 70% opacity, 0.75rem (text-xs). Padding: 0.125rem 0.5rem. Radius: near-flat (rounded-sm minus 2px). No hover state — tags are informational, not interactive.

### Hero Background

**Dot Grid + Glow.** Pure CSS decorative element behind the hero section. Solid Developer Blue-Black base. Radial glow: `rgba(109,152,186,0.12)` (Muted Maritime at 12%) centered. Dot grid: 1px dots at 24px spacing using `radial-gradient`. Fades in over 0.8s on load. Entire element is `aria-hidden="true"` — purely atmospheric.

### Social Icons

**Icon Row.** Three Lucide icons (GitHub, LinkedIn, Mail) at default size. Default: white 60% opacity. Hover: Muted Maritime at full opacity. Spacing: 1rem gap. External links open in new tab with `rel="noopener noreferrer"`.

## 6. Do's and Don'ts

### Do:

- **Do** use Muted Maritime (#6d98ba) for the one primary CTA per page and for hover/active states. Never more than one solid-fill accent element visible at once.
- **Do** use Developer Blue-Black (#061f2f) as the only page background. No tinted near-black alternatives.
- **Do** keep body text at 70% opacity (#f0edee at 0.7) on dark backgrounds, with line-height 1.6 for comfortable reading.
- **Do** use `text-wrap: balance` on all heading elements (h1–h3) for even line wrapping.
- **Do** respect `prefers-reduced-motion: reduce` — all fade-up animations must degrade to an instant reveal.
- **Do** use tonal layering (background opacity + backdrop-blur) for any element that needs to float above content.
- **Do** cap body line length at 65ch for prose sections.
- **Do** maintain the staggered entrance rhythm (80ms delay per child) for the hero section only. Other sections do not need entrance animation.

### Don't:

- **Don't** use flashy, gradient-heavy, or scroll-jacking animations. The anti-reference from PRODUCT.md applies: this is not a template showpiece.
- **Don't** use hacker/terminal aesthetics — no green-on-black, no monospace body copy, no "elite" posture.
- **Don't** use corporate stiffness — no buzzwords, no impersonal copy, no enterprise SaaS patterns.
- **Don't** use side-stripe borders (border-left or border-right > 1px as a colored accent on cards, list items, or alerts).
- **Don't** use gradient text (`background-clip: text` with a gradient background). Emphasis comes from weight or size alone.
- **Don't** use numbered section markers (01 / 02 / 03) as default scaffolding on any page.
- **Don't** use tiny uppercase tracked eyebrows above every section heading.
- **Don't** use glassmorphism or decorative blurs. The navbar's backdrop-blur is functional, not aesthetic.
- **Don't** nest cards inside cards. A container inside a container is always wrong.
- **Don't** lower body text opacity below 60% on dark backgrounds. Light text on dark needs enough contrast to stay readable.
- **Don't** add a second accent color. Muted Maritime (#6d98ba) is the only accent. The reserve colors (muted pink #cb8589, dusty brown #796465) exist in tokens but must not be used without a deliberate, named design decision.
