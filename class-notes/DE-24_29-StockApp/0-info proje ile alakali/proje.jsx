//! herbir folderda  calismadan once frontend.env klasorunu .env ye cevir ve ApiKeyini yukarilardan birinden getir yapistir.env de degisiklik yapinca stop start yap ve yeniden baslat.
//*env dosyasina ekleyecegimiz key imiz  ;                      REACT_APP_BASE_URL= https://15107.fullstack.clarusway.com/


//? App.dok un adresi https://15107.fullstack.clarusway.com/redoc/
//* Login icin email: test20@gmail.com
//* password: Yaz1234!

//? 1-formik-yup da formik ve yup install ettik
//? 2-login-logout da redux-persist(refresh yapinca kullanici bilgileri sifirlanmasin ve login sayfasina atmasin diye kullnlyr) install ettik.
//? 3-data fetch in pages de ise sayfalarda veri cekme islemlerini yapiyorz.va ayrica modul acan icona tiklayinca acilan alanda yeni create islemi, update islemi,delete islemi yapacagz

//? her yeni starter dosyasinda bir onceki yuklemeler hazir geliyor.npm install diyerek aktiflestrimek yeterli(redux-toolkit,axios,material ui zaten hazir gelmisti)


//! bu 2 derste Authentication islemlerini,Route larin ayarlanmasini,Navbar ve Sidebar(mui den Drawer yapisini kullandik) kisimlarini ayarladik.sayfalar arasinda gezineblyrz.Nested CSS kullandik ayni anda yazi ve iconun renginin hover olunca da ayni olmasi icin.Nesting Router kullandik Login icin PrivateRouter kontrolunden sonra Daschboard dan diger sayfalara gecis icin.


//? Postman de duzenli bir dosya olusturabiliriz.Token imizi de her defasinda yazmak yerine kayitta tutabiliriz



//********************************************************************************************************** */
//*! FORMIK  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//********************************************************************************************************* */


//*!1- InitialValues;  obje seklinde stateleri tanimliyorz.ilk hali bos string"" veya istedigin baslangic degeri varsa onu vereblrsn
// initialValues={{email:"",password:""}} gibi

//!2- validate kismi;burda Formik-Yup daki validationShema yi kullanacagiz Formik in kendi validati yerine

//!3- onSubmit={(values),.......}; burdaki values onemli.initialvalues daki degerleri aliyor ve Formdaki alalardoldurulurken value={values.password} gibi yakaliyor ve bize donduruyor


//!4-Callback function; bir form dondurur.aldigi hazir degerler vardir.values(benim verdgm initialvalues lar),errors,touched,handleSubmit....
// bunlari Form icindedeki alanlara isleyecegiz

//!5- Mui nin Form u(TextField) da Fromik ile uyumlu calisir.hem Callback deki degerleri hem de mui nin Form uindaki helperText gibi degerleri beraber kullanabiliriz.
// Formik in kendi Form unu kullanirsan onSubmit e gerek yok.ama html form elementini kullanirsak gerek var.

//!6 validationShema daki dikkat eidlmesi gereken kisim; ustteki shape deki isimler ile alttaki Formik icindeki initialValue isimleri ayni olmali.yoksa validation dan gecmez ve calismaz

//**************************************************************************************************** */

//! REACT TOASTIFY icin; npm install --save react-toastify ile install ediyoruz.

//* import { toast } from "react-toastify";
//*import "react-toastify/dist/ReactToastify.css";  bu ikisini yukariya sitesinden alip yapistiriyoruz componentimizde.
//* sonra herbir mesaj icin bir  const durumu olusturuyoruz ve yine sitesinden hazir degerleri getirip istedigimiz gibi degistireblyrz
//  export const toastWarnNotify = msg => {
//   toast.warn(msg, {
//     position:"top-left",
//     autoClose: 1000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
// };

//************************************************************************************************** */

//! MUI DEN THEME CREATE ETME;

//* App.js de yapiliyor bu islem.siteden gidip aliyoruz herseyi sadece renk icin burda mesela renk degstrblrz.return alaninda ise;create ettigimiz theme yi ThemeProvider ile sarmalladik.icerisine redux Provideri koyduk.bu redux provider icine de butun sayfalarimizin oldugu yapiyi AppRouter i koyduk .ToastContaineri da buraya koyuyoruz

// import { createTheme } from '@mui/material/styles';
// import { green, purple } from '@mui/material/colors';

// function App() {
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//     },
//   },
// });
//   return (
//     
//       <ThemeProvider theme={theme}>
//        <Provider store={store}>  # redux provider
//         <AppRouter />
//         </Provider>
//       <ToastContainer />
//       </ThemeProvider>
//     
//   );
//    }

//*******************************************************/
//? APPROUTER sayfasi

// sayfa acilinca hangi sayfa gozuksun istersen onun path ine / ver.o senin root sayfan oluyor

// Private router ile de nereyi sarmallarsan kullanici login olmadigi muddetce o sayfalara erisim izni yok diyoruz.PrivatRouter componentinin yapisi heryerde ayni sadece navigate ile yonelecegi alani degistirebilirsin tabiki

// normalde Route lar selfclosing ama PrivatRouter icin acmali kapamali oluyor ki arasina sartli acacagi sayfalarin path lerini yazabilsin

// detail sayfasina ozgu bir yazim;path inde /:id yazilir.

// privaterouter in path ine istedigin ismi vereblrsn

//******************************************** */

//! REACT REDUX DEVTOOLS- TOOLKIT

// npm install react-redux
// npm install @reduxjs/toolkit

// bir store dosyasi var ortak havuz.orda reducerlari tanimliyorsun ve devtools ile .env dosyasindaki adresi sifreliyorsun

// bir store dosyamiz olacak app klasoru altinda
// devTools ile kullanicilar projemize girdiginde statelerin icini goremeyecek
// devTools: process.env.NODE_ENV !== "production", bu sabit herzemen.ve reducer lari tanimliyoruz

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });


//* redux icin bir store dosyamiz olacak app klasoru altinda, birde slice larimizi yazacagimiz features klasoru olacak.icerisinde authentication icin authslice ve diger islemler icinde yine dosyalari acalim.
//? slice larda 3 sey onemli.1.name 2-initialState ler. 3-reducerlar. bunlari yine siteden getiriyoruz.reducerlar da, initialstatelerden lazim olanlari state den getirip dolduruyoruz.sonra bu reducerlari icerilerde dispatch ile cagirip kullanacagiz


