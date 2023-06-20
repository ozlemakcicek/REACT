import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

//* redux persist icin once yukluyoruz terminale npm i redux-persist diyerek.sonra sayfasindaki importlardan 2 ve 3.yu alip getiriyoruz.ilkini almiyoruz cunku biz redux toolkit kullaniyorz.o el ile olustrnlar icin.bizim kendi reducerimiz var authreducer diye o yuzdn rootReducer i da almyrz.devamindaki kopileri de aliyoruz.root olanlari auth a donduruyoruz.takip etmesini istedigimiz anlaminda

import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedReducer = persistReducer(persistConfig, authReducer);
 

const store = configureStore({
  reducer: {
    // auth: authReducer, // artik redux persist i kullanacagmz icin redux onu takip edecek.
    auth:persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
// export icin sayfasindaki elle yazilana gore.redux toolkit icin sadece  let persistor = persistStore(store) lazim
export  let persistor = persistStore(store);
export default store;

//Daha sonra devam ediyor doc.Provider in altina PersistGate i yapistir diyor.bizim Provider imiz app.jsx de oraya gidiyorz
