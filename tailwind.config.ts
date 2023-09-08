/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
      colors: {
        "blue-100": "#e8f2f8",
        "blue-200": "#ddebf5",
        "blue-300": "#b8d6eb",
        "blue-400": "#197bbd",
        "blue-500": "#176faa",
        "blue-600": "#146297",
        "blue-700": "#135c8e",
        "blue-800": "#0f4a71",
        "blue-900": "#0b3755",
        "blue-950": "#092b42",

        "orange-100": "#faeeec",
        "orange-200": "#f8e6e3",
        "orange-300": "#f1cbc4",
        "orange-400": "#d15842",
        "orange-500": "#bc4f3b",
        "orange-600": "#a74635",
        "orange-700": "#9d4232",
        "orange-800": "#7d3528",
        "orange-900": "#5e281e",
        "orange-950": "#491f17",

        "green-100": "#e9f7ed",
        "green-200": "#def3e4",
        "green-300": "#bae7c7",
        "green-400": "#22b04a",
        "green-500": "#1f9e43",
        "green-600": "#1b8d3b",
        "green-700": "#1a8438",
        "green-800": "#146a2c",
        "green-900": "#0f4f21",
        "green-950": "#0c3e1a",
      },
      fontFamily: {
        lato: "var(--font-lato)",
        quicksand: "var(--font-quicksand)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
