import React from 'react'
import Card from './components/Card';
import Header from './components/Header';
import ContainerSSS from "./components/styles/ContainerSSS"
import { ThemeProvider } from 'styled-components';

//butun sayfaya responsivlik vermek icin const style={} yapariz.asagida butun cocuklarini da <ThemeProvider></ThemeProvider> ile sarmalla.importunu da al tabiki ve theme={style} olarak yukaridakini al.sonra da kim alacaksa onlarin toplu sayfasina yani DisplaySSS e git ve @media ile respionsivlikleri ver.;
const style={
  responsive:"724px",
  logoColor:"orange"
}


const App = () => {
  return (
<ThemeProvider theme={style}>
    //div yerine ContainerSSS ile sarmallayalim.bu stilli bir div ile sarmalladik demek.sayfada stillerini verdik
 <ContainerSSS>

 <Header/>
  <Card/>
 
 </ContainerSSS>

 </ThemeProvider>
  );
}

export default App
