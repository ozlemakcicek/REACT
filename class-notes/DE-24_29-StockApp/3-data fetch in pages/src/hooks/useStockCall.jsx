//! postmande Post ve Get islemlerini yapiyoruz önce.App doc dan ilgili sayfa ile alakali url i al(get ve post da ayni adres) ve Postman de add request yap,ismini ver.Post icin body,raw,JSON ve Post sec.siyah alandan body nin yapisini  getir ve doldur ekranda ne gozuksun istersen. sonra Headers da key ve Value yerine de Token bilgisini(login deki key) gir ve send de.201 created yazip id li veri donduruyorsa tamamdir post islemi.token in daha once Admin Panel de manager ve Permission yetkisini almis olmais lazim

//* Get islemi  icin de ayni url i copyala Postmane ve Get sec.Headers da key ve value(yine ayni token) yaz ve send yap.201 created ve id li yapi geldiyse tamammdir.Get islemi ile verileri goruruz,guncel hal yani.
//?artik VS de ilgili sayfada code lari yazablrz Get icin.


//!Firms icin.Brands icin ayni yapiyi kullanacagimiz icin fonksiyonu burda tanimlayip oralarda kullanacagiz.Bir Custom hook aciyorz yani.Fakat bunlari da tek tek yazmaya gerek yok. page icin de ayni sadece url deki son endpoint leri farkli

import React from "react";

import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toastSuccessNotify } from "../helper/ToastNotify";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // const getFirms= async()=>{
  //   dispatch(fetchStart())

  //   try {

  //     const { data } = await axios.get(`${BASE_URL}stock/firms`,{headers:{Authorization:`Token ${token}`}});
  //     console.log(data);

  //     const url="firms";
  //     dispatch(getSuccess({ data, url }));

  //   } catch (error) {
  //     console.log(error);

  //     dispatch(fetchFail())
  //   }
  // }

  //  const getBrands = async () => {
  //    dispatch(fetchStart());
  //    try {
  //      const { data } = await axios.get(`${BASE_URL}stock/brands`, {
  //        headers: { Authorization: `Token ${token}` },
  //      });
  //      console.log(data);

  //      const url = "firms";
  //      dispatch(getSuccess({ data, url }));
  //    } catch (error) {
  //      console.log(error);

  //      dispatch(fetchFail());
  //    }
  //  };

  //! 6 tane ayni yapiyi yazmamak icin endpointleri dinamik hale getiriyoruz.parametre aliyor.url diyeblrz.
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}stock/${url}/`, {
        headers: { Authorization: `Token ${token}` },
      });
      console.log(data);

      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);

      dispatch(fetchFail());
    }
  };


  //!Delete islemi icin once Postman de istegi gonder.Api doc den firms delete den url i al.sonunda {id} yaziyor.Delete secip url i kopyala ve hangi id numarali elemani silmek istyrsan(get firms den bakablrsn) {id} yi sil yerine id no yaz, headers da token i yaz ve send yap.herhngi bir veri donmuyor sadece 204 veriyorsa acilan sayfada ok dir.tekrar get e gelip send yaparak kontrol ede3blrsn.sonra gelip codu yaz
  //* getStockdata nin aynisini alip ismini degistir.url in yaninda birde id lazim bize.methodu delete yap.url adresinin sonuna backtick icindeki sartlara gore id yi yaz ve sonuna / lazim muhakkak.herhangibir veri donmedigi icin direkt await axios yapblrz.console log da silinir dolaysyla.Verileri guncellemek icin get istegi atmistik.O zaman getStockData yi cagiracagz ve neye gore cagiracagz?.endpoint(burda url) bekliyor bizden.ve kullanablmk icin return e ekleyecegiz.calismasi icin silme iconumuz FirmCard ve BrandCard da idi. onlara gidip fonksiyonu cagirip import ediyorz.ve iconun onclick ine tanitiyorz

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
        headers: { Authorization: `Token ${token}` },
      });

      getStockData(url);
      toastSuccessNotify(`${url} successfuly deleted!`);
    } catch (error) {

      dispatch(fetchFail());
      toastSuccessNotify(`${url} not successfuly deleted!`);
     
    }
  };
  //  return {getBrands,getFirms}
  return { getStockData, deleteStockData };
};

export default useStockCall;
