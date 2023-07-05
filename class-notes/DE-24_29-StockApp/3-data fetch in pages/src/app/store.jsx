import { configureStore } from "@reduxjs/toolkit";


 //*simdi bu olustrdgmz state i bankaya,havuza yani store a tanitmamiz lazim.burda en asagiya bakarsak export default stockSlice.reducer; diyoruz.yani reducerlari export ediyorz.store da import ederken de stockReducer olarak import ediyorz.ve tanitiyoruz ve store un reducer bolumunde.Boylece redux Provider ile sarmalldgmz heryrden stockReducer a ulasablcgz( App.js de AppRouter(onun icinde de sayfalarimiz var) i Provider ile sarmallayark yaptik )Artik iclerini doldurabiliriz veriler ile.firms sayfasina gidelim

import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice";


import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// localStorage.setItem("user", user)

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock:stockReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store);
export default store;


//! Verileri componentler arasinda aktarmanin 3 yolu var.

//!1-Props mantigi elden ele..arada sira atlamasina izin yok.byk projelerde Prop drilling e(prop karmasasina ) sebep olur bu.

//! 2- react redux 3.parti kutuphane kullanma.Bu en ideali.alt componentten aralardakine ,en usttekine rahatlikla veri aktarimi yapablrsn.Global management sistemi var burda. store(banka,havuz) ve slice(yetkilerin verildigi transferlerin,erisimin saglanmasi nin izninin ciktigi yer) var.ve tabiki burdaki islemler bitince artik provider ile sarmallanan her yerdeen ulasilabilir state lere

//! 3- Context api yontemi:react cilerin icimizden cikip 3.part kutuphane kullanmayalim diye gelistirdigi sistem
