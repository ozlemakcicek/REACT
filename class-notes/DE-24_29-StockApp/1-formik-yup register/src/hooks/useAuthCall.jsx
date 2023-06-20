
//! custom hook sayfamiz burasi:3 sarti var.
//! 1- use ile baslayacak   2- return ederken bir app.jsx degilde deger,fonksiyon dondurur   3- parametre alir
//* api ye istek atabilmek icin bior fonksiyona ihtycmz var.biur dosya actik onun icin authCall.jsx.redux kullandgmz icin react hook larina ihtycmz var ama js alaninda buna izin yok o nedenle custom hook kullanacgz.bir hook dosyasi aciyorz
// bu sayfa butun lazim olan authentication(register,login,logout) sayfalar icin gerekli islemleri tek tek degilde toplu sekilde yazip rahat yonetelim, ayni kodlari surekli yazmayalim diye yapiyoruz.
//*rafce ile componentin yapisini olustryrz.axios lazim import ediyoruz.react redux kullandgmz icin Dispatch kullaniyoruz.ve veri cekme islemi ni try catch icerisinde yaziyoruz.axios da veriler data seklinde gelir hep, onu destruction seklinde karsiliyoruz ve post istegi atiyoruz.



import React from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { fetchFail,fetchStart, registerSuccess } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'

// asagidaki url yi kendi api sayfamizdan aldik.account_register_create alanindan oka tiklayinca verir.Gelen veriyi de gonderecegiz  ve 2.parametre olarak url in yanina yaziyorz
// c async await yapisinda ki fonksiyonumuz bir parametre alacak bu gelen veri oluyor ve obje formatinda olacak ve icerisinde ustom hook lar

const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigate= useNavigate()

    
    const register = async (userInfo)=>{
        dispatch(fetchStart());
        try {
            const { data } = await axios.post(
              "http://15107.fullstack.clarusway.com/account/register/",
              userInfo
            );
            console.log(data);
            // artik cektigimiz bu veriyi kullanacagimiz sayfalara gidebiliriz.once register sayfasina gidelim

            //console da veya postman de register verilerini girince bize bir token ve username dondu artik bunu store a gondereblrz. store sayfasina gondermenin son islemi registerSuccess ve icine de aopi den gelen respons u gonderiyorz
            dispatch(registerSuccess(data))
            //register islemi basarili ise bizi stock ana sayfaya yonlendir.
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
            
        }
    }
 return register
}

export default useAuthCall