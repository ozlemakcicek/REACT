// import React from 'react'

//?iki yontem var.ilkini tercih etmeyecegiz.Binding yontemi:fonk nu js alaninda tanimla document.q ile cagir.react alaninda event ekle.parametre varsa event de yapilacak seyden once ()=> ile onun fonk oldugunu hatirlat ki hemen ekrana basmasin,tiklaninca yapsin islemi
//? 2.yontem hook yontemi:document.q yazmaksizin return u bikere daha calistir yontemi olacak
const Events = () => {
//!javascript alani

let baslik="MERHABA"
let count=0;

//fonksiyonu yaz js alaninda.react alaninda buna event ekle ve ne yapilacagini yaz
const arttir=()=>{
    count=count+1

    //* return icine onclick yapinca arttir diye bir fonksiyon yazdik.o fonksiyonu da js alaninda tanimlayip yapacagi isi yazalim. count u arttir dedik ama gostermedi.onu ekranda da guncelle diye js alaninda document.queryselector yap fonksiyon icine ve taxtcontaent=count olsun yazmaliyiz js alaninda.event ler react alanina yazilir.DataBase de kaydet dersek birde 3.asama yazmaliydik buraya.Bunlar cok uzun.React da guzel bir uygulama var.

document.querySelector("span").textContent=count    
}


const butonBaslik=(a)=>{

    console.log(a);
    document.querySelector(".btn-info").textContent=a

}

  return (
    //!react alani

    <div className="container text-center mt-4">
      <h1>INFO: {baslik}</h1>
      <h2>
        COUNT:<span>{count}</span>
      </h2>
      <button className="btn btn-primary" onClick={arttir}>ARTTIR</button>
        
      
      {/* //!Parametreli fonksiyonlarda normal fonksiyondan farkli bir durum var.react alaninda parametreli fonksiyon çağiracaksak, fonksiyonun adinin önüne ()=> işaretini koymaliyiz, yoksa fonksiyonu event i beklemeden  çaliştiriyor */}
    
      <button className="btn btn-info" onClick={() => {butonBaslik(new Date().getFullYear())}}>
        TEMIZLE
      </button>

      <button className="btn btn-danger" onClick={()=> {alert("buton tiklandi")}}>TIKLANDI</button>
    </div>
  );
}



//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------

export default Events

//? bootstrap tesekkrunu App.js ye yapiyrz