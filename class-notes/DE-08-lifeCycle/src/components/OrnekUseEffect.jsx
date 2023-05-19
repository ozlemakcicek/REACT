// //?                       USEEFFECT HOOK
// //?==================================================================
// //! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
// //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (istediğim bişeyi yap) demek için kullanılır

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {
// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);


import React,{useEffect, useState} from 'react';

const OrnekUseEffect = () => {

    const[sayac,setSayac]=useState(0)

//?ilk bunu goster
//!componentDidMount=component ilk render edildiginde calis diyoruz.yani component ilk yuklendiginde verileri cek demek.setTimeout un getirecegi her tiklandiginda her 3 sn de gelme hatasina engel oldu useEffect ile beraber kullanilmasi

// useEffect(()=>{
//     console.log("ilk render");

//     setTimeout(()=>{
//         alert("veri getirildi")
//     },3000)

// },[])

//?ikinci olarak bunu goster

//!componentDidUpdate=count her degistiginde calissin.alert her degistiginde gelecek.bos[] ile bir kez gelir , dolu[] de her calistiginda gelir

// useEffect(() => {

//     console.log("sayac artiyor");
//      setTimeout(()=>{
//        alert("veri getirildi")
//     },3000)
// },[sayac])
 

//?son olarak bu bolumu goster.
//!component öldugunde,yani baska sayfaya gidildiginde.

useEffect(() => {
  const time = setInterval(() => {
    console.log("INTERVAL CALISMAYA BASLADI");
  }, 1000);

  //!componentWillUnmount=component öldugunde
  return () => {
    clearInterval(time);
    console.log("component oldu");
  };
}, [sayac])

// setInterval ile sonsuz calisir.buna engel olmak icin clearInterval yazariz.ama bir degiskene atamamiz lazim setInterval i ve o degiskeni clearInterval de de kullaniriz
  return(
  
  
  <div>

<h3>COUNT:{sayac}</h3>

<button className="btn btn-warning" onClick={()=>setSayac(sayac+1)}>ARTTIR</button>
  </div>
  )
};

export default OrnekUseEffect;
