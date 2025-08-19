# CV Dashboard Technical Specification

## Implementation Guide for Code Mode

This document provides detailed technical specifications for implementing the CV Dashboard redesign. Use this as a blueprint when switching to Code mode.

## Core Data Analysis Results

### Skills Requiring Filters (2+ experiences)
Based on analysis of `cvDataV2` skillsFilter arrays:

**Ultra High Priority (5+ mentions):**
- TypeScript (6 mentions)
- Performance Optimization (5 mentions)  
- Developer Experience (5 mentions)
- Mentorship (5 mentions)
- Front-End (5 mentions)
- CI/CD (5 mentions)

**High Priority (4 mentions):**
- React (4 mentions)
- Leadership (4 mentions)
- Angular (4 mentions)
- Design Systems (4 mentions)

**Medium Priority (3 mentions):**
- Security (3 mentions)
- GitHub Actions (3 mentions)
- ESLint (3 mentions)

**Show-worthy (2 mentions):**
- GraphQL, Responsive Design, Testing, Database Optimization, etc.

### Skills to Hide (1 mention only)
gql.tada, ellipsis.dev, Cobol, Video, Training, etc. - these clutter the interface.

## File Implementation Order

### Phase 1: Core Analytics
1. **`src/data/cv-analytics.ts`** - Smart filtering logic
2. **`src/components/cv/CVDashboard.astro`** - Main container
3. **`src/pages/cv.astro`** - Updated to use dashboard

### Phase 2: UI Components  
4. **`src/components/cv/CVMetricsHeader.astro`** - Stats header
5. **`src/components/cv/CVSmartFilters.astro`** - Intelligent filters
6. **`src/components/cv/CVControls.astro`** - View toggle + search

### Phase 3: Views
7. **`src/components/cv/CVTimelineView.astro`** - Enhanced timeline
8. **`src/components/cv/CVGridView.astro`** - Relevance grid
9. **`src/components/cv/CVExperienceCard.astro`** - Reusable cards

## Detailed Component Specifications

### 1. CVAnalytics (`src/data/cv-analytics.ts`)

```typescript
export interface SkillAnalytics {
  name: string;
  frequency: number;
  experiences: string[];
  avgImpact: number;
  recency: number; // Years since most recent use
  totalScore: number;
}

export interface ExperienceScore {
  id: string;
  relevanceScore: number;
  skillMatches: string[];
  impactBonus: number;
  recencyBonus: number;
}

// Key Functions to Implement:
export function analyzeSkills(): SkillAnalytics[]
export function getSmartFilterSkills(): string[] // Only 2+ experiences
export function calculateRelevanceScore(exp: CVItemV2, skills: string[]): number
export function sortByRelevance(experiences: CVItemV2[], skills: string[]): CVItemV2[]
export function getExperienceMetrics(): { totalYears: number, companies: number, technologies: number }
```

**Algorithm Details:**
```
Relevance Score = 
  (Skill Match Count × 2.0) + 
  (Impact Rating × 1.5) + 
  (Recency Bonus × 1.2) +
  (Skill Frequency Bonus × 0.8)

Where:
- Skill Match Count = number of selected skills in this experience
- Impact Rating = experience.impact (1-10)
- Recency Bonus = (10 - experience index) (newer = higher)
- Skill Frequency = average frequency of matched skills
```

### 2. CVDashboard (`src/components/cv/CVDashboard.astro`)

**State Management:**
```typescript
interface DashboardState {
  viewMode: 'timeline' | 'grid';
  selectedSkills: Set<string>;
  searchQuery: string;
  filteredExperiences: CVItemV2[];
  smartSkills: string[];
}
```

**HTML Structure:**
```html
<div class="cv-dashboard">
  <CVMetricsHeader />
  <CVControls {viewMode} {onViewChange} {onSearch} />
  <CVSmartFilters {smartSkills} {selectedSkills} {onSkillToggle} />
  
  {viewMode === 'timeline' ? (
    <CVTimelineView {experiences} />
  ) : (
    <CVGridView {experiences} />
  )}
</div>
```

### 3. CVMetricsHeader (`src/components/cv/CVMetricsHeader.astro`)

