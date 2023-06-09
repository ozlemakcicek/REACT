// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries



import { getAuth } from "firebase/auth";

// asagidaki ilk adresten bu sayfanin yapisini aliyoruz.2.adresten ise const firebaseConfig in icini aliyoruz
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // apiKey: "AIzaSyD82ILB3PQencOYvvhSNu8ytSrXGqwUs-Q",
  // authDomain: "movie-app-67c50.firebaseapp.com",
  // projectId: "movie-app-67c50",
  // storageBucket: "movie-app-67c50.appspot.com",
  // messagingSenderId: "928970546820",
  // appId: "1:928970546820:web:e8057b2e99ae2b68e32cd1",

  // biz bu key lerimizi burda gostermeyecegiz.ayri bir.env dosyasi olusturup orda kullanacagiz.buraya ise .env deki isimleri gelecek.gizliyoruz yani.cunku githubda keylerimizi herkesin gormesini istemeyiz ama key olmadan da proje yurumez.o yuzden gitignore da belirtilen .env dosyasinda tutariz.REACT_APP_istedigin isim seklinde keylerini "" olmayacak sekilde yaz.ve o isimleri basina process.env. yazarak buraya getir

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

// const auth = getAuth(app);
export const auth = getAuth(app);


//Bu sayfadaki hazir getirdigimiz yapi ne demek: bir fairbaseConfig ve bir app olusturuyor kodlar.firebaseConfig icine projemizin apikeylerini koyuyoruz.app in icine ise firebaseConfig i koyuyoruz.sonra bu app i de, firebase in getAuth diye bir methodu var onun icine koyup bize bir authentication olusturuyor.kullanacagimiz butun methodlar icine bu auth u koyup gonderecegiz.o yuzden export etmeliyiz


const analytics = getAnalytics(app);
