import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";


//*Ana sayfa Login.Giris yapmazsa kullanici sisteme erisemez.Backend bizden Token bekler ki kullanima izin versin.guvenligi saglar.sure tokeni,acces tokeni,refresch tokeni gibi tokenler var
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="register" element={<Register />} />
        {/* PrivateRouter varsa,giris yaptiysa Daschboard u goster */} 
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
