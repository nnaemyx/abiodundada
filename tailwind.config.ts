import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "800px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        gobold: ['var(--font-gobold)'],
        aeonik: ['var(--font-aeonik)'],
        aeoniklight: ['var(--font-aeoniklight)'],
        aeonikmedium: ['var(--font-aeonikmedium)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
