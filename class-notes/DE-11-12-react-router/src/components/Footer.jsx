import React from 'react'
import { Navbar } from 'react-bootstrap'
// navbara benzettmisiz.o yuzden react bootstrap den hazir navbar formunu aldik.tesekkru de navbara yaptik.
const Footer = () => {
  return (
    <div>
<Navbar  className="justify-content-center bg-dark p-1 text-light fixed-bottom">

 <p > Copyright {new Date().getFullYear()} </p>
</Navbar>


    </div>
  )
}

export default Footer