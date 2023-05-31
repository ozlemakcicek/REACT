import React from 'react'
import HeaderS, { LinkS } from './style/HeaderStyle'
import DivStyle from './style/ContainerStyle'
import ButtonS, { DomatesButon } from './style/ButonStyle'

//normal button duz geldi yanci button suslu icinde geldi
const Home = () => {
  return (

// div leri de degisterecegiz tabiki.html etiketleii kullanmyrz stillendirilmis haldekileri kullanacagiz
    <DivStyle>

{/* HeaderStyle dosyasindaki verdigimiz stilli degsken adini yaziyopru ve bu aslinda bir h1.onun icinde ne yazmak istiyorsan yaz */}

        <HeaderS>STYLED COMPONENTS</HeaderS>
    
    {/* a linkinden turetme icin href i de yazmamiz lazim */}

<LinkS href='#'>LINK</LinkS>

{/* props gonderelim */}
    <ButtonS ozlem>TIKLA1</ButtonS>
    <ButtonS>TIKLA2</ButtonS>
    
    <DomatesButon yunus>TIKLA3</DomatesButon>
    <DomatesButon>TIKLA4</DomatesButon>
    
{/* burdaki ozlem ve yunusu ButtonStyle sayfasina gonderdik ve orda kullanacagiz. */}


    </DivStyle>
  )
}

export default Home