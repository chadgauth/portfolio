---
title: 'Dr. Gitgood: How I learned to Stop Worrying and Embrace the Refactor'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

In software development, change is inevitable as a pull request. However when that change includes a refactor, it might stir up a storm. But let's get real here, folks. When your code looks like the mushroom cloud that makes you squint and shield your eyes, it may be too late to sprint for your life. To further demonstrate, I bring you the tale of Dr. Gitgood and how he learned to stop worrying and embrace the refactor.

Dr. Gitgood, a greenfield engineer had spent the last month or so grappling with a daunting task, constructing a custom video player. Deployed quickly to production he looked back proud at his 150-line function riddled with complexity, code duplication, and comments explaining this method of madness.

However, when the time came for Dr. Gitgood to simply inject a few new features a month later, his once familiar code began to misbehave. A simple volume adjustment paused the video, and his once reliable codebase transformed into a maze of bugs. When your code begins to resemble the likes of a mushroom cloud that burns your eyes, it's too late to sprint for your life.

## Why a Refactor?

Refactoring: a software developer's rite of passage - akin to untangling a nest of wires without disrupting the connections. It's a task that Dr. Gitgood, despite his best efforts, was wrestling with, much like a novice juggler trying to keep all balls in the air.

Unlike the chaotic aftermath of an atom bomb, refactoring is calculated and intentional - a meticulous but necessary process aiming to enhance the codebase without introducing new bugs or altering the existing functionality. It's a proactive strategy to clean up code debris left behind by pressing deadlines, eradicate bugs and performance issues, boost efficiency in software development and improve code longevity. 

Enter Professor CleanCode, a software development veteran, called upon to guide our struggling Dr. Gitgood through the winding roads of refactoring. With an aura that spelled calmness and a cup of green tea as his constant companion, the Professor began his tutorial.

## The Lessons of the Video Player

Dr. Gitgood, in his initial enthusiasm, had created a monolith - a single function controlling the entire video. It was an opus, spanning over 150 lines of code, filled with hooks for play, pause, volume, and UI changes. The logic duplication was rampant and widespread much like the destruction of an atomic bombing.

### Lesson 1: Lengthy Functions

Professor CleanCode, sipped his tea, and calmly suggested a different approach. 

This global function is a bear to manage, let's break this down.

```javascript
function controlEntireVideo() {
    // Play event, pause event, volume controls, UI changes, duplicated logic
}
controlEntireVideo();
```

 Each function should have a single, well-defined responsibility."

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

Dr. Gitgood had fallen into the trap of repeated logic within his pause and play functions.

```javascript
// Handling play event
function handlePlayEvent() {
    video.on('play', function() {
        isPlaying = true;
        // Other logging and control
        // Additional logic to update UI or other operations
        $('#playButton').hide();
        $('#pauseButton').show();
    });
}

function handlePauseEvent() {
    video.on('pause', function() {
        isPlaying = false;
        // Other pause related logic
        // Additional logic to update UI or other operations
        $('#playButton').show();
        $('#pauseButton').hide();
    });
}
handlePlayEvent();
handlePauseEvent();
```

Recognizing this, Professor CleanCode enlightened him, "Look here, Dr. Gitgood, you have essentially the same logic for `play` and `pause`. This is a classic case of DRY (Don't Repeat Yourself) principle violation. Refactor this to a single function that toggles the play state."

```javascript
function handleVideoEvent(eventType) {
    video.on(eventType, function() {
        isPlaying = eventType === 'play';
        $('#playButton').toggle(!isPlaying);
        $('#pauseButton').toggle(isPlaying);
        // Other logging and control
        // Additional logic to update UI or other operations
    });
}

handleVideoEvent('play');
handleVideoEvent('pause');
```

This way, he explained, you avoid repeating the same logic and makes any future changes like adding error handling easier.

### Lesson 3: Excessive Commenting

Dr. Gitgood had a habit of leaving extensive comments in his code. This is an example:

```javascript
// Keeping track of current frame of video so that we can determine 
// what frame to set the video to when we are trying to backtrack or forward track
var currentFrame = 0;
```

Professor CleanCode pointed out, "While comments can be useful, they are often a band-aid for unclear code. Your code should be self-explanatory. If you feel the need to write such a lengthy comment, it's a sign that you might need to refactor."

He suggested a more self-explanatory naming convention:

```javascript
var frameForBackwardOrForwardTrack = 0;
```

"With this change, the variable's purpose is clear without needing a comment. Remember, good code is like a good joke - it needs no explanation."

