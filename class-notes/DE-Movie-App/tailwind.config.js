//contentdeki ifade su demek.src nin altinda hangi dosya ya da klasor olursa olsun,onlarda hangi isim ile olursa olsun, uzantisi js,jsx,ts,tsx olanlari tani.bunlar src altindakiler icin gecerli

// components icin ise coma dan sonra "./components/**/'.{js,jsx,ts,tsx} eklenir"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing:{
        'ali':'0.5rem'
      }
    },
  },
  plugins: [],
};

