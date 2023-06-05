import React from 'react'
import Buton from '../components/Buton'

import Slider from '../components/Slider'

// home page ni Router ile yonlendiririz.ama burda oldugu gibi page icinde page(aslinda componentdir bu) varsa onu normal yolla yonlendiririz.su anda home da slider ve buton componentleri de geldi
const Home = () => {
  return (
    <div>
    
  <Slider/>
  <Buton/>
    </div>
  )
}

export default Home