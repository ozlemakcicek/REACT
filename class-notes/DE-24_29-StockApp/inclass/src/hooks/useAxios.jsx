
//!useSelector react hook una ihtycmz var ama js alaninda kullanamayacagmz icin bu customhooku olustrdk
//! bu customhook sadece tekrar tekrar url ve headers i yazmamak icin olusturuluyor
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth); //& tokeni stateden okumak için axios instanceları custom hook içerinde tanımladık.
  //+ birden fazla instance oluşturabiliriz. instance ı tanımladığımız isimle kullanabiliriz.bu asagidaki yapiyi axios un sayfasindan tehe axios instance dan getirip adini verdik, baseUrl ini verdik,headers icin lazim olanlari useStock Call dan getirdik

  const axiosWithToken = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { Authorization: `Token ${token}` },
  });
  const axiosWithPublic = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });
  return { axiosWithToken, axiosWithPublic };
};

export default useAxios;

// export const axiosWithPublic = axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL,
// });
