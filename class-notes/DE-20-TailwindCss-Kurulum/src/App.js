//function App() {
  //return (
   
//     <div className="bg-fuchsia-300 min-h-screen flex justify-center items-center gap-3">
//         {/* <h1 className="text-3xl font-bold underline">Hello</h1>    */}
//       <div className="flex flex-col justify-between items-center bg-slate-500 rounded-xl w-3/12 p-4">
//         <h2>Title</h2>
//         <img
//           src="https://cdn.pixabay.com/photo/2023/05/28/05/34/bird-8022869_640.jpg"
//           className="h-[250px] rounded-xl"
//           alt=""
//         />
//         <p className="text-white line-clamp-1 hover:line-clamp-none">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
//           fugiat? Eos, temporibus enim animi dolorem laudantium aliquid delectus
//           accusantium ratione, odio maiores excepturi molestiae laboriosam?
//         </p>
//         </div>

{/* /* iki tane yapalim bunun aynisindan 
      ayni css yapisini birden fazla kullanacaksak o zaman  tek tek yazmak yerine bir component haline cevirecegiz.index.css de @layer ve @apply ile yapacagiz bunu

  bu yapiyi bu sayfada sadelestirmek icin index.css de @layer ve @apply ile tanimladik.burda ise sadece orda verdigi ismini yaziyoruz  */ }
        
//      <div className="flex flex-col justify-between items-center bg-slate-500 rounded-xl w-3/12 p-4">
//         <h2>Title</h2>
//         <img
//           src="https://cdn.pixabay.com/photo/2023/05/28/05/34/bird-8022869_640.jpg"
//           className="h-[250px] rounded-xl"
//           alt=""
//         />
//         <p className="text-white line-clamp-1 hover:line-clamp-none">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
//           fugiat? Eos, temporibus enim animi dolorem laudantium aliquid delectus
//           accusantium ratione, odio maiores excepturi molestiae laboriosam?
//         </p>
//       </div>
//       </div> 
//       );
// }
// export default App;  

function App(){
  return (
    <div className="main">
      <div className="card">
        <h2>Title</h2>
        <img
          src="https://cdn.pixabay.com/photo/2023/05/28/05/34/bird-8022869_640.jpg"
          className="h-[270px] rounded-xl"
          alt=""
        />

        <p className="text-white  line-clamp-1 hover:line-clamp-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          esse minus vitae repellat cum? Tempore, earum dignissimos veritatis
          animi tempora alias qui. Corporis, dolorum similique?Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Molestiae esse minus vitae
          repellat cum? Tempore, earum dignissimos veritatis animi tempora alias
          qui. Corporis, dolorum similique?
        </p>
      </div>

      <div className="card">
        <h2>Title</h2>
        <img
          src="https://cdn.pixabay.com/photo/2023/05/28/05/34/bird-8022869_640.jpg"
          className="h-[270px] rounded-xl"
          alt=""
        />

        <p className="text-white  line-clamp-1 hover:line-clamp-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          esse minus vitae repellat cum? Tempore, earum dignissimos veritatis
          animi tempora alias qui. Corporis, dolorum similique?Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Molestiae esse minus vitae
          repellat cum? Tempore, earum dignissimos veritatis animi tempora alias
          qui. Corporis, dolorum similique?
        </p>
      </div>
    </div>
  );
}
 export default App; 

{/* line-clamp-1 ile yazinin fazlaligini kapatsin mesela 1 satir gostersin kalanini da ... koysun dersek boyle yazarz.2 drsek 2 satir bosluk verir
 bu css de  asagidaki koda denk gelir. 
     overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1 */}

    
