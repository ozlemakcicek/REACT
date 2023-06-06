import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

//useRef de gereksiz render lardan sakindirir.burda useState sart degil ama o zaman da console da goremeyiz.ReactMemo bir Hook degil ,bir react event i.o da gereksiz renderlardan sakindirir ama onda useState sart

//REf ifadesi ile tum element ele geciriliyor

const UseRefComponent = () => {

//?1.kullanim
//*hafizada yeri degismeyen bir obje olusturr,her render da yeniden render olmaz,onu engellemek icin surekli yeni referans numarasi alarak hafizayi doldurmamak icin kullanilir.

// const [sayac,setSayac]= useState(0)
// //bunuun yerine birde useRef kullanablrz.ayni isi yapiyorlar ama useState ekranda gosterirken useRef ekranda gosteremz
// const sayacRef=useRef(0)


// console.log("sayac",sayac);
// console.log("sayacRef", sayacRef.current);
//current ilk hali demek.bunu yazmaliyiz.yazmazsak consolda sayacRef in yaninda current icine gomerek getirir sonucu.
//useRef i useState siz yazarsak ark aplanda calisir ama ekranda goremeyiz

//useState ve useRef in ikisinin degiskenini de arttiralim
// const arttir=()=>{
//   setSayac(sayac+1)
//   sayacRef.current++
// }



//?2.kullanim DOM elemanlarina ulasmamizi saglar
//su sekilde inputu ele gecirmis oluyoruz.return alaninda da ref ile haber et.ayni seyi div e de yapiyoruz

const inputRef=useRef()
const divRef=useRef()


//butona tiklayinca bu fonksiyon calissin dedik.burda da yine current icine gomuluyor veri.
const renkDegistir=()=>{
 

  // console.log( divRef.current);
  // console.log(inputRef.current);
  
// inpute girilöen deger ile divRef in rengini degistir dedik
  divRef.current.style.backgroundColor=inputRef.current.value
}



  return (
    <div ref={divRef}>
    
    <h2>UseRef Component</h2> 
    {/* <h3>{sayac}</h3> */}
    <input ref={inputRef} type="text" placeholder='enter text...' />
    <button onClick={renkDegistir}>ChangeRenk</button>
{/* <button onClick={arttir}>ARTTIR</button>     */}

</div>
  )
}

export default UseRefComponent