//! pagelerdeki BASE_URL ve headers kisimlari ortak.axios islemindeki bu tekrarlardan her defasinda yazmaktansa axios instance kullaniyoruz.axios yuklu o.i. tekrardan install etmiyoruz.
//*ayri bir custom hook da olusturup sayfalarda veri cekerken onu kullanacagiz.Sayfasindan The Axios Instance kismindan bakip yap

//!axios create semasini alip duzenleme yapiyorz.degisken adi istedigin sekilde olablr.normalde istek atarken veri cekiminde axios.get(url,headers,body) gibi kullanirdik.simdiaxios yerine degisken adini.get(`stock/firms/`),put(`stock/info`),delete(`stock/id`),post(`stock/firms/info`)..

//*BASE_URL olunca onu endpoint olarak backtick icinde yazariz get isleminde.headers a ,body ye ihtyc yok.post ta ayni endpoint e veriyi gondeririz.
//?normal axios ile veri cekimindeki Token bilgisi bize state den geliyor yani bize yine bir react hooku lazim.onu da js alaninda kullanamaycgmz icin yine custom hook lazim.o yuzden bu sayfayi actik.rafce ile kurduk yapiyi jsx return etmedigi icin return u siliyorz.use ile baslayacak ismi

import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';



const useAxios = () => {
 //*dokumandan alip getirdik axios instance yapisini ve axios u import et.Token bilgisi lazim(useStockCall dan copyala)
//*timeout u sileblrz.
//* .env deki BASE_URL i yaziyoruz 
//*headers a ne koyacagz biz.usestockCall dan getiriyoruz yine ve copy .degisken adini degistirelim.instance olmasin.

 const { token } = useSelector((state) => state.auth);
    const axiosWithToken = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
  
      headers: { Authorization: `Token ${token}` },
    });
    //!Aynisini tokensiz islemler icinde kullanablrz.aynisini kopyala adini degistir.tokensiz islemlerde headers da olmaz kaldir

     const axiosWithPublic = axios.create({
       baseURL: process.env.REACT_APP_BASE_URL,
     });
     //*artik kullanirken axiosWithToken.get(endpoint) seklinde kullancgz.ya da diger methodlar icin ayni sekilde.simdi retun edelim bunlari

     return{axiosWithToken,axiosWithPublic}
     //artik bu kisa formati useStockCall hookunda uzun halin yerine kullanablrz
}

export default useAxios