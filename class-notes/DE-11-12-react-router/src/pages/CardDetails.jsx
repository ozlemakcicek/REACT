import React from 'react'

import data from "../data"
import { useNavigate, useParams } from 'react-router-dom'

// local deki datada map ile dolasip destruction yapilip istedigin degisken ile (genelde id ile) yolunu ver.App.js de o degiskeni sayfaya gonder. useNavigate() ile yolu verilen  baska sayfadan gonderilen url den gelen html kelimesini(name idi burda) useParams() ile karsilanir.
//CourseCard da yolu verilen degsiken, App.js de gonderilir, ordan da CardDetails a gelir ve useParams ile yakalanir ve simdi icinde

// burda data yi yine cekiyoruz.icinde dolasiyoruz ve herbirinin name ine bak benim gonderdigim buraya gelen in name ine bak ve ismi tutanlari cekiyoruz. ve div lerle h1 lerle bastir



const CardDetails = () => {

  const {namee} = useParams()
  // const {namee} = useParams()
  //id nin esitini yakalayacagiz.destruction gibi yazimi.lazim olan lardan birini kullanablrsin.name,id ya da yorum gibi...
  const navigate=useNavigate()

  return (
    <div className="container text-center mt-4">
      {data.map(
        (i) =>
          i.name === namee && (
            <div>
             
              {/* burda bi nevi filter yaptik.react alaninda filter tanimlanmadigi icin && kullaniyoruz.Tek tarafli durumlarda && yi kullaniriz */}

              <h3>{i.name}</h3>
              <img src={i.img} alt="" width="300px" />
              <h3>{i.text}</h3>
              <h4>{i.yorum}</h4>

              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(-1)}
                >
                  GO BACK
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/")}
                >
                  GO HOME
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
  }

export default CardDetails

// 