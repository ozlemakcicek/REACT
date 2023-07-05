//! bu sayfada daha once olusturdugumuz ve store a tanitip App.js de (AppRouter) Provider ile sarmalladigimiz stockReducer daki statelerin icini dolduracagiz.
//! once postman de post istegi atmamiz lazim.App doc muzdan stock bolumunden stock_firms_create tiklayip url i aliyoruz.postman de add request ile yeni bir request olusturup adini veriyoruz.url yi yapistirip Post body raw JSON yapiyoruz.bizden bir body seemasi istiyor onu da gidip App doc dan siyah alandan getiriyorz. icini dolduruyoruz ilk etapta onemli degil.ve send yapmadan once daha onceki derste manager ve admin yetkisi verdigimiz tokeni login sayfasindan alip Headers kismina key Autherization ve Value Token bosluk key seklinde yazip Send yapiyoruz.asagida id cikip 201 Created diyorsa create islemimiz tamadir.
//* bunlari gormek icin ise add request den bu sefer Get deyip, App doc dan stock_firms_list den url i alalim(sonunda {id} gibi bisey yoksa bu adrese hem get hem post istegi atablrz.varsa get,put,patch,delete atabilirz post atamayiz) ve yapistiirp Get ve  Headers da   key Authentication Value ise zaten aynisi Post un al yapistir ve send de.
//? artik VS Code da get istegimizi yazablrz.Firms sayfasinda yapacagiz


//!Custom hook a tasidigimiz icin yoruma aldik
// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
// import { useDispatch, useSelector } from "react-redux"
// import axios from "axios";
import {useEffect} from "react";
import useStockCall from "../hooks/useStockCall";
import Typography from "@mui/material/Typography"
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";

// Get istegi atan bir fonksiyon yazacagiz async await yapisi ile.try catch acalim hemen icine.ustte bir dispatch yayinlayablrz.bunun icin once dispatchi tanimla ve useDispatch in importu gelsin.fetchStart in importunu yapmak icin stockSlice i ac..axios ile cagirdigimiz icin veriler data seklnde gelir.get islemi icine url yazilacak onu da ustte process.env den cagirmamiz lazim.get icine koy backtick icinde ve sonuna stock/firms diyerek bu sayfada gormek istedigimizi belirtiyoruz.


//!Custom hook kullandigimiz icin yapimizi yoruma aliyoruz 
 const Firms = () => {
//   const dispatch=useDispatch()
//   const {token} =useSelector(state=>state.auth)
// const BASE_URL=process.env.REACT_APP_BASE_URL;


// const getFirms= async()=>{
//   dispatch(fetchStart())

//   try {

//     const { data } = await axios.get(`${BASE_URL}stock/firms`,{headers:{Authorization:`Token ${token}`}});
//     console.log(data);
//     //dinamik bir reducer methodu yazmistik.bu bizden bir obje bekliyor url ve data key lerini icerisinde kullanablcgz.hem data hem de sondaki endpointi gonderebilecegimiz sekilde yazmistikbunu iki sekilde yazariz buraya.
//     // dispatch(getSuccess({data,url : "firms"}))  // data:data,url:"firms" demek
//     const url="firms";
//     dispatch(getSuccess({ data, url }));
    
//   } catch (error) {
//     console.log(error);

//     dispatch(fetchFail())
//   }
// }

//! boyle tek tek yazmaktansa bir custom hook olustur(useStockCall()) ve dinamik haldeki fonksiyon adini yazacagiz ve gerekli sayfalarda cagir. boylece tek bir fonksiyon ile birden fazla get islemi yapablrz.

// const {getFirms}=useStockCall()
const {getStockData}=useStockCall()
const {firms}= useSelector(state=>state.stock)


//*calismasi icin fonksiyonu cagirmamiz lazim useEffect icinde.

// useEffect(() => {
//   getFirms()
  
// }, [])
//!Custom hooklardaki fonksiyonlar bir parametre ister.firms adresine istek atar.Bu aslinda async deki url.
useEffect(() => {
  getStockData("firms")
}, []);



  return <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Grid container sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:2
      }}>
{
  firms?.map(firm=>(
    <Grid item key={firm.id}>
      <FirmCard firm={firm}/>
    </Grid>
    ))
  }
      </Grid>
    </div>;
  
}

export default Firms

//! biz bu yapiyi yani getFirms, getBrands fonksiyonunu tek tek tanimlamaktansa bir Customhook icinde tanimlayablrz.hooks icine useStockCall dosyasi aciyoruz.