---
title: 'Dr. GitGood or:'
subtitle: 'How I learned to Stop Worrying and Love the Refactor'
description: |
  The value of refactoring and the metamorphosis of a develop from fearing refactoring to embracing it, all with a sprinkle of "Dr. Strangelove"
pubDate: 'Sep 19 2023'
heroImage: '/dr_refactor.jpg'
---

In a world where the cold, unforgiving wastelands of legacy code loom large, our story follows Dr. GitGood, an intrepid developer who finds himself entrenched in a sprawling fortress of convoluted code. Much like the War Room officials in "Dr. Strangelove," Dr. GitGood is challenged to decode a complex system of operations, a task he initially resents.

Dr. GitGood, once proud of his intricate video application, now faced the daunting reality: hasty decisions had turned his masterpiece into a veritable labyrinth. Even the simplest adjustments required traversing this digital minefield.

Enter Colonel CodeWise, with a demeanor reminiscent of a seasoned general from the Cold War era. Witnessing Dr. GitGood's mounting frustration, he intervenes, "Refactoring isn't about defusing an imminent disaster, GitGood. It's about strategic optimization!"

> Why should I tamper with something that, well kind of works?

Dr. GitGood, skeptical, retorts, "Why should I tamper with something that, well, kind of works?"

## Why Refactor, Indeed?

"Refactoring," the Colonel began, pacing the room in a dramatic fashion, "is the very essence of structure and precision. It's the antidote to the technical debt, which, if left unchecked, might force us to dismantle our software edifice!"

Dr. GitGood, still hesitant, needed more convincing.

## The Great Refactoring Operation

Drawing a parallel with the iconic War Room, the Colonel elucidated, "Your video player, GitGood, is much like that Room. A bit of a logistical mess and seemingly impenetrable. Let's breach its walls!"

### Operation 1: Divide and Rule!

"Look at this behemoth!" Colonel CodeWise exclaimed, pointing at a lengthy function. "Reminds me of the bureaucratic red tape. Let's slice it!"

**Before:**

```javascript
function controlEntireVideo() {
    // Play event
    {...}
    // pause event
    {...}
    //volume controls
    {...}
    //UI changes
    {...}
}
controlEntireVideo();
```

**After:**

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

Colonel CodeWise, with a triumphant smirk, declared, "Order! That's what we need. Each function now stands on its own, ready for duty!"

### Drill 2: Dont Repeat Yourself

Dr. GitGood's code visibly offended the Colonel's sensibilities. "GitGood, you're violating the sacred DRY principle! This isn't a drill; we need to consolidate!"

Dr. GitGood looked perplexed "Wait what is DRY?"

"DRY means Don't Repeat Yourself, if you see code that looks the same often it was copy and pasted and tweaked ever so slightly"

**Before:**

```javascript
// Handling play event
function handlePlayEventUI() {
    video.on('play', function() {
        isPlaying = true;
        $('#playButton').hide();
        $('#pauseButton').show();
    });
}

function handlePauseEventUI() {
    video.on('pause', function() {
        isPlaying = false;
        $('#playButton').show();
        $('#pauseButton').hide();
    });
}
handlePlayEventUI();
handlePauseEventUI();
```

Pointing at the code, Colonel CodeWise grumbled, "Look here, GitGood, you have essentially the same logic for `play` and `pause`. This is a textbook violation of the DRY principle. Refactor this to a single function that toggles the play state."

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

"Staring in disbelief, Dr. GitGood observed as the Colonel elegantly streamlined the functions into a singular, cohesive unit. "Simplicity breeds efficiency," the Colonel proclaimed.

"Why fuss over such trivialities?" Dr. GitGood challenged.

The Colonel met his gaze and replied, "Imagine returning to this a month later, needing to integrate application logging. With this structure, you won't be lost in a maze of your own making. Clarity today saves confusion tomorrow."

### Operation 3: No Unneccessary Comments

"Your code should speak for itself," the Colonel asserted, scrutinizing a variable declaration. "These comments are mere crutches. We need robust variable names!"

```javascript
// This variable stores the video quality setting. It's important because 
// users might want to adjust quality based on their internet speed.
var videoQuality = '1080p';
```

