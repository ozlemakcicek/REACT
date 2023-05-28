const remove=document.querySelectorAll('.buton')
const stuck=document.querySelectorAll('.sayi')
const minus=document.querySelectorAll('.minus')
const plus=document.querySelectorAll('.plus')
const productTotal= document.querySelectorAll('.urun')
const preises=document.querySelectorAll('.preis')




const subtotal =document.querySelector('.tot1')
const tax=document.querySelector('.tot2')
const shipping =document.querySelector('.tot3')
const total =document.querySelector('.tot4')


plus.forEach((p,i,array)=>{
    p.onclick=()=>{
stuck[i].textContent ++
billing();
    }
})

minus.forEach((p, i, array) => {
  p.onclick = () => {
    

    if(stuck[i].textContent>0){

stuck[i].textContent--;
billing();
    }
    
  };
});


remove.forEach((p, i, array) => {
  p.onclick = () => {
    stuck[i].textContent=0;
    p.closest('.row').remove()
    billing();
  };
});


const billing=()=>{
let subTotalPreis=0;
let shippingPreis=0;

stuck.forEach((p,i,array)=>{

    productTotal[i].textContent=Number(p.textContent*preises[i].textContent).toFixed(2) 

    subTotalPreis += Number(p.textContent * preises[i].textContent); 

})
if(subTotalPreis){
    shippingPreis=15;
}
subtotal.textContent=subTotalPreis.toFixed(2)
tax.textContent=(subTotalPreis*0.18).toFixed(2)
shipping.textContent=shippingPreis.toFixed(2)
total.textContent=(subTotalPreis*1.18).toFixed(2)

}

billing();



// let wagen=[];



