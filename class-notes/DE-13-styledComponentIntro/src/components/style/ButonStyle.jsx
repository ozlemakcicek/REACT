import styled from "styled-components";


//*1.style uretme sekli

const ButtonS = styled.button`

//home dan gelen ozlem propsunu bu sekilde kullanablrz ${({})}  bu sekilde.varsa yoksa yap
  background-color: ${({ozlem})=>ozlem ? "lightblue":"orange"};
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


//* yukaridakinden turetebiliriz.styled(ButtonS) yaparak.ve aynilar kalsin ezmek istediklerimizi ezer,yeni degisiklikler vereblrz.props ile de yapablrdik ama var olan uzerinden degsklik yapacaksak pros olma.aynisini aldirir props

//*2. style uretme sekli
export const DomatesButon=styled(ButtonS)`
color: ${({yunus})=>yunus ? "tomato": "green"};
background-color: aquamarine;
border: 5px solid red;
width: 300px;

`

export default  ButtonS;