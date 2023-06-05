import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// takma ad olarak Router yazip asagida da Router kullanabilirz

import Teacher from "./pages/Teacher";
import CourseCard from "./pages/CourseCard";
import ContactForm from "./pages/ContactForm";
import NotFound from "./pages/NotFound";
import CardDetails from "./pages/CardDetails";
import TeacherDetails from "./pages/TeacherDetails";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
{/* degiskenler icin datadan cekilen yerde yolu verilir.App.js de gonderilir.varacagi sayfa da da useParams ile yakalanir.  */}
        <Routes>

          {/* <Route path="/" element={<Home />} /> */}
          {/* '/' (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu
         ('/') ile başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir .Sadece Home icin yazilabilir yazilmayadabilir */}
          <Route exact path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/:id" element={<TeacherDetails/>}/>   
          <Route path="/courses" element={<CourseCard />} />


          {/* courses dan CardDetails sayfasina gidecegiz.burda router sini yaziyoruz.  ${} ile yolu verilen name i burda yakaliyoruz yol olarak.bu bir degisken.fark olarak degiskenler icin : konulur onune.genelde id kullanilir.courses yazisi ve name degiskeni demek asagidaki */}
          <Route path="/courses/:namee" element={<CardDetails />} />
          {/* <Route path="/courses/:namee" element={<CardDetails />} /> */}
          {/* //courses degismez.App.js deki yol ne ise onun aynisi yazilmali.ama name yerine istersen osman da yazablrsn.Fakat o zaman Details sayfasinda useParams() da da osman diye karsilamalisin.App.js e gelen degisken adi ile App.js de karsilanan ayni olmak zorunda degil ama App.js den gonderilen sayfada useParams ile karsilann isim App.js dekinin aynisi olmali
       */}


          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* home sayfasi bir page oldugu icin normal yolla degil route ile yonlendirecegiz. yukarida yonlendirme yaptgmz icin asagidaki Home u silmemiz lazim */}
        {/* <Home /> */}

        {/* yanlis girilen herseyde(*) NotFound sayfasina gidelim ve ordan da butona tiklayinca useNavigate ile home a donsun   */}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

//react alanindaki div in altina ic ice 3 tane router etiketi acacagiz.en dista <BrowserRouter ile sarmalliyoruz.onun icine diger Componentler de girecek.sonra <Routes aciyoruz ve bunun icine de sadece <Router lar gelecek.. navbar daki logoya hangi sayfadan tiklarsak tiklayalim bizi Home sayfasina gondersin diye <Router path="/" element={<Home/>} yapmaliyiz.Bu sekilde navbar imiz her sayfada olacak ve logosuna tiklayinca bizi Home sayfasina dondurecek.
export default App;

//Navbar ve Footer hangi sayfaya gidersen git hep sabit kaliyor.bunlari App.js de gosterirriz