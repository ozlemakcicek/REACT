import { useState, useEffect } from "react";
import axios from "axios";

const People = () => {
    const [insanlar,setInsanlar]=useState([])
//fetch ile veri cekecegiz simdi.setInsanlari kullanacagiz ama bu sefer her defasinda basa donup tekrar calisacak.sonsuz donguye girer.o yuzden useEffect kullanacagiz.fetch ile verileri cektik.

//?fetch ile veri getirme.1.yol
// useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>res.json())
//     .then((data)=>setInsanlar(data));
// },[]);


//? axios ile veri cekme.2.yol
//axios da fetch den farkli olarak json a cevirmeye gerek yok.get ile veri cekiyoruz.post veri gonderme.put icini guncelleme.patch ve delete sseklinde 5 tane axios komutu var

useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setInsanlar(res.data));
}, []);
//ilk render da beni gor bidaha gorme der.ici dolu olunca sonsuz donguye girer.o herzaman kullanilmaz.count falan olursa her dizi degistiginde countu arttir anlaminda kullanilablr.


console.log(insanlar);


  return (
    <div className="container text-center mt-4">
      <div className="row">
        {insanlar.map((a) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={a.id}>
              {/* https://avatars.dicebear.com/styles */}
              <img alt="" src={`https://avatars.dicebear.com/api/avataaars/${a.id}.svg`} />
              
              {/* her defasinda farkli resim gelsin diye a nin id sini backtick icinde {} icinde yaz.react alaninda backtick e izin veriliyor.bu url de id vermis o yuzden boyle.baska bir sitede sadece img verseydi {a.img} derdik */}

              <h5>{a.name}</h5>
              <h6>{a.phone}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;

//* {insanlar?.map((a))}   insanlar diye birsey varsa icinde dolas demek.eger basta [] ile onun dizi oldugunu belirtmezsen boyle yazmalisin.
