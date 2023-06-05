import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivetRouter = () => {
  return localStorage.getItem("username") === "osman" &&
    localStorage.getItem("password") === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );

  // kullanici doğru şifre ve isim girdiyse Outlet komponenti sayesinde istenilen sayfaya git, yanlışlık varsa Navigate ile bulunduğun yerde (Login) kal ya da başka path veriledebilir
}

export default PrivetRouter