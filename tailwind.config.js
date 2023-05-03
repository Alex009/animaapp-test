module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray_400: "#8f8e8e",
        gray_500_26: "#999ba826",
        red_400: "#eb5e55",
        blue_gray_900: "#3a3335",
        gray_200: "#eeeeee",
        white_A700: "#ffffff",
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 3px  4px 0px #999ba826" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
