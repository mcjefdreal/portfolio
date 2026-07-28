---
target: src/routes/+page.svelte
total_score: 27
p0_count: 0
p1_count: 3
timestamp: 2026-07-28T03-56-49Z
slug: src-routes-page-svelte
---

# Critique: src-routes-page-svelte

## Design Health Score

| #         | Heuristic                       | Score     | Key Issue                                                                            |
| --------- | ------------------------------- | --------- | ------------------------------------------------------------------------------------ |
| 1         | Visibility of System Status     | 3         | Active nav state present; no loading indicators (low need on static site)            |
| 2         | Match System / Real World       | 3         | Plain language throughout; minor "Libraries & Frameworks" for non-technical visitors |
| 3         | User Control and Freedom        | 3         | Standard nav, always escape path; external links open silently in new tabs           |
| 4         | Consistency and Standards       | 4         | Single font, consistent button/card patterns, cohesive color usage                   |
| 5         | Error Prevention                | 3         | Image onerror handlers exist; no confirmation on external links                      |
| 6         | Recognition Rather Than Recall  | 3         | All nav visible; external link icons are small for first-timers                      |
| 7         | Flexibility and Efficiency      | 2         | No keyboard shortcuts, no project filtering, single-path navigation                  |
| 8         | Aesthetic and Minimalist Design | 3         | Clean, focused, no clutter; skills section has uppercase tracked category labels     |
| 9         | Error Recovery                  | 2         | +error.svelte exists but basic — shows code + message, no guidance                   |
| 10        | Help and Documentation          | 1         | No contextual help, no contact guidance beyond social links                          |
| **Total** |                                 | **27/40** | **Acceptable (borderline Good)**                                                     |

## Anti-Patterns Verdict

**LLM assessment:** The site avoids the major AI slop tells. No gradient text, no glassmorphism, no side-stripe borders, no numbered section markers, no hero-metric template. The 3-card project grid is structurally identical but appropriate for a small portfolio (3 projects). One borderline signal: the about page skills section uses small, uppercase, tracked labels ("LANGUAGES", "LIBRARIES & FRAMEWORKS", "TOOLS") — the eyebrow pattern the absolute bans target. These are functional category labels rather than decorative kickers, but share the visual grammar.

**Deterministic scan:** CLI returned `[]` — zero hits. Detector confirmed no slop patterns. However, the detector missed the tagline contrast failure (4.02:1 vs required 4.5:1) and the social icon touch target undersize (20px vs required 24px).

**Verdict:** Not AI-slotted. Feels intentionally designed, not template-dropped. The dark navy + muted maritime palette is distinctive, not a category reflex.

## Overall Impression

The site does its core job well: within 5 seconds, a visitor knows who Michael Real is, what he does, and where to go next. Visual hierarchy is strong, color restraint is disciplined, and the design system from DESIGN.md is actually followed in practice.

The biggest opportunity is **warmth in the details** — the brand personality says "warm, approachable, human" but the current execution reads more "clean, competent, quiet." The difference is in the copy tone, the emotional closure at page bottoms, and the sparse content depth.

## What's Working

1. **Typography hierarchy is genuinely good.** "Michael Real" at clamp(3rem, 8vw, 4.5rem) bold Plein on dark navy — immediate authority without shouting.
2. **The One Accent Rule is alive in the code.** Muted Maritime appears exactly once as a solid fill (the hero CTA) and as hover/active states everywhere else.
3. **Defensive coding is thoughtful.** Image onerror handlers, aria-hidden on decorative bg, aria-current on active nav, alt text on images, reduced-motion respect — details that signal competence.
4. **Layout discipline across pages.** Same max-w-5xl container, same px-6 padding, same py-10/sm:py-16 rhythm on sub-pages.

## Priority Issues

**[P1] Tagline contrast fails WCAG AA** — `src/routes/+page.svelte:15`

- `text-c-light-blue/80` (#6d98ba at 80% opacity) on #061f2f = 4.02:1. Required: 4.5:1 for `text-sm` normal text.
- **Fix:** Increase opacity to at least 90% (4.55:1) or use `text-c-white/90` instead (10.9:1).
- **Suggested command:** /impeccable polish /

**[P1] No explicit focus-visible indicators** — All interactive elements

- Only a global `outline-ring/50` in `layout.css:118`. No `:focus-visible` rules on buttons, links, or cards.
- **Fix:** Add high-contrast focus rings to all interactive elements.
- **Suggested command:** /impeccable polish / or /impeccable harden /

**[P1] No mobile navigation at 320px** — `src/lib/components/Navbar/Navbar.svelte`

- Three links at `px-4` each + `gap-x-1` = ~306px. Available content width at 320px = ~296px. Links overflow.
- **Fix:** Add hamburger menu or overflow pattern at sm breakpoint, or reduce link padding to `px-2`.
- **Suggested command:** /impeccable adapt Navbar

**[P2] Social icon touch targets undersized** — `SocialIcons.svelte:17`

- Icons at `h-5 w-5` (20×20px) wrapped in `<a>` with no padding. WCAG 2.2 requires 24×24px minimum.
- **Fix:** Add `p-1.5` to the `<a>` or use `min-h-[24px] min-w-[24px]`.
- **Suggested command:** /impeccable polish SocialIcons

**[P2] Tech tag text at 12px** — `ProjectCard.svelte:69`

- `text-xs` (12px) at 70% opacity. Below recommended 14px minimum for body text.
- **Fix:** Change to `text-sm` (14px) and keep mono styling.
- **Suggested command:** /impeccable typeset ProjectCard

**[P3] Copy typo** — `about/+page.svelte:22`

- "Helped created scripts" → "Helped create scripts".
- **Suggested command:** /impeccable clarify /about

**[P3] Sparse about page content** — One experience entry; no project outcomes or impact metrics.

- **Suggested command:** /impeccable craft /about enrich

**[P3] Footer lacks emotional closure** — "© 2026 Michael Real" ends the journey with legal text.

- **Suggested command:** /impeccable clarify Footer

## Persona Red Flags

**Jordan (First-Timer):** Site mostly self-explanatory. Page titles clear. Uppercase skill labels ("LIBRARIES & FRAMEWORKS") may confuse non-technical visitors. External link icons small.

**Casey (Distracted Mobile):** CTAs center-aligned and reachable. Social icon tap targets below minimum. Navbar may overflow at narrow widths. No scroll-to-top for long pages.

**Sam (Accessibility):** Critical: no focus-visible indicators for keyboard nav. Tagline contrast fails AA. Positives: semantic HTML, alt text, aria-hidden, aria-label, aria-current.

**Recruiter (Project-Specific):** Answers "who" immediately but "why hire?" requires reading the tagline — which has failing contrast. Project descriptions are functional, not outcome-oriented. No resume download or direct contact CTA.

## Minor Observations

- About page body text at 70% opacity is open-coded rather than using a token.
- HeroBackground uses explicit hex `#061f2f` instead of `bg-c-black` — drift risk.
- All 3 project card images use `loading="eager"` — second and third should use `loading="lazy"`.
- +error.svelte shows status code but no guidance on recovery.

## Questions to Consider

- What if the hero tagline made a claim about _value_ not just technology?
- Does 3 projects with identical card treatments feel like a curated portfolio or an auto-generated grid?
- How would "warm" translate beyond the palette — through copy, imagery placement, and page endings?
