import React from 'react'
import { useEffect } from 'react'

import axios from "axios"
import { useState } from 'react'
import Users from './components/Users'
import { useMemo } from 'react'


//bir dizi aciyoruz useState ile.onun icine api den cektigimiz verileri atacagiz.users da datayi cek.useritem da da map ile icinde dolas bastir.3 sayfa arasinda gezinecegiz

const UseMemoCallBack = () => {

const[kisiler,setKisiler]=useState([])
const[text,setText]=useState("")
const[bitmisHali,setBitmis]=useState("")
//bu ikinci useState i asagidaki inputa veri girilince icin yaptik.iste burda her defasinda calisir yine.her harf girilince render ediyor surekli.buna engel olmak icin useMemo kullanacagiz.users i memo sarmalina alöacagiz.herhangibir degisiklik yoksa inputta o zaman memo sarmali hallediyor.
// 3.useState i de inputa veri girince arka plan yine tekrardan calismasin diye yapyiyrz.bunu const filtreli de kullan 


useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>
// console.log(res);
setKisiler(res.data))

},[])

//bu sekilde kalici bir degisiklik olamz o yuzden degiskene atamaliyiz ve onu gondeririz users a
// kisiler.filter((i)=>i.name.includes(text))

const filtreli= useMemo(()=>kisiler.filter((i)=>i.name.includes(bitmisHali)),[kisiler,bitmisHali])
//baslangicta yukarida text i hiclige esitledik.hepsinde o.i basta hepsi gelir." " bosluk biraksaydik yine hepsi gelirdi.isim-soyisim arasinda bosluk o.i

  return (
    <div>

<input type="search" onChange={(e)=>setText(e.target.value)} />
<button onClick={()=>setBitmis(text)}>SEARCH</button>

<Users kisiler={filtreli}/>

    </div>
  )
}

export default UseMemoCallBack