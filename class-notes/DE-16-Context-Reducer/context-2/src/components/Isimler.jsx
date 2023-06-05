
import { useContext } from "react";
import { KullaniciContext } from "../App";
import AnaUser from "./AnaUser";
const Isimler = () => {

  //diziye burda da ihtiyacimiz var cunku 4 tane isim yazdirmak istedik.sadece kullanici degiskenini kullaniyoruz
  const{kullanici}=useContext(KullaniciContext)

 return (
   <div>
   {/* diziden 4 tane isim yazdir.butun isimler olmadigi icin slice ile kesip sonra map ile dolasiyoruz*/}
   {kullanici.slice(0,4).map((i)=>(

    <div style={{background:"pink"}}>
      {i.login}
    </div>
   ))}
   

     <AnaUser kullanici={kullanici}/>
   </div>
 );
}

export default Isimler