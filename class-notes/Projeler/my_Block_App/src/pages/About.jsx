import React from 'react'
import MyFoto from "../assets/OIF.jpg";
const About = () => {
  return (
    <div style={{textAlign:"center"}}> 
    <h2>Was wollen Sie über mich wissen
    ?</h2>
    <img src={MyFoto} alt="" style={{borderRadius:"50%"}} />
    <p style={{fontSize:"20px"}}>Ich bin Özlem.Ich beschäftige mich mit der Programmierung</p>
    <h4>FrontEnd & BackEnd</h4>
    </div>
  )
}

export default About