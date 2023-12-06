---
title: 'Crafting My Digital Doppelgänger: A CustomGPT experiment'
subtitle: | 
    How I created a custom GPT to emulate myself as an interviewer
description: |
    Join me as I recount my adventure of creating a custom GPT, the challenges I faced, and how I overcame them.
pubDate: 'Dec 6 2023'
heroImage: '/doppler.png'
---

I have been experimenting with and embarking on a journey to explore how to utilize AI to replicate my voice or attempt to emulate me to provide behavioural style interview question examples of the highlights/challenges of my career

The journey began a while back exploring langchain and other custom chaining methods and conversations with a close friend who is also experimenting with AI. I have found decent success with file search and look up in addition to a technique known as Zero Shot Prompting.

Zero shot prompting is a fascinating method where the AI model generates responses without any prior examples or fine-tuning to a specific task. It relies solely on the instructions given in the prompt. My 'alpha version' of ChadGPT started with a zero shot prompt, which I actually recorded using a voice-to-text software called [MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper). This gives some guidance to the AI on what files to look into and then how it should continue speaking like me. My very basic implementation was giving the custom GPT an index as well as 9 files with my experiences and this instruction:

```md
You are ChadGPT and you will emulate the way that this text is written right now and in general, me, Chad Gauthier, as a response to interview questions. When being asked a question, first you will look in the "Interviewer Questions.md"  to identify the relevant experience. Based on this, it then selects the more specific document to help guide it in its answer, as indicated in the question guide (e.g., [[response1.md]], [[response2.md]]). ChadGPT will read the entire content of the indicated documents in the [[document.md]] would open that related file, if there are multiple references choose one at random. This process is going to basically allow you to speak like me. When you're responding, you're going to respond in a natural language flow and you are going to be direct and honest and maybe slightly write text in conversational tone like what I am saying now, but not necessary to convey a point. Like, don't venture too far from the instructions as dictated... kind of just how I'm speaking now. Basically, make the reponse concise, but as much detail as needed to answer a behavioral interview question, sometimes expanding into detailed explanation and sometimes using Texas colloquialism or again just kind of the way I'm speaking now. Yeah, basically, you're just going to answer the question as naturally as me the real Chad Gauthier would answer the question.
```

Here is an example of one of my favorite projects I have worked on as a behavioral experience outline that I uploaded as a file:

```md
**Project Background at Progressive:**

- The challenge involved modernizing the claims process with high-quality photo uploads from cellular devices.
- Faced limitations with an existing vendor app that only supported 10-20 low-quality photos.
- Encountered issues with a C-sharp desktop app rendering an IE10/11 based interface, leading to system problems.

**Your Role and Solution:**

- Tasked with creating a browser-native version of a photo viewer as a proof of concept.
- Given a tight two-day deadline to unblock the project and facilitate its release.
- Successfully developed a photo viewer supporting up to 50 high-quality photos, with efficient thumbnail and full-size photo loading.

**Technical Achievements and Business Impact:**

- Significantly improved the speed and functionality of the photo viewing process.
- Achieved millions of dollars in annual time savings for the company, as the solution was used by all claims representatives.
- Introduced additional features like rotation, brightness and contrast adjustment, and photo metadata viewing.
- Integrated OpenStreetMap to display the exact location of where photos were taken, aiding in claims fraud detection.

**Recognition and Career Advancement:**

- Received numerous accolades from the department for your innovative solution.
- Offered a direct hire position in the claims organization at Progressive as a software engineer on the tier three team.
- Awarded substantial financial compensation as a bonus for your contributions to the project.

**Personal Reflection:**

- Experienced a high level of job satisfaction and pride from being able to demonstrate the direct business value of your work.
```

While this initial implementation served its purpose, I am now exploring ways to enhance it. Here are some limitations and enhancements I've encountered and am considering:

**Limitations:**

- Custom GPTs can only include 10 files total. This was a limitation I had to figure out by snooping on the network traffic as the UI didn't give an error.
- The speed of GPT-4 can be quite slow for tasks that could be handled more efficiently by GPT-3.5 Turbo, given its larger context window.

**Enhancements:**

- Considering switching to an API that runs a multishot prompt with examples of my speaking patterns. This would allow the AI to tailor its responses to more accurately emulate my voice.
- Looking into incorporating all of my experiences into a vector database. This would enable the AI to quickly look up the most relevant information for a given question and provide a response in a timely manner.

**Explorations:**

- [Flowise](https://github.com/FlowiseAI/Flowise): This tool has a much better UI/UX, although it can be buggy and messy in its implementation. It's written in React, a framework I'm familiar with and would like to contribute to improving.
- [Rivet](https://rivet.ironcladapp.com/): This tool is more robust and written in Rust. It's a bit easier to work with as a desktop app and allows you to host your designs as an API. This feature could be instrumental in creating a new version of ChadGPT.

These explorations are not only about improving the speed and efficiency of the AI, but also about providing a more authentic representation of my voice to anyone who interacts with it. This is an exciting and innovative way to make my voice more accessible to others, and I'm looking forward to seeing where these explorations lead.
