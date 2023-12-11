# Astro About | Chad Gauthier Portfolio

Astro is a modern front-end framework for building fast, optimized websites. It allows developers to write components using their favorite UI framework (or none at all), and then compiles away to efficient, static HTML, CSS, and JavaScript. This results in faster load times and a better user experience.

Astro's key benefits include:

- Content-driven: Astro is designed for building content-rich websites, making it an excellent choice for blogs, portfolios, and e-commerce sites.
- Server-first: Astro leverages server-rendering over client-side rendering as much as possible, which can lead to improved performance.
- Zero-JS by default: Astro only sends the necessary JavaScript to the client, resulting in faster load times.
- UI-agnostic: Astro supports multiple UI frameworks, allowing developers to use the one they're most comfortable with or even mix and match within a single project.

## About This Project

In this project, the exploration of micro-frontends and integrating Astro with Alpine.js and React is being conducted.

- [shadcn/ui](https://ui.shadcn.com/): A collection of reusable components built using Radix UI and Tailwind CSS. It's not a traditional component library, but a set of components that can be copied and pasted into apps. It offers a CLI for adding components and dependencies to projects, and supports theming and customization.
- [@Alpine.js](https://alpinejs.dev/): A minimal framework for composing JavaScript behavior in markup. It offers the reactive and declarative nature of big frameworks like Vue or React at a much lower cost.
- [OKLCH - and why?](https://www.smashingmagazine.com/2023/08/oklch-color-spaces-gamuts-css/): A new color format that is being used, which is top-notch.
- React: Every developer knows what this is and can at least dabble in it.

## Demo

A live version can be viewed [here](https://blog.gauthier.dev/)

## Installation

To install the necessary packages, the following command should be run in the terminal:

```bash
pnpm install
```

Once the packages are installed, the local development server can be started:

```bash
pnpm run dev
```
