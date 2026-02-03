import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        auro: {
          bg: "#f6f3ee",        // page background (warm off-white)
          ink: "#1e293b",       // main text
          muted: "#64748b",     // secondary text
          brand: "#2f5c72",     // blue panel / headings accents
          accent: "#e57b17",    // orange buttons/badges
          accent2: "#d9a441",   // gold chip ("Most Popular")
        },
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 23, 42, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
