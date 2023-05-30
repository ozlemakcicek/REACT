
//escd yaz

import styled from 'styled-components';

const DisplaySSS = styled.div`

background-color: lightblue;
display: flex;
align-items: center;
justify-content: space-between;

//App.js den gonderilen butun sayfa icin lazim olan responsivlik propsununun neyini kullanacaksak onu yaziyoruz
  
@media (max-width: ${({ theme }) => theme.responsive})

`;

export default DisplaySSS;
