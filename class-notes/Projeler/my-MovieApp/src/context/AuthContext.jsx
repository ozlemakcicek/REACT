import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
//keyleri .env dosyasina tasidik ve firebaseConfig dosyasina da sifreli hallerini verdikten sonra projemizi stop-start yapiyoruz. .env dosyalarinda yapilan degisikliklerde muhakkak durdurup baslamak lazim.

//! artik configirationumuz tamam simdi bir contex yapisi kurup onun icinde firebase in methodlarini kullanacagiz.
//* src altinda bir contex folderi, onun icinde de AuthContext dosyasi olustur.Olusturulan bu component ile ilgili yerleri sarmallayarak ordan value lari gondeririz.Bunun icin rafce ile bir component olusturuyoruz.sonuna Provider kelimesini ekleyelim. bunu artik componentin icinde kullanacagiz.create ettigimiz contex in icindeki provider ile value gonderecegimiz yapiyi sarmalliyoruz.bu arada provider a value attributu ekle.simdilik null yap giden value yu.peki kimi sarmallayacagiz?

//? local de tutulan icin state yeterli.ama contex i daha cok global degiskenler icin kullaniriz.heryerde kullanacagimiz bir current user var mesela.prop ile olursa katman katman inmek lazim.ama contex yapisi ile buna gerek yok.nerde ihtiyac varsa onu sarmallarsin.mesela burda AppRouter herseyi bagliyor o yuzden onu sarmallariz.AppRouter da App.js de oraya gidip AuthContex.Provideri icinde kullandigimiz component ile sarmallariz.bu componentin oldugu sayfada ise {children} deriz sarmalladigimiz herseye.yani biz childeren i sarmallayacagiz.props yerine de {children} yazariz.ezbere gerek yok.her yerde ayni kalip
//contex in ilk sarti creat etmek ve disari acmak icin export edelim.const daki isim onemli degil
//?

import { createContext } from "react";
import { auth } from "../auth/firebase";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContex = createContext();

