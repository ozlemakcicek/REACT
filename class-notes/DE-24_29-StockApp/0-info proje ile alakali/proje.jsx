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