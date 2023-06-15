//!api den veri cekmek icin gerekli fonksionun yazildigi sayfa burasi
//*burdaki haber sitesinin adresini ve kendi verdigi API KEYI kullanabilirsin

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getData=createAsyncThunk(
"haberSlice/getData",

async()=>{

 const data= await axios(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb"
  );
//  console.log(data.data.articles);
return data.data.articles
}
)


 export const haberSlice = createSlice({
   name: "haberSlice",
   initialState: {
     haberler: [],
     loading: true,
   },
   reducers: {},
   extraReducers: (builder) => {
     builder
       .addCase(getData.pending, (state) => {
         state.loading=true
       })
       .addCase(getData.fulfilled, (state, action) => {
        console.log(action);
        state.haberler=action.payload
        state.loading=false

       });
   },
 });



//getData da tum sayfa ile gidiyor ayri bir export yazmaya gerek yok
  export default haberSlice.reducer;




