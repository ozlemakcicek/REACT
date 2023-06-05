
// page leri Route ile(page icinde bir component varsa onda normal yolla gecis yapariz )
// componentleri ise normal yolla yonlendirirz.navbar ise;link to,navlink to,a ile...digerlerini ise useNavigate() ile

// import ederken mavi olan tuglalar react-router-dom un, sari olanlar react-bootstrapin

import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";

//!react-bootstrap MyNavbar componenti aldik
//fakat burda Navbar-Brand var.ama biz react-router-dom kullandgmz icin ya Nav-Link ya da Link etiketi kullanmaliyiz.Navbar-Brand i silip onun yerine yazyrz.kendi yazdigimiz sayfalara gitmek icin bu ikisinden biri, internetten bir sayfaya gideceksek normal a etiketini kullaniriz.

//* Nav-Link automatisc bir style ile gelir.Link ise style siz gelir.
// Genelde Link ler Navbar da veriliyor.to ile yolunu belirtmek lazim.Link to="/" demek tiklaninca home a git demek.to ile yolla(sadece navbar da kullanilir), App.js de de path ile bunu haber ediyoruz.yine aynisekilde path ile / geliyorsa home elementine git demek.<Route path="/" element={<Home />} />
// Nvbar dan Link e cevirince Navbarin style lari gidecegi icin className ile veya style ile tekrar orda vereblrsn.

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <img alt="" src={logo} />
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* en bastaki Nav.Link(react-bootstrap den geliyor.disardaki lere mesela bir internet sayfasina yonlendirir)  Home a gidecek bunu duzenliyoruz.NavLink(iceridekilere yani kendi olusturdugumuz sayfalara yonlendirir.Navbar daki linkler icin NavLink i kullan.Navbar daki logo yu ise Link ile ver.) diye birlestiriyoruz ve to ekleyip home yolunu belirliyoruz.sadece / yeterli..k yi sil ve yeniden yaz importu gelsin diye.sari ve mavi tugla gelir.mavi olan react-router-dom un kisi.onu seciyoruz */}

            {/* classname olarak nav-link verirsek Home daki mavilik gider.  */}
            <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) => ({ color: isActive && "red" })}
            >
              Home
            </NavLink>

            {/* style={({})} da normal style dan farkli olarak () var.bu  normal style degil bu demek.isActive icin kullanilir demek.ilk sari suslu ve birde ikinci mavi suslu style verecegimiz suslu.isActive ? true ise yani tiklaninca fontsize 50 px olsun tiklanmadiysa hicbirsey yapmasin demek */}
            {/*      style={({ isActive }) => ({ color: isActive ? "red" : ""  })} bunun yerine && ile tek tarafli durumu yazabilirz  */}
            <NavLink
              className="nav-link"
              to="/teacher"
              style={({ isActive }) => ({ backgroundColor: isActive && "red" })}
            >
              Teacher
            </NavLink>

            <NavLink
              className="nav-link"
              to="/courses"
              style={({ isActive }) => ({ fontSize: isActive && "50px" })}
            >
              Courses
            </NavLink>

            <NavLink
              className="nav-link"
              to="/contact"
              style={({ isActive }) => ({
                border: isActive ? "2px solid red" : "1px solid blue",
              })}
            >
              Contact
            </NavLink>

            <a
              href="https://github.com/ozlemakcicek"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

//className ile de nav-link style i verilebilir.ayni sey yukaridaki Nav-Link ile
export default MyNavbar;
