//* backende verileri gondermek icin once bize verilen api sayfamizda create register dan sag koyu alandan url adresini alalim.postmani acip new request yapalim ve url yi yapistirip post u secip ,api den yine siyah alandaki ornek kismi alip gelelim ve kullanici bilgilerini giirelim.altinda hemen Body,raw ve json olarak secimlerimizi yapip send diyelim.asagiyausername ve token in oldugu bir yapi verecek.token onemli bizim icin bunun ile islemlerimizi yapacagiz.ortak bir sayfada tutalim ki tokeni her yerden ulasabilelim.
//?projede state managemnet olarak redux toolkit i kullaniyoruz ve bunda slice da register islemi basarili olunca bilgileri stora gonder diyecegiz. authslice daki reducers icine dispatch yayinlamak icin bir reducer yazacagiz.islemimiz register o.i reducer imizin adi registerSuccess olsun.icine state ve {payload} yaz.artik register success  ve state.loading i false cekiyrz.currentuser imizi ve tokenimizi de yaziyoruz
//* ve export yapiyorz.

//*register,log in,logout icin ucunde de ayni url i kullanacgmz icin hepsini ortak bir dosyada yazalim.apiCall folderinda authCall dosyasinda yapalim bunu.


//! ismi ne olacak onu belirttik. name:"auth". initialState ler ne onlari verdik ilk durumda.isAdmin(backend ile alakali) ozelligine sahip mi.Ve token ; login olduktan sonra icerde istek atarken state den tokeni cekip kullanabilecegiz


import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess:(state,{payload})=>{
state.loading=false;
state.currentUser=payload.username;
state.token=payload.token
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  registerSuccess
} = authSlice.actions;



export default authSlice.reducer;
