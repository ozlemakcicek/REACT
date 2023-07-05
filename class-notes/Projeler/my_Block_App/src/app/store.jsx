//! store sayfasi banka,havuz dedigimiz yer.burda tanimladiklarimiza heryerde ulasilir.App.js de de Redux Provider ile butun sayfalarimizi yani AppRouter i sarmalladikki store daki herseye ulasablsn sayfalar.
//burada cocuklar icin bi alan aciyoruz ve bildiriyorz.artik ugramaya grk yok.
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import blogReducer from "../features/blogSlice";



//!verilerimizin her refresh de kaybolmamasi,localde kalici hale  gelmesi icin persist redux yukleyip sitesinden yapiyi alip duzenlyrz
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
 

// asagidaki yapi sart.reducer icine cagiracagin isim : ve slice sayfanin adi.farkli bir isim de verblrsn.ne kadar slice sayfasi varsa o kadar yaz
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    // auth:authReducer,
    blog:blogReducer,
  },
  devTools: process.env.REACT_APP_BASE_URL !== "production",
});

export let persistor = persistStore(store);
export default store;
