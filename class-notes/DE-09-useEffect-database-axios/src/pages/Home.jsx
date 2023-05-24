import { useEffect, useState } from "react";

import axios from "axios";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";
const Home = () => {
  const [bilgiler, setBilgiler] = useState([]);

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  //*hep sabit olan url adresini useState ile yapmaya gerek yok.dogrudan degiskene ata, nasil olsa degismeyecek birsey adres
  //!GET (Read)
//async await fetch yerine async await axios yapiyoruz

const getBilgiler=async()=>{
  const veri= await axios.get(url)
  // console.log(veri.data);
 setBilgiler(veri.data)
 //setBilgiler(data) dedigimiz zaman console da verilerin data:...icinde oldugunu gorduk.kilciksiz gelsin diye veri.data diyoruz
}
console.log(bilgiler);
//api den veri cekmeyi bir fonksiyona atadik,ve bu fonksiyonun cagrilmasi lazim ama orta yerde bu fonksiyonu cagirirsak sonsuz donguye girer.sonsuz dongu olmasin diye useEffect(()) in suslusu icinde cagirmaliyiz 
useEffect(()=>{
  getBilgiler()
},[])

// simdi veriler geldi database den.bunu done done yazdiralim react alaninda.asagida bunlari BilgiList.jsx e yollayacagiz ve  de karsilayacagiz.en asagida da bunu bildiriyoruz


  //!then zinciriyle de yazabilirsiniz

// useEffect(()=>{

//  axios.get(url).then((res)=>
//     // console.log(res.data))
//     setBilgiler(res.data))

// },[])
 
 

  //? Sadece Component mount oldugunda istek yapar
 

  
  //!POST (create) database e veri gönderme
 
// const postBilgi=async()=>{

//   await axios.post(url,{title:"hayat bilgisi",description:"naber"})
// }


// bunu simdi fonksiyona atayip sadece onu yazip gonderelim AddBilgi sayfasina
const postBilgi = async (yeniVeri) => {
  await axios.post(url, yeniVeri);

  // yeni halini ekrana getirsin diyecegiz.bunun icin getbilgileri cagiriyoruz.Neden useEffect ile sarmallamadik?getBilgileri postBilgiler icine gomdugumuz icin gerek yok.
 getBilgiler()
};

console.log(bilgiler);



//*home da islemleri yapip AddBilgi.jsx de karsiliyoruz.asagidaki islemle yolladik

 
  return (
    <>
    <AddBilgi postBilgi={postBilgi}/>
    <BilgiList bilgiler={bilgiler} getBilgiler={getBilgiler/>
    </>
  );
};
//mavi olan gidilen sayfadaki karsilama ismi.beyaz olan da gonderilen isim
//react alaninda dogrudan bastirmamis.baska bir sayfaya yonlendirmis olduk
export default Home;
