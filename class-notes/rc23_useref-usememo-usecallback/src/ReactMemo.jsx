import React from 'react'
import Header from './components/Header'
import { useState } from 'react'

import fullstack from "../src/assets/fs.png"

//useState den kaynakli her defasinda yukari cikip tekrar ekrana bastirilir.surekli bir render edilme var.ReactMemo renderlari onlemeye yardimci olur


const ReactMemo=()=>{

  const [sayac,setSayac]= useState(0)


  const [resim,setResim]=useState()

  const arttir=()=>{
    setSayac(sayac+1)
  }

  return (
    <div>
<Header resim={resim}/>

<p>COUNT: {sayac}</p>
<button onClick={arttir}>INCREASE</button>
<button onClick={()=>setResim(fullstack)}>FullStack</button>

    </div>
  )
}

export default ReactMemo


//ilk butonda Header calismasin dedik.Header sayfasinda memo() parantezine aldik onu.
//ikinci butonda ise tiklaninca resim gelsin headera dedik.