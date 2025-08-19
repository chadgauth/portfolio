# CV Dashboard Redesign V2: Desktop-First Dashboard

## User Feedback Analysis

**Current Issues:**
- Not desktop-forward enough
- Card view looks terrible  
- Skills don't properly highlight individual tech items
- No instant search filtering
- Still feels too linear and not dashboard-like

**New Requirements:**
1. Desktop-first layout with left sidebar navigation
2. Career overview navigation on the left
3. Main content centered with selected experience details
4. Remove card view entirely
5. Real-time search filtering
6. Smart skill highlighting (highlight individual tech within experiences, not hide whole experiences)
7. Better visual hierarchy for dashboard feel

## New Desktop-First Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Chad Gauthier • chadgauth@gmail.com • GitHub: chadgauth                │
├────────────────┬────────────────────────────────────────────────────────┤
│ LEFT SIDEBAR   │ CENTER CONTENT AREA                                    │
│ (300px)        │                                                        │
│                │ 🔍 Search: [________________________]  [Clear]         │
│ CAREER NAV     │                                                        │
│ ┌────────────┐ │ ┌─────────────────────────────────────────────────────┐│
│ │●Handraise  │ │ │ SELECTED EXPERIENCE                                 ││
│ │ 2023-2025  │ │ │                                                     ││
│ │ Impact:10  │ │ │ Handraise - Software Engineer                       ││
│ │────────────│ │ │ Dec 2023 – May 2025 • Austin, TX • Impact: 10/10   ││
│ │○CrowdSt... │ │ │                                                     ││
│ │ 2022-2023  │ │ │ Stack: [React] [TypeScript] [Python] [GraphQL]...  ││
│ │ Impact: 9  │ │ │                                                     ││
│ │────────────│ │ │ Key Achievements:                                   ││
│ │○Cognizant  │ │ │ • Built high-performance filtering system...        ││
│ │ 2021-2022  │ │ │ • Replaced ESLint with Biome, cutting times...     ││
│ │ Impact: 8  │ │ │ • Reduced CI build times by 70%...                 ││
│ └────────────┘ │ └─────────────────────────────────────────────────────┘│
│                │                                                        │
│ SKILLS FILTER  │ RELATED EXPERIENCES                                    │
│ ┌────────────┐ │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │
│ │[TypeScript]│ │ │ CrowdStreet │ │ Progressive │ │ Cognizant   │        │
│ │    •••••   │ │ │ 87% Match   │ │ 82% Match   │ │ 65% Match   │        │
│ │    (6)     │ │ │ Impact: 9   │ │ Impact: 9   │ │ Impact: 8   │        │
│ │────────────│ │ │ [TS][React] │ │ [TS][.NET]  │ │ [TS][Ang.]  │        │
│ │[React]     │ │ │ [Nx][Azure] │ │ [Node][AWS] │ │ [Node][API] │        │
│ │    ••••    │ │ └─────────────┘ └─────────────┘ └─────────────┘        │
│ │    (4)     │ │                                                        │
│ │────────────│ │                                                        │
│ │[CI/CD]     │ │                                                        │
│ │    •••••   │ │                                                        │
│ │    (5)     │ │                                                        │
│ └────────────┘ │                                                        │
│                │                                                        │
│ 📊 METRICS     │                                                        │
│ 10+ Years      │                                                        │
│ 6 Companies    │                                                        │
│ 50+ Tech       │                                                        │
└────────────────┴────────────────────────────────────────────────────────┘
```

## Key Features

### 1. Left Sidebar Navigation (300px)
- **Career Timeline**: Clickable list of all positions with quick stats
- **Smart Skills Filter**: Only skills with 2+ experiences, sorted by frequency
- **Metrics Overview**: Quick stats at bottom

### 2. Center Content Area
- **Search Bar**: Real-time filtering as user types
- **Selected Experience**: Full details of currently selected role
- **Related Experiences**: Other roles that match selected skills (with match percentages)

### 3. Smart Interaction Model
- **Click company**: Show full details in center panel
- **Click skill**: Highlight matching tech across all visible experiences
- **Multiple skills**: Show AND logic (experiences must have ALL selected skills)
- **Search**: Instantly filter experiences as user types

### 4. Visual Hierarchy
- **Full Match**: Bright highlight + 100% opacity
- **Partial Match**: Dimmed with match percentage
- **Selected Skills**: Highlighted within tech stacks
- **Active Experience**: Clear visual selection state

## Technical Implementation

### New Component Structure
```
CVDashboardV2.astro
├── CVSidebar.astro
│   ├── CVCareerNav.astro
│   ├── CVSkillsFilter.astro
│   └── CVMetrics.astro
└── CVMainContent.astro
    ├── CVSearchBar.astro
    ├── CVSelectedExperience.astro
    └── CVRelatedExperiences.astro
```

### Interaction Logic
```typescript
interface DashboardState {
  selectedExperience: string | null; // Currently selected company
  selectedSkills: Set<string>;       // Active skill filters
  searchQuery: string;               // Real-time search
  filteredExperiences: Experience[]; // Matching experiences
}

// When skill is clicked:
// 1. Add/remove from selectedSkills
// 2. Highlight matching tech in ALL experiences
// 3. Update match percentages for related experiences
// 4. Don't hide experiences, just dim non-matches

// When company is clicked:
// 1. Set as selectedExperience
// 2. Show full details in center panel
// 3. Update related experiences based on tech overlap

// When search is typed:
// 1. Instantly filter experiences (no debounce)
// 2. Update both sidebar and main content
// 3. Highlight search terms in results
```

### Visual States
```css
/* Experience Match Levels */
.experience-full-match    { opacity: 1.0; border: cyan; }
.experience-partial-match { opacity: 0.7; border: orange; }
.experience-no-match      { opacity: 0.4; border: gray; }

/* Skill Highlighting */
.tech-highlighted        { background: cyan/20; border: cyan; }
.tech-partial-highlight   { background: orange/10; border: orange; }

/* Selection States */
.sidebar-item-selected    { background: cyan/20; }
.sidebar-item-hover       { background: gray/20; }
```

## Mobile Adaptation
- **< 1024px**: Stack layout (sidebar becomes top section)
- **Touch interactions**: Larger tap targets
- **Simplified**: Focus on search + linear list

## Benefits of This Approach

### For Recruiters:
- **Quick company scanning** in left sidebar with impact scores
- **Instant skill filtering** to see relevant experience
- **Clear visual hierarchy** shows what's most important

### For Technical Peers:
- **Deep dive capability** with full experience details
- **Skill-based exploration** with smart highlighting
- **Related experience discovery** based on tech overlap

### For Desktop Users:
- **True dashboard feel** with left nav + center content
- **No scrolling required** for overview
- **Efficient use of screen space**

This redesign transforms the CV from a linear document into an interactive dashboard that actually takes advantage of desktop screen real estate and provides genuine value through smart filtering and navigation.