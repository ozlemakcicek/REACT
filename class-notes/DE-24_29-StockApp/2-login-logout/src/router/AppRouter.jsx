import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";

import Home from "../pages/Home";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";
import Products from "../pages/Products";
import Firms from "../pages/Firms";
import Brands from "../pages/Brands";

//! router yapmalar sirayla olmali.ana sayfaya yanoi login geliyor ilk sayfa acildiginda.sonra register yap.sonra stock sayfasina gelirsin ve privaterouter kontrolu yapilsin.onu gecince artik login olur ve dashboard sayfasi cikar karsimiza.orda artik cocuklara yonlendirme yapalim.ilk karsilama,resepsiyon sayfasi Home.bunun browser da bir path i yok.index yazariz.sonra digr sayfalari yaziyoruz sirayla ve importlarini yapiyorz
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          {/* nested Rooting yapisi icin...sabit olan kisim Dashboard.bunun uzerine diger sayfalar ekleniyor ve  degisiyor.o zaman bunu acilir kapanir hale getirip cocuklarini ekleyelim.bir usttekine bakarsak url de stock gelince PrivateRouter kontrolunden gececek ve  dashboard caliacak ve digerlerinin de bunun altinda yonlendirmeleri yaplck.Ana sayada ilk gelende path yoktu canlida.sadece stock yaziyor o nedenle path yoksa index i goster diyecegiz  */}
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="sales" element={<Sales />} />
            <Route path="products" element={<Products />} />
            <Route path="firms" element={<Firms />} />
            <Route path="brands" element={<Brands />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

// absolute path; sonuna veya basina hersey gelebilir./ lari koyup yonlendirirz.yeri oynayablr
// relativ path; net.yeri sabit
