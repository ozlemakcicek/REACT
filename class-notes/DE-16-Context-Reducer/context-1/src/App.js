import React, { useState } from 'react'
import Home from './components/Home'
import data from "./data"
import { createContext } from 'react'


export const OgrenciContext=createContext()


const App = ({id}) => {

const[ogrenci,setOgrenci]=useState(data)

const changeRenk=(newRenk)=>{
  

  setOgrenci(
    ogrenci.map((a)=>a.id===id ? {...a,color:newRenk} :a))
}

  return (

  <OgrenciContext.Provider value={{ogrenci,changeRenk}}>
    <Home/>
  </OgrenciContext.Provider>
  )
}

export default App


// inputtaki renkler degisecek.ayrica bir fonksiyon olusturuyoruz.simdi bir context create etmeliyiz.ve bu en tepedeki verileri asagidakilerde de kullanabilelim.bunun icin ayri bir component te yapilabilir am aburda da export const..ile yapablrz.asagida return alaninda da hangi cocuk kullansin istiyorsak onu sarmallayalim ve provider ile de value yu gonderelim.home ve ogrencilist i es gecip 3.nesle gidecek simdi.aradakilerde alabilir tabiki.