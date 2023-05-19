import React,{useState,useEffect} from 'react'
import moment from "moment";

const Clock = () => {
    const[zaman,setZaman]=useState(moment())
    // basit birsey yaptirmak isteseydik moment den sessionStorage.format li kismi yazablrdik.ama asagida kendiliginden calisacak ben her defasinda ugrasmayacagim
  
  useEffect(()=>{
const time= setInterval(()=>{
    setZaman(moment());
    console.log("merhaba");
},1000)

return()=>{
    clearInterval(time)
    console.log("baska sayfaya gidildigi icin interval öldu");
}
//!sayfa ilk render edildiginde setInterval basklasin diyoruz bos [] ile.
  },[])
  
  
  
    return (
      <div>
        {zaman.format("HH")}
        {zaman.format("ss") % 2 === 0 ? ";" : " "}

        {zaman.format("mm")}
        {zaman.format("ss") % 2 === 0 ? ";" : " "}
        {zaman.format("ss")}
      </div>
    );}



export default Clock