### Lesson 4: Nested If Statements
Nested if statements are like Russian dolls, there's always one more layer. They complicate the flow and make the code hard to follow.

```javascript
if(video.readyState === 4) {
    if(video.currentTime > 0) {
        if(!video.paused && !video.ended) {
            // Play video
        }
    }
}
```
Flatten them, or better yet, use guard clauses.

```javascript
if(video.readyState !== 4) return;
if(video.currentTime <= 0) return;
if(video.paused || video.ended) return;
// Play video
```

### Lesson 5: Mixed Responsibilities

Dr. Gitgood's function with mixed responsibilities:

```javascript
function controlEntireVideo() {
    // Handling play and pause events
    // Adjusting video brightness
}
controlEntireVideo()
```

Refactored to separate functions, each with a single responsibility:

```javascript
function handlePlayPauseEvent() {...}
function adjustBrightness() {...}
```

### Lesson 6: Complicated Logic Checks
And finally, if your logic checks need a flowchart to understand, simplification may be needed. Use meaningful variables and leverage language-specific techniques.

```javascript
if(video.readyState === 4 && !video.paused && !video.ended && video.currentTime > 0){
    // Play video
}
```

Refactored to simplified logic checks:

```javascript
const isVideoReadyToPlay = video.readyState === 4 && video.currentTime > 0;
const isVideoPlaying = !video.paused && !video.ended;

if(isVideoReadyToPlay && isVideoPlaying){
    // Play video
}
```

With these lessons, Dr. Gitgood was ready to embrace the refactor. The Professor concluded, "Remember, refactoring is not a one-time task. It's a continuous process. It's about anticipating change and designing for it." It's having the race today to avoid running a marathon tomorrow.

## Sounding the Sirens: Recognizing the Need for Code Refactoring

IV. When Should You Refactor?
   A. The dangers of the 'fix it all at the end' mentality
   B. Identifying signs that refactoring is needed
   C. The right time for refactoring: Regular intervals and before adding new features

II. When it's time

- Your unclear code has comments that have to explain what is happening instead of why
    - example code justifying that we need to reset a global variable due to oddities with the volume control function
- You have an if statement with more than a few logical operators (this && this && !this || sometimesThis)
    - example code that says while video is playing hook into with jquery control to pause video and if the video is paused than allow screenshot (add a few other complex arguments to make a really long conditional)
- When functions go beyond the length of the screen, some say beyond 5-7 lines but that's sometimes too optimistic. There's a balance between delivering DRY code and code that has been optimized to look like a flattened city. 5-7 lines might be a good goal, less is overkill, double is okay, triple might be eminant danger for being stuck on a code change for days and introduction of new defects.
- Your file a single responsibility. It handles this and that and also that (all different contexts)
  - Video player that handles video controls, but also UI state, and loading in files to play, and uploading screenshots to export example code in a global function
- You have a file with duplicated logic with only one slight variation
  - Repeat playback code in two different places one that says if video is paused on volume raised that it should play again (using another jquery selector);
- The team has to do workarounds to add new features and has to program like it's a game of whack-a-mole (or better analogy)

III. How to

- Encourage open discussion and a culture of allowing developers to run their own standup to achieve at the beginning of a sprint. A standup is not a status report so that a project owner can make good excuses as to why we'll never deliver on time, but as a forum for engineers to discuss technically and decide which approaches they need to take collectively to acheive the goals that have committed to as a team.
- Extract logical operators to constants to describe what it is we are checking for
- Comments should only be an apology for complex business logic
- Extract functions into private methods with names that describe what a block of code does.
- Split responsibilities into new files that does one thing instead of the whole kit and kaboodle
- Manually line up nearly duplicated files, and start extracting their shared functionality into a new component

V. The Benefits of Embracing Refactoring: Lessons from Dr. Gitgood
   A. The aftermath of the fallout: Lessons learned
1.  to comment or not to comment
            i. comments should only apologize for complex business logic
   B. The benefits and improvements after refactoring
   C. How refactoring can lead to better Monday mornings  

VI. Conclusion
   A. Recap of the importance and benefits of refactoring
   B. Final thoughts and call to action: Stop worrying and embrace the refactor.

IV: Conclusion

[Review the body here]

Technical debt is better paid down over time then to try to save it for an end of a process, because when the codebase creditors are knocking at the door, it might be too late to do anything but file for a codebase rewrite. Paying down the debt ensures a wealth of benefit for engineers, customers, and business goals. A good engineering team that builds quality code embraces refactoring as a habit in their position, that sometimes going that extra mile, can save us from marathon in the future.