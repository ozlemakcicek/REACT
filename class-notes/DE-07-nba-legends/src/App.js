// import React from "react"
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    //react bootstrap in container ini alalim
    <Container className="text-center mt-4">
      <Header />
      <CardContainer/>
    </Container>
  );
}

export default App;
