/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.01)" },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
      },
      colors: {
        offWhite: "#E9F8E8",
        tech: {
          primary: "#435856",
          bg: "#DAEBEC",
        },
        arts: {
          primary: "#585343",
          bg: "#BAB8AF",
        },
      },
      backgroundImage: {
        "page-left": "url('/events/bg-left.png')",
        "page-right": "url('/events/bg-right.png')",
      },
    },
  },
  plugins: [],
};
