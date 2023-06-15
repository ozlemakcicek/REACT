import {  useDispatch, useSelector } from "react-redux";
import { arttir, azalt, resetle } from "../../redux/actions/counterActions";
import "./Counter.css";



const Counter = () => {
  // reducerdaki fonksiyon ve degiskenlerin hangisi oldugunu belirtmek icin; fonksiyonlar icin useDispatch kullanilir.degiskenler icin useSelector
//asagidaki kodun tanimi:actigin state deki counterReducerdan countersonuc u getir.
const count1= useSelector((state)=>state.counterReducer.counterSonuc)
//text i de useSelector ile getiririz yine.cunku bu da bir degisken sadece yazi.
const yazi = useSelector((state) => state.counterReducer.text1);




// useDispatch bir anahtar olarak yazilir yukarida ve boylece butun fonksiyonlari bu anahtar ile actik ve butona tiklaninca da dispatch degisken adi (fonksiyon).importlari ile de hangi fonksiyon oldugunu belirtiyoruz
const dispatch1=useDispatch()

// h lar ile butonlardaki yazi ve countlari degisken olarak yaziyoruz.
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{count1} </h1>
      <h2>{yazi} </h2>
      <div>

{/* butonlarda ise tiklaninca su fonksiyon calissin diyoruz.bu fonksiyonu da useDispatch ile reducer sayfasindan cagiracagiz */}
        <button
          className="counter-button positive"
          onClick={()=>dispatch1(arttir())}
        >
          ARTTIR
        </button>

        <button className="counter-button zero"  
        onClick={()=>dispatch1(resetle())}
        >reset
        </button>


        <button
          className="counter-button negative"
          onClick={()=>dispatch1(azalt())}
        >
          AZALT
        </button>
        
      </div>
    </div>
  );
};

export default Counter;
