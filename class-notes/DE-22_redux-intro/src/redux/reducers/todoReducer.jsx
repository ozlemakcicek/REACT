// alan acacagiz(state) ve olustruacagimiz dizi ile action i yazacagiz.bunu component suslusu icinde de yapablrz,ya da degskene atariz.base practise initial denilir bu degiskene.bu alanda bir dizi olusturalim tek elemanli.Birkac useState varsa {} icinde yazariz.


const initial={gorevler:[{id:0, yazi:"Redux Calisiyoruz"}]}




const todoReducer = (state=initial,action

) => {
 
    switch (action.type) {
        case "TEMIZLE":
            
         return initial
        //bununla ilk degerlere don dedik.eger hersey silinsin dersek;
        // return {gorevler:[]}

// input icin action da verilen type i al ve ne return edecegini yaz.action in type i EKLE ise gorevler dizisindeki hersey kalsin,id yi gorevler dizisinin length nin 1 fazlasi ile, yaziyi da action in payloadi ile yani benim gonderdigim veri ile degistir.
case "EKLE":
    return {gorevler:[...state.gorevler,{id:state.gorevler.length+1,yazi:action.payload}]}
    
        default:
            return state;
    }

}

export default todoReducer