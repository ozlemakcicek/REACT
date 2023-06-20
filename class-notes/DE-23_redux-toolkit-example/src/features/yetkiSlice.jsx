//? modeldeki counterSlice.jsx dosyasinin muadili
//! yetkiSlice i login icin kullanacagiz.AuthSlice da denilebilir bu sayfaya.haberSlice da ekrana bastirilacaklar icin kullanilir


//* createSlice ile  olusturacagiz icine initialState ve onun icine de email,password ne olusturacaksan onlari,yani useStateleri olustur.Kommadan sonra da reducer alani ve burda fonksiyonlar bulunacak
//useState ve reducer alanlarina state ve reducerlari yazalim

//!api den veri cekmek icin ayri bir kod olusturulur.createAsyncThunk() ile cekiliyor ve extraReducers diye bir alan olusturup orada calisiyoruz



import {createSlice} from "@reduxjs/toolkit"

const yetkiSlice=createSlice({

    //name yerine sagdada solda da ayni ismi versek daha iyi aslinda.
name:"yetkiSlice",

//!useStateler burda.ihtiyaclarin ne ise..
initialState:{
    email:"",
    password:""
},
//!butun fonksiyonlar burda
reducers:{
    //action dan sadece payload gelecek.Type yok burda.state alani temsil eder.email ve password alani.state hep yazilir.cocuklardan bir veri gonderilmyrsa actione gerek kalmiyor
    
    olusturKullanici: (state,action)=>{
        // console.log(action);
        state.email=action.payload.email;
        state.password=action.payload.password;

    },

    kullaniciSil:(state)=>{
        state.email=""
        state.password=""
    }
    

}



})
//butun kullanicilari export ile disari gondermeliyiz.fonksiyonlar {} icinde ve = ile, sayfanin tumunu de aciktan export yapariz
export const {olusturKullanici,kullaniciSil}=yetkiSlice.actions

//! modele gore sayfanin adi.reducer yapilmis oyle yaziyorz.yetkiSlice in reducer olaylarini isteyenlerin kullanimina sun
export default yetkiSlice.reducer
