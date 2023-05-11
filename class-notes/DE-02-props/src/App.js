import React from "react";
import Person from "./Person";

function App() {
  return (
    <div className="App">
      {/* <Person dataa={data}  data dan veri cekersek bu sekilde yazarizel ile yaziyorsak {} olmadan bir isim takarak verileri gonderirsin*/}
      <Person
        name="Osman Kara"
        img="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg"
        tel="555 55 55"
      />
    </div>
  );
}

export default App;

//? app.js de yazdigimiz verileri veya database den biseyleri cekiyorsak ve bunlari child a gondereceksek bunu componentin etiketi icine yazarak gonderiyoruz.dataa={data} seklinde databasedeki veriler.el ile yazmada basina isim takarak '' icine yazarak gonderiyorsun.{} burda kullanilmaz.child da dabir isimle genelde de props diyerek karsilariz
