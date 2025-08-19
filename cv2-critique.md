# CV2 Critique, Recommendations, and Refactor Plan

This document critiques the current CV2 demo, outlines concrete recommendations, and proposes a split of concerns across UI, functionality, and data.

## 1) Blunt Critique

### Visual/Theme
- Generic “dark-ish” palette lacks hierarchy and punch. OKLCH is used but not systematically (mixed Tailwind + inline styles leads to inconsistency).
- Large uniform padding blocks flatten contrast; cards feel heavy and samey.
- Glow and gradients are too subtle compared to the mass of empty space; perceived density is low.

### Layout/Density (Desktop)
- Single vertical spacing cadence makes the whole page read as a long scroll. Even with 2–3 column grid, card bodies are tall and verbose.
- Achievements occupy too much vertical real estate; paragraph blocks read like walls of text instead of scanning “evidence”.
- Filters on the left are clean but visually oversized relative to content weight; they don’t communicate prioritization.

### Interaction/Filtering
- Filtering dims/animates but still leaves too many non-relevant surfaces in view; desktop should compress quickly and reflow.
- No clear separation of “Primary/Supporting/Related” matches; users cannot quickly perceive the tier of relevance.
- Skill chips don’t surface counts/coverage intelligently (e.g., AND-selected coverage vs. simple project counts).

### Information Architecture
- “Impact” number was arbitrary (removed, good). But nothing replaced it with a better sorting signal (recency + evidence-tier).
- Achievements do not “spotlight” the relevant lines for selected skills; they still read as full text instead of “only evidence that matters right now”.

### Engineering
- Monolithic page: DOM logic + UI + data in [`src/pages/cv2.astro`](src/pages/cv2.astro) makes iteration painful.
- No engine boundary; hard to test/compose filtering behavior cleanly.
- Inline styles make maintaining OKLCH color system non-trivial.

---

## 2) Recommendations (Concrete)

### Theme System
- Centralize OKLCH tokens and use Tailwind utilities for consistency:
  - Surface, surface-muted, card, border, focus, text-high, text-mid, text-low.
  - Add accent tiers for “primary”, “supporting”, “related”.
- Reduce padding globally, constrain max line length, and use a tighter vertical rhythm (line-height-5 for dense sections).

### Desktop Layout
- Multi-column card grid (1/2/3 cols responsive) is correct, but compress card internals:
  - Header (role/company/meta) compact.
  - Tech stack in a single wrap row.
  - Achievements in a 2-column grid with chips, not paragraphs.
- Add “context bar” per card header: domain/product areas, work mode, time range.

### Filtering/Sorting
- Tier-based presentation (no numbers):
  - Primary (skills matched in primarySkills)
  - Supporting (matched in supportingSkills)
  - Related (matched only via achievement.skills)
- Sorting pipe: selected-tier > achievement richness (count of matched achievements) > recency.

### Achievement Rendering
- Replace paragraphs with “evidence lines”:
  - oneLiner
  - Inline outcome badges (delta, unit, direction)
  - tech chips
- When skills are selected, collapse unrelated achievements by default; expand only those containing the selected skill(s).

### Split Responsibilities
- Data contracts & dataset:
  - [`src/data/cv2.schema.ts`](src/data/cv2.schema.ts) — definitive types (DONE)
  - [`src/data/cv2.data.ts`](src/data/cv2.data.ts) — normalized demo dataset (DONE)
- Functional engine:
  - [`src/lib/cv2.engine.ts`](src/lib/cv2.engine.ts) — indices, filter, rank (DONE)
- UI components:
  - [`src/components/cv2/SkillFilter.astro`](src/components/cv2/SkillFilter.astro) — skill chips, counts, emits selection
  - [`src/components/cv2/ExperienceCard.astro`](src/components/cv2/ExperienceCard.astro) — compact card, tiers, achievement spotlight
  - [`src/components/cv2/ExperienceGrid.astro`](src/components/cv2/ExperienceGrid.astro) — responsive grid, handles collapsed/expanded states
- Page shell:
  - [`src/pages/cv2.astro`](src/pages/cv2.astro) — orchestration, minimal state wiring

---

## 3) What “Perfect” Data Structures Look Like (Summary)

- No numeric “impact”. Instead:
  - Recency is computed from DateRange.
  - Evidence richness derives from how many achievements reference selected skills.
  - Tier classification is categorical (primary | supporting | related).
  - Outcomes are structured (unit, direction, before/after/delta) for badges.
- Achievements are the join point between skills and experiences. They enable line-item spotlighting under filters.

These are captured in:
- [`CV2Skill`](src/data/cv2.schema.ts:15)
- [`CV2Achievement`](src/data/cv2.schema.ts:63)
- [`CV2Experience`](src/data/cv2.schema.ts:79)
- Engine utilities in [`cv2.engine.ts`](src/lib/cv2.engine.ts:1) to build indices, filter, rank.

---

## 4) Next Steps (Incremental, MVP Vertical Slices)

1) Ship UI split:
   - Create [`SkillFilter.astro`](src/components/cv2/SkillFilter.astro) and [`ExperienceCard.astro`](src/components/cv2/ExperienceCard.astro).
   - Update [`cv2.astro`](src/pages/cv2.astro) to import [`cv2Data`](src/data/cv2.data.ts:1) and engine, remove inline data.

2) Tighten density:
   - Two-column achievements grid with chips + outcome badges.
   - Compact headers; single-line meta.

3) Filtering UX:
   - AND selection; cards collapse (animated) if unrelated.
   - Tier badges; spotlight matching achievements.

4) Theme pass:
   - Replace inline styles with Tailwind classes bound to OKLCH tokens.

This plan fixes the “boring, too much whitespace, not desktop enough” complaints with concrete structural improvements while keeping increments small and testable.