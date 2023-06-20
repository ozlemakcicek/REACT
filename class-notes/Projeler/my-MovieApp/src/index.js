import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// toastify sitesinden bu min.css i getirip ekledik.artik cagiracagiz ve configuration lari ve istedigin mesaji bir klasor dosya icine yine sitesinden alip koyabilirsin 
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
//BrowserRouter i   index.js e App.js i sarmallasin ve biz Router a ait olan useNavigate i AuthContext de kullanabilelim diye tasidik ve importunu yaptik
root.render(
 <BrowserRouter>
<App />
</BrowserRouter>
);
