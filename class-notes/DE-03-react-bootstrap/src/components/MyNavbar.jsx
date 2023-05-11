import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

import resim from "../img/logo.png";
//* local den resim yuklemek icin import unu elimiz ile biz yaziyoruz buraya. ve ona bi isim verecegiz.sonra asagida img nin src sine{} icinde o ismi yaziyoruz ki sonucu gostersin



const MyNavbar = () => {

  //!navbar scrolling
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={resim} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
         
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">People</Nav.Link>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Full-Stack</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Data-Science
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> aralarindaki bolen cizgiyi kaldirdik */}
              <NavDropdown.Item href="#action5">
                Devops
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
            {/* //outline-success deseydik disinda bir cerceve olurdu yesil ve ustune gelince tam yesil olurdu */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;


//? eger css yapacaksak tek tek folder acardik.ama css yoksa bootstrap kullanacaksak components diye bir folder olusturum dosyalari buraya koyabiliriz.