//? React, JSX kullanır.
//? hangi component te degisiklik varsa sadece orasi guncellenir butun bir sayfa guncellenmez
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.




// import React from "react";  // bunu ister sil ister kalsin
import Clock from "../clock/Clock";
import resim from "../img/showcase.jpg"; 

//? imp yazinca hazir kalibi getirir.ne isim vermek istersek import dan sonra onu yazip(bunu asagidaki img nin src sine de {} icinde yaziyoruz.from dan sonra da yolunu yaziyoruz)


//!External css   // import edilir.bu importa isim from yok.External css de sadece import "yol" yaziyoruz
import "./Msg.css"


const Msg = () => {
//   return <div>Msg</div>;    // ya boyle yanina cekilir ya da () konulur direkt return yanina
// };

//! internal css
//style verme sanki bir obje tanimlama gibi veriliyor.const styleA={a:"b"} seklinde.sonra return icinde hangi etikete vereceksek yanina style yaziyoruz ve js alaninda tanimladigimiz degiskeni {} icinde yazarak = nin karsiligini algilar.ya da style={{}} seklinde de ikinci suslu icine direkt style lari yazariz

const styleA={
  color:"green",
  fontFamily:"Tahoma",
  border:"1px solid red"
}


// return un ustu javascript alani.bir degisken tanimlayacaksak mesela let ile buraya tanimlayacagiz.yalniz asagida bu degiskeni kullanirken sadece {} icinde degiskeni yazacagiz ve direkt sonucu verir.js de ${} icine yaziyorduk.
//ayrica console a yazilacaklar buraya yazilir
  return (
    // return icine ekrana basilacak seyler yazilir.react alani burasi. kapsayici div icine yaz herseyi.return den sonra ya parantez acip icine yazariz.Ya da divi yukari return un yanina cekeriz

    <div className="anaSayfa">
      <h2 style={styleA}>burasi MSG alani</h2>

    <Clock/>  

//* clock componentini App.js de de yapardik ama herseyi orda yapmaya gerek yok.hazir bastirilan bir component var buraya yazariz.istedigin bi yere koy return icinde.
{/* inline icin {{}} yapilir */}

      <p style={{ color: "red", fontSize: "30px" }}>Hosgeldin REACT</p>

      <img className="msg-img"
        src="https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__340.jpg"
        alt=""
      />
      <img className="msg-img" src={resim} alt="" />
    </div>
  );
};

export default Msg;



//? iki tur img ekleme sekli var.1-internetten getirme 2- localden alma(degsik bir tarzi var.src ye bir img klasoru acip resmi ekledik.return un ustune i9mport alanina imp yazip enter yapiyoruz hazir yapi geliyor. from dan sonra yolunu yaziyoruz.import dan sonra da isim veriyoruz.bu ismi img src ye de{} icinde yaziyoruz)
