import React from 'react'
import { Container } from 'react-bootstrap'
import resim from '../img/notFound.jpeg'


// useNavigate hook unu import ediyoruz.

import { useNavigate } from "react-router-dom";

const NotFound = () => {
//useNavigate hook unu bir degiskene atadik.ve bunu asagida buttona onClick yapinca  "/" diyerek Home a gitsin dedik.
// useNavigate rooter yapisinin bir elemani.disaari bir url ye gitmez.sadece kendi yazdigimiz page lere gider.const ile verdigimiz ismi biz veriyoruz.

const navigatee=useNavigate()

  return (
  <Container>
   <img src={resim} alt="" width="400px"/>
   <button className="btn btn-danger" onClick={()=>navigatee("/")}
  
   >GO HOME </button>
  </Container>
  )
}

export default NotFound