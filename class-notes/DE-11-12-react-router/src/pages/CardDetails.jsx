import React from 'react'

import data from "../data"
import { useNavigate, useParams } from 'react-router-dom'

// useNavigate() ile baska sayfadan gonderilen url den gelen html kelimesini(name idi burda) useParams() ile karsilanir.
//CourseCard dan name App.js e gelir ordan da CardDetails a gelir. 



const CardDetails = () => {

  const {name} = useParams()
  // const {namee} = useParams()
  //id nin esitini yakalayacagiz.destruction gibi yazimi.lazim olan lardan birini kullanablrsin.name,id ya da yorum gibi...
  const navigate=useNavigate()

  return (
    <div className="container text-center mt-4">
      {data.map(
        (i) =>
          i.name === name && (
            <div>
              {/* {data.map((i)=>i.name===namee && (<div> */}
              {/* burda bi nevi filter yaptik.react alaninda filter tanimlanmadigi icin && kullaniyoruz */}

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