//! bu sayfa  page lerde veri cekip onlari sayfalarda create,update ve delete islemlerini dinamik bir sekilde yapmak icin lazim bize.redux-toolkit de Slice lar features folder i altinda toplanir.
//* rafce yapilmaz burda.redux toolkitden createSlice kismini alip duzenliyoruz slice dosyamiza gore.burda authSlice dan getirip duzenledik lazm olanlari biraktik.stock olarak degistirdik btn auth lari ve initialStatelerimizi(bos Array olarak) yazalim her bir stock icin.isimleri endpointlerle ayni olmali ki tek bir reducer ile dinamik olarak guncelleeyeblelim.
//!reducerlarimizi da yazalim


import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    // initialstate leri [] olarak veriyoruz stock larin ki veri cekince dolacak bunlar.Api deki stock a bakarak neler olusturacagimizi gorduk
    products: [], //bu aslinda; const[products,setProducts]= useState([]) demek
    firms: [],
    brands: [],
    categories: [],
    sales: [],
    purchases: [],

    //! statelerimizin isimleri ile endpointlerimizin isimlerini aynı verdik. Bunun sebebi tek bir reducerla tüm stateleri dinamik bir şekilde doldurabilelim.
    //burdaki state isimlerini endpoint isimleri ile ayni verelim ki istek attigimizda endpointe burdaki verileri tek bir reducer ile dinamik olarak guncelleyeblcgz
    //simdi reducerlari yazalim.fakat authSlice da oldugu gibi ayri ayri si icinde bunu yazmaya gerek yok.dinamik hale getirelim getSuccess reduceri ile
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    // brandSuccess:(state,{payload})=>{
    //     state.loading=false;
    //     state.brands=payload;
    // },
    // firmsSuccess:(state,{payload})=>{
    //     state.loading=false;
    //     state.firms=payload;
    // },

    //* state ifadesi yukaridaki degerleri karsilar aslinda.state.brands deyince ordaki brands bilgisine ulasiriz ve =payload diyerek de guncelliyorz.simdi backende istek atacagiz burda.Fonksiyona ,methoda parametre gonderirken ya bir degisken olmali ki aciktan yazalim(payload(osman(ki yukarida const osman.. yapilmis olamali))) ya da string icinde(payload("osman")) gonderirz ,payload icine yerlestirerek.
    //! yukaridaki state imiz bir obje.objenin key lerine 2 yolla ulasilir.1- .notation(eger key string ise bu ise yaramaz) 2-[] square bracket notation(herhalukarda ise yarar.string icin ["string key"])seklinde yazilir.bu ayni zamanda var olan elemani gunceller, yoksa ekler

    getSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.data; // state["firms"], state["brands"] anlamlarına gelerek tek bir reducerla tüm stateleri doldurabilmiş olduk.

      // state[url]=data nin payload icinde gonderimi.url bizim App daki stock dan sonraki endpointlerinde oldugu kisim

      //*simdi bu olustrdgmz state i bankaya,havuza yani store a tanitmamiz lazim.burda en asagiya bakarsak export default stockSlice.reducer; diyoruz.yani reducerlari export ediyorz.store da import ederken de stockReducer olarak import ediyorz.ve tanitiyoruz ve store un reducer bolumunde
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  getSuccess,
} = stockSlice.actions;
export default stockSlice.reducer;

// async-thunk yerine manuel dispatclerle yapıyoruz. extra reducerlarla yapmadan da bu şekilde yapabiliyoruz. İki yönteminde avantajı ve dezavantajı var.
