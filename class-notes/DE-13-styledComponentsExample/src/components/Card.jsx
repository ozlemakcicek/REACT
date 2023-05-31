import React from "react";
import data from "../data"
import ImageSSS from "./styles/ImageSSS";
import KartSSS from "./styles/KartSSS";


const Card = () => {
  return (
    <div>
      {/* ister {} ve return yaparsin.yada => den sonra hepsini sarmallayan div acarsin tek eleman gibi algilatirsin */}
      {data.map((item) => (
        <KartSSS key={item.id} ters={item.id%2===0 && "row-reverse"}>
          <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
          {/* 
<img src={item.image} alt="" /> */}
          {/* bu data da boyle ama gostermez.cunku public de verilmis resimler bunlari backtick icinde ./images diye public yolunu vererk yazmaliyiz.biraz normal yazi biraz degisken o.i backtick icinde yazilmali.daha onceki resimlere benzedigi icin ImageSSS yazarsak stilli bir sekilde gelir ve usttekilerin ayni stilini alir */}

          <ImageSSS src={`./images/${item.image}`} alt="" />
        </KartSSS>
      ))}
    </div>
  );
};

export default Card;
