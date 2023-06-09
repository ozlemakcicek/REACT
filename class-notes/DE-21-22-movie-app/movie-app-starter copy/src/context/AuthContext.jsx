
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
//keyleri .env dosyasina tasidik ve firebaseConfig dosyasina da sifreli hallerini verdikten sonra projemizi stop-start yapiyoruz. .env dosyalarinda yapilan degisikliklerde muhakkak durdurup baslamak lazim.



//! artik configirationumuz tamam simdi bir contex yapisi kurup onun icinde firebase in methodlarini kullanacagiz.
//* src altinda bir contex folderi, onun icinde de AuthContext dosyasi olustur.Olusturulan bu component ile ilgili yerleri sarmallayarak ordan value lari gondeririz.Bunun icin rafce ile bir component olusturuyoruz.sonuna Provider kelimesini ekleyelim. bunu artik componentin icinde kullanacagiz.create ettigimiz contex in icindeki provider ile value gonderecegimiz yapiyi sarmalliyoruz.bu arada provider a value attributu ekle.simdilik null yap giden value yu.peki kimi sarmallayacagiz?

//? local de tutulan icin state yeterli.ama contex i daha cok global degiskenler icin kullaniriz.heryerde kullanacagimiz bir current user var mesela.prop ile olursa katman katman inmek lazim.ama contex yapisi ile buna gerek yok.nerde ihtiyac varsa onu sarmallarsin.mesela burda AppRouter herseyi bagliyor o yuzden onu sarmallariz.AppRouter da App.js de oraya gidip AuthContex.Provideri icinde kullandigimiz component ile sarmallariz.bu componentin oldugu sayfada ise {children} deriz sarmalladigimiz herseye.yani biz childeren i sarmallayacagiz.props yerine de {children} yazariz.ezbere gerek yok.her yerde ayni kalip
//contex in ilk sarti creat etmek ve disari acmak icin export edelim.const daki isim onemli degil
//?

import { createContext } from"react";
import { auth } from '../auth/firebase';


 export const AuthContex = createContext();

 
const AuthContextProvider = ({ children }) => {

  // Method kullanmak icin Get Start dan takip edelim.mesela sign up new users methodunu yapalim, aynisini aliyoruz.burda contaxt sayfasinda methodlari kurup, ilgili kullanacagimiz yere gonderecegiz.kullanmak icin once bir asyncron function olusturalim ve icine aldigimiz yapiyi koyalim.ister then..catch kalsin ister async await yap.await i methodun onune yazip bekle diyoruz ve burdan responsu yakalamak icin bir degiskene atamaliyiz.otomatik gelen auth ve methodu import et.async yapimizda da bu methodu cagiracagimiz yere email ve passwordu gondermeliyiz.artik bu createUser methodunu heryerde kullanabilirz.bunu register sayfasinda kullanacagiz.burdan gonderelim valuenun icinde.yada bir obje olusturup value icine bu objenin adini yazariz

  //?try..catch.. i de yapalim.basarili ve hata durumunu yakala

  const createUser = async (email,password) => {
    try{
    let userCredential=await
    createUserWithEmailAndPassword(
      auth,
      email, 
      password);
    console.log(userCredential);
  }catch(error) {
    console.log(error);
  }
    // .then((userCredential) => {
    //   // Signed in
    //   const user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });
  };
  //methodu kullanacagimiz register sayfasina gonderelim burda.valuenun icine tek tek methodlari yazmaktansa values diye bir obje olusturalim ve null u silip values yazalim.methodlari values icine yazariz
const values={createUser}
  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};

export default AuthContextProvider;