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
        // Cyberpunk theme colors with transparency support
        'cyber': {
          black: 'oklch(0.1 0.02 240 / <alpha-value>)',
          darker: 'oklch(0.15 0.02 240 / <alpha-value>)',
          dark: 'oklch(0.2 0.02 240 / <alpha-value>)',
          primary: 'oklch(0.8 0.2 140 / <alpha-value>)', // Matrix green
          secondary: 'oklch(0.65 0.3 25 / <alpha-value>)', // Neon red
          accent: 'oklch(0.85 0.2 200 / <alpha-value>)', // Cyan
          'text-primary': 'oklch(0.9 0.02 240 / <alpha-value>)',
          'text-secondary': 'oklch(0.7 0.02 240 / <alpha-value>)',
        },
        // System UI colors
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
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
          DEFAULT: "oklch(0.65 0.3 25 / <alpha-value>)",
          foreground: "oklch(0.98 0.005 240 / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(0.15 0.02 240 / <alpha-value>)",
          foreground: "oklch(0.65 0.02 240 / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(0.85 0.2 200 / <alpha-value>)",
          foreground: "oklch(0.1 0.02 240 / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(0.1 0.02 240 / <alpha-value>)",
          foreground: "oklch(0.95 0.005 240 / <alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(0.15 0.02 240 / <alpha-value>)",
          foreground: "oklch(0.95 0.005 240 / <alpha-value>)",
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, oklch(0.1 0.02 240) 0%, oklch(0.15 0.02 240) 100%)',
        'cyber-gradient-hover': 'linear-gradient(135deg, oklch(0.15 0.02 240) 0%, oklch(0.2 0.02 240) 100%)',
        'cyber-glow': 'linear-gradient(135deg, oklch(0.8 0.2 140 / 0.1) 0%, oklch(0.85 0.2 200 / 0.1) 100%)',
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
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
}
