import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios"
//resimlere tiklayinca baska sayfaya gitsin diyoruz.id yi al git diyoruz.useNavigate ile yapalim.importlar yapilsin.const ile tanimla.ve app.js e git.router yap

//!lifesycle daki useEffect teki People.jsx componentini aldik

const Teacher = () => {
  const navigate=useNavigate()

  const [insanlar, setInsanlar] = useState([]);
  //bu bir array i yuzden [] koyariz useState icine

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setInsanlar(data))
  //     .catch((err) => console.log(err));
  // }, []);

//ya da axios ile yapablrz.url adresimizin sonunda users yaziyor herkesi cagiriyoruz.ama teacherdetails sayfasinda bu url nin sonuna backtick icinde ${id} yazarizki sadece tikladigimiz id deki kisi gelsin dedik.
 
   useEffect(() => {

    const veriGetir=async()=>{
      const res=await axios.get("https://jsonplaceholder.typicode.com/users")
      setInsanlar(res.data)
    }
     veriGetir()
       
   }, []);





  console.log(insanlar);

  //bu dizi de resim olmadigi icin baska bir siteden id ye bagli(yoksa hep ayni resim gelir.farkli farkli gelsin diye id yazdik) resim aldik asagida.
  return (
    <div className="container">
      <div className="row">
        {insanlar.map(({ id, name, phone }) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={id}>
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
                alt=""
           onClick={()=>navigate(`/teacher/${id}`)}
              />
              <h1>{name}</h1>
              <h5>{phone}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teacher;

//useNavigate yerine Link kullansaydik soyle bir skinti olurdu.img nin yolunda /teacher olur ama id ye ulasma isi yok.o yuzden Link burda olmaz.
