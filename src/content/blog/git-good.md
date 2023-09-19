---
title: 'Dr. Gitgood or: How I learned to Stop Worrying and Love the Refactor'
description: |
  In the world of software development, venturing into old code can feel like a journey through time, rife with relics of rushed decisions and late-night coding euphoria. This tale chronicles Dr. Gitgood's metamorphosis from fearing refactoring to embracing it, all with a sprinkle of "Dr. Strangelove" references.
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

> Before we dive deep into the code, let's set the stage with a cinematic parallel. "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb" is a 1964 satirical black comedy that humorously addresses the Cold War fears of a nuclear conflict. It’s a tale of mishaps, miscommunications, and the madness of mutually assured destruction. Similarly, in the world of software development, the unaddressed errors, convoluted logic, and the looming disaster of a system crash are all too real. Just as the world leaders in the film had to grapple

Revisiting one's code is akin to opening a time capsule, filled with nostalgia of past decisions, both good and regrettable. Dr. Gitgood, like many developers, found pride in his creation - a complex video player. However, much like a Cold War era mechanism with too many buttons and no instruction manual, the player’s complexity began to overshadow its functionality. A simple task like adjusting the volume felt like a high-stakes game of defusing a doomsday device.

Seeing the struggle, his mentor, Professor CodeWise, a sage of software engineering, stepped in. He helped Dr. Gitgood see that the code was not a labyrinth to be feared, but a puzzle to be solved. With his guidance, Dr. Gitgood began to embrace refactoring, turning the once daunting task into an exciting challenge.

## The War Room of Code: Why Refactor?

Much like the War Room discussions in "Dr. Strangelove", refactoring is the strategic process where developers plan, deliberate, and act. The goal isn't just to declutter but to optimize, ensuring that revisiting the code doesn’t feel like decoding a launch sequence.

## Unraveling the Video Player Engima

Dr. Gitgood's video player, with its layers of code, resembled the layers of bureaucracy in the War Room. For those unfamiliar with the movie, the War Room is where the president and his advisors decide the fate of the world, amidst a storm of bureaucracy and miscommunication. Similarly, Dr. Gitgood's video player, with its layers of code, could be seen as its own War Room.

### Lesson 1: Lengthy Functions

Professor CodeWise pointed out, “This lengthy function reminds me of a convoluted government protocol. Let's simplify.”

**Before:**

```javascript
function controlEntireVideo() {
    // Play event, pause event, volume controls, UI changes, duplicated logic
}
controlEntireVideo();
```

***After*:**

```javascript
function handlePlayEvent() {...}
function handlePauseEvent() {...}
function handleVolumeControl() {...}
function handleCustomUIChanges() {...}

handlePlayEvent();
handlePauseEvent();
handleVolumeControl();
handleCustomUIChanges();
```

### Lesson 2: Duplicated Logic

Dr. Gitgood's code violated the sacred DRY (Don't Repeat Yourself) principle.

The Professor advised, "Consolidate and streamline the logic."

**Before:**

```javascript
// Handling play event
function handlePlayEvent() {
    video.on('play', function() {
        isPlaying = true;
        $('#playButton').hide();
        $('#pauseButton').show();
    });
}

function handlePauseEvent() {
    video.on('pause', function() {
        isPlaying = false;
        $('#playButton').show();
        $('#pauseButton').hide();
    });
}
handlePlayEvent();
handlePauseEvent();
```

Recognizing this, Professor CodeWise enlightened him, "Look here, Dr. Gitgood, you have essentially the same logic for `play` and `pause`. This is a classic case of DRY (Don't Repeat Yourself) principle violation. Refactor this to a single function that toggles the play state."

```javascript
function handleVideoEvent(eventType) {
    video.on(eventType, function() {
        isPlaying = eventType === 'play';
        $('#playButton').toggle(!isPlaying);
        $('#pauseButton').toggle(isPlaying);
    });
}

handleVideoEvent('play');
handleVideoEvent('pause');
```

This way, he explained, you avoid repeating the same logic and makes any future changes like adding error handling easier.

### Lesson 3: Excessive Commenting

"Dr. Gitgood," Professor CodeWise began, "Your code should be the star of the show, not the comments accompanying it."

```javascript
// This variable stores the video quality setting. It's important because 
// users might want to adjust quality based on their internet speed.
var videoQuality = '1080p';
```

Professor CodeWise continued,  "Comments are useful when they provide insight into the 'why', especially when dealing with non-trivial business logic. However, if you feel the need to describe the 'what', your variable or function names might not be clear enough."

He suggested a more self-explanatory variable name:

```javascript
var userSelectedVideoQuality = '1080p';
```

