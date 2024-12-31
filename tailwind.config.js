/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: {
          500: "#8B4513", // SaddleBrown
          700: "#5D2906", // Darker Brown
        },
        blackMamba: {
          500: "#0a0a0a",
         },
        fontFamily: {
          hero: ["CustomFont", "sans-serif"], // Add the custom font here
        },
      },
    },
  },
  plugins: [],
};
