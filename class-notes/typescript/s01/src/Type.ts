
//* any Data type 
let x;
//herhangibir taimlama yapilmadigi icin type i any.y ile ayni sey aslinda

x=2;
x=false;
x="Hello"

let y:any;

y=2;
y=false;
y="Hello"

//any de degiskeni baska bir degskene atayablrsn.type ni da degstrblrsn
// let c=x
let c:string=x




//* unknown Data type
//type degisimi yapmadan baska birseye atamana izin vermez.type ni bilmek istyr.sadece any type na atama yapar

let notSure:unknown=4;

let d:number = notSure // atamaya izin yok

notSure ="four"
let e :string=notSure // izin yok

let f:any=notSure  // any ya atamaya izin verir


//*void

//? degsikenlerde kullanmyrz.fonksiyon donus tipidir
// return u olmayan fonksiyonlarin donus type

function myFunc(): void{
    console.log("Hello");
    return undefined
    
}


//* never

function myF2():never{
    while(true){
        break
    }
}
console.log(myF2()); //undefined verir console da(once tsc ile js dosyasina donustur)
console.log("Hello");


function error(message:string):never{
    throw new Error(message)
}

let output=error("New Error")
console.log(output);  //return nothing-printing nothing


//* union Type  birden fazla degiskeni beraber kullanablrsn( |-- veya)

let code:string | number = 123
code="abc"
code=false //error

//* type narrowing

function add(a:number | string , b:number | string):any{
    
    a.toString
    if(typeof a=== "number"){
        a.toFixed(2)
    }else{
       a.length 
    }
}


//* type aliasses . takma isim verip,kendi type mizi olusturuyrz

type n=number | string  // artik asagida (number | string)   yerine n yazablrm
function add2(a:n, b:n):any{

   a.toString
    if(typeof a=== "number"){
        a.toFixed(2)
    }else{
       a.length 
    }
}


//* String Literals istedigim degerlrin olusmasini saglyrz

type Car="BMW" | "Audi" | "Mercedes"

let arac1: Car="Audi";
let arac2: Car="BMW";
let arac3: Car="Mercedes";
let arac4: Car="Ferrari";


//* Intersection





//* Type assertions

let scr2:unknown = "350";

console.log((scr2 as string).split(""));
let scr3 : string=scr2 as string

console.log((<number>scr2));
console.log(240);


//* functions

function greet (mesaj:string, isim:string): string{
    return `${mesaj + " " + isim}`
}

console.log(greet("Gunaydin", "DE03"));
console.log(greet("Gunaydin"));  // hata verir.iki tane beklyrdu tek parametre gonderdik
console.log(greet("Gunaydin", 'DE03',"Özlem"));  // hata verir.iki tane beklyrdu uc parametre gonderdik


//* optional parametre

// function greet2 (mesaj:string, isim:string="User") seklinde de yazabiliriz.ya bu ya asagidaki durum ile optional ypblrz
function greet2 (mesaj:string, isim?:string): string{

    if(!isim){
        isim="User"
    }
    return `${mesaj + " " + isim}`
}
console.log(greet2("Gunaydin", "DE03"));
console.log(greet2("Gunaydin"));


//* function overloading


function topla(a:number, b:string):string;
function topla(a:string, b:string):string;
function topla(a:number, b:number):number;
function topla(a:any, b:any):any{
    return a+b
}
console.log(topla("Hello", "World"));
console.log(topla(10,"20"));
console.log(topla(10,20));



//* rest parameters

function topla2(n:number, ...nums:number[]){
    let topla= n;
    nums.forEach(num=> toplam += num)

    console.log(toplam);
    
}

topla2(2)
topla2(2,3,4,7,8,90,100)

