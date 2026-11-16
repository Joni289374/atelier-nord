import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1210",
        pine: {
          DEFAULT: "#1E4A3C",
          deep: "#14352B",
          soft: "#2F6B57",
        },
        glacier: "#8FB9B0",
        brass: "#C6A56A",
        mist: "#E8EEEC",
        fog: "#A8B5B0",
        paper: "#F3F6F4",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        lift: "0 24px 60px rgba(11, 18, 16, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pan": {
          "0%": { transform: "scale(1.08) translate3d(0, 0, 0)" },
          "100%": { transform: "scale(1.14) translate3d(-1.5%, -1%, 0)" },
        },
        "line-draw": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out both",
        "soft-pan": "soft-pan 18s ease-in-out alternate infinite",
        "line-draw": "line-draw 1s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
