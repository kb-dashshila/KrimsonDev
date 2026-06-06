import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        card: "#0E1325",
        border: "#1D2745",

        primary: "#4F8CFF",
        secondary: "#8B5CF6",
        success: "#00C48C",

        textPrimary: "#FFFFFF",
        textSecondary: "#94A3B8",
      },
    },
  },
  plugins: [],
};

export default config;
