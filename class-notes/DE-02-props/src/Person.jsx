// import React from 'react'

import Msg from "./Msg"

const Person = (props) => {  // app da yazdigimiz verileri props olarak cagirdik burda
    // console.log(props);  // konsole da gormek icin return ustune yazilir.return altina yazdiklarn ekranda gorulur
  
  
  //! destruction
  const{name,img,tel}=props
  //* alttaki cagirmalari icin props.name demeye gerek yok artik


    return (
    <div>
    {/* <h2>{props.name</h2>  destruction yapmazsan boyle yazarsin */}
    

    <h2>{name}</h2>

    <Msg isim={name} telefon={tel}/>   
    {/* cocuga yollamak icin bu sekilde yaziyorsun*/ }
    <img src={img} alt="" />
    <h4>{tel}</h4>
    </div>
  )
}

export default Person