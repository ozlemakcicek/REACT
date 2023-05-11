import React from "react";  // bu App.js de olmali.child larda olmasina gerek yok boylelikle

import Msg from "./msg/Msg"
import Footer from "./footer/Footer";

//* import Clock from "./clock/Clock";  // bu bir yol burda import et asagida <Clock/> yap
//* ya da hazir Msg tanimlanmisken,yazilmisken ona tutunarak yapablrz.
//*return icine <Clock/> yaparak saglariz bunu

//? return un altina ekrana basilacak seyleri yazariz, ustune ise console da gozukecekleri yazariz.
//? returnun ustu javascript alani, ici react alani

function App() {
  return (
    <div >
    {/* <Clock/> */}  
    {/* Msg nin ustune Clock u yazarsak ekranda da ustunde gosterir Msg lerin.altina yazarsak altinda gosterir.fakat zaten basilan bir sayfa var Msg diye oraya da yaptirabiliriz.burayi cok doldurmayalim. */}
      <Msg/>
      <Footer/>
    </div>
  );
}

export default App;


//? App.js bizim yonetmen sayfamiz.her actigimiz sayfayi buraya bildirmemiz lazim.actigimiz sayfaya rafce yazinca otomatik export kodunu yazar asagiya.sonra bunu app.js e gelip return icindeki div e haber ediyoruz.<Dosyaadi yazinca basinda tuglali bir sekilde componenti onerir.ona tiklayinca en yukariya import linkini kendisi koyar.ve sonra /> yazariz component adina.

//* tuglali sekilde onermesi icin import edilecek dosyanin icinin en azindan rafce ile dolu olmasi lazim.ve yukarida simge durumunda acik olmasi lazim.yine gozukmezse bikac kez sil yaz