The transformation was evident:

```javascript
var userSelectedVideoQuality = '1080p';
```

Dr GitGood nodded his head, "I kind of see what you are saying here, that is a little easier."

### Operation 4: Flatten Conditionals

"Nesting is for birds, not for logic," the Colonel succinctly stated, pointing at the original code. "Nested conditionals obscure the essence of what you're trying to achieve. When you flatten them, as in this refactored version, each condition and its outcome become immediately clear." He motioned to the new code, emphasizing its streamlined nature.

**Before:**

```javascript
function togglePlayState() {
    if(video.readyState === 4) {
        if(video.currentTime > 0) {
            if(video.paused && !video.ended) {
                video.play();
            } else {
                video.pause()
            }
        } else {
            console.log("tracking error");
        }
    }
}

```

**After:**

```javascript
function togglePlayState() {
    if(video.readyState !== 4) return;
    if(video.currentTime <= 0) {
        console.log("tracking error");
        return;
    } 
    if(!video.ended && video.paused) {
        video.play();
    } else {
        video.pause();
    } 
}
```

Dr. GitGood, eyebrows furrowed, said, "But why does this structure matter?" The Colonel replied, "Think of it as a clear roadmap versus a tangled web. With the former, you know your direction at each step. And speaking of clarity, we'll tackle those magic numbers in an upcoming lesson."

### Drill 5: Descriptive Logic Variables, Make It Clear!

"Complex logic checks are a headache," the Colonel grumbled. "They can lead to 'Boolean Blindness'. Break it down, soldier! Use descriptive variables to make the intention clear."

**Before:**

```javascript
if(video.networkState === 2 && video.textTracks.length > 0 && video.textTracks[0].mode === 'showing'){
    // Show a buffering indicator and display captions
    ...
}
```

**After:**

```javascript
const isVideoBuffering = video.networkState === 2;
const isCaptionEnabled = video.textTracks.length > 0 && video.textTracks[0].mode === 'showing';

if(isVideoBuffering && isCaptionEnabled){
    // Show a buffering indicator and display captions
    ...
}
```

Dr. GitGood, rubbing his chin thoughtfully, said, "I think I'm starting to see the light here. Thanks for breaking it down, Colonel."

## The Cold War of Code

As Dr. GitGood integrated new features, the line count of his code astonishingly stayed the same. It was the magic of refactoring in action.

But the Colonel had a warning, "Avoiding refactoring, GitGood, is a Cold War standoff between you and technical debt. And believe me, you don't want a nuclear winter in your codebase."

## Red Flags on the Codebase

Your code, much like a nuclear control panel, will show warning signs when things aren't right:

- **Tangled Logic**:  Complex, nested logic is a minefield. Simplify and straighten out the paths.

- **Clarity Over Cleverness**: Avoid the convolution that can lead to doomsday scenarios. Keep it simple and straightforward.

- **Comment Judiciously**: Comments should be the last resort, reserved for when the code can't speak for itself.

- **Delegate and Decentralize**: Distribute tasks among functions just like responsibilities in a War Room.

- **Duplicated code**: Repeated code leads to maintenance issues and bugs. Refactor to eliminate duplication and improve code quality.

- **Maintain Borders**: Assign specific responsibilities to each module or file. No trespassing!

## A New Dawn in the Refactoring Era

Dr. GitGood's transformation was evident. From a stubborn developer to an agile refactoring advocate, his evolution mirrored that of his video player app.

## Strangelove’s Code Wisdom

Technical debt can creep up like an enemy spy. Neglecting it only compounds the problem. As Dr. GitGood realized, a stitch in time saves nine. Just as diplomatic measures can prevent a crisis in Dr. Strangelove's universe, proactive refactoring can prevent a codebase catastrophe.

Embrace refactoring. Embrace change. And embark on the thrilling journey of continuous improvement. In the world of coding, as in global politics, stalemates and stagnation aren't solutions. Because in the ever-evolving dance of code and diplomacy, one must always be prepared to pivot with grace and foresight, for tomorrow's stability rests on today's decisions.