
import Header from "../../components/header/Header"
import RecipeCard from "./RecipeCard"
import { HomeImg, ImgDiv } from './HomeStyles'
import homeSvg from "../../assets/home.svg"
import { useState } from "react";
import axios from "axios"

//bu site ucretli bir site oldugu icin asagidaki id ve key siteye giris icin lazim olan kodlar.bunlar aslinda enc diye sadece developer in gorebilecegi bir dosyada tututlur simdilik burda kalsin
const APP_ID = "bfbb3efc";

const APP_KEY = "43faeee790f26cd82b28050d3031619d";



const Home = () => {

 const[yemekler,setYemekler]= useState([])
  //bu diziye verileri atmak icin.
  // iki tane daha da acacagiz.inputa girilenleri,query yi yani atmak icin.digeri de ögun icin.query yi string olarak yap baslangicta.ogunu de baslangicta Breakfast yazdik.ellenmeden giderse breakfast diye gitsin dedik
  const[query,setQuery]=useState("")
  const[ogun,setOgun]=useState("Breakfast")


  // query=yazdığımız sorgu kelimesi, mealType=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ogun}`;

  // bu adreste App_id ve app_key ve q=${} kismini yazmak zorundasin.ama mealType kismini dgistireblrsn.neye gore gelsin istersen onu yazablrsn{} icine.karbonhidratina gore ....gibi

 


  //search butonuna bagli olarak gelecegi icin useEffect e gerek yok aslinda.cunku direkt getir demiyoruz butona basinca getir sarti olacak
const getData= async()=>{
const veri=  await axios.get(url);

// console.log(veri.data.hits);
setYemekler(veri.data.hits);

};
//getData yi Header da cagiracagiz inputa girince cunku.o yuzden burda yazmiyoruz



 return (
    <div>
   {/* header a giderken onChnage yapinca yani setQuery ve setOgun gidecek.orda dolacak.ve fonksiyonu gonderiyoruz.babadaki query ve ogun u cocuk goremez.o yuzden tamircileri gonderilir oraya */}
      <Header setQuery={setQuery} setOgun={setOgun} getData={getData}/>

      {yemekler.length>0 ? (
        <div>
      {/* recipeCard a yemekleri gonderelim */}
            <RecipeCard yemekler={yemekler}/>
          
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
}

export default Home