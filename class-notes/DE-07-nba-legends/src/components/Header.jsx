import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import nbaLogo from "../assets/nba-logo.png";


const Header = ()=>{
    return(
        <Container>
        <Image src={nbaLogo} width="200px"></Image>
        <h1 className="my-2 font-monospace display-4 fw-bold">NBA Legends</h1>
        </Container> 
  
  )
};

export default Header;

//*Container react-bootstrap in containeri.sagdan soldan bosluklu olsun diye.Image de bootstrap in bir elemani
//*js degiskenlerini react alaninda {} icinde cagiriirz