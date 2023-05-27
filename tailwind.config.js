/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        md: "1fr 30%",
      },
      height: {
        100: "420px",
      },
    },
  },
  plugins: [],
};
