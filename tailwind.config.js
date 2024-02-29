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
          "50%": { transform: "scale(1.007)" },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
      },
      screens: {
        mobile: {
          raw: "(max-width:780px)",
          // max:'780px'
        },
        mh: { raw: "(max-height:720px)" },
        tw: { max: "1300px", min: "779px" },
        ip: { raw: "(min-height:1060px)" },
      },
      colors: {
        offWhite: "#E9F8E8",
        tech: {
          primary: "#435856",
          bg: "#DAEBEC",
          green: "#01A17B",
        },
        arts: {
          primary: "#585343",
          bg: "#BAB8AF",
        },
      },
      backgroundImage: {
        texture: "url('/assets/about/bg-texture.png')",
        bot: "url('/bot/back.png')",
        overlay: "url('/assets/about/bg-overlay.png')",
        "page-left": "url('/events/bg-left.png')",
        "page-right": "url('/events/bg-right.png')",
        "border": 'url("/gallery/border.png")',
      },
      fontSize: {
        xxxl: "224px",
      },
      dropShadow: {
        title: "-14px 17px 0px rgba(0, 164, 120, 1)",
      },
    },
  },
  plugins: [],
};
