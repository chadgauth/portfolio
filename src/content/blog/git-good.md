---
title: 'Dr. Gitgood: How I learned to Stop Worrying and Embrace the Refactor'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

In the world of software development, change is inevitable. And when that change comes in the form of a refactor, it can stir up quite a storm. Picture this: a codebase resembling a mushroom cloud, burning your eyes and making your Monday mornings a mess. But fear not, my fellow developers, for I bring you the tale of Dr. Gitgood and their quest to stop worrying and embrace the refactor.

Dr. Gitgood, a greenfield engineer thrust onto the front lines of a fresh codebase, had a singular mission: to construct a custom video player. Armed with a 200-line function and an abundance of global variables, they embarked on their coding journey. But then, a hotshot coder entered the scene, armed with the power of "let" and "const". They dared to challenge the sacred global state function, breaking it up into pipsqueak pure functions. Change, they say, is inevitable. But when that change is a refactor, you can bet your GIT commit it can stir up quite a storm.

Sure, we've all got that 'fix it all at the end' card stashed away, waiting for that Hail Mary moment. But let's get real here, folks. When your code looks like the mushroom cloud that burns your eyes, it's too late to sprint for your life. The fallout? Well, let's just say it can make a real mess of your Monday mornings.

## The Case of Dr. Gitgood: A Refactoring Tale

In the trenches of software development, Dr. Gitgood and the Hotshot coder found themselves grappling with a fresh task - to infuse new features into their codebase.

Hotshot coder, ever the advocate for code cleanliness, proposed a sweeping refactor. Dr. Gitgood, however, saw this as needless meddling, arguing to focus on the features instead. Hotshot coder, not wanting to escalate the dispute, conceded.

However, as Dr. Gitgood delved into the task, his once familiar code started misbehaving. Raising the volume now paused the video, and his once cherished codebase was becoming a mysterious labyrinth.

## Understanding Refactoring

Refactoring is the process of restructuring existing computer code—changing the factoring—without changing its external behavior. It involves making incremental modifications to the code, such as simplifying complex logic, removing duplication, and improving naming conventions. Why bother, you ask? The benefits are immense. Improved code readability means less time squinting at your screen, trying to decipher what that 200-line function was supposed to do. Reduced complexity means fewer headaches and more streamlined code. Discovering bugs becomes easier and development times increase. 

Unlike an atom bomb, which wreaks havoc and chaos, refactoring is a measured and intentional process. Its goal is to improve the codebase without introducing new bugs or altering the existing functionality. It's a proactive strategy that enables developers to clean up the code mess created under tight deadlines, eliminate bugs and performance issues, and ultimately enhance their productivity in software development.

## Decoding the Distress Signals: When Your Code Cries for Refactoring

## Code Red: Deciphering the Desperate Signals from Your Code

Let's boomerang back again to the battlefield that was Dr. Gitgood's codebase and put various distress signals under our forensic lens. Often buried in plain sight, these disturbances can rock the very ship that ought to streamline your victory- your codebase. 

1. **Comment Marathons:** Excessive commenting is more than a mere pixel pain, it's an ear-splitting shout out that your code needs a translator. 

    ```javascript
    var video = $('#videoPlayer');
    var frame = 0;

    // Next lines handle the user pressing the frame forward button on the UI
    $('#nextFrame').on('click', function() {
      while (video.get(0).isPlaying) {
        frame++;
      }
      video.get(0).currentTime = frame / 30;
    });
    ```

   Configure this prose to binary; transform vague paragraphs into crisp lines of functions.

    ```javascript
    var video = $('#videoPlayer');
    var frame = 0;

    function advanceFrame() {...}
    function setFrameTime() {...}

    $('#nextFrame').on('click', advanceFrame);
    ```

2. **Overstuffed Conditions**: If your conditional statement feels like an overloaded burger, nearly impossible to hold, you need simpler servings.

    ```javascript
    if ((video.get(0).playing && user.get(0).active) || (!video.get(0).paused && screen.get(0).live)) {...}
    ```

   Make it bite-sized and orderly by slipping complexity in smaller functions.

    ```javascript
    function isPlayable(...) {...}

    if (isPlayable()) {...}
    ```

3. **Bridging Functions**: If your function resembles the length of the Golden Gate, it's telling you to build more bridges.

    ```javascript
    function controlVideo() {
       // Over 40 lines of code...
    }
    ```

   Opting for modular streams never choked a river:

    ```javascript
    function handleInitialState() {...}
    function handleUserControl() {...}
    function handleBrightness() {...}

    handleInitialState();
    handleUserControl();
    handleBrightness();
    ```

4. **Juggling Responsibilities**: When a file is crowned as the Jack of all trades, it echoes chaos. Distinct features signal a lack of separation of role. Assign dedicated roles.

    ```javascript
    class VideoPlayer {
       // too many responsibilities for one class: video controls, UI state, files, screenshots etc. 
    }
    // Decouple into multiple classes/ functions based on responsibility 
    ```

5. **Twins everywhere**: Seeing double isn't good news here! If logic carbon copies itself, refactor them into an Abstract factory method.

    ```javascript
    $('#prevFrame').on('click', function() {...});
    $('#nextFrame').on('click', function() {...});
    ```

   Halves the work, doubles the efficiency!

    ```javascript
    function goToFrame(action) {...}
    $('#prevFrame').on('click', ()=> goToFrame('decrease'));
    $('#nextFrame').on('click', ()=> goToFrame('increase'));
    ```

6. **Assault Course Workflows**: Code should seem like a well-paced marathon, not an unpredictable assault course. If it feels like the latter, de-obstacle your path and grapple to refactoring.

Each of these instances is a siren, whispering the immediate need for software stethoscopy. And remember, refactoring is not just a rescue mission, it's preventative maintenance for your software vessel. Embody Dr. Gitgood's experience, welcome refactoring, and give your code the care it craves. A stitch in codebase may well save nine!

Remember, refactoring is not an unnecessary detour, but a bridge to better code. So, when your code sends distress signals, consider Dr. Gitgood's story, embrace the refactor, and transform chaos into order.

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