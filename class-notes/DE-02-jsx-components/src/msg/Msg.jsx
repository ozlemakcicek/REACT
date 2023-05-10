//? React, JSX kullanır.
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

//!External css
import "./Msg.css"


const Msg = () => {
//   return <div>Msg</div>;    // ya boyle yanina cekilir ya da () konulur direkt return yanina
// };

//! internal css
const styleA={
  color:"green",
  fontFamily:"Tahoma",
  border:"1px solid red"
}



  return (
    // kapsayici div icine yaz herseyi

    <div>
      <h2 style={styleA}>burasi MSG alani</h2>

<Clock/>  


      <p style={{ color: "red", fontSize: "30px" }}>Hosgeldin REACT</p>

      <img className="msg-img"
        src="https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__340.jpg"
        alt=""
      />
      <img className="resim2" src={resim} alt="" />
    </div>
  );
};

export default Msg;


