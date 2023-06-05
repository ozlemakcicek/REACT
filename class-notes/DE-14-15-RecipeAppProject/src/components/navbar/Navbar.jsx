import React, {useState} from 'react'
import {Hamburger, Logo, Menu, MenuLink, Nav} from "./NavbarStyles"

import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const[acik,setAcik]=useState(false)


  return (
    <Nav>
      {/* <> arasinda bir yazi yazarsan bunu etiket gibi algilar.{""} icinde yazmalisintag lere özel isaretlerini string gibi kullanmak istersek alttaki gibi syntax ile yazariz */}
      {/* hamburger acikken logoya basinca o gitsin bi daha tiklayinca da gelmesin menu kismi diye dogrudn false yaziyoruz */}
      <Logo to="/home" onClick={() => setAcik(false)}>
        <i>{"<Clarusway/>"}</i>
        <span>recipe</span>
      </Logo>

      {/* hamburger sadece bir div.cizgilerin gelmesi icin icon almaliyiz.icon a da onclick yapablrz ama dive vermek daha saglikli */}
      <Hamburger onClick={() => setAcik(!acik)}>
        <GiHamburgerMenu />
      </Hamburger>

      {/* NavBarStyles.js de menuyu osman ise flex yap demis burda da aynisini yazariz */}
      <Menu osman={acik} onClick={() => setAcik(!acik)}>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://github.com/">GitHub</a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar












// a yi da styled componentinde Mlink seklinde bir isim vereblrsn.
// export const MLink=styled.a{} seklinde iceride css vereblrsin 