/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryBlue: "#1062bf",
        greenBlue: "#4e758a",
        bgBeige: "#f4f2ee",
        darkColor: "#303030",
        darkLightColor: "#212121",
      },
      boxShadow: {
        button: "0px 0px 4px 1px rgba(0, 0, 0, 0.2)",
      },
    },
    screens: {
      xxs: "375px",
      xs: "425px",
      xsm: "465px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
