import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";


const App = () => {
  return (
    <div>
      {/*<Navbar/>
      <Register /> */}
{/* contex yapisi ile AppRouter i sarmallayalim.bu bize heryerde kullanabilecegimiz global bir degisken icin lazim. */}
<AuthContextProvider>
<AppRouter/>
</AuthContextProvider>
      
    </div>
  );
};

export default App;
