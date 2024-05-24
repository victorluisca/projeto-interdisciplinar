/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        "cor-primaria": "#112D4E",
        "cor-secundaria": "#3F72AF",
        "cor-tercearia": "#DBE2EF",
        "cor-quartearia": "#F9F7F7",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif"],
    },
  },
  plugins: [{ tailwindcss: {}, autoprefixer: {} }],
};
