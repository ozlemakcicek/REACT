import React from "react";
import { useState } from "react";
import LifeCycleMethods from "./components/LifesycleMethods.jsx";
import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css";
import OrnekUseEffect from "./components/OrnekUseEffect.jsx";
import Clock from "./components/Clock.jsx";

function App() {
//goster butonuna tiklayinca true ise false false ise true olsun diyoruz.
const[goster,setGoster]=useState(true)

  return (
    <div className="container text-center mt-4">
      {/* <LifeCycleMethods /> */}

      <button className="btn btn-danger" onClick={() => setGoster(!goster)}>
        GOSTER
      </button>

      {/* fonksiyona gidip ugrasmayalim diye burda direkt hallettik.!goster demek ne duserse tersi olsun demek.true ise false, false ise true olsun demek.degissin surekli */}

      {/* {goster ? <OrnekUseEffect /> : ""} */}
      {/* goster true ise OrnekUseEffect componenti görunsun, degilse hicbirsey yapma dedik bu sekiollde.ternary kullandik*/}


     {/* bunu su sekilde de yapariz.true iken goster.false iken bisey demiyorum diyor.&& iki parametrede dogru iken kullanilir, || soldaki dogruysa ya da sagdaki dogruysa,hangisi true ise onu al */}
  
      {/* {goster && <OrnekUseEffect />} */}


{goster && <Clock/>} 
    </div>
  );
}

export default App;
