import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
        <Navbar className='fixed-bottom bg-dark text-light d-flex justify-content-center'>
        <p>CopyRight {new Date().getFullYear()} </p>
        </Navbar>
    </div>
  )
}

export default Footer