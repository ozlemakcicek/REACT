//! önce bu sayfa,sonra action sayfasinda gelen fonksiyonlarin type ve payload i, sonra reducer da fonksiyonlari olustur ve actiondaki type ve payload i burda kullanlaim, en son olarak da html etiketlerinin sayfasinda yazilan fonksiyonlari ve degiskenleri useSelector veya useDispatch ile getir
// Buyuk projelerde Redux en cok tercih edilen yol.
// tepede bir app den gonderme yapiliyor, isteyen kardesler aliyor.tek tek gondermeye gerek yok.UseState kullanilmiyor.
// props da dededen babaya,ondan cocuga,ondan toruna gibi zincirleme olmali.kardesler de  ayni veriyi ayni anda gormez ayriyeten
// contex de provider ile sarmalladigimiz componenti cocuklara gonderiyoruz onlar da yakaliyor.createContex ve useContex vardi

//? 2 yol ile yapilir.1-herseyi elin ile yaz.3 islem sayfasi olur.reducer,action ve counter,input gibi bir dosya. 2- hazir toolkitt getirecegiz.action yok bunda.yukle ve baka baka yap.

//! ilk once Contex de oldugu gibi App.js sarmallayici bir alan(store olacak adi) acacagiz.Contex de createContex di burda createStore() olacak.Ekranda gorecegimiz butun cocuklari yazip onlari da provider ile sarmalliyoruz ve actigimiz alani yolluyoruz

//! oyuncular html taglarinin oldugu iskelet yapi, Action sayfasi yonetmen(iki sayfa arasindaki baglantiyi kurar.sadece fonksiyonun adini bildirip,type ve istersen payload yazdigin, oyuncu inputtan veri gonderdiyse onun alisini saglayan sayfa), ve fonksiyon ve degiskenlerin oldugu sayfa(asil isi bu yapar)

//* reducer sayfasini rafce ile degil kendimiz const counterReducer=( , ) seklinde iki parametree alacak sekilde yazariz.1.parametre butun useState leri state={} icinde aliriz. 2.parametre: action().bundan gelen payload i yazdirabilirsin asagilarda

//? ve altina bir if kalibi y da switch case return yapisi kurariz.ve bunlari Counter sayfasinda cagirirz.fonksiyonlari useDispatch, degsikenleri useState ile cagiririz

//*createStore eskide kaldi.yeni adi legacy_createStore.alians vererrek createStore u kullanablrsn.
import { combineReducers, legacy_createStore as createStore } from "redux";
import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import counterReducer from "./redux/reducers/counterReducer";
import todoReducer from "./redux/reducers/todoReducer";

function App() { 
   //* birkactane reducer kullanacaksak combineReducers({{}}) icinde isim tak ve :reducer adi yaz aralarinda komma ile
  //* butun reducerlari tek bir degiskende toplayalim.onu createReducera ekle ve provider ile gonder

  const topluReducer = combineReducers({
    counterReducer: counterReducer,
    todoReducer: todoReducer,
  });

  //sarilar benim verdigim isim beyazlar redux in methodlari

  //! 1-once createStore u olusturalim(el ile yazinca bu kod.kitt den alinca baska birsey yazacagiz).const store dememiz sart baska isim olmuyor.redux i harekete geciren cumle bu.Icine reducer kactane ise yazabilirsin veya degsikene atayip sadece ismini yazblrsn)actigimiz bu alani ekranda gorecegimiz cocuklari sarmallayan Provider ile gonderecegiz


  
  const store = createStore(topluReducer);

  // yukaridaki store lari gonderiyoruz.Burda aslinda en tepe App.js de dedikki Reducerlari butun sayfalar gorebilsin.sarmallama ile yaptik bunu
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
