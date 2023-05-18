

import React,{useState} from 'react'

//useState Hooks u immer yukariya yazilr
const Hooks = () => {
//!useState in yazimi.Bir sayac ve onun tamircisini,icerigi degistireni koyuyoruz[] icine.react in bir komutu olan useState e de baslangic sayac degeri veriyoruz. ve bu komutu yukarida import ediyoruz(React dan sonra , koyuyoruz).setSayac a da fonksiyonun icinde yeni degisikligini yaptiralim.js nin document.q sini setSayac(5) ile hallettik.surekli 1 er arttirsin dersek sayac+1 yazariz.react bolumunde ise bu sayaci{} icinde yazarak ekranda goster dedik.
//? setSayac bizi sayfanin yukarisina getirir ve olayi tekrar ettirir

const[sayac,setSayac]=useState(0);

//bir obje ise bizim verimiz.onu boyle yaziyoruz.asagiya da ...
const[kisi,setKisi]=useState({
isim:"Ozlem",
email:"ozlem@hotmail.com",
yas:39,
renk:"red"})

// ayni butona tiklaninca bi ona bi ona degissin ister isek if yazariz fonksiyon icine
const degistir=()=>{
 
    if(kisi.isim==="Ozlem"){
      setKisi({
      isim: "Nihal",
      email: "nihal@hotmail.com",
      yas: 29,
      renk: "green",
    });   
    }else{
        setKisi({
          isim: "Ozlem",
          email: "ozlem@hotmail.com",
          yas: 39,
          renk: "red",
        });
    }

   
}

// let sayac=0

const arttir=()=>{
// setSayac(5)
setSayac(sayac+1)
}

const azalt=()=>{
    setSayac(sayac-1)
}

  return (
    <div className='container'>

        <h2>*******************************************************************</h2>
<h1>USESTATE</h1>
<h2>COUNT:{sayac}</h2>


<button className='btn btn-primary' onClick={arttir}>ARTTIR</button>
<button className='btn btn-danger' onClick={azalt}>AZALT</button>
<button className='btn btn-warning' onClick={()=>setSayac(0)}>TEMIZLE</button>

{/* temizle de sunu yaptik.tiklaninca taa fonksiyona gitmeyelimde direkt burda yapalim.setSayac i buraya getirelm.yalniz orta yerde duruyor.bunu bi bekletmek icin,fonksiyon oldugunu bildirmek icin parametreli oldugu icin
 ()=>yapacagiz */}

 <h1>******************************************************************************</h1>
 <h1>******************************************************************************</h1>
 <h1>******************************************************************************</h1>

    <div className="text-center mt-4">

 <h1>OBJECT ILE USESTATE KULLANIMI</h1>
 <h2>{kisi.isim}</h2>
 <h3>{kisi.email}</h3>
 <h5>{kisi.yas}</h5>
 <button style={{backgroundColor:kisi.renk,color:"yellow"}} className='btn' onClick={degistir}>CHANGE</button>
{/* eger ilk butonu olusturuken btn btn-warning yapsaydik ve biz ozlemde iken kirmiziya nihalde iken yesil olsun dersek style veririz ve btn-renk i sileriz */}



</div>
    </div>
  )
}

export default Hooks