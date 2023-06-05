import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import PrivetRouter from './PrivetRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* <Route path="/home" element={<Home/>}/> */}
        {/* sifre kontrolu icin acmali kapamali bir Route aciyoruz ve home u kontrol ediyoruz.asagidaki sekli ile about icinde aynisini yapiyoruz*/}

        <Route path="/home" element={<PrivetRouter />}>
                <Route path="/home" element={<Home />} />
        </Route>


        <Route path="/about" element={<PrivetRouter />}>
                <Route path="/about" element={<About />} />
        </Route>
  

        <Route path="/details" element={<Details />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter