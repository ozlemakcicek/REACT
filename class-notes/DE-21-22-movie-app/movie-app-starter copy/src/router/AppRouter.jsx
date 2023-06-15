import React from "react";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return <>
  

  {/* <BrowserRouter> bunu index.js e App.js i sarmallasin ve biz Router a ait olan useNavigate i AuthContext de kullanabilelim diye tasidik*/}
  <Navbar/>
<Routes>

<Route path="/" element={<Main/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
{/* <Route path="/details/:id" element={<MovieDetail/>}/> */}
{/* simdi bu Details sayfasini bir Route ile sarmallayalim ve path ve elementini yazalim */}
<Route path="/details/:id" element={<PrivateRouter/>}>
<Route path="" element={<MovieDetail/>}/>
</Route>


</Routes>
  {/* </BrowserRouter> */}
   
  </>;
};

export default AppRouter;
