// import React from "react";
import {useState} from "react";

//? icon importunda react iconu package.json a once yuklemeliyiz.npm install react-icons ile yapyrz bunu.sonra da hangi sayfada kullanacksan oraya tesekkr linkini import et.her bir icon icin ayri ayri edilir ya da ayni alandan aliyorsan{} icine virgulle icon adini yazarsin.asagida da componenet cagirir gibi <iconadi ile tuglayi gorursun.once yukle, sonra tesekkr et, sonra component gibi yukle nereye koymak istersen.
//*react-icons sitesinden yuzlerce icon alani gorebilrsn.Fontawesome-5 den alirsak mesela iconlarin basinda Fa.. yazar.importunda da /fa yazar.Gameicon dan alirsan Gi...yazar basinda importunda da /gi yazar

import { FaReact,FaGooglePlus } from "react-icons/fa";



const MauseKeyboard = () => {
const [xEkseni,setXekseni] = useState(0);
const [yEkseni,setYekseni] = useState(0);

  //!onMouseMove=mouse umun sayfa üzerindeki hareketlerini inceler. pageX ve pageY komutunu kullanırsanız, bulunduğunuz sayfanın sol üst köşesini 0-0 kabul ederbu baslangic degeri, ona göre konum bildirir

const[inputData,setInputdata]=useState("")

const mouseOlayi = (e) => {
    // console.log(e.pageX);

    // console.log(e); onMouseMove da farenin hareketleriyle ilgili tüm bilgileri verir. e.pageX(koca sayfadakine gore x ve y konumu demek.)  diyerek farenin x eksenindeki konumunu gördük.pageX i console.log yapinca orda gordugumuz bir bilgi
setXekseni(e.pageX);
setYekseni(e.pageY);

}


const keyDownOlayi=(e)=>{
    // console.log(e);
    if(e.keyCode>=48 && e.keyCode<=57){
        alert("lutfen harf giriniz")
    }else alert("tebrikler harf girdiniz")
  };

  return (
    <div className="container text-center mt-4 d-flex flex-column align-items-center">
      <h2 className="text-danger">MAUSE EVENTS</h2>

      <p>X ve Y</p>
      <p className="text-danger fw-bold">
        {xEkseni} {yEkseni}
      </p>

      <div
        className="bg-success text-light w-50 p-4"
        id="coord"
        onMouseMove={mouseOlayi}>
        KOORDINATLAR <FaReact/> <FaGooglePlus/>
      </div>


<div>
    <h2 className="text-danger mt-4">Keyboard-Clipboard Events <span>{inputData}</span></h2>
    <input type="text" className="form-control" onKeyDown={keyDownOlayi}  onChange={(e)=>{
        // console.log(e)
        setInputdata(e.target.value)
    }} />


</div>


    </div>
  );
};

export default MauseKeyboard;


//? onMouseMove i nereye yazarsan oraya gore konum verir.sayfanin ana divine verseydik sayfanin sol ust kosesini 0 0 kabul eder