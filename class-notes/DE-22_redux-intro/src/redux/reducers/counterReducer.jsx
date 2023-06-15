
//! asil isi yapan sayfa burasi.2 parametre alir.1-state={icine birkac tane state aralarina koma koyrak yazilablr}.alan aciyoruz.olmasi gereken butun olaylari buraya yaziyoruz 2- action(yonetmen sayfasindan gelenler buraya yazilir)

//switch case ..if else anlaminda ikisi de kullanilablr. switch icine degsikenleri alir.action ile gelen type a bak diyoruz switch icinde. sonra case ile action sayfasindan gelenin type i arttir ise sonucu 1 fazlasi ile degistir(yani 1 arttir dedik)ve yine action sayfasindan gelen payloadi text olarak yaz dedik.
// ikinci case de action dan gelenin type i azalt ise 1 eksigi ile sonucu degistir
// ucuncu case de gelenin type i reset ise sonucu sifir yap.eger bunlarin hicbiri degilse default olarak state i dondur diyoruz.

const counterReducer = (state=
    {counterSonuc:0},action1)=>{

        switch (action1.type) {

          case "ARTTIR":
            return {
              counterSonuc: state.counterSonuc + 1,
              text1: action1.payload1,
            };


          case "AZALT":
            return {
              counterSonuc: state.counterSonuc - 1,

             };
            

          case "RESET":
            return {
              counterSonuc: 0,

              text1: action1.payload1,
            };


            

          default:
            return state;
        }
    }

 // default hicbir islem yapmadan ilk hali demek ve bunu yzamazsk hata aliriz



 


export default counterReducer