**Display:**
```
┌─────────────────────────────────────────────────────────────┐
│ 10+ Years Experience • 6 Companies • 50+ Technologies      │
│ Latest: Handraise (Software Engineer) • Top Impact: 10/10  │
└─────────────────────────────────────────────────────────────┘
```

**Implementation:**
```astro
---
import { getExperienceMetrics, cvDataV2 } from '../data/cv-analytics.ts';
const metrics = getExperienceMetrics();
const latest = cvDataV2[0];
const topImpact = Math.max(...cvDataV2.map(e => e.impact));
---

<div class="metrics-header bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-lg mb-6">
  <div class="text-center">
    <h2 class="text-lg font-semibold text-gray-200 mb-1">
      {metrics.totalYears}+ Years Experience • {metrics.companies} Companies • {metrics.technologies}+ Technologies
    </h2>
    <p class="text-sm text-gray-400">
      Latest: {latest.company} ({latest.title}) • Top Impact: {topImpact}/10
    </p>
  </div>
</div>
```

### 4. CVSmartFilters (`src/components/cv/CVSmartFilters.astro`)

**Props Interface:**
```typescript
interface Props {
  smartSkills: string[];
  selectedSkills: Set<string>;
  skillAnalytics: SkillAnalytics[];
}
```

**Visual Design:**
```
[TypeScript •••••] [React ••••] [CI/CD •••••] [Angular •••]
     (6 uses)       (4 uses)     (5 uses)     (3 uses)
```

**HTML Structure:**
```html
<div class="smart-filters">
  <h3>Focus Areas</h3>
  <div class="skill-grid">
    {smartSkills.map(skill => (
      <button 
        class={`skill-chip ${selectedSkills.has(skill) ? 'active' : ''}`}
        data-skill={skill}
      >
        <span>{skill}</span>
        <div class="frequency-dots">
          {Array(getSkillFrequency(skill)).fill('•').join('')}
        </div>
        <small>({getSkillFrequency(skill)} uses)</small>
      </button>
    ))}
  </div>
</div>
```

### 5. CVTimelineView (`src/components/cv/CVTimelineView.astro`)

Enhanced version of current timeline with:
- Better visual hierarchy
- Hover effects
- Skill highlighting when filtered
- Impact indicators

### 6. CVGridView (`src/components/cv/CVGridView.astro`)

**Layout:**
```css
.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

@media (min-width: 1200px) {
  .experience-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Card Features:**
- Relevance score display when filtered
- Impact indicators (star rating or numeric)
- Highlighted matching skills
- Hover effects with additional details

### 7. CVExperienceCard (`src/components/cv/CVExperienceCard.astro`)

**Props:**
```typescript
interface Props {
  experience: CVItemV2;
  relevanceScore?: number;
  highlightedSkills?: string[];
  variant: 'timeline' | 'grid';
}
```

**Visual Elements:**
- Company logo placeholder
- Impact indicator (1-10 scale with visual representation)
- Skill tags with highlighting
- Expandable details section
- Relevance score (when filtered)

## CSS Design System

### Color Palette
```css
:root {
  --cv-primary: #06b6d4;      /* Cyan */
  --cv-success: #10b981;      /* Green - High Impact */
  --cv-warning: #f59e0b;      /* Orange - Medium Impact */
  --cv-neutral: #6b7280;      /* Gray - Standard */
  --cv-bg-dark: #1f2937;      /* Dark background */
  --cv-border: #374151;       /* Borders */
}
```

### Impact Indicators
```css
.impact-indicator {
  &.high { color: var(--cv-success); }    /* 9-10 */
  &.medium { color: var(--cv-warning); }  /* 7-8 */
  &.standard { color: var(--cv-neutral); } /* 5-6 */
}
```

### Skill Chip States
```css
.skill-chip {
  @apply px-3 py-1.5 text-xs rounded-md border transition-all duration-200;
  
  &:not(.active) {
    @apply border-gray-600/30 bg-gray-800/40 text-gray-300;
    &:hover { @apply bg-gray-800/80; }
  }
  
  &.active {
    @apply border-cyan-400/60 bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/60;
  }
  
  .frequency-dots {
    @apply text-xs text-gray-500 mt-0.5;
  }
}
```

## JavaScript Interactions

### State Management
```javascript
class CVDashboard {
  constructor() {
    this.state = {
      viewMode: 'timeline',
      selectedSkills: new Set(),
      searchQuery: '',
      filteredExperiences: [...cvDataV2]
    };
    
    this.initEventListeners();
  }
  
