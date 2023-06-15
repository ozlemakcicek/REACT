// createSlice ile  olusturacagiz
//useState ve reducer alanlarina state ve reducerlari yazalim
//api den veri cekmek icin ayri bir kod olusturulur.createAsyncThunk() ile cekiliyor ve extraReducers diye bir alan olusturup orada calisiyoruz


//!butun fonksiyonlar burda
import {createSlice} from "@reduxjs/toolkit"

const yetkiSlice=createSlice({

name:"yetkiSlice",

initialState:{
    email:"",
    password:""
},

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
export default yetkiSlice.reducer
