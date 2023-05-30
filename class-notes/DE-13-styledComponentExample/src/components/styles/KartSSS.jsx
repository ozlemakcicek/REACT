//bir divden yapacagimiz icin escd yazdik

import styled from 'styled-components';

const KartSSS = styled.div`
  background-color: aquamarine;
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  gap: 2rem;
  padding: 60px;

  display: flex;
  flex-direction: column;
  /* flex-direction: row-reverse; tersine dondurur.resim sola yazi saga.ama bizim tek bir div imiz var fakat icindeki resimlerin id si tekse soyle ciftse boyle demek istersek o zaman Card.js dekileri yapip buraya asagidaki gibi yazariz*/
  /* DisplaySSS deki responsiv ligi buraya da yziyourz */
  flex-direction: ${({ ters }) => ters || "row"};
  @media (max-width: ${({ theme }) => theme.responsive}){
    background-color: pink;
  }
`;

export default KartSSS;

