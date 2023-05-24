// import React from 'react'
// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler(backgroundColor) JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.

import { useState } from "react";

const Form = () => {
    // react alaninda icerde degsiiklik yapilacak hem ekrana basilacak o zaman bu durumlar iciin useState() kullaniriz.const da da skinti cikartmiyor. icini bos birairiz ne girersek onu alsin diye
const[isim,setIsim]=useState("")
const [pass,setPass]=useState("")
const [ulke,setUlke]=useState("")


const formAlindi=()=>{
    alert(`name:${isim} password:${pass} country:${ulke}`)
}



  return (
    <div className="container text-center mt-4">
      <h1>************************************************************</h1>
      <h1>FORMS (EVENTS)</h1>


{/* backend e gondermek icin butun form u gondercegmz icin form un icine onsubmit deyip bunu bir fonksiyona(handleSubmit) esitlyrz ve o fonksiyonu yukarida tanimlayacagz */}
      <form onSubmit={formAlindi}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            USERNAME: <span className="text-danger fw-bold">{isim}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onInput={(e) => setIsim(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            PASSWORD
          </label>
          <input type="password" className="form-control" id="password" />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            COUNTRY: <span className="text-danger fw-bold">{ulke}</span>
          </label>

          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setUlke(e.target.value)}>
            <option selected>ulkeler</option>
            <option value="Turkey">Turkiye</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>
        </div>
{/* value lar backend e giden isimler.o nedenle onemli.input yerine bootstrap ten select yapisini aldik geldik.ilk option da selected olan buton uzerinde secili olup gozuken kisim. */}
    {/* button un type submit olursa gondeme yapar     */}
        
        <button type="submit" className="btn btn-primary">
          GONDER submit
        </button>
      </form>
    </div>
  );
};

export default Form;

//? select de de onInput olur ama onChange secmeli seylerde daha guzel olur.
//? eger sadece baaskend e gondereceksek useState yazmaya gerk yok, sadece let isim diye degiskeni tanimlar ve onu kullaniriz ama ekrana bastirmak istersek useState kullanmaliyiz.