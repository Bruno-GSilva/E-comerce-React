/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      DarkGray: {
        10: "#1F1F1F",
        20: "#474747",
        30: "#666666",
        40: "#8F8F8F",
        50: "#CCCCCC",
        60: "#F5F5F5",
      },
      white:"#ffffff",
      Primary: "#C92071",
      Secondary: "#B5B6F2",
      Tertiary: "#991956",
      Error: "#EE4266",
      Success: "#52CA76",
      Warning: "#F6AA1C",
      PrimaryS: "#C92071",
      PrimaryE: "#EDABCA",
      SecondaryS: "#B5B6F2",
      SecondaryE: "#EFEFFF",
    },
    extend: {},
    br: "8px",
  },
  plugins: [],
};
