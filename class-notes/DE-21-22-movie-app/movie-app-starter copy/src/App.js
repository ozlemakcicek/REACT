import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    //butun sayfalar icin bir bg verelim.dark durumunda bg si su olsun demek assagidaki kod
    <div className="dark:bg-[#23242A] min-h-screen">
  
      {/* <Navbar/>
      <Register /> */}
      {/* contex yapisi ile AppRouter i sarmallayalim.bu bize heryerde kullanabilecegimiz global bir degisken icin lazim. */}
      {/* react toastify(hata uyari bildirim alani olusturur.)npm install react-toastify ile install et.sonra index.js veya app.js de sitesindeki ToastContainer icagir ve import et veya sitesinden direkt al.yine sitesinden min.css i ni al ve  index.js e ekle.configurationlari ve mesaji da bir helpers klasoru ve bir dosya yap ve icine koy. */}
      <AuthContextProvider>
        <MovieContextProvider>
          <AppRouter />
          <ToastContainer />
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;





