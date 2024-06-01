/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        "cor-primaria": "#112D4E",
        "cor-primaria-variacao": "#173D6A",
        "cor-secundaria": "#3F72AF",
        "cor-tercearia": "#DBE2EF",
        "cor-quartearia": "#F9F7F7",
        "cor-cinza": "#c0c0c0",
        "cor-verde": "#24AB70",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif"],
    },
  },
  plugins: [{ tailwindcss: {}, autoprefixer: {} }],
};
