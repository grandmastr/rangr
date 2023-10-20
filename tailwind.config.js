/** @type {import('tailwindcss').Config} */
//@ts-ignore
module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: 'red',
      },
    },
  },
  plugins: [],
}
