//! backende gondermek icin once axiosa ihtycmz var.import edelim.bir fonksiyona ihtyc var.async await yapisi seklinde olacak.icine parametre olarak body yi alacak formdan gelen verileri bu fonksiyona atacagiz.islem sonu gelen verileri dispatch ile stora aktaracagiz.tanimliyoruz ama js fonksiyonu icinde react hook unu kullanamayiz.
//* kullanmak icin custom react hook kullanablrz.sarti use ile baslamali.onun icinde butun react hook larini kullanablrsn

import axios from "axios"
import { useDispatch } from "react-redux"

//bu bir react hook u ve burasi javascript alani o yuzden burda kullanamazsin bu sekilde. custom hook seklinde tanimlayalim.dokumana bak https://tr.legacy.reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook  asagidaki sekilde yapisi.return e dikkat!component adini degil degeri,fonksiyonu dondurur.return isOnline gibi..

// import { useState, useEffect } from 'react';

// function useFriendStatus(friendID) {
//   const [isOnline, setIsOnline] = useState(null);

//....

//   return isOnline;
// }


export const register = async(userInfo)=>{
    const dispatch =useDispatch()
}
// tek bir yerden yonetmek kolay oldugu icin ayri bir jsx dosyasi(apiCall dan authCall.jsx dosyasi) aciyoruz.
// birde hooks folderi acip icine kendi olstrdgmz custom hook dosyasi olstryrz