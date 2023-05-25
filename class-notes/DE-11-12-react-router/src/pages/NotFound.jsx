import React from 'react'
import { Container } from 'react-bootstrap'
import resim from '../img/notFound.jpeg'
const NotFound = () => {
  return (
  <Container>
   <img src={resim} alt="" width="400px"/>
   <button className="btn btn-danger"
  
   >GO HOME </button>
  </Container>
  )
}

export default NotFound