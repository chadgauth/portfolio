---
title: "Supervised Vibe Coding: Part One - Building a Severance-Inspired React Native Game"
description: "How AI-assisted development became my own version of refining scary numbers, and building an ASMR file refinement sim inspired by Severance."
pubDate: 2025-08-22
heroImage: ../../assets/super_vibe.png
---

I’ve started building a React Native game inspired by the Macrodata Refinement (MDR) team from the show [Severance](https://screenrant.com/severance-season-2-macrodata-refinement-watchers-computers-purpose-explainer/). In the show, office workers circle numbers on a screen until some “feel scary.” It’s absurd, hypnotic, and unsettling, which makes it a perfect metaphor for hunting meaning inside monotony.

That energy slipped into how I code with AI.

I call it **supervised vibe coding**.

## The Numbers Game

Instead of crafting the perfect prompt, I throw a long, messy description into an LLM and ride the chaos. The model spits out giant slabs of code that are almost right. It nails the skeleton but misses nuance: odd logic, bloated conditionals, missing pieces. Sometimes it even tries to edit `node_modules` like a toddler putting metal in the microwave.

But the skeleton is enough.

![First Pass UI](/mdr_vibe_first_pass.jpg)  
*First attempt at the MDR interface — broken and not quite capturing the requirements, but a start.*

Supervised vibe coding feels like Severance: scroll until something feels wrong, then refine. I look for code smells, overgrown files, and anything that will be miserable to maintain. I circle the scary parts, then cut, simplify, and reshape.

Momentum matters. I sometimes check in junk on purpose. The dopamine of “it compiles!” is real. I clean it later.

## The Roo Extension Game-Changer

This experiment wouldn’t exist without the [Roo VS Code extension](hhttps://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline). Roo understands my React Native project structure, handles cross-platform quirks, and makes surgical edits without breaking Metro bundler. It’s like pairing with a junior dev who actually gets React Native’s weirdness.

I’ve also contributed to Roo — here’s a [PR](https://github.com/RooCodeInc/Roo-Code/pull/1953) that redesigns the message box UI for a cleaner flow. Improving the tool that powers your experiments feels deliciously recursive.

![Development Environment](/roo_code.png)

## Setup Wins

In just under a day of supervised vibe coding with Roo, I:

- Set up the Android dev kit and Metro bundler  
- Got React Native running with animations  
- Redirected the AI when it veered off the rails  
- Landed a prototype that actually feels like the start of a game

![App Icon](/app_icon.jpeg)  
*Clean MDR app icon with Lumon vibes.*

By LinkedIn math, I now have 2+ years of React Native experience.

## The Game Vision

An ASMR-flavored **file refinement** sim:

- **Files = Levels**: Enter any filename and it seeds a stage full of moving numbers.  
- **Cursor = Trackball energy**: You slide your finger like a finicky trackball mouse. The fun lives in mastering speed and accuracy. Expect quirks that make precision spicy. This mechanic will get most of my iteration time.  
- **Progress = Quarters**: Finish your file before the quarter ends or lose momentum.  
- **Rewards = Micro-celebrations**: satisfying clicks, swooshes, tiny animations, maybe even a Waffle Party for top performers.

![Cursor Mechanics](/MDR_cursor.webp)  
*Cursor mechanics in action — numbers alive, refinement in progress.*

Difficulty ramps with faster clusters and trickier formations. The core loop is slightly frustrating and very satisfying: refine until clean.

## Why It Feels Good

Coding with AI mirrors the same loop:

1. AI dumps raw material.  
2. I circle the scary numbers (code smells).  
3. I refine until it feels human.

The AI is an overenthusiastic intern: huge output, limited taste. I’m the refiner. Half art, half janitorial. Weirdly fun.

```javascript
// Before: AI-generated chaos
const handleNumberClick = (numberId, isSelected, metadata) => {
  if (isSelected && metadata?.type === 'scary' && !gameState.paused) {
    // TODO: handle edge cases
    updateScore(calculatePoints(numberId));
  }
}

// After: refined and readable
const refineNumber = (id) => {
  if (canRefine(id)) {
    addPoints(REFINEMENT_SCORE);
    markAsRefined(id);
  }
}
```

## Why This Matters To Builders

- **Fast 0-to-1**: Use AI for breadth, then apply taste to carve depth.  
- **Human-in-the-loop**: Keep the “taste gate” human so quality scales with your judgment, not token count.  
- **Leverage over labor**: Spend energy on mechanics, UX, and feel — the parts machines don’t intuit yet.

## Next Steps

- Polish the cursor feel until it’s tactile and a little addictive  
- Layer richer sound design for full ASMR immersion  
- Prototype a lightweight leaderboard, because numbers love comparison

![IDE example](/scary_IDE.png)  
*The evolution continues — from broken first attempts to something that feels like Severance.*

This is Part One. If you’ve wondered what it’s like to code with an AI as your chaotic intern, or what Severance would feel like as a mobile ASMR sim, stick around.

The numbers are getting scary, and I’m here for it.

---

*Want to try supervised vibe coding yourself? Start with a messy prompt, embrace the chaos, and remember: the skeleton is enough. Circle the scary parts later.*