const AuthContextProvider = ({ children }) => {
  // Method kullanmak icin Get Start dan takip edelim.mesela sign up new users methodunu yapalim, aynisini aliyoruz.burda contaxt sayfasinda methodlari kurup, ilgili kullanacagimiz yere gonderecegiz.kullanmak icin once bir asyncron function olusturalim ve icine aldigimiz yapiyi koyalim.ister then..catch kalsin ister async await yap.await i methodun onune yazip bekle diyoruz ve burdan responsu yakalamak icin bir degiskene atamaliyiz.otomatik gelen auth ve methodu import et.async yapimizda da bu methodu cagiracagimiz yere email ve passwordu gondermeliyiz.artik bu createUser methodunu heryerde kullanabilirz.bunu register sayfasinda kullanacagiz.burdan gonderelim valuenun icinde.yada bir obje olusturup value icine bu objenin adini yazariz

  //?try..catch.. i de yapalim.basarili ve hata durumunu yakala
  //yeni bir kullanici olusturmak icin kullanilan firebase methodu asagida.try-catch(basarili hata durumu icin mesaj kisminin kodunu ekleyelim altlarina)
  //register edilip mesaji geldikten sionra artik bu sayfada kalmasin navigate ile home a gitsin tekrar.useNavigate ise sadece Router yapisinda kullnailabilir.Router yapimiz app.js e bakarsak context yapisinin icinde ve context router yapisinin disinda .o zaman bu distaki kisimda Routera ait bu useNavigate hookunu kullanamaiyz.o zaman AppRouter daki BrowserRouter i herseyin en ustu olan App.js i sarmallarsak heryerde hersey gecerli olur.App.js de index.js de

  const navigate = useNavigate();
  //asgidakini onAuthStateChanged methodu icin yaptik
  const [currentUser, setCurrentUser] = useState();
  // ve bu takip methodunu applikasyonumuz ilk basladiginda etkin olsun,bir kere cagrilsin sonra kendisi kontrollerini otomatik yapsin diye useEffect icinde cagiriyoruz

  useEffect(() => {
    userObserver();
  }, []);

  console.log(currentUser);

  // register icin olan method(kullanici olusturma) ve register asamasinda kendi girdigimiz isim ve fotoya gore bir profil guncellemesi icin(updateProfile) methodlar.opnce user create edecek sonra profili update yapacak.async await de pes pese kullanilabilir

  const createUser = async (email, password, displayName) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //? kullanici profilini guncellemek icin kullanilan method.simdilik sadece displayName i guncellesin.photo yu silelim.parametre olarak displayName i yazalim.asagiya da karsilik olarak objelerde key value ayni ise bos birakabiliriz ya da displayName:displayName, yapabilirz.
      await updateProfile(auth.currentUser, {
        displayName,
      });
      toastSuccessNotify("Registered successfully");
      navigate("/");
      // console.log(userCredential);
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
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

  //! firebase in register methodunu(sign up methodu) ve basarili basarisiz durumlardaki toastify mesaj kodlarini yazdiktan sonra simdi firebase in login icin olan sign in methodunu register methodunun sonuna ayniyla siteden alip yaziyoruz.then..catch ile de yazilabilir ama biz o kismi almayip async await ile yazacagiz.yine bir degiskene atayacagiz ve try catch durumlarindaki mesaji yazacagiz.ve giris yapildiktan sonra home a yonlendirsin.methodda istedigi email ve passwordu da parametre olarak gonderecegiz.ve hazir olan bu methodu artik value lara ekleyip applikation un her tarafindan ulasilir hale getiriyoruz.importlari unutma.simdi ilgili yerden cagir ve methodu kullan.ilgili yer login sayfasinin submit durumu

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  //* => Authentication => settings => Authorized domains => add domain
  //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      toastSuccessNotify("Logged in successfully");
      navigate("/");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  //! log out(sign out) icin sadece firebase in sign out methodunu aynen al,icerisine auth disinda herhangibir parametre almiyor sadece cagirilip value ya ekleniyor.o yuzden asncron yapiya da gerek yok.ve toastify in mesaj kodunu yaz.methodun importunu unutma.ve navbardaki logout butonuna onclick ile calismasini saglayalim

  const logOut = () => {
    signOut(auth);
    toastSuccessNotify("Logged out successfully");
  };

  //! kullanicinin durumunu kontrol edip ona gore state i ayarlayan method onAuthStateChanged(auth, (user);  user varsa yoksa diyoruz.user varsa onun bilgilerini bir state olusturup(yukarida) orda bilgileri tutabiliriz.

  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    // sadece user dersek butun data gelir ama cok fazla.bunu distruction yapip isimize lazim olanlari alalim

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
      } else {
        setCurrentUser(false);
      }
    });
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Sign in methodlarda  Google ile girişi enable yap(etkinlestir)

  //! Projeyi deploy ettikten sonra popUp calismaz.Projenin calismasi icin google sign-in çalışması için domain listesine firebase sayfasindan asagidaki adimlari takip ederek deploy linkini ekle.bu projemizin browserdaki linki
  //* => Authentication => settings => Authorized domains => add domain

  //? google ile girislerde 2 durum var.1-popUp ile dogrudan mail hesabi ile giris.bunun da iki kodu var. 2- Redirect ile once baska bir sayfaya gidip ordan google hesabini secme.LMS deki gibi

  const signUpProvider = () => {
    // Google ile giris yapilmasi icin kullanilan firebasein iki methodunu kullaniyoruz siteden alip geliyoruz.bu sefer then catch ile yaopalim.aralari temizleyelim.importlari yapalim.herkese acik hale gelsin diye value ya ekleyelim.ve ilgili yerde kullanalim.register ve login page lerinde google butonu var oralara gidip isliyourz

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        //Acilir pencere ile giris yapilmasi icin kullanilan firebase methodu
        toastSuccessNotify("Logged in successfuly");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };


//!ForgotPassword methodu;firebase den al ve icine auth, email yaz.mesajlari yaz ve bunu da values lara ekleyerek ilgili yere gonder(log in sayfasina).orda da bu methodu kullan icerisine emaili yazarak

const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      toastWarnNotify("Please check your mail box!");
      // alert("Please check your mail box!");
    })
    .catch((err) => {
      toastErrorNotify(err.message);
      // alert(err.message);
      // ..
    });
};



  //Navbar daki currentUser i dinamik hale getirmek icin gonderiyoruz
  const values = { createUser, signIn, logOut, signUpProvider, currentUser,forgotPassword };
  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};

export default AuthContextProvider;