"With this name," Professor CodeWise explained, "it's evident that the variable represents the quality of the video chosen by the user. It's always a good idea to let your naming conventions do the heavy lifting in terms of explanation."

### Lesson 4: Nested If Statements

"Nesting is for birds, not for logic," quipped the Professor, urging simplicity.

**Before:**

```javascript
if(video.readyState === 4) {
    if(video.currentTime > 0) {
        if(!video.paused && !video.ended) {
            // Play video
        }
    }
}
```
He advised, "By flattening your conditionals, you make the code easier to read and understand. It reduces cognitive complexity."

**After:**

```javascript
if(video.readyState !== 4) return;
if(video.currentTime <= 0) return;
if(video.paused || video.ended) return;
// Play video
```

This refactoring not only simplifies the code but also enhances its readability and maintainability.

### Lesson 5: Mixed Responsibilities

"Every function, Dr. Gitgood, should have a mission, a sole purpose," Professor CodeWise emphasized.

**Before:**

```javascript
function trackFrameAndUpdateSettings(frame) {
    currentFrame = frame;
    
    // Logic to determine if this frame is a keyframe
    if (isKeyframe(currentFrame)) {
        userSettings.update('lastKeyFrame', currentFrame);
    }
    
    // Update brightness based on user settings
    const brightness = userSettings.get('brightness');
    adjustVideoBrightness(brightness);
}
```

The Professor proposed a separation of unrelated functionality.

**After:**

```javascript
function trackFrame(frame) {
    currentFrame = frame;
    if (isKeyframe(currentFrame)) {
        updateUserLastKeyFrame(currentFrame);
    }
}

function updateUserSettings() {
    const brightness = userSettings.get('brightness');
    adjustVideoBrightness(brightness);
}
```

"By ensuring each function has a single responsibility, your code becomes more modular, maintainable, and testable. If it's too hard to test, it is doing too much"

### Lesson 6: Complicated Logic Checks

"Complex logic checks can be a headache," the Professor remarked. "They can lead to what we call 'Boolean Blindness', where the true intention behind a series of checks becomes murky."

**Before:**

```javascript
if(video.readyState === 4 && !(video.paused || video.ended) && video.currentTime > 0){
    // Play video
}
```

He suggested, "Break it down. Use descriptive variables to make the intention clear."

**After:**

```javascript
const isVideoReadyToPlay = video.readyState === 4 && video.currentTime > 0;
const isVideoPlaying = !(video.paused || video.ended);

if(isVideoReadyToPlay && !isVideoPlaying){
    // Play video
}
```

## The Codebase Stability Doctrine

While Dr. Gitgood added new features, the code length remained unchanged. This wasn’t some programming sleight of hand, but the result of efficient refactoring. When he returned to the code, he didn’t have to navigate a minefield; it was a clear path.

## Red Alert: Signs of Code Distress

- *Clarity is key*: If your code needs extensive comments to explain the "what", it's time for a revisit.
Complex conditionals: If your logic checks feel like deciphering the Enigma, simplify.
- *Function length*: Aim for brevity. While 5-7 lines is optimistic, if your function feels like a marathon, it's time to sprint towards refactoring.
- *Single Responsibility Principle*: Each file should have a clear purpose. If it's juggling too many tasks, break it up.
- *Repetition*: Duplicated logic is a red flag. Consolidate and streamline.

## The Testing Protocol

Professor CodeWise emphasized the importance of testing. "In the same way that the world leaders in 'Dr. Strangelove' had a series of checks and balances (albeit flawed), ensure your code has a robust testing mechanism.”

## The Road to Codebase Diplomacy

- **Open Discussions**: Encourage technical discussions, not just status reports.
- **Simplify**: Extract complex logic checks into self-explanatory constants.
- **Comment Wisely**: Comments should be apologies for unavoidable complexity, not explanations of the code.
- **Delegate**: Split large functions into smaller, more manageable chunks.
- **Divide Responsibilities**: One file, one task. Keep it focused.

## The Post-Refactoring Era

Dr. Gitgood, with Professor CodeWise's guidance, learned that refactoring isn't a one-time task. It's a continuous journey, ensuring that the software remains agile and maintainable.

## Strangelove’s Code Wisdom

Technical debt, like any debt, accumulates interest. Much like financial debt, the longer you ignore technical debt, the greater the 'interest' you'll pay in the form of additional work down the line. Pay it off gradually. Proactive refactoring ensures a smoother journey for developers, a better product for users, and a more successful project overall. As Dr. Gitgood learned, sometimes going the extra mile today can save a marathon tomorrow.

Embrace refactoring. Embrace change. And remember, in the world of coding, as in global politics, stalemates aren't solutions. So grab your refactoring toolkit and prepare for a thrilling ride into the world of continuous improvement.