"use strict";
//* any Data type 
let x;
//herhangibir taimlama yapilmadigi icin type i any.y ile ayni sey aslinda
x = 2;
x = false;
x = "Hello";
let y;
y = 2;
y = false;
y = "Hello";
//any de degiskeni baska bir degskene atayablrsn.type ni da degstrblrsn
// let c=x
let c = x;
//* unknown Data type
//type degisimi yapmadan baska birseye atamana izin vermez.type ni bilmek istyr.sadece any type na atama yapar
let notSure = 4;
let d = notSure; // atamaya izin yok
notSure = "four";
let e = notSure; // izin yok
let f = notSure; // any ya atamaya izin verir
//*void
//? degsikenlerde kullanmyrz.fonksiyon donus tipidir
// return u olmayan fonksiyonlarin donus type
function myFunc() {
    console.log("Hello");
    return undefined;
}
//* never
function myF2() {
    while (true) {
        break;
    }
}
console.log(myF2()); //undefined verir console da(once tsc ile js dosyasina donustur)
console.log("Hello");
function error(message) {
    throw new Error(message);
}
let output = error("New Error");
console.log(output); //return nothing-printing nothing
//* union Type  birden fazla degiskeni beraber kullanablrsn( |-- veya)
let code = 123;
code = "abc";
code = false; //error
//* type narrowing
function add(a, b) {
    a.toString;
    if (typeof a === "number") {
        a.toFixed(2);
    }
    else {
        a.length;
    }
}
function add2(a, b) {
    a.toString;
    if (typeof a === "number") {
        a.toFixed(2);
    }
    else {
        a.length;
    }
}
let arac1 = "Audi";
let arac2 = "BMW";
let arac3 = "Mercedes";
let arac4 = "Ferrari";
//* Intersection
//* Type assertions
let scr2 = "350";
console.log(scr2.split(""));
let scr3 = scr2;
console.log(scr2);
console.log(240);
//* functions
function greet(mesaj, isim) {
    return `${mesaj + " " + isim}`;
}
console.log(greet("Gunaydin", "DE03"));
console.log(greet("Gunaydin")); // hata verir.iki tane beklyrdu tek parametre gonderdik
console.log(greet("Gunaydin", 'DE03', "Özlem")); // hata verir.iki tane beklyrdu uc parametre gonderdik
//* optional parametre
// function greet2 (mesaj:string, isim:string="User") seklinde de yazabiliriz.ya bu ya asagidaki durum ile optional ypblrz
function greet2(mesaj, isim) {
    if (!isim) {
        isim = "User";
    }
    return `${mesaj + " " + isim}`;
}
console.log(greet2("Gunaydin", "DE03"));
console.log(greet2("Gunaydin"));
function topla(a, b) {
    return a + b;
}
console.log(topla("Hello", "World"));
console.log(topla(10, "20"));
console.log(topla(10, 20));
//* rest parameters
function topla2(n, ...nums) {
    let topla = n;
    nums.forEach(num => toplam += num);
    console.log(toplam);
}
topla2(2);
topla2(2, 3, 4, 7, 8, 90, 100);
