//escb yazinca Button cikar.sonuna SSS yi ben yazdim.export unu da duzeltiyorum

import styled from 'styled-components';
//headerSS den gelen buttonlarin propsunu burda yaziyoruz ve istedigimiz renkleri ternary ile yapiyoruz.renklerin basina # koy
const ButtonSSS = styled.button`
  /* background-color: #a62440; */
  background-color:${({halit})=>halit ? "#A62440": "white"};
/* color:white */
color:${({fatih})=>fatih || "white"};
//burda Header sayfasinda propsun rengini de verip gonderdik burda direkt varsa ya da yoksa yaptik.


border: 1px solid #a62440;
  border-radius: 5px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin: 2rem 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

// dorduncu buttonu yanci buton yapacagiz usttekinden copyalayarak.bazi ozelliklerini ezip bazilarini ekleyecegiz
export const DetayButton=styled(ButtonSSS)`
color: tomato;
background-color: white;

border-radius: 20px 0;
border-left:3px solid blue;


`




export default ButtonSSS;

