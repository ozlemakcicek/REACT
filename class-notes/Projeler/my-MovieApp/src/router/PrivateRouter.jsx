//! details sayfasini sadece login olunca gorsun kullanici diye yapiyoruz bu sayfayi.yoksa log out bile olsa resme tiklayinca gorebilirdi


import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContex } from '../context/AuthContext'


// private router da 2 sey return ediyoruz.1-currentUser var ise(true) Outleti(route yapisindaki children gibi) goster yok ise 2-Login e git Navigate componenti ile.ilgili yeri yani nerenin sarmallanmasini istiyrsak orayi sarmallayalim
//currentUser i yine AuthContext den cekelim


const PrivateRouter = () => {
    const {currentUser} = useContext(AuthContex)

  return (
    currentUser ? <Outlet/>: <Navigate to="/login"/>
  )
}

export default PrivateRouter

// simdi AppRouter da Details sayfasini bir Route ile sarmallayip yolunu,path ni details/:id ve element olarak da PrivateRouter verelim