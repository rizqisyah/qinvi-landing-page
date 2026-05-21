/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "ui-serif", "serif"],
      },
      colors: {
        primary: "#1a1a1a",
        secondary: "#6b6462",
        muted: "#9c9490",
        accent: "#8b7355",
        "accent-light": "#c4a882",
        border: "#e8e4e0",
        cream: "#faf8f5",
      },
    },
  },
  plugins: [],
};