  initEventListeners() {
    // Skill chip clicking
    document.querySelectorAll('.skill-chip').forEach(chip => {
      chip.addEventListener('click', this.toggleSkill.bind(this));
    });
    
    // View mode toggle
    document.querySelectorAll('.view-toggle button').forEach(btn => {
      btn.addEventListener('click', this.setViewMode.bind(this));
    });
    
    // Search input
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', debounce(this.handleSearch.bind(this), 300));
  }
  
  toggleSkill(event) {
    const skill = event.target.dataset.skill;
    if (this.state.selectedSkills.has(skill)) {
      this.state.selectedSkills.delete(skill);
    } else {
      this.state.selectedSkills.add(skill);
    }
    this.updateView();
  }
  
  updateView() {
    this.filterExperiences();
    this.renderExperiences();
    this.updateURL();
  }
}
```

### Filtering Algorithm
```javascript
filterExperiences() {
  let filtered = [...cvDataV2];
  
  // Apply skill filters
  if (this.state.selectedSkills.size > 0) {
    filtered = filtered.filter(exp => {
      const expSkills = [...exp.stack, ...exp.highlights.flatMap(h => h.skillsFilter)];
      return Array.from(this.state.selectedSkills).every(skill => 
        expSkills.includes(skill)
      );
    });
    
    // Sort by relevance when filtered
    filtered = sortByRelevance(filtered, Array.from(this.state.selectedSkills));
  }
  
  // Apply search filter
  if (this.state.searchQuery) {
    const query = this.state.searchQuery.toLowerCase();
    filtered = filtered.filter(exp => 
      exp.title.toLowerCase().includes(query) ||
      exp.company.toLowerCase().includes(query) ||
      exp.highlights.some(h => h.oneLiner.toLowerCase().includes(query))
    );
  }
  
  this.state.filteredExperiences = filtered;
}
```

## Mobile Responsiveness

### Breakpoint Strategy
```css
/* Mobile First */
.cv-dashboard {
  /* Base mobile styles */
}

@media (min-width: 768px) {
  /* Tablet adjustments */
  .smart-filters .skill-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}

@media (min-width: 1024px) {
  /* Desktop layout */
  .cv-dashboard {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
  }
}
```

### Touch Interactions
- Minimum 44px touch targets
- Horizontal scroll for skill filters on mobile
- Swipe gestures for view switching

## Performance Optimizations

### Lazy Loading
```javascript
// Implement intersection observer for experience cards
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadExperienceDetails(entry.target);
    }
  });
});
```

### Debounced Search
```javascript
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
```

## Accessibility Implementation

### ARIA Labels
```html
<div role="tablist" class="view-toggle">
  <button role="tab" aria-selected="true" aria-controls="timeline-view">
    Timeline View
  </button>
  <button role="tab" aria-selected="false" aria-controls="grid-view">
    Grid View
  </button>
</div>

<div id="filter-results" aria-live="polite" aria-atomic="true">
  Showing {filteredCount} of {totalCount} experiences
</div>
```

### Keyboard Navigation
```javascript
// Arrow key navigation for skill chips
document.addEventListener('keydown', (e) => {
  if (e.target.classList.contains('skill-chip')) {
    switch(e.key) {
      case 'ArrowRight':
        e.target.nextElementSibling?.focus();
        break;
      case 'ArrowLeft':
        e.target.previousElementSibling?.focus();
        break;
      case 'Enter':
      case ' ':
        e.target.click();
        break;
    }
  }
});
```

## Implementation Testing

### Manual Testing Checklist
- [ ] All skills with 2+ experiences show in filters
- [ ] Single-use skills are hidden
- [ ] Relevance sorting works correctly when filtered
- [ ] Search functionality works across all content
- [ ] View mode toggle preserves filter state
- [ ] Mobile responsive at all breakpoints
- [ ] Keyboard navigation works
- [ ] Screen reader announces filter changes

### Performance Targets
- [ ] Initial load < 2 seconds
- [ ] Filter transitions < 500ms
- [ ] Search debounce at 300ms
- [ ] No layout shift during transitions

This specification provides everything needed to implement the CV dashboard redesign. When ready to switch to Code mode, use this as your implementation guide.