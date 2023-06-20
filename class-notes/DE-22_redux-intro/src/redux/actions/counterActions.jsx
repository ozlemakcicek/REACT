// yonetmen burasi .araci olacak iki sayfa arasinda
// arttir diye bir fonksiyon olusturduk export ile baslayacak ve karsilarken hangi type ile karsilayacak.
//2 parametre alacak.type ve payloud
// sonra fonksiyonu kullanacak sayfaya reducer a gidiyoruz ve orda type ile payload(lazimsa veya istersen text olarak) ini al

export const arttir=()=>({type:"ARTTIR",
payload1:"ARTTIRILDI"})

export const azalt=()=>({type:"AZALT"})

export const resetle = () => ({ type: "RESET", payload1:"SIFIRLANDI" });

// payload1 dediysek heryerde ayni yazariz cunku cagirirken tek bir payload yazariz.payload i illaki yazmak zorunda da degilsin.

