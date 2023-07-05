//! Bu custom hook sayfamiz axios methodlarini yazdigimiz sayfa

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSucces } from "../features/stockSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();
  //* custom hook da tanimladik tekrar eden url li yapiyi burda cagirip kisa yol olarak kullanacagz simdi
  //! token bilgisi bize state den geliyor.yani bir react hooku lazim.js alaninda kullanmycgmz icin custom hook aciyorz asagilarda
  //   const getFirms = async () => {
  //     const BASE_URL = process.env.REACT_APP_BASE_URL;

  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //         headers: { Authorization: `Token ${token}` },
  //       });
  //       console.log(data);
  //       const url = "firms";
  //       dispatch(getSucces({ data, url }));
  //       // dispatch(getSucces({ data, url:"firms"}))
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };
  //   const getBrands = async () => {
  //     const BASE_URL = process.env.REACT_APP_BASE_URL;

  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios.get(`${BASE_URL}stock/brands/`, {
  //         headers: { Authorization: `Token ${token}` },
  //       });
  //       console.log(data);
  //       const url = "brands";
  //       dispatch(getSucces({ data, url }));
  //       // dispatch(getSucces({ data, url:"brands"}))
  //     } catch (error) {
  //       dispatch(fetchFail());
  //     }
  //   };
  //! yukarıdaki gib her seferinde yazmak yerine daha modüler bir yapı kurarak tek bir fonksiyonla bir den fazla get işlemini gerçekleştirebiliyoruz.Bu yapinin adi axios instance dir.Yine bir Custom Hook olusturalim hooks altinda

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // const getStockData = async (url) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/${url}/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     console.log(data);
  //     dispatch(getSucces({ data, url }));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  // const deleteStockData = async (url,id) => {
  //   dispatch(fetchStart());
  //   try {
  //      await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     getStockData(url);
  //     toastSuccessNotify(`${url} successfuly deleted!`)
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(`${url} not successfuly deleted!`);

  //   }
  // };
  //! istek atarken ortak olan base_url  ve token gibi değerleri her seferinde yazmak yerine axios instance kullanarak bunları orada tanımlıyoruz. Ve sonrasında sadece istek atmak istediğimiz end pointi yazmamız yeterli oluyor.

  //!GET ISLEMI
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios.get(`${BASE_URL}stock/${url}/`, {
      //   headers: { Authorization: `Token ${token}` },
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      console.log(data);
      dispatch(getSucces({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //!DELETE ISLEMI
  // url in sonuna id istiyor
  // sil ve tekrar getStockData ile guncelle url i
  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      // await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      getStockData(url);
      toastSuccessNotify(`${url} successfuly deleted!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} not successfuly deleted!`);
    }
  };

  // getStockData nin aynisni copyledik.isimleri degistirdeik ve post isleminde url ve body gider.
  // post isleminde tekil bir veri veriyor.tekil veriyi dispatch e gonderirsek butun state i bosaltir sadece tekil veriyi yerlestirir.o yuzden ayni delete de yaptigimiz gibi getStockData yi calistirmam lazim .return et ve FormModal da ve ilgili baska yerlerde cagir

  //! POST ISLEMI
const postStockData = async (url, info) => {
  dispatch(fetchStart());
  try {
    await axiosWithToken.post(`stock/${url}/`, info);

    // console.log(data);
    // dispatch(getSucces({ data, url }));
    getStockData(url);
    toastSuccessNotify(`${url} successfuly created!`);
  } catch (error) {
    dispatch(fetchFail());
    toastErrorNotify(`${url} not successfuly created!`);
  }
};

  //! PUT (update) ISLEMI
  // App.doc dan update firm stock unun url ini aliyoruz ve postman de yeni bir request acip yapistiriyoruz.sonunda {id} var bunu silip degistirecegimiz verinin id nosunu yazacagiz.istegimizi PUT yapiyorz.Headers a ise key ve value ya yine logindeki token i alip token bosluk deyip yapistiriyorz.tekrar body ye gelip raw, JSON secip simdi duzeltecegimiz veriyi get kismindan getirmlyz.gete gidip token bilgimizle send yapip gelen verilerden hangisini duzeltmek istyrsan onun body sini al ve put islemindeki body ye yapstir.id sini de url in sonuna ekle.duzelt ve send yap.altta duzeltilmis halini verir.
  // code kismi:usttekilerden birini copyalayip duzenlemeler yaptik.put islemi de url ve body alir.url in sonuna id aliyordu ekleyelim.nerden geliyor?Var olan veriden geliyor.get yaptik ve ordakini almistik.sonlarina hep / istiyor.return edelim ki icerde kullnbllm
 
  const putStockData = async (url, info) => {
   dispatch(fetchStart());
   try {
     await axiosWithToken.put(`stock/${url}/${info.id}/`, info);

     // console.log(data);
     // dispatch(getSucces({ data, url }));
     getStockData(url);
     toastSuccessNotify(`${url} successfuly updated!`);
   } catch (error) {
     dispatch(fetchFail());
     toastErrorNotify(`${url} not successfuly updated!`);
   }
 };
  //*bu sekli ile modal acilinca inputlari doldurunca submit yapinca da yeni bir veri create ediyor, edit icin kaleme basinca dolu alan gelip duzeltme yapip submit yapinca da yeni bir veri create ediyor.halbuki burda update yapmali idi. o zaman handleSubmite gidip(Firmmodal de) ayarlamalari yapalim

  return { getStockData, deleteStockData, postStockData, putStockData };
};

export default useStockCall;
