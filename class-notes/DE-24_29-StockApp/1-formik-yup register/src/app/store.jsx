
//! redux icin store dsyasi olusturduk ve yine redux devTools kullanacagiz.deployment sonrasinda kullnmamak icin asagidaki degiskeni tanimlariz
//!  devTools: process.env.NODE_ENV !== "production",

//* reducerlari olusturuyoruz ve configureStore methoduna reducer degerimizi tanimlamis olyrz(auth:authReducer)

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

//! sayfayi yenileyince bilgiler kaybolmasin bir localStorage de kayitli kalsin diye bu persist sayfasini kullaniyoruz.uzun uzun da kendin de olusturabilirsin localstorage i.


//! persist bize localStorage olusturur ve verileri kalici yapariz boylece

//www.npmjs.com/package/redux-persist  sitesinden importlari getirip kalibi aliyoruz degsklikleri yapiyoruz.once install yapiyoruz tabiki


 import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 


const persistConfig = {
  key: "root",
  storage,
};

// bizim verilerimiz root da degil authReducer da oldugu icin rootReducer i degistiriyoruz
const persistedReducer = persistReducer(persistConfig, authReducer);



const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export   let persistor = persistStore(store);
export default store;
