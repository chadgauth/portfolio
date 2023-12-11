/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background-oklch) / <alpha-value>)",
        foreground: "oklch(var(--foreground-oklch) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary-oklch) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground-oklch) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary-oklch) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground-oklch) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    removeAlphaValue: (theme) => {
      const colors = theme("colors");
      const updatedColors = {};

      for (const category in colors) {
        const colorValues = colors[category];
        const updatedColorValues = {};

        for (const key in colorValues) {
          const colorValue = colorValues[key];
          const updatedColorValue = colorValue.replace(
            / \/ <alpha-value>/g,
            "",
          );
          updatedColorValues[key] = updatedColorValue;
        }

        updatedColors[category] = updatedColorValues;
      }

      return updatedColors;
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          h2: {
            color: theme("removeAlphaValue").secondary.foreground,
            fontWeight: "700",
            margin: "2rem 0 .6rem",
            "font-size": "1.3rem",
          },
          h3: {
            color: theme("removeAlphaValue").accent.foreground,
            margin: "1.4rem 0 .2rem",
            "font-size": "1.1rem",
          },
          p: {
            color: theme("removeAlphaValue").foreground,
            margin: ".6rem 0 1.2rem",
            "line-height": "1.5rem",
          },
          strong: {
            color: theme("removeAlphaValue").foreground,
          },
          code: {
            background: theme("removeAlphaValue").background,
            color: theme("removeAlphaValue").primary.DEFAULT,
            padding: ".2rem 0",
            margin: "0 .1rem",
          },
          time: {
            color: theme("removeAlphaValue").accent.DEFAULT,
          },
          marker: {
            color: theme("removeAlphaValue").accent.DEFAULT,
          },
          ul: {
            padding: "0 0 0 1rem",
            color: theme("removeAlphaValue").foreground,
          },
          "ul > li": {
            color: theme("removeAlphaValue").foreground,
            padding: "4px 1px"
          },
          a: {
            color: 'oklch(0.65 0.15 244.3)',
            "text-decoration": "underline"
          },
          ".github-dark": {
            "background-color": "oklch(0.21 0.02 276.22) !important",
            border: "0.3rem solid oklch(0.28 0.03 271.18)",
            "border-radius": "0.75rem",
            padding: "4px 10px",
            "margin-bottom": "2rem",
          
            // Scrollbar styles
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track": {
              background: "oklch(0.21 0.02 276.22)", // Same as background-color
            },
            "&::-webkit-scrollbar-thumb": {
              background: "oklch(0.28 0.03 271.18)", // Same as border color
              borderRadius: "0.75rem", // Same as border-radius
            },
          },
        },
      },
    }),
  },
  
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}