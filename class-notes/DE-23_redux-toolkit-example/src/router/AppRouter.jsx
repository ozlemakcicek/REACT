//! App.js de AppRouter a git demisiz.burda da butun yonlendirmeleri yapalim 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import News from "../pages/News";
  import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<News />} />
        </Route> */}
        <Route path="/" element={<News />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
