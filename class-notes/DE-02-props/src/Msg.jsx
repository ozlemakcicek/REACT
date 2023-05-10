// import React from 'react'

const Msg = ({isim,telefon}) => {  // (props) yerine gelen verinin direkt isimlerini{} icinde yazalim
    // console.log(props);  
    // yukariya props yazsaydik gorurduk konsole da
  return (
    <div>
        {/* <h1>merhaba ben {props.isim}</h1> */} 
        {/* buna gerek yok artik.cagirirken direkt {} icinde gelenlerin isimlerini yazdiririz ve asagida da props.isim gibi demeye gerek kalmayacak */}
        <h1>merhaba ben {isim}</h1>
        <h4>benim telefon numaram {telefon}</h4>
    </div>
  )
}

export default Msg