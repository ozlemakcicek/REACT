import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {

//!yetkiSlice(parent ) sayfasından kullanici dolu gelirse yönlendirilen sayfaya git 

//* Outlet demek nereyi sarmalladiysan orasi demek
    return useSelector((state)=>state.yetkiSlice.email)==="osman" ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
};

export default PrivateRouter;
