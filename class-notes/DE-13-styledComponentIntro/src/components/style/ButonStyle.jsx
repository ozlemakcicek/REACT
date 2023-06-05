//escb den uretiyoruz.adini degsitryrz.ufak bir stil verip gidip hemen home a bildirelim ki ekranda gorebilelim


import styled from 'styled-components';


//Home da iki tane Button olusturduk.benzer stilleri oldugu gibi farkli stilleri de olacak simdi ana ve yanci stilli verecegiz

  // //*1.style uretme sekli.bu ana still
const ButtonS = styled.button`

  //home dan gelen ozlem propsunu bu sekilde kullanablrz ${{}}  bu sekilde.varsa soyle yoksa boyle yap.arrow funktion dan sonraki () olmasa da olur.
  background-color: ${({ ozlem }) => (ozlem ? "lightblue" : "orange")};
  color: blue;
  cursor: pointer;
  padding: 1rem 1.5rem;

  border-radius: 5px;
  font-family: "tahoma";
  font-size: 30px;
  &:hover {
    transform: scale(0.95);
  }
`;

// //*2. style uretme sekli Yanci still.bunu da iki sekilde yazabilirz
//? 1- export const DomatesButon=styled.button`` seklinde direkten button dan uretirsin.yeniden stillendirirsin herseyi

//? 2- ya da normal button dan degilde daha once uretilmis stillendirilmis Buttons dan uretelim

export const DomatesButon=styled(ButtonS)`

// burada bir degisiklik yapmak istedik o yuzden props kullanacagiz.props un ana sayfada verip burda sartli o propsu kullanacagiz
/* color: green; */
color: ${({yunus})=>yunus ? "tomato": "green"};
background-color: aquamarine;
border: 5px solid red;
width: 300px;`


//? 3.bir yanci turetme yolu varki onu HeaderS da yaptik.sadece sayfayi kiralayip,tamamen kendine ozgu stillerin oldugu yeni bir yanci yapmak.Mesela HeaderS sayfasinda HeaderS dan ya da h1 den degilde a etiketinden turetilmis Links diye bir still etiketi ureteblrz.

export default ButtonS;


// //* yukaridakinden turetebiliriz.styled(ButtonS) yaparak.ve aynilar kalsin ezmek istediklerimizi ezer,yeni degisiklikler vereblrz.props ile de yapablrdik ama var olan uzerinden degsklik yapacaksak pros olmaz.aynisini aldirir props





