import { BrowserRouter , Routes, Route } from "react-router-dom";

import React from "react";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import FooTer from "../components/FooTer";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/Detail";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import MyBlogs from "../pages/MyBlogs";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="notfound" element={<NotFound />} />

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      <Route path="myblog" element={<MyBlogs/>}/>

        <Route path="app" element={<PrivateRouter />}>
          <Route path="detail/:id" element={<Detail />} />
          <Route path="newblog" element={<NewBlog />} />
             
        </Route>
        

      </Routes>
      <FooTer />
    </BrowserRouter>
  );
};

export default AppRouter;
