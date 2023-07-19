"use strict";
//* ts dosyasinda yaptiklarimizi terminale tsc yazarak App.js e dondururz.yorumlar gozukmez.
// console.log('Hello World')
//*yorumlar icin ! kullanilir.bunlar js alaninda gozukmez.normal yorumlar gozukur
const button = document.getElementById('submit');
const a = document.getElementById('input1');
const b = document.getElementById('input2');
const result = document.getElementById('result');
const test = document.querySelector("p");
const test2 = document.querySelector("a");
// function add(a , b) {
//     return a + b;
// }
// button.addEventListener('click', function () {
//     result.innerText = `${add(a.value, b.value)}`;
// })
//ES5 ile uygun compilet
// const x=5;
// var y=6;
// const carp=(c,d)=>{
//     c*d
// }
//  string olarak belirttigine number verirsen altini cizer hata verir.
// let message : string="Hello"
// message=2
//Ayni seyi :string gibi bir type vermezsen de yapar( let message ="Hello"
// message=2)
//Ama su durumda hata vermez.yani basta hicbir deger vermeden sadece tanimlama yaparsak asagida istedigin type da verebilirsin
// let msg;
// msg=2
// msg="Hello"
// msg=false
//!DATA TYPES-Array
// ayni type durumu arrayler icin de gecerli.2 sekilde yazablrz arrayi
//1-
let fruits = ["orange"];
fruits.push("apple");
fruits.push(48);
//2-
let numbers = [1, 2, 3];
numbers.push("Hello");
numbers.push(2);
//empty
let score = []; // any type ta olusur
let score2 = []; // number veya istenilen type ta array olusturur
//! Tuples
//!- norml tuple
let myTuple;
myTuple = [1, "Mark", true]; //ok
// myTuple=[1,"Mark",3]  //hata
//olmayan index numarasina atama yapoarken hata verir
// myTuple[2] = false; //ok
// myTuple[2] = 3; //hata
// myTuple[4] = false; //hata
myTuple.push("hi");
let m2;
m2 = [0, "Hello"];
m2.push(false); //hata  boolean tanimlanmamis en basta
m2.push(3); //ok
console.log(m2);
//*2 -Array of Tuple
let arrTuple;
arrTuple = [[1, "mark"], [2, "Ashley"], ["Ethan", 3]]; // number, string sirasini karistirinca hata verir
arrTuple.push([3, "Ethan"]); //ok
arrTuple.push(["Cedric", 4]); // hata yine sira karisti eklemez o yuzden
let mark = 1 /* Role.Admin */;
//mark in type i Role.enum da tanimladgmz type bu.
console.log("Mark=" + mark);
mark = 2 /* Role.Tester */;
const request = 202 /* StatusCode.Accepted */;
console.log(request);
// enum string
var Size;
(function (Size) {
    Size["Small"] = "S";
    Size["Medium"] = "M";
    Size["Large"] = "L";
    Size["XLarge"] = "XL";
})(Size || (Size = {}));
let tshirt = Size.Small;
console.log({ tshirt });
let skirt = Size.Large;
console.log(`skirt ${skirt}`);
const head = 42 /* SizeMix.XLarge */;
console.log(`head ${head}`);
