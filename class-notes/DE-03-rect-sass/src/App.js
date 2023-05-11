import React from "react"
// import "./scss/_button.scss";
// import "./scss/_reset.scss";
// import "./scss/_variable.scss";
//? buraya da cagirabiliriz ama sass in ozelligini kullanip importlari tek bir yerde toplayalim


import "./App.scss"
import Header from "./components/header/Header";
import Card from "./components/card/Card";

import dataa from "./data"

function App() {
  return (
    
    <div>
     <Header/>
     <Card datA={dataa}/>
    </div>
  );
}

export default App;
