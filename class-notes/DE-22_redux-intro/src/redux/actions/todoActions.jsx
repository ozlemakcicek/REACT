//! reducer ve oyuncu arasindaki baglanti nasil oluyor? Ve birbirlerini gorebilme durumu nasil?
//! App.js de en tepede dedikki Counteri da Todo yu da gor.(sarmallayarak dedikki butun Redeucerlari bu sayfalarda gor)
//! action sayfasi sagliyor bunu.Action sayfasindaki fonksiyon  oyuncu sayfasinda kullaniliyor, type ise reducer sayfasinda kullaniliyor.bu sayede birbirine baglaniyor.
//*          reducer da:switch (action.type) {
         //*  case "TEMIZLE":    
         //* action da: export const temizle=()=>({type:"TEMIZLE"})                     
         //*oyuncu da: onClick={()=>dispatch(temizle())}


// burda toDoList (oyuncu) de temizle diye bir fonksiyon isteginde bulundu, onu burda reducer dan alalim
// {} icinde olamasi obje mantiginin disinda type ve payload almasi
// input ve temizle icin aracilik yaptik asagida.oyuncudaki fonksiyonlari al burda type ver lazimsa payload kullan ve bunlari reducer sayfasinda kullan
export const temizle=()=>({type:"TEMIZLE"})

export const ekle=(veri)=>({type:"EKLE", payload:veri})