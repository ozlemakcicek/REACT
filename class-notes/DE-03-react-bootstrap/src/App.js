import React from "react"
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
//* indirirken terminalke hem react bootstrap hem de bootstrap li hali ile indi.o yuzden tesekkur linkini de koymamiz lazim
//* bu tesekkr linkini modenodes icindeki bootstrap den  dist in icinden sonrasina bak hocaninkinden

//* tesekkr linkini aslinda index.html veya indeks.js veya buraya da yapabiliriz.bu daha cok tercih edileni

function App() {
  return (
    <div >
     {/* <MyNavbar/> */}
     {/* // hatalari gormek istersek burda boyle yzarsak ekranda  MyNavbar.js deki eksik olan importlari gosterir */}
<MyNavbar/>



<Footer/>
   
    </div>
  );
}

export default App;
