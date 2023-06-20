/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  //? kendi theme ayarlarimizi eklemek icin bu kismi ekliyoruz
  theme: {
    //!eger tailwind in default theme ayarlari yerine kendimizinkini eklemek istemiyorsak mutlaka extend objesi icinde eklememiz gerekli.yoksa tum theme objesi degsir ve kendi eklediklerimiz disindakileri kullanamayiz.theme nin hemen altinda colors yazinca sadece kendi belirlediklerimiz, extendin altinda colors yazinca hem kendi eklediklerimiz hem tailwind inkiler olur.
    extend: {
      colors:{
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light": "#d3dce6",
        "red-main": "#ff4b45",
      },
    },
  },
  plugins: [],
  darkMode:"class"
};
