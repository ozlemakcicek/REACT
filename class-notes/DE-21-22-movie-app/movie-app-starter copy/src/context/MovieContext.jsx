import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
// bir movieContext yapmak zorunda degiliz.Sadece anasayfada ve icindeki card componentlerde kullanacagiz.Ama ileride projeyi gelistirmek istedigimizde favori movieler eklemek icin de lazim.rafce ile olusturup adinin sonuna Provider ekleyelim

//? ilk sarti create etmek contexti ve degiskene atayalim ve use edeerken kullanacagimiz icin export ediyoruz.
//* create ettigimiz degisken.Provider olarak, div yerine bir  icinde bir value propu olusturup icerisinde ilgili value lari gondereblrz
//?ve bana gelen children propunu bununla sarmalliyoruz


export const MovieContext = createContext();


//! Api_key e bagli bir adresimiz varsa backtick icinde sonuna da api_key=${API_KEY} yaz.bi Api_KEY ise sifreli geliyor .env dosyasindan.onu buraya alma kodu da hemen asagidaki. .env ye api keyi  ekle ve projeyi stop start yap

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;



const MovieContextProvider = ({ children }) => {
    //datayi cekmek icin bir useState tanimlayalim.birde loading kullanabiliriz.data gelmeden once bir spinner(donen yukleniyor iconu) gostersin diye.baslangicta false olur.ve bu iki degiskeni context den value olarak gonderelim
const [movie, setMovie] = useState([]);
const [loading, setLoading] = useState(false);


//?movie ler ilk acilista gozuktugu icin useEffect kullanacagiz.ama icinde cagirma, degsikene ata axios u  ve useEffect icine o degskeni yaz.cunku baska yerde de kulanacgz.axiosu import et.get methodunu kullanacagz ve o fonksiyonu useEffect icinde cagir

useEffect(() => {
  getMovies(FEATURED_API);
}, []);

//getMovies icine parametrik bir deger yazacagiz cunku bu fonksiyonu search yaparken baska bir adres icin kulanacgz.ne gelirse demek parametrik deger.
//? axios kullaninca genlede data response icindeki datada olur.consoledan gordgmze gore resp.data.results icinde.
//* movie leri state attik,context den gonderdik ve artik yakalayalim.Main sayfasinda datalari sergiliyorz.context den cekip gosterelim 
//API ifadesi bir parametre istedigin ismi verebilirsin
const getMovies = (API) => {
    //loading baslangicta false.bu bir veri gelmeden once true yapilir, birde islem bittikten sonra false olmaliki gozukmesin tekrar.yani hem then den sonra hem catch den sonra yazmaliyiz ya da boyle ayri ayri yazmak yerine finally ile herhalukarda calisisn yapariz
    setLoading(true)
  axios
    .get(API)
    // .then((res) => console.log(res))
    .then((res) => setMovie(res.data.results))
    .catch((err) => console.log(err))
    .finally(()=>setLoading(false));
};
  return (
    <MovieContext.Provider value={{ movie, loading, getMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

// bu contex sayfamizla App.js de nereyi sarmallamamiz gerekiyorsa orayi sarmallayacagiz

export default MovieContextProvider;

// simdi verileri cektik onlari main de sergileyelim
