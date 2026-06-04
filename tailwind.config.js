/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vugy: {
          primary: "#2D6A4F",
          "primary-hover": "#1B4332",
          bg: "#F0F4F0",
          card: "#FFFFFF",
          "active-bg": "#E8F5E9",
          "active-border": "#2D6A4F",
          "text-primary": "#1A1A1A",
          "text-secondary": "#555555",
          "text-muted": "#888888",
          "green-label": "#2D6A4F",
          border: "#E0E0E0",
          "on-bg": "#2D6A4F",
          "on-text": "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
