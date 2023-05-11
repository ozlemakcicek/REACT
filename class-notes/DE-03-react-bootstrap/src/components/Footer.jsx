import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
        <Navbar className='fixed-bottom bg-dark text-light d-flex justify-content-center'>
        {/* fixed-bottom ile sabitlestirdik */}
        <p>CopyRight {new Date().getFullYear()} </p>
        </Navbar>
    </div>
  )
}

export default Footer

//?Navbar div gibi o yuzden <Navbar> olarak kapatma slasi olmadan yaziyoruz.

//* footer icin sadece <Navbar></Navbar> i alip icine p ile ne yazacaksak footer a onu yaziyoruz