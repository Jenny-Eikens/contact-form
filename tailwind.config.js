/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "hsl(148, 38%, 91%)",
        "medium-green": "hsl(169, 82%, 27%)",
        "warning-red": "hsl(0, 66%, 54%)",
        "medium-gray": "hsl(186, 15%, 59%)",
        "dark-gray": "hsl(187, 24%, 22%)",
      },
    },
  },
  plugins: [],
};
