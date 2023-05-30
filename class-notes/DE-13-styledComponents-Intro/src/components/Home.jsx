import React from 'react'
import HeaderS, { LinkS } from './style/HeaderStyle'
import DivStyle from './style/ContainerStyle'
import ButtonS, { DomatesButon } from './style/ButonStyle'

const Home = () => {
  return (


    <DivStyle>

        <Headers>STYLED COMPONENTS</Headers>
    
    {/* a linkinden turetme icin href i de yazmamiz lazim */}

<LinkS href='#'>LINK</LinkS>


    <ButtonS ozlem>TIKLA1</ButtonS>
    <ButtonS>TIKLA2</ButtonS>
    
    <DomatesButon yunus>TIKLA3</DomatesButon>
    <DomatesButon>TIKLA4</DomatesButon>
{/* burdaki ozlem ve yunusu ButtonStyle sayfasina gonderdikve orda kullanacagiz. */}


    </DivStyle>
  )
}

export default Home