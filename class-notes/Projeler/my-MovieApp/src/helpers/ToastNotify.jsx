// herbir durum icin(warn,success,error) uyari mesajlari hazirlayabiliriz.ana yapiyi yine gidip sitesinden aliyoruz
// import etmeliyiz tabiki once onu da sitesinden alip geliyoruz.ve bunlari bir function icine aldik ki kullanmak istedigimiz heryerde cagirip kullanabilelim.ve export yaziyoruz basina.

//? sitesindeki yapi bu.
//  import React from 'react';
//  import { ToastContainer, toast } from 'react-toastify';
//  import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

//   function App(){
//     const notify = () => toast("Wow so easy !");

//     return (
//       <div>
//         <button onClick={notify}>Notify !</button>
//         <ToastContainer />
//       </div>
//     );
//   }

//? sitesindeki toast yapisi da su sekilde
// toast("🦄 Wow so easy!", {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "light",
// });


import { toast } from "react-toastify";

export const toastWarnNotify = (msg) => {
  toast.warn(msg, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastSuccessNotify = (msg) => {
  toast.success(msg, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastErrorNotify = (msg) => {
  toast.error(msg, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
