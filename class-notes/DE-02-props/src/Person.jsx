// import React from 'react'

import Msg from "./Msg"

const Person = (props) => {  // app da yazdigimiz verileri props olarak cagirdik burda
    // console.log(props);  // konsole da gormek icin return ustune yazilir.return altina yazdiklarn ekranda gorulur.bir obje olarak gozukur.{name:"osman, img:...} seklinde"}

  
  //! destruction
  const{name,img,tel}=props
  //* alttaki cagirmalari icin props.name demeye gerek yok artik


    return (
      //? 3 sekilde ekranda gosterebiliriz.1- karsilarken (props) diye karsilayipdirekt {props.name} yazarak.2-Destruction yaparak.bunda da karsilarken (props) diye karsilariz.altinda parcala ve destruction yap=props yap sonra asagida sadece ismi yaz seklinde.3-gelir gelmez parcalayarak karsilama.props diye karsilamiyoruz burda.gonderirken takdigimiz isimleri({name,tel}) kullanarak karsiliyoruz
      <div>
        {/* <h2>{props.name</h2>  destruction yapmazsan boyle yazarsin */}

        <h2>{name}</h2>
        <img src="{img}" alt="" />
        <h4>{tel}</h4>

        {/* Msg sayfasini burda hazir calisan bir sayfada cagiralim App.js yerine.App.js dede, Person.jsx baba,Msg.jsx ise cocuk oldu bu sekilde.yukaridan asagi veri gonderilebilir ama asagidan yukari gitmez veya dede den toruna gelmez.herkes bir altina gonderebilir */}
        <Msg isim={name} telefon={tel} />
        {/* toruna yollamak icin ayni app.js de yaptigimiz gibi bu sekilde basina isim takarak yolluyoruz.Msg.jsx de de direkt karsilama yontemi olan 3.yontemi yapacagizBurda degisiklk de yapabilirsin tabiki ya da elinle de yazabilirsin isim in karsiligini*/}
        
        <img src={img} alt="" />
        <h4>{tel}</h4>
      </div>
    );
}

export default Person