import {Container,Col,Card,Row,Button} from 'react-bootstrap'
import data from "../data"
const CourseCard = () => {
  //!react-bootstrap ten CourseCard componenti
  //!


  return (
    <Container className="text-center mt-4 p-4 ">
      <Row className="g-3">
        {data.map(({ img, name, text, id }) => {
          return (
            <Col sm={12} md={6} lg={4} key={id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="danger"
                 
                  >DETAYLAR</Button>
                </Card.Body>
              </Card>
            </Col>
            
          );
        })}
      </Row>
    </Container>
  );
}

export default CourseCard