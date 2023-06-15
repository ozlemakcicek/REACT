import axios from "axios"
import { useDispatch } from "react-redux"

//bu bir react hook u ve burasi javascript alani o yuzden burda kullanamazsin bu sekilde. custom hook seklinde tanimlayalim.dokumana bak https://tr.legacy.reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook  asagidaki sekilde yapisi.return e dikkat!

// import { useState, useEffect } from 'react';

// function useFriendStatus(friendID) {
//   const [isOnline, setIsOnline] = useState(null);

//....

//   return isOnline;
// }

//! ilk sarti use ile baslamasi.return de de isOnline dedik burda

export const register = async(userInfo)=>{
    const dispatch =useDispatch()
}
// tek bir yerden yonetmek kolay oldugu icin bir jsx dosyasi aciyoruz