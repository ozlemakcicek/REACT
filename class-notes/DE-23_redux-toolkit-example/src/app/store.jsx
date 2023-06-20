
//! Redux tollkit den getiriyoruz bunu ve duzenliyoruz.
//!reducer sayfalarimi cocuklarima tanitmak icin acilan alan configureStore.
//!store da bir alan actik ve reducer a gelecek veriler yetkiSlice ve haberSlice dan state ve fonksiyonlar gelecek

//* burda createStore degilde configureStore kullaniyoruz 
//* reducer olarak iki sayfamiz var onlari yaziyoruz

import { configureStore } from "@reduxjs/toolkit";
import yetkiSlice from "../features/yetkiSlice";
import haberSlice from "../features/haberSlice"

export const store = configureStore({
  reducer: {
    yetkiSlice: yetkiSlice,
    haberSlice: haberSlice,
  },
});
