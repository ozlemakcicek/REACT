import React from "react";

import GosterUsers from "./pages/GosterUsers";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";


export const KullaniciContext = createContext()

const App = () => {

  const[kullanici,setKullanici]=useState([])

useEffect(() => {
  fetch ("https://api.github.com/users")
  .then((res)=>res.json())
  .then((data)=>
  // console.log(data)
  setKullanici(data)
  );

  
}, []);


const degistirWidth=(id,yeniWidth)=>{

//diziye width ekle.kalici degisiklik icin tamirciyi kullnaiyoruz
setKullanici(
kullanici.map((a)=>a.id===id ? {...a,width:yeniWidth}: a)
)
}


  return (
   <KullaniciContext.Provider value={{kullanici,degistirWidth}}>
      <GosterUsers />
      </KullaniciContext.Provider>
  );
};

export default App;
